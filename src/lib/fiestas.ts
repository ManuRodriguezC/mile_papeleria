import { createMap } from "./tiposProductos"

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
  {
    "name": "Globo R-12 Metalizado 50uds Fucsia Sempertex",
    "description": "Colores fucsia, negro, rojo, dorado, azul, lila, surtido."
  },
  {
    "name": "Globo R-12 Satinado 50uds Azul Sempertex",
    "description": "Colores Azul, Plateado, blanco perla, rosa, lila."
  },
  {
    "name": "Globo R-12 Reflex 12uds Surtido Sempertex",
    "description": "En 12 y 50 unidades, en colores rosa, champaña, dorado, plateado, rojo, fucsia, azul, oro y surtido"
  },
  {
    "name": "Globo R-12 Feliz Cumple Surtido Rumatex",
  },
  {
    "name": "Globo R-12 Feliz Cumple 12uds 5 Tintas Trans Rumatex",
  },
  {
    "name": "Globo R-12 Feliz Dia 12uds Surtido Rumatex",
  },
  {
    "name": "Globo R-12 Te Amo 12uds Rojo Rumatex",
  },
  {
    "name": "Globo R12 Te Quiero 12uds Rojo Rumatex",
  },
  {
    "name": "Globo R-12 Corazon Rojo 12uds Estampado Blanco Rumatex",
  },
  {
    "name": "Globo R-12 Balon 12uds Blanco Negro Rumatex",
  },
  {
    "name": "Globo R-12 Corazon Trans 12uds Estampado Rumatex",
  },
  {
    "name": "Globo R-12 12uds Surtido Rumatex",
  },
  {
    "name": "Globo Tubito 260 Fash 50uds Surtido Rumatex",
  },
  {
    "name": "Globo R-12 50uds Azul Os Rumatex Surtido Rumatex",
  },
  {
    "name": "Globo R-12 12 uds Past Rumatex",
  },
  {
    "name": "Globo R-9 50uds Surtido Rumatex",
  },
  {
    "name": "Globo R-12 50uds Past Rumatex",
  }]

  const cortinas = [
    {
    "name": "Cortina Fiesta 1x2M Metalizado Tiras Azul Oscuro",
  },
  {
    "name": "Cortina Fiesta 1x2M Metalizado Tiras Blanco",
  },
  {
    "name": "Cortina Fiesta 1x2M Metalizado Tiras Dorado",
  },
  {
    "name": "Cortina Fiesta 1x2M Metalizado Tiras Negro",
  },
  {
    "name": "Cortina Fiesta 1x2M Metalizado Tiras Oro Rosa",
  },
  {
    "name": "Cortina Fiesta 1x2M Metalizado Tiras Plata",
  },
  {
    "name": "Cortina Fiesta 1x2M Metalizado Tiras Rojo",
  },
  {
    "name": "Cortina Fiesta 1x2M Tornasol Tiras Azul Claro",
  },
  {
    "name": "Cortina Fiesta 1x2M Tornasol Tiras Rosado",
  },
  {
    "name": "Cortina Fiesta 1x2M Tornasol Tiras Blanco",
  },
  {
    "name": "Cortina Fiesta 1x2M Metalizado Cuadros Azul Claro",
  },
  {
    "name": "Cortina Fiesta 1x2M Metalizado Cuadros Rojo",
  },
  {
    "name": "Cortina Fiesta 1x2M Metalizado Cuadros Dorado",
  },
  {
    "name": "Cortina Fiesta 1x2M Metalizado Cuadros Azul Rey",
  },
  {
    "name": "Cortina Fiesta 1x2M Metalizado Cuadros Morado",
  },
  {
    "name": "Cortina Fiesta 1x2M Metalizado Cuadros Lila",
  },
  {
    "name": "Cortina Fiesta 1x2M Metalizado Cuadros Fucsia",
  },
  {
    "name": "Cortina Fiesta 1x2M Metalizado Cuadros Feliz Cumpleaños Azul",
  },
  {
    "name": "Cortina Fiesta 1x2M Metalizado Cuadros Feliz Cumpleaños Dorado",
  },
  {
    "name": "Cortina Fiesta 1x2M Metalizado Cuadros Feliz Cumpleaños Fucsia",
  },
  {
    "name": "Cortina Fiesta 1x2M Metalizado Cuadros Feliz Cumpleaños Negro",
  },
  {
    "name": "Cortina Fiesta 1x2M Metalizado Cuadros Feliz Cumpleaños Plata",
  },
  {
    "name": "Cortina Fiesta 1x2M Metalizado Cuadros Feliz Cumpleaños Rojo",
  },
  {
    "name": "Cortina Fiesta 1x2M Metalizado Cuadros Fucsia",
  },
  {
    "name": "Cortina Fiesta 1x2M Metalizado Cuadros Negro",
  },
  {
    "name": "Cortina Fiesta 1x2M Metalizado Cuadros Oro Rosa",
  }
]
  const festones = [
  {
    "name": "Feston Fiesta Feliz Cumpleaños Degrade",
  },
  {
    "name": "Feston Fiesta Feliz Cumpleaños Negro",
  },
  {
    "name": "Feston Fiesta Feliz Cumpleaños Holografico",
    "description": "Ecuentralo en colores azul claro, azul oscuro, dorado, fucsia, oro rosa, plata, rojo y rosado.",
  },
  {
    "name": "Feston Fiesta Triangular 18cm Zigzag",
    "description": "Ecuentralo en colores dorado, oro rosa y plata.",
  },
  {
    "name": "Feston Feliz Cumpleaños Escarchado",
    "description": "Ecuentralo en colores azul agua, azul oscuro, dorado, fucsia, oro rosa, plata, fucsia, negro y rosado.",
  },
  {
    "name": "Feston Feliz Cumpleaños Metalizado Azul Oscuro",
  },
  {
    "name": "Feston Feliz Cumpleaños Mate Azul Claro",
    "description": "Encuentralos en colores azul claro, azul oscuro, mate, rojo y rosa."
  }
]

