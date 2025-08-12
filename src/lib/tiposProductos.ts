import { cuadernos } from '@lib/cuadernos';
import { variedades } from '@lib/variedades';
import { fiestas } from './fiestas';

type Producto = 'cuaderno' | 'papeleria' | 'variedades' | 'multiproductos' | 'fiestas' | 'contacto';


export const productos: Producto[] = [
  "cuaderno",
  "papeleria",
  "variedades",
  "multiproductos",
  "fiestas",
  "contacto",
];

export const generoPorProducto = {
  cuaderno: ["para-todos", "niño", "niña"],
  papeleria: ["para-todos"],
  variedades: ["para-todos"],
  multiproductos: ["para-todos"],
  fiestas: ["para-todos"],
  contacto: ["para-todos"],
};

export const tiposProducto = {
  cuaderno: ["todos-los-productos", "cosido", "argollado", "durabook"],
  papeleria: ["para-todos"],
  variedades: ["todos-los-productos", "llaveros", "deportivos", "juegos-de-mesa", "modisteria", "chelines-&-ganchos", "flores-&-figuras-decorativas"],
  multiproductos: ["para-todos"],
  fiestas: ["todos-los-productos", "globos"],
  contacto: ["para-todos"],
}

export const todosLosProductos = [
  ...cuadernos,
  ...variedades,
  ...fiestas,
]