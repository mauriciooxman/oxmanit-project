import "./GameOptimizerCapture.css";

const captureAlt =
  "Interfaz real de Oxman Game Optimizer con paneles de CPU y memoria, en negro y dorado";
const captureCaption =
  "Captura real de la aplicación. Los valores corresponden al momento de la captura; no son mediciones de tu equipo ni una garantía de rendimiento";

function GameOptimizerCapture() {
  return (
    <figure className="optimizer-project-capture">
      <div className="optimizer-project-capture__frame">
        <img
          src="/oxman-game-optimizer-dashboard.png"
          alt={captureAlt}
          width="1392"
          height="463"
          loading="lazy"
          decoding="async"
        />
      </div>
      <figcaption>{captureCaption}</figcaption>
    </figure>
  );
}

export default GameOptimizerCapture;
