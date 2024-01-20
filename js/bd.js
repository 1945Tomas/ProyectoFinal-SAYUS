//ARRAYS DE OBJETOS DE TANQUES SEGUN EL PAIS DE ORIGEN
const tanquesAlemanes = [
  {
    nombre: "TigerI",
    tipo: "Tanque Pesado",
    img : `./imagenes/carrusel/Tiger.jpg`,
    fabricacion: 1942,
    detalles: "Uno de los tanques pesados más poderosos de la Segunda Guerra Mundial.",
  },
  {
    nombre: "Panther",
    tipo: "Tanque Mediano",
    fabricacion: 1943,
    detalles: "Conocido por su excelente combinación de velocidad, potencia de fuego y blindaje.",
  },
  {
    nombre: "Panzer-IV",
    tipo: "Tanque Mediano",
    fabricacion: 1936,
    detalles: "Uno de los tanques alemanes más producidos durante la guerra.",
  },
  {
    nombre:"SturmgeschützIII",
    tipo: "Cañón de Asalto",
    fabricacion: 1940,
    detalles: "Utilizado en roles de apoyo de infantería y anti-tanque.",
  },
  {
    nombre: "Tiger II",
    tipo: "Tanque Pesado",
    fabricacion: 1944,
    detalles: "Versión mejorada del Tiger I con mayor blindaje y potencia de fuego.",
  },
  {
    nombre: "Jagdpanther",
    tipo: "Destructor de Tanques",
    fabricacion: 1944,
    detalles: "Diseñado para la caza de tanques enemigos con un cañón poderoso.",
  },
  {
    nombre: "Elefant",
    tipo: "Destructor de Tanques",
    fabricacion: 1943,
    detalles: "Tanque pesado utilizado en el Frente Oriental con un cañón antitanque.",
  },
];

const tanquesSoviéticos = [
  {
    nombre: "T-34",
    tipo: "Tanque Mediano",
    img:`./imagenes/carrusel/T-34.jpg`,
    fabricacion: 1940,
    detalles: "Tanque soviético, jugó un papel clave en la victoria en el Frente Oriental.",
  },
  {
    nombre: "IS-2",
    tipo: "Tanque Pesado",
    fabricacion: 1943,
    detalles: "Tanque pesado soviético, utilizado en el asalto final a Berlín.",
  },
  {
    nombre: "KV-1",
    tipo: "Tanque Pesado",
    fabricacion: 1939,
    detalles: "Tanque pesado soviético, resistente y bien blindado.",
  },
  {
    nombre: "T-44",
    tipo: "Tanque Mediano",
    fabricacion: 1944,
    detalles: "Mejora del T-34 con características mejoradas de movilidad y blindaje.",
  },
  {
    nombre: "SU-85",
    tipo: "Cañón de Asalto",
    fabricacion: 1943,
    detalles: "Destructor de tanques soviético con un cañón potente.",
  },
  {
    nombre: "IS-3",
    tipo: "Tanque Pesado",
    fabricacion: 1945,
    detalles: "Uno de los últimos tanques pesados soviéticos de la Segunda Guerra Mundial.",
  },
];

const tanquesAliados = [
  {
    nombre: "Sherman",
    tipo: "Tanque Mediano",
    img: `./imagenes/carrusel/sherman.jpg`,
    fabricacion: 1942,
    detalles: "Ampliamente utilizado por las fuerzas aliadas, conocido por su fiabilidad.",
  },
  {
    nombre: "Churchill",
    tipo: "Tanque Pesado",
    fabricacion: 1941,
    detalles: "Tanque pesado británico, conocido por su resistencia y capacidad de supervivencia.",
  },
  {
    nombre: "M4A3E8-Sherman",
    tipo: "Tanque Mediano",
    fabricacion: 1944,
    detalles: "Variante mejorada del Sherman con mayor movilidad y blindaje.",
  },
  {
    nombre: "Cromwell",
    tipo: "Tanque Mediano",
    fabricacion: 1943,
    detalles: "Tanque británico rápido y ágil utilizado en operaciones de reconocimiento.",
  },
  {
    nombre: "Comet",
    tipo: "Tanque Mediano",
    fabricacion: 1944,
    detalles: "Diseñado como una mejora sobre los modelos anteriores con mayor velocidad y potencia de fuego.",
  },
  {
    nombre: "Matilda II",
    tipo: "Tanque Mediano",
    fabricacion: 1939,
    detalles: "Tanque británico conocido por su pesado blindaje.",
  },
];



//Localstorage con base de datos.
const baseDatosTanques = [...tanquesAlemanes,...tanquesAliados,...tanquesSoviéticos];
//console.log(baseDatosTanques);
const bdTJson = JSON.stringify(baseDatosTanques);
localStorage.setItem('Base-tanques', bdTJson);


//fetch y json 
fetch('/json/baseDatos.json')  // 
    .then(datos => {
        if (!datos) {
            throw new Error(`Falla de carga !!`);
        }
        return datos.json();
    })
    .then(contenido => {
      console.log(contenido);
        let imgc1 = document.querySelector("#img1");
        let imgc2 = document.querySelector("#img2");
        let imgc3 = document.querySelector("#img3");
        
        imgc1.src = contenido.tanquesAlemanes[0].imagenC;
        imgc2.src = contenido.tanquesAliados[0].imagenC;
        imgc3.src = contenido.tanquesSoviéticos[0].imagenC;

        let h3c1 =document.querySelector("#h31"); 
        let h3c2 =document.querySelector("#h32"); 
        let h3c3 =document.querySelector("#h33"); 
        h3c1.textContent= contenido.tanquesAlemanes[0].nombre
        h3c2.textContent= contenido.tanquesAliados[0].nombre
        h3c3.textContent= contenido.tanquesSoviéticos[0].nombre

        let pc1 =document.querySelector("#p1"); 
        let pc2 =document.querySelector("#p2"); 
        let pc3 =document.querySelector("#p3"); 
        pc1.textContent= contenido.tanquesAlemanes[0].detalles
        pc2.textContent= contenido.tanquesAliados[0].detalles
        pc3.textContent= contenido.tanquesSoviéticos[0].detalles
    })
    .catch(error => {
        console.error('Error de carga:', error);
    });
