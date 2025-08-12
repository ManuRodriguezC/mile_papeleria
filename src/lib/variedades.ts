function createslug(name: string) {
  return name.replaceAll(" ", "-").toLowerCase()
}

function createMap (list: string[], clase: string, type: string, gender: string) {
  return list.map((obj: string)=> {
    return {
      id: createslug(obj),
      title: obj,
      image: `/images/${clase}/${createslug(obj)}.webp`,
      slug: createslug(obj),
      clase: clase,
      type: type,
      gender: gender
    }
  })
}

const deportivos = [
  "Cuerdas Saltarinas 2,5M 40730",
  "Cuerdas Saltarinas 2,5M 40729",
  "Balon Voleibol Sintetico Suave",
  "Pin Pon Profesional 6uds",
  "Pin Pon Profesional 60uds",
  "Hula Hula Mediano 60cm",
  "Balon Futbol Brillante Surtido",
  "Balon Futbol Mate Surtido",
  "Hula Hula Grande 70cm",
  "Cuerdas Saltarinas",
  "Pitos 2 und Blister Surtido",
  "Pelota Tenis 3und",
  "Pito Negro con Cordon 12unds",
]

const juegosDeMesa = [
  "Dados 12 mm 9uds Blister Translucidos",
  "Naipe Español",
  "Naipe Poker Lujo",
  "Dados 15mm 9uds Blister Blancos",
  "Ajedrez Magnetico 20x10cm",
  "Domino Pequeño",
  "Domino Grande",
  "Naipe Royal Poker",
]

const modisteria = [
  "Alfiler de Cabeza",
  "Metro Modisteria 1.5m",
  "Metro Modisteria Caja Acrilica 1.5m",
  "Tijeras Peluqueria Economica"
]

const chelines = [
  "Chelin Metalizado",
  "Ganchos Nodriza Plata",
  "Chelin Metalizado Dorado",
  "Chelin Metalizado Plata",
  "Ganchos Nodriza Dorado",
  "Chelin Gamuzado",
  "Chelin Gamuzado Negro",
  "Chelin Gamuzado Blanco",
  "Chelin Gamuzado Azul",
]

