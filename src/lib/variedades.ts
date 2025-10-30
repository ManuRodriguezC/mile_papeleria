import type { ProductoMap } from "./tiposProductos";

export interface Producto {
  name: string;
  description?: string;
}

function createslug(name: string) {
  return name.replaceAll(" ", "-").toLowerCase()
}

function createMap (list: ProductoMap[], clase: string, type: string, gender: string) {
  return list.map((obj: Producto)=> {
    return {
      id: createslug(obj.name),
      title: obj.name,
      image: `/images/${clase}/${createslug(obj.name)}.webp`,
      slug: createslug(obj.name),
      clase: clase,
      type: type,
      gender: gender,
      description: "",
    }
  })
}

const deportivos = [
  {
    "name": "Cuerdas Saltarinas 2,5M 40730",
    "description": ""
  },  
  {
    "name": "Cuerdas Saltarinas 2,5M 40729",
    "description": ""
  },   
  {
    "name": "Balon Voleibol Sintetico Suave",
    "description": ""
  },   
  {
    "name": "Pin Pon Profesional 6uds",
    "description": ""
  },   
  {
    "name": "Pin Pon Profesional 60uds",
    "description": ""
  },   
  {
    "name": "Hula Hula Mediano 60cm",
    "description": ""
  },   
  {
    "name": "Balon Futbol Brillante Surtido",
    "description": ""
  },   
  {
    "name": "Balon Futbol Mate Surtido",
    "description": ""
  },   
  {
    "name": "Hula Hula Grande 70cm",
    "description": ""
  },   
  {
    "name": "Cuerdas Saltarinas",
    "description": ""
  },   
  {
    "name": "Pitos 2 und Blister Surtido",
    "description": ""
  },   
  {
    "name": "Pelota Tenis 3und",
    "description": ""
  },   
  {
    "name": "Pito Negro con Cordon 12unds",
  "description": ""},  ]


const juegosDeMesa = [
  {
    "name": "Dados 12 mm 9uds Blister Translucidos",
    "description": ""
  },  
  {
    "name": "Naipe Español",
    "description": ""
  },   
  {
    "name": "Naipe Poker Lujo",
    "description": ""
  },   
  {
    "name": "Dados 15mm 9uds Blister Blancos",
    "description": ""
  },   
  {
    "name": "Ajedrez Magnetico 20x10cm",
    "description": ""
  },   
  {
    "name": "Domino Pequeño",
    "description": ""
  },   
  {
    "name": "Domino Grande",
    "description": ""
  },   
  {
    "name": "Naipe Royal Poker",
  "description": ""},  ]


const modisteria = [
  {
    "name": "Alfiler de Cabeza",
    "description": ""
  },  
  {
    "name": "Metro Modisteria 1.5m",
    "description": ""
  },   
  {
    "name": "Metro Modisteria Caja Acrilica 1.5m",
    "description": ""
  },   
  {
    "name": "Tijeras Peluqueria Economica",
    "description": ""
  }
]


const chelines = [
  {
    "name": "Chelin Metalizado",
    "description": ""
  },  
  {
    "name": "Ganchos Nodriza Plata",
    "description": ""
  },   
  {
    "name": "Chelin Metalizado Dorado",
    "description": ""
  },   
  {
    "name": "Chelin Metalizado Plata",
    "description": ""
  },   
  {
    "name": "Ganchos Nodriza Dorado",
    "description": ""
  },   
  {
    "name": "Chelin Gamuzado",
    "description": ""
  },   
  {
    "name": "Chelin Gamuzado Negro",
    "description": ""
  },   
  {
    "name": "Chelin Gamuzado Blanco",
    "description": ""
  },   
  {
    "name": "Chelin Gamuzado Azul",
  "description": ""},  ]


const decoraciones = [
  {
    "name": "Accesorio de Decoración Flores Luz 1",
    "description": ""
  },  
  {
    "name": "Accesorio de Decoración Flores Luz 2",
    "description": ""
  },   
  {
    "name": "FIGURAS FLUORESCENTES NEÓN SURTIDO",
    "description": ""
  },   
  {
    "name": "FIGURAS FLUORESCENTES 25x31 NEÓN SURTIDO",
    "description": ""
  },   
  {
    "name": "Accesorio de Decoración Flores Luz 3",
    "description": ""
  },   
  {
    "name": "Accesorio de Decoración Flores Luz 4",
  "description": ""},  ]


const mapDeportes = createMap(deportivos, 'variedades', 'deportivos', 'para-todos')
const mapJuegosDeMesa = createMap(juegosDeMesa, 'variedades', 'juegos-de-mesa', 'para-todos')
const mapModisteria = createMap(modisteria, 'variedades', 'modisteria', 'para-todos')
const mapChelinesyGanchos = createMap(chelines, 'variedades', 'chelines-&-ganchos', 'para-todos')
const mapDecoraciones = createMap(chelines, 'variedades', 'flores-&-figuras-decorativas', 'para-todos')

