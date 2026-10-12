import { useEffect, useRef, useState } from "react";
import "./GameOptimizerPromo.css";

const captureAlt =
  "Interfaz real de Oxman Game Optimizer con paneles de CPU y memoria, en negro y dorado";
const captureCaption =
  "Captura real de la aplicación. Los valores corresponden al momento de la captura; no son mediciones de tu equipo ni una garantía de rendimiento";

function GameOptimizerPromo() {
  const [captureOpen, setCaptureOpen] = useState(false);
  const dialogRef = useRef(null);
  const triggerRef = useRef(null);
  const closeRef = useRef(null);
  const restoreScrollRef = useRef(null);

  useEffect(() => {
    const dialog = dialogRef.current;
    const trigger = triggerRef.current;

    return () => {
      if (dialog.open) {
        dialog.close();
        if (trigger.isConnected) trigger.focus({ preventScroll: true });
      }
      restoreScrollRef.current?.();
      restoreScrollRef.current = null;
    };
  }, []);

  function openCapture() {
    const dialog = dialogRef.current;
    if (dialog.open) return;

    restoreScrollRef.current?.();
    restoreScrollRef.current = null;
    dialog.showModal();
    setCaptureOpen(true);
    const scrollStyles = [document.documentElement, document.body].map((element) => ({
      element,
      value: element.style.getPropertyValue("overflow"),
      priority: element.style.getPropertyPriority("overflow"),
    }));
    scrollStyles.forEach(({ element }) => element.style.setProperty("overflow", "hidden"));
    restoreScrollRef.current = () => {
      scrollStyles.forEach(({ element, value, priority }) => {
        if (value) element.style.setProperty("overflow", value, priority);
        else element.style.removeProperty("overflow");
      });
    };
    closeRef.current.focus({ preventScroll: true });
  }

  function finishClose() {
    // Ignore a queued close event if the capture has already been reopened.
    if (dialogRef.current?.open) return;
    setCaptureOpen(false);
    restoreScrollRef.current?.();
    restoreScrollRef.current = null;
    if (triggerRef.current?.isConnected) {
      triggerRef.current.focus({ preventScroll: true });
    }
  }

  function closeOnBackdrop(event) {
    if (event.target !== event.currentTarget) return;
    const bounds = event.currentTarget.getBoundingClientRect();
    if (
      event.clientX < bounds.left || event.clientX > bounds.right ||
      event.clientY < bounds.top || event.clientY > bounds.bottom
    ) {
      event.currentTarget.close();
    }
  }

  return (
    <section className="optimizer-promo" aria-labelledby="optimizer-promo-title">
      <div className="container optimizer-promo__panel">
        <div className="optimizer-promo__content">
          <span className="optimizer-promo__eyebrow">Software de Oxman IT</span>
          <h2 id="optimizer-promo-title">Oxman Game Optimizer</h2>
          <p>
            Nuestra aplicación para analizar el rendimiento y apoyar la
            optimización del sistema en Windows: monitoreo de hardware,
            CPU y memoria.
          </p>
          <a className="button button--primary" href="#oxman-game-optimizer">
            Explorar Game Optimizer
          </a>
        </div>
        <figure className="optimizer-promo__capture">
          <button
            ref={triggerRef}
            className="optimizer-promo__preview"
            type="button"
            aria-label="Ampliar captura de Oxman Game Optimizer"
            aria-haspopup="dialog"
            onClick={openCapture}
          >
            <img
              src="/oxman-game-optimizer-dashboard.png"
              alt={captureAlt}
              width="1392"
              height="463"
              loading="lazy"
              decoding="async"
            />
            <span className="optimizer-promo__expand" aria-hidden="true">Ampliar captura ↗</span>
          </button>
          <figcaption>{captureCaption}</figcaption>
        </figure>
      </div>
      <dialog
        ref={dialogRef}
        className="optimizer-promo__dialog"
        aria-labelledby="optimizer-capture-title"
        aria-describedby="optimizer-capture-caption"
        onClose={finishClose}
        onClick={closeOnBackdrop}
      >
        <header className="optimizer-promo__dialog-header">
          <h2 id="optimizer-capture-title">Vista ampliada de Oxman Game Optimizer</h2>
          <button
            ref={closeRef}
            className="button button--secondary optimizer-promo__close"
            type="button"
            onClick={() => dialogRef.current.close()}
          >
            Cerrar
          </button>
        </header>
        <figure className="optimizer-promo__dialog-capture">
          {captureOpen && (
            <img
              src="/oxman-game-optimizer-dashboard.png"
              alt={captureAlt}
              width="1392"
              height="463"
              decoding="async"
            />
          )}
          <figcaption id="optimizer-capture-caption">{captureCaption}</figcaption>
        </figure>
      </dialog>
    </section>
  );
}

export default GameOptimizerPromo;
