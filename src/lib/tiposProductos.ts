import { cuadernos } from '@lib/cuadernos';
import { variedades } from '@lib/variedades';
import { fiestas } from './fiestas';
import { papeleria } from './papeleria';

type Producto = 'cuaderno' | 'papeleria' | 'variedades' | 'multiproductos' | 'fiestas' | 'contacto';

export interface ProductoMap {
  name: string;
  description?: string;
}
export function createslug(name: string) {
  return name.replaceAll(" ", "-").toLowerCase()
}

export function createMap (list: ProductoMap[], clase: string, type: string, gender: string) {
  return list.map((obj: ProductoMap)=> {
    return {
      id: createslug(obj.name),
      title: obj.name,
      image: `/images/${clase}/${createslug(obj.name)}.webp`,
      slug: createslug(obj.name),
      clase: clase,
      type: type,
      gender: gender,
      description: obj.description || "",
    }
  })
}

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
  papeleria: ["todos-los-productos", "boligrafos"],
  variedades: ["todos-los-productos", "llaveros", "deportivos", "juegos-de-mesa", "modisteria", "chelines-&-ganchos", "flores-&-figuras-decorativas"],
  multiproductos: ["para-todos"],
  fiestas: ["todos-los-productos", "globos", "cortinas", "festones", "para-la-mesa", "sobres-regalos", "otros"],
  contacto: ["para-todos"],
}

export const todosLosProductos = [
  ...cuadernos,
  ...variedades,
  ...fiestas,
  ...papeleria
]


