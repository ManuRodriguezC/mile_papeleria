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

const escritura = [
  {
    "name": "Bolígrafo Retráctil Punta Fina 0.5 Tinta Negra Índigo x6uds"
  },
  {
    "name": "Bolígrafo Doble Punta Lineal Y Sellos x6 uds. Surt"
  },
  {
    "name": "Bolígrafo Fino Retráctil Negro x2 Uds Azul o Gris"
  },
  {
    "name": "Bolígrafo Doble Trazo 8 Uds Surt"
  },
  {
    "name": "Libro Colorear Dinosaurios 21 X 29 Cm 16 Hojas Surtida"
  },
  {
    "name": "Bolígrafo Ret 0,5 Surt x6 uds Surt Intenso"
  },
  {
    "name": "Bolígrafo Ret 0,5 Surt x6 uds Surt Metalizado"
  },
  {
    "name": "Bolígrafo Multiminas 10Colores Pata Surtido"
  },
  {
    "name": "Bolígrafo Retráctil Multiminas 0,7 Arcoíris"
  },
  {
    "name": "Bolígrafo Luz 0,7 Cohete"
  },
  {
    "name": "Bolígrafo Luz 0,7 Conejo"
  },
  {
    "name": "Bolígrafo Luz Diamante 0,7 Oso"
  },
  {
    "name": "Bolígrafo Diseño 0,7 Pompón"
  },
  {
    "name": "Bolígrafo Goma Aguacate"
  },
  {
    "name": "Bolígrafo Diseño Pompón 1 Ud Surtido"
  },
  {
    "name": "Lápiz Duplo x12 uds Senpol"
  },
  {
    "name": "Colores Doble Punta x12 uds Senpol"
  },
  {
    "name": "Colores Unipunta x12 uds Senpol"
  },
  {
    "name": "Marcador Vinilo 3 mm Metalizado x6 uds Surtido"
  },
  {
    "name": "Marcador Vinilo 5,5 mm x8 uds Surtido"
  },
  {
    "name": "Marcador Vinilo 5,5 mm Metalizado x6 uds Surtido"
  },
  {
    "name": "Marcador Vinilo 10 mm x6 uds Surtido"
  },
  {
    "name": "Marcador Vinilo 15 mm",
    "description": "Encuentralo en colores amarillo, azul, blanco, morado, natural, negro, naranja, rojo, rosado, turquesa, verde y vino tinto."
  },
  {
    "name": "Marcador Doble Punta Estuche x24 Uds.",
    "description": "Encuentralo en estuche de 12, 24, 36 y 48 unidades." 
  },
  {
    "name": "Plumón Lavable x12 uds Económico Surtido"
  },
  {
    "name": "Resaltador 4 Uds Pastel Surtido"
  },
  {
    "name": "Resaltador Rectangular x6uds Pastel Blíster"
  },
  {
    "name": "Resaltador x6 uds Rectangular Surtido"
  },
  {
    "name": "Resaltador Doble Trazo x6 uds"
  },
  {
    "name": "Tiza Tablero 8 Cm Surtido x12 uds + Blanca x12 uds"
  },
  {
    "name": "Tiza Tablero 8 Cm x12 uds Blanca"
  },
  {
    "name": "Tiza Tablero 8 Cm x12 uds Surtido"
  }
]