const mesa = [
  {
    "name": "Mantel Fiesta F Cumple 183x137cm Azul Claro",
    "description": "Encuentralo en colores azul claro, dorado y negro.",
  },
  {
    "name": "Mantel Fiesta Metalizado 183x137cm Fucsia",
    "description": "Encuentrelos en colores azul claro, azul rey, champaña, dorado, fucsia, lila, plata, oro rosa, rojo y rosado."
  },
  {
    "name": "Mantel Fiesta Plastico 183x137cm Azul Oscuro",
    "description": "Encuentrelos en color azul claro, azul oscuro, fucsia, negro, rosado y verde."
  },
  {
    "name": "Mantel Fiesta Rayado 183x137cm Azul Claro",
    "description": "Encuentrelo en colores azul claro, blanco, champaña, amarillo, negro y rosado."
  },
  {
    "name": "Moño Magico 5x70cm Cinta 10uds Lila",
    "description": "En colores lila, azul claro, amarillo, blanco, borde azul, dorado, plata, rojo y rosado."
  },
  {
    "name": "Moño Magico 5x70cm Cinta 10uds Lineas Rojo",
    "description": "En colores rojo, plata y dorado."
  },
  {
    "name": "Moño Magico 1,8x34cm Cinta 10uds Azul",
    "description": "En colores azul, blanco, dorado, plata, rojo y rosado."  
  },
  {
    "name": "Plato Fiesta Brillante 17cm 10uds Zigzag Oro Rosa",
    "description": "Encuentralos en colores oro rosa, dorado y plata."
  },
  {
    "name": "Plato Fiesta Brillante 17cm 10uds Oro Rosa",
    "description": "Encuentralos en colores oro rosa, plata, azul claro, fucsia, gris, lila y rosado."
  },
  {
    "name": "Juego Plato Pequeño Grande Tenedor Fiesta 36uds Puntos Dorado",
    "description": "Encuentralos en colores dorado y plata."
  },
  {
    "name": "Juego Plato Pequeño Grande Fiesta 18uds Puntos Dorado",
    "description": "Encuentralos en colores dorado y plata."
  },
  {
    "name": "Vaso Fiesta 9oz 10uds Azul Claro",
    "description": "Encuentralos en colores azul claro, fucsia, gris, morado, rosado, oro rosa y plata."
  },
  {
    "name": "Vaso Fiesta Brillante 9oz 10uds Zigzag Oro Rosa",
    "description": "Encuentralos en colores dorado, plata y oro rosa."  
  },
  {
    "name": "Juego Cubiertos Fiesta Brillante 16cm 24uds Dorado",
    "description": "Encuentralos en colores dorado y plata."
  },
  {
    "name": "Pitillo Papel 25uds Zigzag Azul",
    "description": "Encuentralos en colores azul, verde, morado, azul claro, orsado, blanco, lila, verde rayas."
  },
  {
    "name": "Velas Fiesta 16cm 12uds Espiral Surtido",
    "description": "Encuentralas en colores dorado, plata y surtido."
  },
  {
    "name": "Velas Fiesta 12cm 8uds Rayas Surtido",
    "description": "Encuentralas en colores dorado, plata y surtido."
  },
  {
    "name": "Velas Fiesta 7cm 10uds Rayas Oro Rosa",
    "description": "Encuentralas en colores dorado, plata, oro rosa, rojo, azul y surtido."
  },
  {
    "name": "Vela Fiesta Numero 0 al 9 de 5cm y 9cm Dorado",
    "description": "Encuentralas en colores plata, dorado"
  },
  {
    "name": "Topper Estrella Luz 13cm Colores",
  },
  {
    "name": "Topper Estrella Luz 13cm Plata",
    "description": "Encuentralo en colores plata y rosado."
  },
]