const llaveros = [
  {
    id: `llavero-41254`,
    title: `Llavero Siliconado Argolla Metal Bull Dog Surtido`,
    image: `/images/variedades/llavero-41254.webp`,
    slug: `llavero-41254`,
    clase: 'variedades',
    type: 'llaveros',
    gender: 'niña',
    description: ''
  },
  {
    id: `llavero-41263`,
    title: `Llavero Siliconado Argolla Metalica Perro Cosmico`,
    image: `/images/variedades/llavero-41263.webp`,
    slug: `llavero-41263`,
    clase: 'variedades',
    type: 'llaveros',
    gender: 'niña',
    description: ''
  },
  {
    id: `llavero-41271`,
    title: `Llavero Cordon Argolla Metal Oso Suave`,
    image: `/images/variedades/llavero-41271.webp`,
    slug: `llavero-41271`,
    clase: 'variedades',
    type: 'llaveros',
    gender: 'niña',
    description: ''
  },
  {
    id: `llavero-41259`,
    title: `Llavero Siliconado Argolla Metal Oso Robot Surtido`,
    image: `/images/variedades/llavero-41259.webp`,
    slug: `llavero-41259`,
    clase: 'variedades',
    type: 'llaveros',
    gender: 'niña',
    description: ''
  },
  {
    id: `llavero-41256`,
    title: `Llavero Siliconado Argolla Metal Balon Voleibol`,
    image: `/images/variedades/llavero-41256.webp`,
    slug: `llavero-41256`,
    clase: 'variedades',
    type: 'llaveros',
    gender: 'niña',
    description: ''
  },

  {
    id: `llavero-41278`,
    title: `Llavero Cordon Argolla Metal Videojugo Cascabel`,
    image: `/images/variedades/llavero-41278.webp`,
    slug: `llavero-41278`,
    clase: 'variedades',
    type: 'llaveros',
    gender: 'niña',
    description: ''
  },
  {
    id: `llavero-41273`,
    title: `Llavero Argolla Metal Astronauta Luz Cascabel`,
    image: `/images/variedades/llavero-41273.webp`,
    slug: `llavero-41273`,
    clase: 'variedades',
    type: 'llaveros',
    gender: 'niña',
    description: ''
  },
  {
    id: `llavero-41277`,
    title: `Llavero Cordon Suave Argolla Metal Conejo Rabbit`,
    image: `/images/variedades/llavero-41277.webp`,
    slug: `llavero-41277`,
    clase: 'variedades',
    type: 'llaveros',
    gender: 'niña',
    description: ''
  },
  {
    id: `llavero-41266`,
    title: `Llavero Sliconado Argolla Metalica Astronauta Luz`,
    image: `/images/variedades/llavero-41266.webp`,
    slug: `llavero-41266`,
    clase: 'variedades',
    type: 'llaveros',
    gender: 'niña',
    description: ''
  },
  {
    id: `llavero-41258`,
    title: `Llavero Siliconado Argolla Metal Gato Astronauta`,
    image: `/images/variedades/llavero-41258.webp`,
    slug: `llavero-41258`,
    clase: 'variedades',
    type: 'llaveros',
    gender: 'niña',
    description: ''
  },
  {
    id: `llavero-41280`,
    title: `Llavero Pulsera Argolla Metal Pato`,
    image: `/images/variedades/llavero-41280.webp`,
    slug: `llavero-41280`,
    clase: 'variedades',
    type: 'llaveros',
    gender: 'niña',
    description: ''
  },
  {
    id: `llavero-41279`,
    title: `Llavero Pulsera Argolla Metal Unicornio Nacarado`,
    image: `/images/variedades/llavero-41279.webp`,
    slug: `llavero-41279`,
    clase: 'variedades',
    type: 'llaveros',
    gender: 'niña',
    description: ''
  },
  {
    id: `llavero-41257`,
    title: `Llavero Siliconado Argolla Metal Hongo Luz`,
    image: `/images/variedades/llavero-41257.webp`,
    slug: `llavero-41257`,
    clase: 'variedades',
    type: 'llaveros',
    gender: 'niña',
    description: ''
  },
  {
    id: `llavero-41274`,
    title: `Llavero Cordon Argolla Metal Dinosaurio`,
    image: `/images/variedades/llavero-41274.webp`,
    slug: `llavero-41274`,
    clase: 'variedades',
    type: 'llaveros',
    gender: 'niña',
    description: ''
  },
  {
    id: `llavero-41272`,
    title: `Llavero Cordon Argolla Metal Oso Corazon`,
    image: `/images/variedades/llavero-41272.webp`,
    slug: `llavero-41272`,
    clase: 'variedades',
    type: 'llaveros',
    gender: 'niña',
    description: ''
  },
  {
    id: `llavero-41255`,
    title: `Llavero Siliconado Argolla Metal Balon Futbol`,
    image: `/images/variedades/llavero-41255.webp`,
    slug: `llavero-41255`,
    clase: 'variedades',
    type: 'llaveros',
    gender: 'niña',
    description: ''
  },
  {
    id: `llavero-41264`,
    title: `Llavero Siliconado Argolla Metalica Calculadora`,
    image: `/images/variedades/llavero-41264.webp`,
    slug: `llavero-41264`,
    clase: 'variedades',
    type: 'llaveros',
    gender: 'niña',
    description: ''
  },
  {
    id: `llavero-41268`,
    title: `Llavero Siliconado Argolla Metalica Oso Brillante`,
    image: `/images/variedades/llavero-41268.webp`,
    slug: `llavero-41268`,
    clase: 'variedades',
    type: 'llaveros',
    gender: 'niña',
    description: ''
  },
  {
    id: `llavero-41260`,
    title: `Llavero Siliconado Argolla Metal Corazon Agua`,
    image: `/images/variedades/llavero-41260.webp`,
    slug: `llavero-41260`,
    clase: 'variedades',
    type: 'llaveros',
    gender: 'niña',
    description: ''
  },
  {
    id: `llavero-41261`,
    title: `Llavero Siliconado Argolla Metalica BOM BOM`,
    image: `/images/variedades/llavero-41261.webp`,
    slug: `llavero-41261`,
    clase: 'variedades',
    type: 'llaveros',
    gender: 'niña',
    description: ''
  },
  {
    id: `llavero-41267`,
    title: `Llavero sILICOnado Argolla Metalica Oso Tornasol`,
    image: `/images/variedades/llavero-41267.webp`,
    slug: `llavero-41267`,
    clase: 'variedades',
    type: 'llaveros',
    gender: 'niña',
    description: ''
  },
  {
    id: `llavero-41276`,
    title: `Llavero Cordon Suave Argolla Metal Oso Fashion`,
    image: `/images/variedades/llavero-41276.webp`,
    slug: `llavero-41276`,
    clase: 'variedades',
    type: 'llaveros',
    gender: 'niña',
    description: ''
  },
  {
    id: `llavero-41262`,
    title: `Llavero Siliconado Argolla Metalica Esfera Agua`,
    image: `/images/variedades/llavero-41262.webp`,
    slug: `llavero-41262`,
    clase: 'variedades',
    type: 'llaveros',
    gender: 'niña',
    description: ''
  },
  {
    id: `llavero-35318`,
    title: `Llavero Siliconado Argolla Metalica Surtido`,
    image: `/images/variedades/llavero-35318.webp`,
    slug: `llavero-35318`,
    clase: 'variedades',
    type: 'llaveros',
    gender: 'niña',
    description: ''
  },
  {
    id: `llavero-41275`,
    title: `Llavero Cordon Suave Argolla Metal Alienigena`,
    image: `/images/variedades/llavero-41275.webp`,
    slug: `llavero-41275`,
    clase: 'variedades',
    type: 'llaveros',
    gender: 'niña',
    description: ''
  },
  {
    id: `llavero-35317`,
    title: `Llavero Siliconado Argolla Metalica Surtido`,
    image: `/images/variedades/llavero-35317.webp`,
    slug: `llavero-35317`,
    clase: 'variedades',
    type: 'llaveros',
    gender: 'niña',
    description: ''
  },
  {
    id: `llavero-41270`,
    title: `Llavero Siliconado Argolla Metalica Oso Degrade`,
    image: `/images/variedades/llavero-41270.webp`,
    slug: `llavero-41270`,
    clase: 'variedades',
    type: 'llaveros',
    gender: 'niña',
    description: ''
  },
  {
    id: `llavero-41265`,
    title: `Llavero Siliconado Argolla Metalica Gatita`,
    image: `/images/variedades/llavero-41265.webp`,
    slug: `llavero-41265`,
    clase: 'variedades',
    type: 'llaveros',
    gender: 'niña',
    description: ''
  },
  {
    id: `llavero-41269`,
    title: `Llavero Pulsera Argolla Metalica Unicornio`,
    image: `/images/variedades/llavero-41269.webp`,
    slug: `llavero-41269`,
    clase: 'variedades',
    type: 'llaveros',
    gender: 'niña',
    description: ''
  },
]

export const variedades = [
  ...llaveros,
  ...mapDeportes,
  ...mapJuegosDeMesa,
  ...mapModisteria,
  ...mapChelinesyGanchos,
  ...mapDecoraciones
]