const decoraciones = [
  "Accesorio de Decoración Flores Luz 1",
  "Accesorio de Decoración Flores Luz 2",
  "FIGURAS FLUORESCENTES NEÓN SURTIDO",
  "FIGURAS FLUORESCENTES 25x31 NEÓN SURTIDO",
  "Accesorio de Decoración Flores Luz 3",
  "Accesorio de Decoración Flores Luz 4",
]

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
    gender: 'niña'
  },
  {
    id: `llavero-41263`,
    title: `Llavero Siliconado Argolla Metalica Perro Cosmico`,
    image: `/images/variedades/llavero-41263.webp`,
    slug: `llavero-41263`,
    clase: 'variedades',
    type: 'llaveros',
    gender: 'niña'
  },
  {
    id: `llavero-41271`,
    title: `Llavero Cordon Argolla Metal Oso Suave`,
    image: `/images/variedades/llavero-41271.webp`,
    slug: `llavero-41271`,
    clase: 'variedades',
    type: 'llaveros',
    gender: 'niña'
  },
  {
    id: `llavero-41259`,
    title: `Llavero Siliconado Argolla Metal Oso Robot Surtido`,
    image: `/images/variedades/llavero-41259.webp`,
    slug: `llavero-41259`,
    clase: 'variedades',
    type: 'llaveros',
    gender: 'niña'
  },
  {
    id: `llavero-41256`,
    title: `Llavero Siliconado Argolla Metal Balon Voleibol`,
    image: `/images/variedades/llavero-41256.webp`,
    slug: `llavero-41256`,
    clase: 'variedades',
    type: 'llaveros',
    gender: 'niña'
  },

  {
    id: `llavero-41278`,
    title: `Llavero Cordon Argolla Metal Videojugo Cascabel`,
    image: `/images/variedades/llavero-41278.webp`,
    slug: `llavero-41278`,
    clase: 'variedades',
    type: 'llaveros',
    gender: 'niña'
  },
  {
    id: `llavero-41273`,
    title: `Llavero Argolla Metal Astronauta Luz Cascabel`,
    image: `/images/variedades/llavero-41273.webp`,
    slug: `llavero-41273`,
    clase: 'variedades',
    type: 'llaveros',
    gender: 'niña'
  },
  {
    id: `llavero-41277`,
    title: `Llavero Cordon Suave Argolla Metal Conejo Rabbit`,
    image: `/images/variedades/llavero-41277.webp`,
    slug: `llavero-41277`,
    clase: 'variedades',
    type: 'llaveros',
    gender: 'niña'
  },
  {
    id: `llavero-41266`,
    title: `Llavero Sliconado Argolla Metalica Astronauta Luz`,
    image: `/images/variedades/llavero-41266.webp`,
    slug: `llavero-41266`,
    clase: 'variedades',
    type: 'llaveros',
    gender: 'niña'
  },
  {
    id: `llavero-41258`,
    title: `Llavero Siliconado Argolla Metal Gato Astronauta`,
    image: `/images/variedades/llavero-41258.webp`,
    slug: `llavero-41258`,
    clase: 'variedades',
    type: 'llaveros',
    gender: 'niña'
  },
  {
    id: `llavero-41280`,
    title: `Llavero Pulsera Argolla Metal Pato`,
    image: `/images/variedades/llavero-41280.webp`,
    slug: `llavero-41280`,
    clase: 'variedades',
    type: 'llaveros',
    gender: 'niña'
  },
  {
    id: `llavero-41279`,
    title: `Llavero Pulsera Argolla Metal Unicornio Nacarado`,
    image: `/images/variedades/llavero-41279.webp`,
    slug: `llavero-41279`,
    clase: 'variedades',
    type: 'llaveros',
    gender: 'niña'
  },
  {
    id: `llavero-41257`,
    title: `Llavero Siliconado Argolla Metal Hongo Luz`,
    image: `/images/variedades/llavero-41257.webp`,
    slug: `llavero-41257`,
    clase: 'variedades',
    type: 'llaveros',
    gender: 'niña'
  },
  {
    id: `llavero-41274`,
    title: `Llavero Cordon Argolla Metal Dinosaurio`,
    image: `/images/variedades/llavero-41274.webp`,
    slug: `llavero-41274`,
    clase: 'variedades',
    type: 'llaveros',
    gender: 'niña'
  },
  {
    id: `llavero-41272`,
    title: `Llavero Cordon Argolla Metal Oso Corazon`,
    image: `/images/variedades/llavero-41272.webp`,
    slug: `llavero-41272`,
    clase: 'variedades',
    type: 'llaveros',
    gender: 'niña'
  },
  {
    id: `llavero-41255`,
    title: `Llavero Siliconado Argolla Metal Balon Futbol`,
    image: `/images/variedades/llavero-41255.webp`,
    slug: `llavero-41255`,
    clase: 'variedades',
    type: 'llaveros',
    gender: 'niña'
  },
  {
    id: `llavero-41264`,
    title: `Llavero Siliconado Argolla Metalica Calculadora`,
    image: `/images/variedades/llavero-41264.webp`,
    slug: `llavero-41264`,
    clase: 'variedades',
    type: 'llaveros',
    gender: 'niña'
  },
  {
    id: `llavero-41268`,
    title: `Llavero Siliconado Argolla Metalica Oso Brillante`,
    image: `/images/variedades/llavero-41268.webp`,
    slug: `llavero-41268`,
    clase: 'variedades',
    type: 'llaveros',
    gender: 'niña'
  },
  {
    id: `llavero-41260`,
    title: `Llavero Siliconado Argolla Metal Corazon Agua`,
    image: `/images/variedades/llavero-41260.webp`,
    slug: `llavero-41260`,
    clase: 'variedades',
    type: 'llaveros',
    gender: 'niña'
  },
  {
    id: `llavero-41261`,
    title: `Llavero Siliconado Argolla Metalica BOM BOM`,
    image: `/images/variedades/llavero-41261.webp`,
    slug: `llavero-41261`,
    clase: 'variedades',
    type: 'llaveros',
    gender: 'niña'
  },
  {
    id: `llavero-41267`,
    title: `Llavero sILICOnado Argolla Metalica Oso Tornasol`,
    image: `/images/variedades/llavero-41267.webp`,
    slug: `llavero-41267`,
    clase: 'variedades',
    type: 'llaveros',
    gender: 'niña'
  },
  {
    id: `llavero-41276`,
    title: `Llavero Cordon Suave Argolla Metal Oso Fashion`,
    image: `/images/variedades/llavero-41276.webp`,
    slug: `llavero-41276`,
    clase: 'variedades',
    type: 'llaveros',
    gender: 'niña'
  },
  {
    id: `llavero-41262`,
    title: `Llavero Siliconado Argolla Metalica Esfera Agua`,
    image: `/images/variedades/llavero-41262.webp`,
    slug: `llavero-41262`,
    clase: 'variedades',
    type: 'llaveros',
    gender: 'niña'
  },
  {
    id: `llavero-35318`,
    title: `Llavero Siliconado Argolla Metalica Surtido`,
    image: `/images/variedades/llavero-35318.webp`,
    slug: `llavero-35318`,
    clase: 'variedades',
    type: 'llaveros',
    gender: 'niña'
  },
  {
    id: `llavero-41275`,
    title: `Llavero Cordon Suave Argolla Metal Alienigena`,
    image: `/images/variedades/llavero-41275.webp`,
    slug: `llavero-41275`,
    clase: 'variedades',
    type: 'llaveros',
    gender: 'niña'
  },
  {
    id: `llavero-35317`,
    title: `Llavero Siliconado Argolla Metalica Surtido`,
    image: `/images/variedades/llavero-35317.webp`,
    slug: `llavero-35317`,
    clase: 'variedades',
    type: 'llaveros',
    gender: 'niña'
  },
  {
    id: `llavero-41270`,
    title: `Llavero Siliconado Argolla Metalica Oso Degrade`,
    image: `/images/variedades/llavero-41270.webp`,
    slug: `llavero-41270`,
    clase: 'variedades',
    type: 'llaveros',
    gender: 'niña'
  },
  {
    id: `llavero-41265`,
    title: `Llavero Siliconado Argolla Metalica Gatita`,
    image: `/images/variedades/llavero-41265.webp`,
    slug: `llavero-41265`,
    clase: 'variedades',
    type: 'llaveros',
    gender: 'niña'
  },
  {
    id: `llavero-41269`,
    title: `Llavero Pulsera Argolla Metalica Unicornio`,
    image: `/images/variedades/llavero-41269.webp`,
    slug: `llavero-41269`,
    clase: 'variedades',
    type: 'llaveros',
    gender: 'niña'
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