const otros = [
  {
    "name": "Inflador De Globos",
  },
  {
    "name": "Serpentina Satinada 3Uds Surtido",
  },
  {
    "name": "Confeti Fiesta Metalizado Surtido",
  },
  {
    "name": "Confeti Fiesta 4mm 7 Gramos Estrellas Surtido",
  },
  {
    "name": "Adorno Adhesivo Feliz Cumpleaños 36cm Dorado",
  },
  {
    "name": "Banda Fiesta Feliz Cumpleaños 10cmx1,6m Plata",
  },
  {
    "name": "Banda Fiesta Feliz Cumpleaños 10cmx1,6m Dorado",
  },
  {
    "name": "Piedras Adhesivas Cara Y Uñas",
  },
  {
    "name": "Piedras Adhesivas Contorno Ojos Y Uñas",
  },
  {
    "name": "Piedras Adhesivas Manos",
  },
  {
    "name": "Piedras Adhesivas Multiusos",
  },
  {
    "name": "Piedras Adhesivas Parpados Cara Y Uñas",
  },
  {
    "name": "Piedras Adhesivas Pomulos Cejas Y Uñas",
  },
]

const sobres = [
  {
    "name": "Lluvia De Sobres Solido Color 12uds Primavera",
  },
  {
    "name": "Lluvia De Sobres Matrimonio 12uds Primavera",
  },
  {
    "name": "Lluvia De Sobres Niño 12uds Primavera",
  },
  {
    "name": "Fiesta Estrella Larga 4uds Dorado",
    "description": "Encuentralos en colores dorado, rosado y plata."
  },
  {
    "name": "Caja Regalo 350 Gr 22cm Surtido",
  },
  {
    "name": "Bolsa Fiesta 16x24cm 10uds Plastica Surtido",
  },
  {
    "name": "Bolsa Regalo L Niño Surtido Transporte",
    "description": "Encuentralas en diferentes motivos para niña, niño, adultos y cumpleaños."
  },
  {
    "name": "Bolsa Regalo M Niña Surtido Gatos",
    "description": "Encuentralas en diferentes motivos para niña, niño, adultos y cumpleaños."
  },
  {
    "name": "Papel Holografico 50x70cm 10 Hojas Azul Oscuro",
    "description": "Encuentralo en colores rojo, rosado, verde, azul claro, azul oscuro, dorado, fucsia, morado y gris."
  },
  {
    "name": "Papel Regalo Mujer 10 Hojas Prima",
  },
  {
    "name": "Papel Crepe 10uds Fucsia Klipp",
    "description": "Encuentralo en colores neon, plateado, amarillo, negro, gris, naranja, azul, dorado, verde, curuba, cafe, lila, agua marina, violeta, fiscia y surtidos."
  },
  {
    "name": "Papel Coreano 5 Hojas 57x57cm Rojo",
    "description": "Encuentralo en colores rojo, dorado, azul claro, negro, lila, verde, blanco, ficsia, rosa, morado, vinotinto, rosa y mas."
  },
  {
    "name": "Papel Celofan 25uds 90x100cm Violeta",
    "description": "Encuentra colores rojo, violeta, fucsia, naranja, azul, verde, amarillo y transparente."
  },
  {
    "name": "Panel Fiesta Cuadrado 3d 30Cm Dorado",
  },
  {
    "name": "Panel Fiesta Cuadrado 3d 30Cm Plata",
  },
]

const mapGlobos = createMap(globos, 'fiestas', 'globos', 'para-todos')
const mapCortinas = createMap(cortinas, 'fiestas', 'cortinas', 'para-todos')
const mapFestones = createMap(festones, 'fiestas', 'festones', 'para-todos')
const mapMesa = createMap(mesa, 'fiestas', 'para-la-mesa', 'para-todos')
const mapSobres = createMap(sobres, 'fiestas', 'sobres-regalos', 'para-todos')
const mapOtros = createMap(otros, 'fiestas', 'otros', 'para-todos')

export const fiestas = [
  ...mapGlobos,
  ...mapCortinas,
  ...mapFestones,
  ...mapMesa,
  ...mapSobres,
  ...mapOtros,
  ]