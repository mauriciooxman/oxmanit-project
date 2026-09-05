import "./WhatsappButton.css";

const PHONE_NUMBER = "56993938138";
const INITIAL_MESSAGE =
  "Hola, vengo desde la página de Oxman IT y me gustaría cotizar un servicio.";

function WhatsappButton() {
  const whatsappUrl = `https://wa.me/${PHONE_NUMBER}?text=${encodeURIComponent(INITIAL_MESSAGE)}`;

  return (
    <a
      className="whatsapp-button"
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Contactar por WhatsApp"
    >
      <svg
        aria-hidden="true"
        viewBox="0 0 32 32"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          fill="currentColor"
          d="M16.01 3C8.84 3 3 8.82 3 15.98c0 2.29.6 4.53 1.73 6.5L2.9 29l6.68-1.75a13 13 0 0 0 6.42 1.64h.01C23.18 28.89 29 23.06 29 15.9 29 8.77 23.17 3 16.01 3Zm0 23.7h-.01a10.75 10.75 0 0 1-5.48-1.5l-.39-.23-3.96 1.04 1.06-3.86-.25-.4a10.72 10.72 0 0 1-1.65-5.77c0-5.9 4.8-10.71 10.69-10.71 2.86 0 5.54 1.11 7.56 3.13a10.62 10.62 0 0 1 3.13 7.52c-.01 5.94-4.8 10.78-10.7 10.78Zm5.86-8.03c-.32-.16-1.9-.94-2.2-1.04-.29-.11-.5-.16-.72.16-.21.32-.82 1.04-1.01 1.26-.19.21-.37.24-.69.08-.32-.16-1.35-.5-2.57-1.58a9.65 9.65 0 0 1-1.78-2.21c-.18-.32-.02-.49.14-.65.14-.14.32-.37.48-.56.16-.19.21-.32.32-.53.11-.22.05-.4-.03-.56-.08-.16-.72-1.73-.98-2.37-.26-.62-.52-.54-.72-.55h-.61c-.21 0-.56.08-.85.4-.29.32-1.12 1.1-1.12 2.66s1.15 3.08 1.31 3.29c.16.21 2.25 3.43 5.45 4.81.76.33 1.35.52 1.82.67.76.24 1.46.21 2.01.13.61-.09 1.9-.78 2.17-1.53.27-.75.27-1.39.19-1.53-.08-.13-.29-.21-.61-.37Z"
        />
      </svg>
    </a>
  );
}

export default WhatsappButton;
