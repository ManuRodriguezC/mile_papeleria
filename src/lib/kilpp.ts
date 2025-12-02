import type { ProductoMap } from "./tiposProductos";

function createslug(name: string) {
  return name.replaceAll(" ", "-")
}

function createMap (list: ProductoMap[], clase: string, type: string, gender: string) {
  return list.map((obj: ProductoMap)=> {
    return {
      id: createslug(obj.name),
      title: obj.name,
      image: `/images/${clase}/${obj.name}.webp`,
      slug: createslug(obj.name),
      clase: clase,
      type: type,
      gender: gender,
      description: obj.description || "",
    }
  })
}

const colores = [
  {
    "name": "COLORES UNIPUNTA 36 UDS 4 MM PREMIUM KLIPP",
  },
  {
    "name": "COLORES UNIPUNTA 18 UDS 4 MM PREMIUM KLIPP",
  },
  {
    "name": "COLORES UNIPUNTA 72UDS 4MM CAJA METÁLICA PRE KLIPP",
  },
  {
    "name": "COLORES UNIPUNTA 36 UDS 4 MM FASHION KLIPP",
  },
  {
    "name": "COLORES UNIPUNTA 15UDS 4 MM FASHION KLIPP",
  },
  {
    "name": "COLORES DOBLE PUNTA 15 UDS 4MM FASHION KLIPP",
  },
  {
    "name": "COLORES UNIPUNTA ÍNDIGO 18 UDS KLIPP",
  },
  {
    "name": "COLORES UNIPUNTA 21 3 UDS 4 MM KLIPP",
  },
  {
    "name": "COLORES UNIPUNTA 12 3 UDS 4 MM TAJALÁPIZ KLIPP",
  },
  {
    "name": "COLORES UNIPUNTA JUMBO 12 UDS 5MM TAJALÁPIZ KLIPP",
  },
  {
    "name": "COLORES DOBLE PUNTA 12 2 UDS 4 MM KLIPP",
  },
  {
    "name": "BOLÍGRAFO RETRÁCTIL PUNTA FINA 0,7 SURTIDA X6 UNIDADES DEGRADÉ",
  },
  {
    "name": "BOLÍGRAFO TAPA GEL PUNTA FINA 0,7 NEGRO 12 UDS KLIPP",
  },
  {
    "name": "BOLÍGRAFO TAPA GEL PUNTA FINA 0,7 ROJO 12 UDS KLIPP",
  },
  {
    "name": "BOLÍGRAFO TAPA GEL PUNTA FINA 0,7 AZUL 12 UDS KLIPP",
  },
  {
    "name": "BOLÍGRAFO TAPA GEL PUNTA FINA 0,7 SURTIDO 12 UDS KLIPP",
  },
  {
    "name": "BOLÍGRAFO TAPA GEL PUNTA MEDIA 1,0 NEGRO 12 UDS KLIPP",
  }
]