const arte = [
  {
    "name": "Estuche Arte Tipo Maleta 150 Pzas"
  },
  {
    "name": "Estuche Arte Tipo Maleta 168 Pzas"
  },
  {
    "name": "Estuche Arte Tipo Maleta 208 Pzas"
  },
  {
    "name": "Estuche Arte Tipo Maleta Madera 220 Pzas"
  },
  {
    "name": "Estuche Arte Tipo Maleta Madera 251 Pzas"
  },
  {
    "name": "Estuche Arte Tipo Maleta 208 Pzas Azul"
  },
  {
    "name": "Estuche Arte Tipo Maleta 72 Pzas Azul"
  },
  {
    "name": "Estuche Arte Tipo Maleta 72 Pzas Rosado"
  },
  {
    "name": "Estuche Arte Tipo Maleta Aluminio Astronauta 115 Pzas"
  },
  {
    "name": "Estuche De Arte Tipo Maleta Madera 180 Pzas"
  },
  {
    "name": "Acuarela 12 Ml x12 uds Colores"
  },
  {
    "name": "Acuarela 12 Colores Metalizado Círculos + Pincel Acrílico"
  },
  {
    "name": "Acuarela Grande 12 Colores + Pincel"
  },
  {
    "name": "Plato Mezclador Pinturas"
  },
  {
    "name": "Acuarela Tapa 12 Colores + Pincel Azul"
  },
  {
    "name": "Acuarela 12 Colores Metalizado Cuadros + Pincel Acrílico"
  },
  {
    "name": "Acuarela 12 Colores Neón Círculos + Pincel Acrílico"
  },
  {
    "name": "Acuarela 24 Colores Metalizado Cuadros + Pincel Acrílico"
  },
  {
    "name": "Acuarela 36 Colores Círculos + Pincel Acrílico"
  },
  {
    "name": "Acuarela Set 36 Colores + Accesorios Caja Metálica"
  },
  {
    "name": "Acuarela 48 Colores Círculos + Pincel Acrílico"
  },
  {
    "name": "Lienzo 15 X 15 Cm 280 Gr + Caballete"
  },
  {
    "name": "Lienzo 20 X 30 Cm 280 Gr"
  },
  {
    "name": "Lienzo 25 X 30 Cm 280 Gr + Caballete"
  },
  {
    "name": "Lienzo Impreso 15 X 15 Cm 280 Gr + Caballete"
  },
  {
    "name": "Lienzo Impreso 20 X 30 Cm 280 Gr + Caballete"
  },
  {
    "name": "Lienzo Impreso 24 X 30 Cm 280 Gr + Caballete"
  },
  {
    "name": "Lienzo Redondo 20 Cm 280 Gr"
  },
  {
    "name": "Lienzo Hexagonal 20 Cm 280 Gr"
  },
  {
    "name": "Óleo 12 Ml x12 uds. Colores"
  },
  {
    "name": "Acrílico 12 Ml x12 uds Colores"
  },
  {
    "name": "Tubo Para Escarcha Con Tapón"
  },
  {
    "name": "Dispensador Escarcha 6 Colores"
  },
  {
    "name": "Escarcha 15 Gr x12 Paquetes Surtidos"
  },
  {
    "name": "Lentejuela 24 Paquete Surtido"
  },
  {
    "name": "Plastilina Con Moldes 8 Uds Surtido"
  },
  {
    "name": "Cinta Decorativa 1,5 Cm X 3 M 10 Uds Tarro Impresa Surtido"
  },
  {
    "name": "Cinta Decorativa 1,5 Cm X 3 M 10 Uds Tarro Surtido"
  },
  {
    "name": "Cinta Decorativa 1,5 Cm X 3 M 3 Uds Blíster Dorada"
  },
  {
    "name": "Set Troquel 6 Figuras 1 Cm Intercambiable Surtido"
  },
  {
    "name": "Set Troquel Figuras 1 Cm 4 Uds Surtido+ Tijera Zigzag"
  },
  {
    "name": "Troquel Corona 1,5 Cm"
  },
  {
    "name": "Delantal Infantil 50X42X31Cm Plástico S Transparente"
  },
  {
    "name": "Pinceles Juego Plano 1-12 Uds"
  },
  {
    "name": "Pinceles Delineador 00 x6 uds"
  },
  {
    "name": "Pinceles Juego 7 Uds Surtido"
  },
  {
    "name": "Brocha N° Plano"
  },
  {
    "name": "Silicona Barra Delgada 700 Gramos"
  },
  {
    "name": "Pegante Barra Kaida",
    "description": "Encuentralo en presentaciones de 8, 15, 21 y 36 gramos."
  },
  {
    "name": "Ojos Móviles Negro Tamaño Surtido x20 Paquetes"
  },
  {
    "name": "Ojos Móviles Colores Tamaño Surtido x20 Paquetes"
  },
  {
    "name": "Lana 8 Gr x12 uds Colores Surtido"
  },
  {
    "name": "Palo Paleta Madera 11,4X1Cm X 50 Pzas Natural"
  },
  {
    "name": "Palo Paleta Madera 11,4X1Cm X 50 Pzas Col"
  },
  {
    "name": "Palo Redondo Madera 15 Cm X 50 Pzas Natural"
  },
  {
    "name": "Palo Redondo Madera 15Cm X 50 Pzas Col"
  },
  {
    "name": "Palo Pincho Madera 40X30Cm X 48 Pzas Natural"
  },
  {
    "name": "Cubos Madera 16 Pzas Surtido Natural"
  },
  {
    "name": "Cubos Madera 16 Pzas Surtido Col"
  },
  {
    "name": "Formas Surtido Madera X 50 Pzas Col"
  }
]

