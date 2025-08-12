  // {
  //   id: `cuaderno-cosido-niña-be-cool-${num}`,
  //   title: `Cuaderno Cosido Niña KLIPP BE COOL ${num}`,
  //   image: `/images/cuadernos/cuaderno-cosido-${num}.webp`,
  //   slug: `cuaderno-cosido-niña-klipp-be-cool-${num}`,
  //   clase: 'cuaderno',
  //   type: 'cosido',
  //   gender: 'niña'
  // };
interface Producto {
  name: string;
  description?: string;
}
function createslug(name: string) {
  return name.replaceAll(" ", "-").toLowerCase()
}

function createMap (list: Producto[], clase: string, type: string, gender: string) {
  return list.map((obj: Producto)=> {
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

// {
//   "name": "",
//   "description": "",
// }

const globos = [
  {
    "name": "Globos Metalizados Dorados",
    "description": "Del numero 0 al 9.",
  },
  {
    "name": "Globos Metalizados Plata",
    "description": "Del numero 0 al 9.",
  },
  {
    "name": "Globos Metalizados Estrella",
  },
  {
    "name": "Globos Metalizados Corazón",
  },
  {
    "name": "Globos Metalizados Redondo",
  },
  {
    "name": "Globos Metalizados Feliz Cumpleaños Puntos",
  },
  {
    "name": "Globos Metalizados Feliz Cumpleaños Dorado",
  },
  {
    "name": "Globos Metalizados Jarro Cerveza Dorado",
  },
  {
    "name": "Bouquet Globos Cerveza Champaña 6 Piezas Dorado",
  },
  {
    "name": "Bouquet Globos Cerveza Champaña 5 Piezas Dorado",
  },
  {
    "name": "Bouquet Globos Feliz Dia Estrella 5 Piezas Dorado",
  },
  {
    "name": "Letrero Metalizado Bautizo Niño",
  },
  {
    "name": "Letrero Metalizado Bautizo Niña",
  },
  {
    "name": "Letrero Metalizado 15 Años Dorado",
  },
  {
    "name": "Letrero Metalizado 15 Años Plata",
  },
  {
    "name": "Letrero Metalizado Happy Birthday Colores",
  },
  {
    "name": "Letrero Metalizado Feliz Cumpleaños Plata",
  },
  {
    "name": "Letrero Metalizado Feliz Cumpleaños Dorado",
  },
  {
    "name": "Bouquet Globos Arcoiries 5 Piezas Morado",
  },
  {
    "name": "Inflador de Globos Klipp",
  },
  {
    "name": "Letrero Metalizado Baby Shower Niño",
  },
  //
  {
    "name": "Letrero Metalizado Baby Shower Niña",
  },
  {
    "name": "Letrero Metalizado Te Amo Rojo",
  },
  {
    "name": "Globo Confetis Variados Azul",
  },
  {
    "name": "Globo Confetis Azul",
  },
  {
    "name": "Set Globos ¡Es Niño! Azul Cielo 9 Piezas",
  },
  {
    "name": "Set Globos ¡Es Niño! Azul 12 Piezas",
  },
  {
    "name": "Set Globos ¡Es Niña! Rosado 9 Piezas",
  },
  {
    "name": "Set Globos ¡Es Niña! Cobre 12 Piezas",
  },
  {
    "name": "Globo R-12 Fash Feliz Cumple 12uds Sempertex",
  },
  {
    "name": "Globo R-12 Fash 50uds Feliz Cumple Sempertex",
  },
  {
    "name": "Globo R-12 Fash Feliz Cumple 50uds Sempertex",
  },
  {
    "name": "Globo R-12 Fash Feliz Cumple Sempertex Surtido",
    "description": "Paquete de 12 y 50 unidades.",
  },
  {
    "name": "Globo R-12 Fash 12uds Feliz Cumple Sol Surtido Sempertex",
  },
  {
    "name": "Globo R-12 Fash 12uds Feliz Cumple Terraso As Sempertex",
  },
  {
    "name": "Globo R-12 Fash Feliz Cumple Vib-Dest 12uds Surtido Sempertex",
  },
  {
    "name": "Globo R-12 Fash Feliz Cumple Cuadra 12uds Sempertex",
  },
  {
    "name": "Globo R-12 Feliz Cumple Coronas 12uds Sempertex",
  },
  {
    "name": "Globo R-12 Feliz Cumple Fiesta Deste 12uds Sempertex",
  },
  {
    "name": "Globo R-12 Fash Feliz Dia Estrella 12uds Surtido Sempertex",
  },
  {
    "name": "Globo R-12 Fash Feliz Día Big Cor 12uds Sempertex",
  },
  {
    "name": "Globo R-12 Fash Feliz Día Big Cor 12uds Surtido Sempertex",
  },
  {
    "name": "Globo R-12 Fash Feliz Grado 12uds Trans Sempertex",
  },
  {
    "name": "Globo R-12 Fash Feliz Grado 12uds Pl-Dr Sempertex",
  },
  {
    "name": "Globo C-12 Corazón Te Amo 12uds Sempertex",
  },
  {
    "name": "Globo R-12 Fash Feliz Cumple Cuadra 12uds Sempertex",
  },
  {
    "name": "Globo C-12 Corazón 12uds Blanco Sempertex",
  },
  {
    "name": "Globo C-12 Corazón Rojo Sempertex",
  },
  {
    "name": "Globo C-12 Corazón Te Quiero 12uds Rojo Sempertex",
  },
  {
    "name": "Globo R-12 Fash 12uds Balón Futbol Trico Sempertex",
  },
  {
    "name": "Globo R-18 Cristal 6uds Sempertex",
  },
  {
    "name": "Globo Tubito 260 Fash Past 50uds Surtido Sempertex",
  },
  {
    "name": "Globo Tubito 260 Fash 50uds Neón Surtido Sempertex",
  },
  {
    "name": "Globo Tubito 260 Fash 50uds Surtido Sempertex",
  },
  {
    "name": "Globo De Agua 100uds Sempertex",
  },
  {
    "name": "Globo Fash 50uds Surtido Sempertex",
    "description": "R-9 y R-12",
  },
  {
    "name": "Globo R-12 Fash 12uds Sempertex",
    "description": "Café, Fucsia, Violeta, AguaMarina, Coral Trop, Lila, Azul Claro, Verde Lima, Rosa, Verde Selva, Amarillo, Blanco, Negro, Naranja, Azul Rey y Rojo.",
  },
  {
    "name": "Globo R-12 Fash 50uds Surtido Sempertex",
  },
  {
    "name": "Globo R-12 Fash 50uds Sempertex",
    "description": "En Rosa, Crema Dusk, Fucsia, Rosa Dusk, Verde Lima, Rojo, Verde Trébol, Violeta, Arena, Naranja, Aguamarina, Turquesa, Amarillo Miel, Lila, Negro, Azul Claro, Verde Selva, Amarillo, Rojo, Azul Rey, Blanco."
  },

  {
    "name": "Globo R-12 Neón Surtido Sempertex",
    "description": "Paquete de 12uds y 50uds."
  },
  {
    "name": "Globo R-12 Past Mate Surtido Sempertex",
    "description": "Paquete de 12uds y 50uds."
  },
  {
    "name": "Globo R-12 Past Mate 50uds Sempertex",
    "description": "En Lila, Azul Claro y Rosa."
  },
  // {
  //   "name": "",
  // },
  // {
  //   "name": "",
  // },
  // {
  //   "name": "",
  // },
  // {
  //   "name": "",
  // },




]

const mapGlobos = createMap(globos, 'fiestas', 'globos', 'para-todos')

export const fiestas = [
  ...mapGlobos,
  ]