const papeleria = [
  {
    "name": "COMPAS PRECISION CON EXTENSOR KLIPP",
  },
  {
    "name": "COMPÁS PRECISIÓN METÁLICO CAJA ACRÍLICA KLIPP",
  },
  {
    "name": "COMPÁS ESCOLAR LÁPIZ BLÍSTER KLIPP",
  },
  {
    "name": "COMPÁS PRECISIÓN PLÁSTICO BLÍSTER KLIPP",
  },
  {
    "name": "TAJALÁPIZ 2 SERVICIOS 12 UDS TAPA CAJA PASTEL",
  },
  {
    "name": "TAJALÁPIZ 1 SERVICIOS 12 UDS OVALADO DEPÓSITO KLIPP",
  },
  {
    "name": "TAJALÁPIZ 1 SERVICIOS 12 UDS HEXÁGONAL DEPÓSITO KLIPP",
  },
  {
    "name": "TAJALÁPIZ 1 SERVICIOS 72 PLÁSTICO UDS KLIPP",
  },
  {
    "name": "TAJALÁPIZ 1 SERVICIOS 6 UDS TORTUGA PORTALÁPICES KLIPP",
  },
  {
    "name": "TAJALÁPIZ 1 SERVICIOS 12 UDS CONEJO EXHIBIDOR KLIPP",
  },
  {
    "name": "TAJALÁPIZ 2 SERVICIOS 12 UDS OVALADO DEPÓSITO KLIPP",
  },
  {
    "name": "TAJALÁPIZ 2 SERVICIOS 12 UDS CUADRADO FASHION KLIPP",
  },
  {
    "name": "TAJALÁPIZ 2 SERVICIOS 12UDS CORAZÓN FASHION KLIPP",
  },
  {
    "name": "TAJALÁPIZ 2 SERVICIOS 12 UDS OVALADO FASHION KLIPP",
  },
  {
    "name": "TAJALÁPIZ 2 SERVICIOS 36 UDS REDONDO DEPÓSITO KLIPP",
  },
  {
    "name": "TAJALÁPIZ 2 SERVICIOS 12 UDS REDONDO DEPÓSITO KLIPP",
  },
  {
    "name": "TAJALÁPIZ 2 SERVICIOS 12 UDS OVALADO KLIPP",
  },
  {
    "name": "TAJALÁPIZ 2 SERVICIOS 12 UDS CONO PASTEL KLIPP",
  },
  {
    "name": "TAJALÁPIZ 2 SERVICIOS 12 UDS TRIANGULAR KLIPP",
  },
  {
    "name": "TAJALÁPIZ 2 SERVICIOS BORRADOR 12 UDS KLIPP",
  },
  {
    "name": "TAJALÁPIZ 1 SERVICIOS 24 UDS RECTANGULAR FASHION KLIPP",
  },
  {
    "name": "BORRADOR PARA DIBUJO KLIPP",
  },
  {
    "name": "BORRADOR BLANCO KLIPP",
  },
  {
    "name": "BORRADOR MEDIANO NEGRO EXHIBIDOR KLIPP",
  },
  {
    "name": "BORRADOR GRANDE NEGRO PREMIUM KLIPP",
  },
  {
    "name": "BORRADOR ESCOLAR 20 UDS CAJA KLIPP",
  },
  {
    "name": "BORRADOR 5 PUNTAS TABLAS MULTIPLICAR KLIPP",
  },
  {
    "name": "BORRADOR FIGURITAS 24 UDS KLIPP",
  },
  {
    "name": "REGLA DISEÑOS 30 CM JUVENIL SURTIDO KLIPP",
  },
  {
    "name": "REGLA DISEÑOS 30 CM INFANTIL NIÑA KLIPP",
  },
  {
    "name": "REGLA DISEÑOS 30 CM INFANTIL NIÑO KLIPP",
  },
  {
    "name": "REGLA 30 CM METÁLICA KLIPP",
  },
  {
    "name": "JUEGO GEOMÉTRICO 30 CM 5 PZAS 360 KLIPP",
  },
  {
    "name": "LANA 10 GRAMOS 12 UDS COLORES SURTIDO KLIPP",
  },
  {
    "name": "TIJERA PUNTA ROMA 12 UDS FINA KLIPP",
  },
  {
    "name": "TIJERA PUNTA ROMA 24 UDS DISEÑOS KLIPP",
  },
  {
    "name": "TIJERA ESCOLAR KLIPP",
  },
  {
    "name": "TIJERA ZIG ZAG 12 UDS CAJA KLIPP",
  },
  {
    "name": "TIJERA OFICINA",
  },
  {
    "name": "CORRECTOR LÁPIZ 7 ML 12 UDS KLIPP",
  },
  {
    "name": "CORRECTOR LÁPIZ 7ML 12 UDS FASHION SURTIDO KLIPP",
  },
  {
    "name": "CORRECTOR LÁPIZ 7ML 12 UDS NEÓN SURTIDO KLIPP",
  },
  {
    "name": "CINTA CORRECTORA 5 MM 8 M KLIPP",
  },
  {
    "name": "PEGANTE BARRA 40 GRAMOS KLIPP",
  },
  {
    "name": "PEGANTE LÍQUIDO 250 GRAMOS UNIVERSAL KLIPP",
  },
  {
    "name": "PEGANTE LÍQUIDO 147 GRAMOS INVISIBLE KLIPP",
  },
  {
    "name": "PEGANTE INSTANTÁNEO 3 GRAMOS KLIPP",
  },
  {
    "name": "SILICONA LIQUIDA",
    "description": "Encuentrala en 500, 250, 100, 60 y 30 miligramos."
  },
  {
    "name": "PISTOLA DE SILICONA GRANDE KLIPP",
  },
  {
    "name": "PISTOLA DE SILICONA PEQUEÑA KLIPP",
  },
  {
    "name": "CINTA SELLAR 48 MM X 200 M KLIPP",
    "description": "Encuéntrala en 300, 200, 100 y 40 metros."
  },
]

export const mapColores = createMap(colores, 'multiproductos', 'colores-y-lapices', 'para-todos')
export const mapPapeleria = createMap(papeleria, 'multiproductos', 'utiles', 'para-todos')

export const multiproductosList = [
  ...mapColores,
  ...mapPapeleria
]