const oficina = [
  {
    "name": "Tijera Oficina 5.5 Pastel"
  },
  {
    "name": "Portaplanos 8 X 65 Cm Extensible"
  },
  {
    "name": "Bisturí Industrial Metálico Blíster"
  },
  {
    "name": "Repuesto Bisturí Grande 10 Hj"
  },
  {
    "name": "Borrador Tablero Magnético Surtido"
  },
  {
    "name": "Bisturí Industrial Alma Metálico Blíster"
  },
  {
    "name": "Bisturí Industrial Encauchetado Blíster"
  },
  {
    "name": "Bisturí Pequeño Bolsa"
  },
  {
    "name": "Bisturí Fino Pequeño Bolsa"
  },
  {
    "name": "Planeador Diario 50 Hojas Flores"
  },
  {
    "name": "Planeador Semanal 80 Hojas Flores"
  },
  {
    "name": "Planeador Semanal 60 Hojas Fucsia"
  },
  {
    "name": "Organizador 6 Compartimiento Metálico Oro Rosa",
    "description": "Encuentralo de 3, 5, 6 y 7 compartimentos, en colores dorado, agua marina, dorado rosa, fucsia, negro y plata."
  },
  {
    "name": "Organizador 8 Compartimientos Rectangular Plástico Lila"
  },
  {
    "name": "Organizador 10 Divisiones Trébol Plástico Pastel"
  },
  {
    "name": "Organizador 8 Compartimientos Rectangular Plástico Azul Claro"
  },
  {
    "name": "Organizador 7 Compartimientos Plast Azul Claro"
  },
  {
    "name": "Organizador 7 Compartimientos Plástico Azul Claro"
  },
  {
    "name": "Organizador 6 Divisiones 2 Niveles Plast Rosado"
  },
  {
    "name": "Organizador 6 Divisiones Redondo Plástico Pastel"
  },
  {
    "name": "Organizador 6 Compartimientos Plast Rosado"
  },
  {
    "name": "Organizador 5 Compartimientos Rectangular Plástico Pastel"
  },
  {
    "name": "Organizador 5 Divisiones Redondo Plástico Blanco"
  },
  {
    "name": "Organizador 4 Compartimientos Vertical Plast Azul Claro"
  },
  {
    "name": "Organizador 3 Compartimientos Diagonal Plástico Pastel"
  },
  {
    "name": "Papelera Escritorio Triple Malla Negro"
  },
  {
    "name": "Papelera Escritorio Sencilla Malla Negro"
  },
  {
    "name": "Papelera Piso 29X26X26 Cm Malla Negro",
    "description": "Encuentrala en negro y blanco."
  },
  {
    "name": "Revistero Malla Negro",
    "description": "Encuentrala en negro, blanco y colores pastel.",
  },
  {
    "name": "Portalápiz Redondo Malla Turquesa",
    "description": "Encuentrala en negro, plateado, fucsia."
  },
  {
    "name": "Portalápiz Ovalado Metálico Oro Rosa"
  },
  {
    "name": "Portalápiz Metálico Redondo Pastel",
    "description": "Encuentralo tambien en metalico cuadrado."
  },
  {
    "name": "Portalápiz Redondo 3 Divisiones Plástico Gravado Surtido"
  },
  {
    "name": "Accesorio Decoración Cristal Luz 8cm Rueda Fortuna",
    "description": "Rueba fortuna y Torre Eiffel"
  },
  {
    "name": "Accesorio Decoración Reloj De Arena 10 Min"
  },
  {
    "name": "Accesorio Decoración Bicicleta Reloj Negro"
  },
  {
    "name": "Accesorio Decoración Globo Terráqueo Dorado"
  },
  {
    "name": "Accesorio Decoración Hombre Reloj Negro"
  },
  {
    "name": "Accesorio Decoración Hombre Violín Plata"
  },
  {
    "name": "Accesorio Decoración Rueda Fortuna Negro"
  },
  {
    "name": "Accesorio Decoración Torre Eiffel Dorado-Negro"
  },
  {
    "name": "Accesorio Decoración Torre Eiffel Negro"
  },
  {
    "name": "Notas Adhesivas 75X75 mm 50 Hojas Traslucido Amarillo",
    "description": "Encuentralas en Amarillo, Transparente, Azul, Fucsia, Verde, Naranja, Verde rayas"
  },
  {
    "name": "Notas Adhesivas 140X5mm x20 Tiras Resaltadoras 3"
  },
  {
    "name": "Notas Banderitas 200 Hojas 10 Col Surtido"
  },
  {
    "name": "Notas Adhesivas 76 X 76 Mm 400 Hojas + Banderitas 5 Col"
  },
  {
    "name": "Notas Adhesivas Set 8 Figuras X 60 Hojas"
  },
  {
    "name": "Set Escritura Lápiz + Notas + Accesorios Flores"
  },
  {
    "name": "Portataco Plástico + Taco 400 Hojas Surtido"
  },
  {
    "name": "Portataco Metálico Pastel"
  },
  {
    "name": "Escritorio Milán 120X60 Cm Madera Amaretto"
  },
  {
    "name": "Escritorio Minegro 100X60 Cm Madera Negro"
  },
  {
    "name": "Escritorio Luxury 100X50 Cm Cajones Negro"
  },
  {
    "name": "Escritorio London 80+129X46 Cm En L Madera Negro"
  },
  {
    "name": "Escritorio Kioto 110+120X48Cm En L Madera Arena"
  },
  {
    "name": "Silla Sonegro Interloc Brazos Cromado Blanco"
  },
  {
    "name": "Silla Yahe Ruedas Brazos Cromada Cuadrado Negro"
  },
  {
    "name": "Silla Yahe Ruedas Brazos Cromada Recto Negro"
  },
  {
    "name": "Calculadora Dc-109B 8 Dígitos Eates"
  },
  {
    "name": "Calculadora Dc837 12 Dígitos Negro Eates"
  },
  {
    "name": "Calculadora 12 Dígitos Vertical Pastel"
  },
  {
    "name": "Calculadora 12 Dígitos Rosado Eates",
    "description": "Encuentralo en color rosado, negro, pastel, verde."
  },
  {
    "name": "Calculadora Fs 82Ms Científica Eates"
  },
  {
    "name": "Calculadora 12 Dígitos Horizontal Botón Alto Surtido"
  },
    {
    "name": "Calculadora 12 Dígitos Vertical Botón Alto Surtido"
  },
  {
    "name": "Carpeta Tipo Navaja A4 Morado",
    "description": "Encuentralo en morado, negro, rosado y azul."
  },
  {
    "name": "Archivador 13 Bolsillos Horizontal Dos Broches Salmón",
    "description": "Encuentralo en salmon, rosa, beige."
  },
  {
    "name": "Archivador 13 Bolsillos Tipo Sobre Broche Lila",
    "description": "Encuentralo en azul pastel, lila y rosado."
  },
  {
    "name": "Archivador 13 Bolsillos Vertical Caucho A4 Salmón",
    "description": "Encuentralo en salmon, rosa y beige."
  },
  {
    "name": "Archivador 12 Bol A4 Horizontal Sirena Surtido"
  },
  {
    "name": "Archivador 12 Bolsillo A4 Horizontal Astronauta Surtido"
  },
  {
    "name": "Sobre Cremallera A4 Espacio Surtido"
  },
  {
    "name": "Sobre Cremallera PVC A4 Azul",
    "description": "Encuentralo en azul, verde, rosado y transparente."
  },
  {
    "name": "Archivador 5 Bolsillos Horizontal A4 Azul",
    "description": "Encuentralo en azul, lila y salmon."
  },
  {
    "name": "Planillero Acrílico Gancho Metal Dorado",
    "description": "Encuentralo en dorado, oro rosa, degrade, transparente."
  },
    {
    "name": "Planillero A4 Acrílico Gancho Metálico Degradé Surtido"
  },
  {
    "name": "Planillero A5 Plástico Gancho Metálico Traslucido Surtido"
  },
  {
    "name": "Planillero Oficio Plástico Gancho Metal Pastel"
  },
  {
    "name": "Planillero Plástico Cm + Planeador Diario 60 Hojas"
  },
  {
    "name": "Pad Mouse Rectangular Diseños 22 X 27 Cm"
  },
  {
    "name": "Pad Mouse Gel Ergonómico 19 X 23 Cm Rojo",
    "description": "Encuentralo en color rojo, azul oscuro, azul, blanco, negro."
  },
  {
    "name": "Cosedora Mediana 25 Hojas Plástico Cuadrada Índigo"
  },
  {
    "name": "Cosedora Alicate Hojas Metálica Pastel"
  },
  {
    "name": "Cosedora Mini Plástica + Ganchos Rosado"
  },
  {
    "name": "Perforadora 2 Huecos 15-20 Hojas Pastel"
  },
  {
    "name": "Perforadora 1 Hueco Hojas Blíster Azul"
  },
    {
    "name": "Aspiradora Escritorio Basic Unique"
  },
  {
    "name": "Fechador Manual"
  },
  {
    "name": "Sacagancho Metálico Acrílico Dorado"
  },
  {
    "name": "Humedecedor 20 Gramos"
  },
  {
    "name": "Almohadilla Sellos"
  },
  {
    "name": "Dispensador Cinta Pistola"
  },
  {
    "name": "Dispensador De Cinta Pequeño"
  },
  {
    "name": "Dispensador Cinta Metálico Pastel"
  },
  {
    "name": "Dispensador Cinta Pequeño + Cinta Blíster Pastel"
  },
  {
    "name": "Dispensador Cinta Grande Manual Pastel"
  },
  {
    "name": "Tiqueteadora Eos6600 Con Tapa Keyide"
  },
    {
    "name": "Tiqueteadora Eos5500 Con Tapa Keyide"
  },
  {
    "name": "Rollo Tiqueteadora 10 Uds. Blanco Apolo",
    "description": "Encuentralo en color blanco, amarillo, rosado y verde."
  },
  {
    "name": "Rollo Tiqueteadora 6600 10 Uds. Blanco"
  },
  {
    "name": "Guillotina 12 pulgadas Rodaja Negro",
    "description": "Encuentrala en negro y blanco."
  },
  {
    "name": "Guillotina 18X15 Cm Metálica A3"
  },
  {
    "name": "Gancho Lotero 1 pul 25 Mm x48 uds Colores"
  },
  {
    "name": "Set Redondo Id Clip Gancho Lotero Chinchones Pastel"
  },
  {
    "name": "Set Gancho Lotero Clip Chinchones Plata"
  },
  {
    "name": "Set Gancho Lotero Clip Chinchones Surtido"
  },
  {
    "name": "Chinchones Uds Blíster Pastel"
  },
  {
    "name": "Chinchones Uds Blíster Surtido"
  },
    {
    "name": "Chinchones Uds Blíster Traslucido Plata"
  },
  {
    "name": "Set Clip Jumbo Chinchones Pastel"
  },
  {
    "name": "Clip 33 Mm Xxx Uds Blíster Surtido"
  },
  {
    "name": "Gancho Clip Corazón 8 Uds Dorado"
  },
  {
    "name": "Gancho Clip Estrella 8 Uds Plata"
  },
  {
    "name": "Bolsillo Lamin Oficio 10 Uds C-5 125 Micras"
  },
  {
    "name": "Bolsillo Lam 80X110Mm 100Und Mt C-7 175Micras"
  },
  {
    "name": "Bolsillo Lam 70X100Mm 100Und Cc C-7 175Micras"
  },
  {
    "name": "Portacarnet Orejas Silicona Lila",
    "description": "Encuentralo en lila, azul, azul claro, gris, negro, blanco y fucsia."
  },
  {
    "name": "Portacarnet Borde Blanco Y Fucsia",
    "description": "Encuentralo en blanco y fucsia, azul y blanco, negro y blanco, blanco y morado, balnco y rojo."
  },
  {
    "name": "Portacarnet Vertical Acrílico Cordón Plástico Surtido"
  },
    {
    "name": "Portacarnet Vertical Estampado Cordón Pastel"
  },
  {
    "name": "Portacarnet Vertical Diseño Pulsera Surtido"
  },
  {
    "name": "Portacarnet Vertical",
    "description": "Encuentralo en color azul, rojo, blanco, verde, negro y transparente."
  },
  {
    "name": "Yoyo Portacarnet Blanco",
    "description": "Encuentralo en color blanco, azul, rojo, negro, verde, azul claro, fucsia, morado y rosado."
  },
  {
    "name": "Escarapela 10,8X15,5Cm 100 Uds"
  },
  {
    "name": "Reata Carnet Mosquetón Azul",
    "description": "Encuentralo en color azul, azul claro, blanco, fucsia, negro, morado, verde y amarillo."
  },
  {
    "name": "Bandas Caucho Siliconada Café 100 Gramos",
    "description": "Encuentralo en 100, 300, 450 y 1000 gramos."
  },
  {
    "name": "Caucho Siliconada Colores 100 Gramos",
    "description": "Encuentralo en 100, 300, 450 y 1000 gramos."
  },
  {
    "name": "Caja Menor 8 pulgadas Con Llaves"
  },
  {
    "name": "Tarjetero 96 Compartimentos"
  },
  {
    "name": "Tarjetero 240 Compartimentos"
  }
]

