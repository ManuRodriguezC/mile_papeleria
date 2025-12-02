import { useRef, useState } from "react";

export default function SearchBar() {
  const [value, setValue] = useState("");
  const inputRef = useRef<HTMLInputElement | null>(null);

  const handleSubmit = (e: any) => {
    e.preventDefault();
    if (!value.trim()) return;

    const name = encodeURIComponent(value.trim().replace(/\s+/g, "-"));
    window.location.href = `/search?name=${name}`;
  };

  // Previene que taps sobre el icono (o contenedor) se interpreten como submit
  const handlePointerDown = (e: React.MouseEvent | React.TouchEvent) => {
    // Si el target (o su ancestro) tiene la clase 'search' evitamos el default.
    const target = (e.target as Element) || null;
    if (target && (target as Element).closest && (target as Element).closest(".search")) {
      e.preventDefault();
      e.stopPropagation();
      // devolvemos foco al input por si el usuario quiso escribir
      inputRef.current?.focus();
    }
  };

  return (
    <>
      <form className="form" onSubmit={handleSubmit}>
        <div className="input-wrapper" onMouseDown={handlePointerDown} onTouchStart={handlePointerDown}>
          <input
            ref={inputRef}
            className="input"
            type="text"
            required
            placeholder="Producto"
            id="search"
            value={value}
            onChange={(e) => setValue(e.target.value)}
            autoComplete="off"
            // Mantener Enter para enviar; no prevenimos Enter
          />

          <div className="fancy-bg" aria-hidden="true"></div>

          <div className="search" aria-hidden="true">
            <svg
              viewBox="0 0 24 24"
              aria-hidden="true"
              className="svg r-14j79pv r-4qtqp9 r-yyyyoo r-1xvli5t r-dnmrzs r-4wgw6l r-f727ji r-bnwqim r-1plcrui r-lrvibr"
              focusable="false"
            >
              <g>
                <path d="M21.53 20.47l-3.66-3.66C19.195 15.24 20 13.214 20 11c0-4.97-4.03-9-9-9s-9 
                4.03-9 9 4.03 9 9 9c2.215 0 4.24-.804 5.808-2.13l3.66 
                3.66c.147.146.34.22.53.22s.385-.073.53-.22c.295-.293.295-.767.002-1.06zM3.5 
                11c0-4.135 3.365-7.5 7.5-7.5s7.5 3.365 
                7.5 7.5-3.365 7.5-7.5 7.5-7.5-3.365-7.5-7.5z"></path>
              </g>
            </svg>
          </div>

          {/* Botón de búsqueda explícito (útil en móvil) */}
          <button type="submit" className="submit-btn" aria-label="Buscar">
            Buscar
          </button>
        </div>
      </form>

      <style>
        {`
          .form {
            --input-text-color: #fff;
            --input-bg-color: #283542;
            --focus-input-bg-color: transparent;
            --text-color: #949faa;
            --active-color: #fbfbfb;
            --width-of-input: 320px; /* ancho por defecto, puedes ajustar */
            --inline-padding-of-input: 1.2em;
            --gap: 0.9rem;
          }
          .form {
            font-size: 0.9rem;
            display: flex;
            gap: 0.5rem;
            align-items: center;
            width: var(--width-of-input);
            position: relative;
            isolation: isolate;
          }

          .input-wrapper {
            width: 100%;
            padding: 0.6em;
            height: 44px;
            padding-inline: var(--inline-padding-of-input);
            display: flex;
            align-items: center;
            position: relative;
            box-sizing: border-box;
          }

          .fancy-bg {
            position: absolute;
            width: 100%;
            inset: 0;
            background: var(--input-bg-color);
            border-radius: 30px;
            height: 100%;
            z-index: 0;
            pointer-events: none;
            box-shadow: rgba(0, 0, 0, 0.16) 0px 1px 4px;
          }

          .search, .close-btn {
            position: absolute;
            z-index: 2;
            pointer-events: none; /* dejamos el svg no interactuable para evitar efectos raros en móviles */
          }

          .search {
            fill: var(--text-color);
            left: var(--inline-padding-of-input);
            display: flex;
            align-items: center;
          }

          .svg {
            width: 17px;
            display: block;
          }

          .input {
            color: var(--input-text-color);
            width: 100%;
            margin-inline: min(2em, calc(var(--inline-padding-of-input) + var(--gap)));
            background: none;
            border: none;
            z-index: 1;
            font-size: 1rem;
            line-height: 1;
          }

          .input:focus {
            outline: none;
          }

          .input::placeholder {
            color: var(--text-color);
          }

          .input:focus ~ .fancy-bg {
            border: 1px solid var(--active-color);
            background: var(--focus-input-bg-color);
          }

          .input:focus ~ .search {
            fill: var(--active-color);
          }

          /* botón de búsqueda (visibilidad controlada con media queries) */
          .submit-btn {
            position: absolute;
            right: 8px;
            z-index: 3;
            border: none;
            background: transparent;
            color: var(--active-color);
            font-weight: 600;
            padding: 6px 8px;
            border-radius: 6px;
            display: none; /* por defecto oculto en desktop */
          }

          /* mostrar botón en pantallas pequeñas para UX móvil */
          @media (max-width: 800px) {
            .form { --width-of-input: 100%; }
            .submit-btn {
              display: block;
            }
            /* reducimos margen para que quepa mejor */
            .input {
              margin-inline: min(2em, calc(var(--inline-padding-of-input) + 6px));
            }
          }

          /* estilos para cuando el input tiene valor (opcional: muestra una 'x' para limpiar) */
          .input:valid ~ .close-btn {
            opacity: 1;
            visibility: visible;
          }

          input:-webkit-autofill,
          input:-webkit-autofill:hover,
          input:-webkit-autofill:focus,
          input:-webkit-autofill:active {
            -webkit-transition: "color 9999s ease-out, background-color 9999s ease-out";
            -webkit-transition-delay: 9999s;
          }
        `}
      </style>
    </>
  );
}
