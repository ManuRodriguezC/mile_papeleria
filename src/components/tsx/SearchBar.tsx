import { useState } from "react";

export default function SearchBar() {
  const [value, setValue] = useState("");

  const handleSubmit = (e: any) => {
    e.preventDefault();
    if (!value.trim()) return;

    const name = encodeURIComponent(value.trim().replace(/\s+/g, "-"));
    window.location.href = `/search?name=${name}`;
  };

  return (
    <>
      <form className="form" onSubmit={handleSubmit}>
        <label htmlFor="search">
          <input
            className="input"
            type="text"
            required
            placeholder="Buscar Producto"
            id="search"
            value={value}
            onChange={(e) => setValue(e.target.value)}
            autoComplete="off"
          />
          <div className="fancy-bg"></div>
          <div className="search">
            <svg
              viewBox="0 0 24 24"
              aria-hidden="true"
              className="svg r-14j79pv r-4qtqp9 r-yyyyoo r-1xvli5t r-dnmrzs r-4wgw6l r-f727ji r-bnwqim r-1plcrui r-lrvibr"
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
        </label>
      </form>

      <style>
        {`
          .form {
            --input-text-color: #fff;
            --input-bg-color: #283542;
            --focus-input-bg-color: transparent;
            --text-color: #949faa;
            --active-color: #fbfbfb;
            --width-of-input: 200px;
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
          .fancy-bg {
            position: absolute;
            width: 100%;
            inset: 0;
            background: var(--input-bg-color);
            border-radius: 30px;
            height: 100%;
            z-index: -1;
            pointer-events: none;
            box-shadow: rgba(0, 0, 0, 0.16) 0px 1px 4px;
          }
          label {
            width: 100%;
            padding: 0.8em;
            height: 40px;
            padding-inline: var(--inline-padding-of-input);
            display: flex;
            align-items: center;
          }
          .search,.close-btn {
            position: absolute;
          }
          .search {
            fill: var(--text-color);
            left: var(--inline-padding-of-input);
          }
          .svg {
            width: 17px;
            display: block;
          }
          .close-btn {
            border: none;
            right: var(--inline-padding-of-input);
            box-sizing: border-box;
            display: flex;
            align-items: center;
            justify-content: center;
            color: #fff;
            padding: 0.1em;
            width: 20px;
            height: 20px;
            border-radius: 50%;
            background: var(--active-color);
            opacity: 0;
            visibility: hidden;
          }
          .input {
            color: var(--input-text-color);
            width: 100%;
            margin-inline: min(2em,calc(var(--inline-padding-of-input) + var(--gap)));
            background: none;
            border: none;
          }
          .input:focus {
            outline: none;
          }
          .input::placeholder {
            color: var(--text-color)
          }
          .input:focus ~ .fancy-bg {
            border: 1px solid var(--active-color);
            background: var(--focus-input-bg-color);
          }
          .input:focus ~ .search {
            fill: var(--active-color);
          }
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