const papeles = [
  {
    "name": "Lamina De Corcho 3Mm 6Pzas 20*30Cm"
  },
  {
    "name": "Papel Fotográfico Adhesivo 135 Gr 20Hojas"
  },
  {
    "name": "Papel Fotográfico 230g A4 x20 Hjs"
  },
  {
    "name": "Papel Coreano 57X57 Cm",
    "description": "Encuentralo en color rosado, natural, amarillo, rojo, azul, rosa claro, blanco, rosa pastel, gris, lila, beige, verde, morado, verde oscuro, negro y vino."
  },
  {
    "name": "Papel Periódico 48g 70x100Cm 25 Hojas"
  },
  {
    "name": "Cartón Paja Pliego"
  },
  {
    "name": "Cartón Paja 1-8 50 Uds"
  }
]

const tableros = [
  {
    "name": "Tablero Corcho 90 X 120 Cm",
    "description": "Encuentralo en 90x120, 60x90 y 45x60 cm."
  },
  {
    "name": "Tablero Acrílico Magnético 80 X 120 Cm",
    "description": "Encuentralo en 90x120, 60x90 y 45x60 cm."
  },
  {
    "name": "Tablero Acrílico Magnético Planeador Mensual 28 X 35 Cm"
  },
    {
    "name": "Tablero Acrílico Magnético Planeador Semanal 14 X 25 Cm"
  },
  {
    "name": "Tablero Acrílico Magnético Planeador Semanal Cm"
  },
  {
    "name": "Tablero Acrílico Magnético 29x29 Cm Borde Surtido"
  }
]

