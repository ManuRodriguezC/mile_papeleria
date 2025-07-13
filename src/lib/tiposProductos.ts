type Producto = 'cuadernos' | 'papeleria' | 'variedades' | 'multiproductos' | 'fiesta' | 'contacto';

export const productos: Producto[] = [
  "cuadernos",
  "papeleria",
  "variedades",
  "multiproductos",
  "fiesta",
  "contacto",
];

export const generoPorProducto = {
  cuadernos: ["para-todos", "niño", "niña"],
  papeleria: ["para-todos"],
  variedades: ["para-todos"],
  multiproductos: ["para-todos"],
  fiesta: ["para-todos"],
  contacto: ["para-todos"],
};

export const tiposProducto = {
  cuadernos: ["todos-los-productos", "cosido", "argollado", "durabook"],
  papeleria: ["para-todos"],
  variedades: ["todos-los-productos", "llaveros", "deportivos", "juegos-de-mesa", "modisteria", "chelines-&-ganchos", "flores-&-figuras-decorativas"],
  multiproductos: ["para-todos"],
  fiesta: ["para-todos"],
  contacto: ["para-todos"],
}