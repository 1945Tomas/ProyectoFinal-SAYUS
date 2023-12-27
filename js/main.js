//----------------------Seccion resumen inicial -------------------------------------------
const fF = new Date();
let años = fF.getFullYear() - 1939 ;
const todosLosTanques = [...tanquesAlemanes, ...tanquesSoviéticos, ...tanquesSoviéticos];

let tanquesPesados = todosLosTanques.filter(tanque => tanque.tipo == "Tanque Pesado");
let nombresPesados = tanquesPesados.map(tanque => tanque.nombre);

let tanquesMedianos = todosLosTanques.filter(tanque => tanque.tipo == "Tanque Mediano");
let nombresMedianos = tanquesMedianos.map(tanque => tanque.nombre);

let h2ww2 = document.querySelector("#h2Ww2");
h2ww2.innerText = `
Hace ${años} años  comenzaba La Segunda Guerra Mundial, la cual fue un conflicto extenso y devastador que involucró a naciones de todo el mundo. Los tanques, vehículos blindados fundamentales en la estrategia militar, desempeñaron un papel crucial en el enfrentamiento entre el Eje (liderado por Alemania, Italia y Japón) y los Aliados (encabezados por Estados Unidos, la Unión Soviética y el Reino Unido). La variedad de tanques, que incluía desde pesados como el  ${ nombresPesados.join(",  ")} hasta medianos como el ${nombresMedianos.join(",  ")}, fue desplegada en diversos escenarios, desde los campos de batalla europeos hasta las selvas del Pacífico, marcando una contribución significativa a la evolución táctica durante el conflicto.
`

//----------------------Seccion de eventos y botones -------------------------------------------
let alemania = tanquesAlemanes ; 
let aliados = tanquesAliados;
let urss = tanquesSoviéticos;

//creo los elementos padre e hijos
const elementoIdPadre = document.querySelector("#idAlemania");
const crearLiEnPadre = document.createElement("li");
const h2 = document.createElement("h2");
const crearImagEnLi = document.createElement("img");

//le agrego clases y id a los elementos
crearImagEnLi.setAttribute("class", "imgG1A")

//modifico el contenido de los Id
let h2InicialSeccion = document.querySelector("#h2Inicial");
h2InicialSeccion.style.color = "brown"; 

//botones
let btnAlemania = document.querySelector("#btn1");
let btnUrss = document.querySelector("#btn2");
let btnAliados = document.querySelector("#btn3");

let finalizacionDeCarga = false;
//funciones de bucle para recorrer los array de tanques 
function mixto (tanquesf, botones){
    if (!finalizacionDeCarga) {
    for(let i=0 ; i<tanquesf.length; i++){
        const crearLiEnPadre = document.createElement("li");
        const crearImagEnLi = document.createElement("img");
        crearImagEnLi.style.width="180px" ;

        elementoIdPadre.appendChild(crearLiEnPadre);
        crearLiEnPadre.append(crearImagEnLi);
        h2InicialSeccion.innerText = `${botones}`;
        let rutaimgena = `./imagenes/${botones}/${tanquesf[i].nombre}.jpg`;
        crearImagEnLi.setAttribute("src", rutaimgena);

        //seccion de Cards
        let cardImagen = document.querySelector(".fotoCards")
        crearImagEnLi.addEventListener("mouseenter",()=>{ cardImagen.setAttribute("src", rutaimgena);
        let cardH2 = document.querySelector(".tituloCards");
        cardH2.innerText = `${tanquesf[i].nombre}`;
        let cardP = document.querySelector(".descripcion");
        //desectructuracion de codigo
        let detallesT = tanquesf[i];
        let {detalles}=detallesT;
        cardP.innerText = `${detalles}`;
        
        //json
        const tanqueJSON = JSON.stringify(tanquesf);
        localStorage.setItem("Tanques",tanqueJSON);
        //Recupero datos json
        const tanqueGuardadoJSON = localStorage.getItem("Tanques");
        const tanquesGuardados = JSON.parse(tanqueGuardadoJSON);
        console.log("Tanques recuperados de localStorage:", tanquesGuardados);
        })
    }
    finalizacionDeCarga = true;
}}

btnAlemania.addEventListener("click", ()=>  mixto(alemania,"alemania"));
btnUrss.addEventListener("click", ()=>  mixto(urss,"urss"));
btnAliados.addEventListener("click", ()=>  mixto(aliados,"aliados"));