const utiles = [
  {
    "name": "Compás Metálico Mina Pastel"
  },
  {
    "name": "Compás Escolar Lápiz V-90 2506"
  },
  {
    "name": "Compás En Estuche"
  },
  {
    "name": "Compás Escolar + Accesorios Estuche Surtido"
  },
  {
    "name": "Compás Escolar Estuche Curvo Pastel"
  },
  {
    "name": "Compás Metálico Lápiz Surtido"
  },
  {
    "name": "Compás Metálico Mina Colores Surtido"
  },
    {
    "name": "Compás Metálico Mina Infantil Surtido"
  },
  {
    "name": "Compás Metálico Mina Surtido"
  },
  {
    "name": "Compás Plástico Lápiz Surtido"
  },
  {
    "name": "Compás Precisión Estuche Asimétrico Surtido"
  },
  {
    "name": "Compás Precisión Estuche Bicolor Surtido"
  },
    {
    "name": "Compás Precisión Mina Surtido"
  },
  {
    "name": "Caja Matemática Plástico 8 Pzas Econ"
  },
  {
    "name": "Caja Matemática Estuche Pzas Azul"
  },
  {
    "name": "Caja Matemática Estuche Surtido"
  },
  {
    "name": "Transportador 360"
  },
    {
    "name": "Regla 15 Cm Flexible"
  },
  {
    "name": "Regla 30 Cm Flexible"
  },
  {
    "name": "Regla 30 Cm Corriente"
  },
  {
    "name": "Regla 30 Cm Metálica"
  },
  {
    "name": "Regla Escalímetro"
  },

    {
    "name": "Regla Flexible 30 Cm Degrade Surtido"
  },
  {
    "name": "Regla Acrílica Triangular 30 Cm Degrade"
  },
  {
    "name": "Regla Madera 30 Cm Nat"
  },
  {
    "name": "Regla Metálica 100 Cm"
  },
  {
    "name": "Regla Metálica 50 Cm"
  },
    {
    "name": "Regla Metálica 30 Cm Basket Ball"
  },
  {
    "name": "Regla Plegable 30 Cm Princesa Conejo"
  },
  {
    "name": "Juego Geométrico 30 Cm 4 Pzas Económico"
  },
  {
    "name": "Juego Geométrico Metálico 15 Cm 4 Pzas"
  },
  {
    "name": "Plantilla Plástica Letras"
  },
  {
    "name": "Plantilla Plástica Círculos"
  },
  {
    "name": "Tajalápiz Eléctrico Basic Unique 2 Pilas AA"
  },
  {
    "name": "Tajalápiz Metálico x24 uds Económico"
  },
  {
    "name": "Caja Borrador Tajalápiz Unicornio"
  },
  {
    "name": "Borrador Eléctrico 22 Repuestos Blíster"
  },
  {
    "name": "Borrador + Repuesto Unicornio"
  },
  {
    "name": "Caja Borrador Tajalápiz Astronauta"
  },
  {
    "name": "Borrador 4 Uds Caja Neón"
  },
  {
    "name": "Borrador 5 Uds Caja Pastel"
  },
  {
    "name": "Borrador x6 uds Blíster Surtido"
  },
  {
    "name": "Borrador Retráctil 3 Repuestos Surtido"
  },
  {
    "name": "Tijera Punta Roma x24 uds Milimétrica"
  },
  {
    "name": "Tijera Escolar 4,5 Mariposa"
  },
  {
    "name": "Tijera Escolar 5 Candy Surtido"
  },
  {
    "name": "Tijera Escolar 5,25 Animales Surtido"
  },
  {
    "name": "Lupa 90 Mm Plástico"
  },
  {
    "name": "Lupa 75 Mm Vidrio"
  },
  {
    "name": "Lupa 50 Mm Bolsillo Vidrio"
  },
  {
    "name": "Accesorio Magnético Tablero Surtido"
  },
  {
    "name": "Mejora Letra 3 Uds Surtido"
  },
  {
    "name": "Flauta Translucida Colores"
  },
  {
    "name": "Flauta Desarmable Crema"
  },
  {
    "name": "Flauta Fina Desarmable Crema"
  },
  {
    "name": "Cinta Correctora Decorada Mm M Surtido"
  },
  {
    "name": "Cinta Correctora 6 Mm 5 M Pastel"
  },
  {
    "name": "Cinta Correctora 5 Mm 8 M Verde"
  },
  {
    "name": "Cinta Correctora 5 Mm 5 M 3 Uds Surtido"
  }
]

