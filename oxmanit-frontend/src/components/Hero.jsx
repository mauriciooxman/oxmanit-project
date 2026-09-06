import { useEffect, useRef } from "react";

const nodes = [
  { label: "Software", className: "hero-visual__node hero-visual__node--software" },
  { label: "Automation", className: "hero-visual__node hero-visual__node--automation" },
  { label: "IT Solutions", className: "hero-visual__node hero-visual__node--solutions" },
];

const packetLayers = [
  { className: "hero-visual__packet-aura", radius: 16 },
  { className: "hero-visual__packet-ring", radius: 10 },
  { className: "hero-visual__packet-dot", radius: 7.5 },
  { className: "hero-visual__packet-core", radius: 3.4 },
];

function DataPacket({ startX, startY, endX, endY, begin, duration }) {
  return (
    <g className="hero-visual__data-packet">
      {packetLayers.map((layer) => (
        <circle
          className={layer.className}
          cx={startX}
          cy={startY}
          r={layer.radius}
          key={layer.className}
        >
          <animate
            attributeName="cx"
            values={`${startX};${endX}`}
            begin={begin}
            dur={duration}
            repeatCount="indefinite"
          />
          <animate
            attributeName="cy"
            values={`${startY};${endY}`}
            begin={begin}
            dur={duration}
            repeatCount="indefinite"
          />
        </circle>
      ))}
    </g>
  );
}

function Hero() {
  const visualRef = useRef(null);

  useEffect(() => {
    const visual = visualRef.current;
    const finePointer = window.matchMedia("(hover: hover) and (pointer: fine)");
    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)");

    if (!visual || !finePointer.matches || reducedMotion.matches) {
      return undefined;
    }

    const current = { x: 0, y: 0, rotateX: 0, rotateY: 0, glowX: 50, glowY: 50 };
    const target = { ...current };
    let frameId;

    const renderFrame = () => {
      const ease = 0.085;

      Object.keys(current).forEach((key) => {
        current[key] += (target[key] - current[key]) * ease;
      });

      visual.style.setProperty("--panel-x", `${current.x.toFixed(2)}px`);
      visual.style.setProperty("--panel-y", `${current.y.toFixed(2)}px`);
      visual.style.setProperty("--panel-rx", `${current.rotateX.toFixed(3)}deg`);
      visual.style.setProperty("--panel-ry", `${current.rotateY.toFixed(3)}deg`);
      visual.style.setProperty("--glow-x", `${current.glowX.toFixed(2)}%`);
      visual.style.setProperty("--glow-y", `${current.glowY.toFixed(2)}%`);

      const moving = Object.keys(current).some(
        (key) => Math.abs(target[key] - current[key]) > 0.02,
      );

      frameId = moving ? window.requestAnimationFrame(renderFrame) : undefined;
    };

    const requestRender = () => {
      if (frameId === undefined) {
        frameId = window.requestAnimationFrame(renderFrame);
      }
    };

    const handlePointerMove = (event) => {
      const bounds = visual.getBoundingClientRect();
      const normalizedX = Math.max(0, Math.min(1, (event.clientX - bounds.left) / bounds.width));
      const normalizedY = Math.max(0, Math.min(1, (event.clientY - bounds.top) / bounds.height));

      target.x = (normalizedX - 0.5) * 12;
      target.y = (normalizedY - 0.5) * 8;
      target.rotateX = (0.5 - normalizedY) * 1.8;
      target.rotateY = (normalizedX - 0.5) * 1.8;
      target.glowX = normalizedX * 100;
      target.glowY = normalizedY * 100;
      requestRender();
    };

    const handlePointerLeave = () => {
      target.x = 0;
      target.y = 0;
      target.rotateX = 0;
      target.rotateY = 0;
      target.glowX = 50;
      target.glowY = 50;
      requestRender();
    };

    visual.addEventListener("pointermove", handlePointerMove, { passive: true });
    visual.addEventListener("pointerleave", handlePointerLeave);

    return () => {
      visual.removeEventListener("pointermove", handlePointerMove);
      visual.removeEventListener("pointerleave", handlePointerLeave);
      if (frameId !== undefined) {
        window.cancelAnimationFrame(frameId);
      }
    };
  }, []);

  return (
    <section id="top" className="hero">
      <div className="hero__glow hero__glow--cyan" aria-hidden="true" />
      <div className="hero__glow hero__glow--violet" aria-hidden="true" />

      <div className="hero__inner">
        <div className="hero__content">
          <div className="hero__badge">
            <span aria-hidden="true" />
            Software · Automatización · Soluciones IT
          </div>

          <h1>
            Construimos tecnología
            <span> que mueve tu negocio.</span>
          </h1>

          <p className="hero__description">
            Desarrollamos software, automatizamos procesos y creamos soluciones
            tecnológicas diseñadas para hacer crecer tu negocio.
          </p>

          <div className="hero__actions">
            <a className="button button--primary" href="#contacto">
              Iniciar proyecto <span aria-hidden="true">→</span>
            </a>
            <a className="button button--secondary" href="#servicios">
              Explorar servicios
            </a>
          </div>
        </div>

        <div
          ref={visualRef}
          className="hero-visual-shell"
          role="img"
          aria-label="Software, automatización y soluciones IT conectadas por Oxman IT"
        >
          <div className="hero-visual">
            <div className="hero-visual__grid" aria-hidden="true" />
            <div className="hero-visual__scanner" aria-hidden="true" />
            <div className="hero-visual__status">
              <span /> Sistema operativo
            </div>

            <svg
              className="hero-visual__connections"
              viewBox="0 0 520 430"
              preserveAspectRatio="none"
              aria-hidden="true"
            >
              <path className="hero-visual__route" d="M260 210 L260 95" pathLength="100" />
              <path className="hero-visual__route" d="M260 210 L120 320" pathLength="100" />
              <path className="hero-visual__route" d="M260 210 L400 320" pathLength="100" />

              <path className="hero-visual__flow hero-visual__flow--software" d="M260 95 L260 210" pathLength="100" />
              <path className="hero-visual__flow hero-visual__flow--automation" d="M260 210 L120 320" pathLength="100" />
              <path className="hero-visual__flow hero-visual__flow--solutions" d="M260 210 L400 320" pathLength="100" />

              <DataPacket
                startX={260}
                startY={105}
                endX={260}
                endY={165}
                begin="-1.1s"
                duration="2.2s"
              />
              <DataPacket
                startX={190}
                startY={265}
                endX={139}
                endY={305}
                begin="-0.3s"
                duration="2.6s"
              />
              <DataPacket
                startX={330}
                startY={265}
                endX={381}
                endY={305}
                begin="-1.8s"
                duration="2.8s"
              />

              <circle className="hero-visual__junction" cx="260" cy="152" r="3" />
              <circle className="hero-visual__junction" cx="190" cy="265" r="3" />
              <circle className="hero-visual__junction" cx="330" cy="265" r="3" />
            </svg>

            <div className="hero-visual__core">
              <span className="hero-visual__core-label">Core</span>
              <strong>Oxman IT</strong>
              <small>Build · Connect · Scale</small>
            </div>

            {nodes.map((node) => (
              <div className={node.className} key={node.label}>
                <span aria-hidden="true" />
                {node.label}
              </div>
            ))}

            <div className="hero-visual__activity" aria-hidden="true">
              <span><i />API</span>
              <span><i />Core</span>
              <span><i />Automation</span>
            </div>

            <div className="hero-visual__stack" aria-hidden="true">
              <span>React</span>
              <span>APIs</span>
              <span>Java</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
