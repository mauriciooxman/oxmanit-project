import { useEffect, useRef } from "react";
import "./FlowDiagram.css";

const packetSizes = {
  hero: { halo: 4.75, ring: 3.2, dot: 2.5, core: 1 },
  medium: { halo: 4, ring: 2.7, dot: 2.1, core: 0.85 },
  subtle: { halo: 3.25, ring: 2.2, dot: 1.65, core: 0.7 },
};

const activeAnimations = new Set();
let schedulerFrame;
let motionPreference;

function runScheduler(timestamp) {
  activeAnimations.forEach((animation) => animation(timestamp));
  schedulerFrame = window.requestAnimationFrame(runScheduler);
}

function syncScheduler() {
  const shouldRun = activeAnimations.size > 0 && !motionPreference?.matches;

  if (shouldRun && schedulerFrame === undefined) {
    schedulerFrame = window.requestAnimationFrame(runScheduler);
  } else if (!shouldRun && schedulerFrame !== undefined) {
    window.cancelAnimationFrame(schedulerFrame);
    schedulerFrame = undefined;
  }
}

function registerAnimation(animation) {
  if (!motionPreference) {
    motionPreference = window.matchMedia("(prefers-reduced-motion: reduce)");
    motionPreference.addEventListener("change", syncScheduler);
  }

  activeAnimations.add(animation);
  syncScheduler();

  return () => {
    activeAnimations.delete(animation);
    syncScheduler();

    if (activeAnimations.size === 0 && motionPreference) {
      motionPreference.removeEventListener("change", syncScheduler);
      motionPreference = undefined;
    }
  };
}

function FlowDiagram({
  paths,
  viewBox,
  className = "",
  intensity = "medium",
  preserveAspectRatio = "none",
  children,
}) {
  const svgRef = useRef(null);
  const pathRefs = useRef([]);
  const packetRefs = useRef([]);
  const packetScale = useRef({ x: 1, y: 1 });

  useEffect(() => {
    const pathLengths = pathRefs.current.map((path) => path?.getTotalLength() ?? 0);
    const startedAt = performance.now();

    const updatePacketScale = () => {
      const matrix = svgRef.current?.getScreenCTM();
      if (!matrix) return;

      const scaleX = Math.hypot(matrix.a, matrix.b);
      const scaleY = Math.hypot(matrix.c, matrix.d);
      packetScale.current = {
        x: scaleX > 0 ? 1 / scaleX : 1,
        y: scaleY > 0 ? 1 / scaleY : 1,
      };
    };

    const animate = (timestamp) => {
      paths.forEach((path, index) => {
        const packet = packetRefs.current[index];
        if (!packet || path.packet === false || !pathLengths[index]) return;

        const cycleDuration = path.cycleDuration ?? path.duration;
        const travelDuration = path.travelDuration ?? path.duration;
        const cycleTime = (timestamp - startedAt + (path.offset ?? 0)) % cycleDuration;
        const isActive = cycleTime <= travelDuration;
        const progress = Math.min(cycleTime / travelDuration, 1);
        const point = pathRefs.current[index].getPointAtLength(progress * pathLengths[index]);
        const scale = packetScale.current;

        packet.setAttribute(
          "transform",
          `translate(${point.x} ${point.y}) scale(${scale.x} ${scale.y})`,
        );
        packet.style.opacity = isActive ? "1" : "0";
      });
    };

    updatePacketScale();
    const resizeObserver = new ResizeObserver(updatePacketScale);
    resizeObserver.observe(svgRef.current);
    animate(startedAt);
    const unregisterAnimation = registerAnimation(animate);

    return () => {
      resizeObserver.disconnect();
      unregisterAnimation();
    };
  }, [paths]);

  const sizes = packetSizes[intensity] ?? packetSizes.medium;

  return (
    <svg
      ref={svgRef}
      className={`flow-diagram flow-diagram--${intensity} ${className}`.trim()}
      viewBox={viewBox}
      preserveAspectRatio={preserveAspectRatio}
      aria-hidden="true"
    >
      {paths.map((path, index) => (
        <path
          ref={(element) => {
            pathRefs.current[index] = element;
          }}
          className={`flow-diagram__route ${path.className ?? ""}`.trim()}
          d={path.d}
          pathLength="100"
          key={`route-${path.id}`}
        />
      ))}

      {paths.map((path) => path.accentClassName && (
        <path
          className={path.accentClassName}
          d={path.d}
          pathLength="100"
          key={`accent-${path.id}`}
        />
      ))}

      {children}

      {paths.map((path, index) => path.packet !== false && (
        <g
          ref={(element) => {
            packetRefs.current[index] = element;
          }}
          className="flow-diagram__packet"
          transform={`translate(${path.start.x} ${path.start.y})`}
          key={`packet-${path.id}`}
        >
          <circle className="flow-diagram__packet-halo" r={sizes.halo} />
          <circle className="flow-diagram__packet-ring" r={sizes.ring} />
          <circle className="flow-diagram__packet-dot" r={sizes.dot} />
          <circle className="flow-diagram__packet-core" r={sizes.core} />
        </g>
      ))}
    </svg>
  );
}

export default FlowDiagram;