const agendas = [
  {
    "name": "Cuaderno 95-2 Peluche Espacial"
  },
  {
    "name": "Cuaderno 95-2 Lentejuelas Col"
  },
  {
    "name": "Agenda Cosida 128 Hojas Flores Surtida"
  },
  {
    "name": "Agenda Anillos 100Hojas Tejido Surtida"
  },
  {
    "name": "Agenda Argollada 80 Hojas Degrade Fucsia"
  },
  {
    "name": "Agenda Anillos 100 Hojas Corazones Surtida"
  },
  {
    "name": "Agenda Cosida 96 Hojas Marmol Surtida"
  },
  {
    "name": "Agenda Cosida 96 Hojas Indigo Surtida"
  },
]

export const mapEscritura = createMap(escritura, 'papeleria', 'escritura', 'para-todos');
export const mapArte = createMap(arte, 'papeleria', 'arte', 'para-todos');
export const mapOficina = createMap(oficina, 'papeleria', 'oficina', 'para-todos');
export const mapPapeles = createMap(papeles, 'papeleria', 'papeles', 'para-todos');
export const mapTableros = createMap(tableros, 'papeleria', 'tableros', 'para-todos');
export const mapUtiles = createMap(utiles, 'papeleria', 'utiles', 'para-todos');
export const mapAgendas = createMap(agendas, 'papeleria', 'agendas', 'para-todos');

export const papeleria = [
  ...mapEscritura,
  ...mapArte,
  ...mapOficina,
  ...mapPapeles,
  ...mapTableros,
  ...mapUtiles,
  ...mapAgendas
]