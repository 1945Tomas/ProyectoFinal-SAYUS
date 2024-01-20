

// header btn
const audio = document.querySelector("#audio");

const btnmuted = document.querySelector("#sound");
const btnPlay = document.querySelector("#sound2");

btnmuted.addEventListener('click',()=>{
    audio.pause();
})
btnPlay.addEventListener('click',()=>{
    audio.play();
})


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
Hace ${años} años  comenzaba La Segunda Guerra Mundial, el cual fue un conflicto extenso y devastador que involucró a naciones de todo el mundo. Los tanques, vehículos blindados fundamentales en la estrategia militar, desempeñaron un papel crucial en el enfrentamiento entre el Eje (liderado por Alemania, Italia y Japón) y los Aliados (encabezados por Estados Unidos, la Unión Soviética y el Reino Unido). La variedad de tanques, que incluía desde pesados como el  ${ nombresPesados.join(",  ")} hasta medianos como el ${nombresMedianos.join(",  ")}, fue desplegada en diversos escenarios, desde los campos de batalla europeos hasta las selvas del Pacífico, marcando una contribución significativa a la evolución táctica durante el conflicto.
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
const contenedorPadre = document.querySelector(".section1");

//le agrego clases y id a los elementos
crearImagEnLi.setAttribute("class", "imgG1A")

//modifico el contenido de los Id
let h2InicialSeccion = document.querySelector("#h2Inicial");

//botones
let btnAlemania = document.querySelector("#btn1");
let btnUrss = document.querySelector("#btn2");
let btnAliados = document.querySelector("#btn3");


//funciones de bucle para recorrer los array de tanques 
function mixto (tanquesf, botones){

    elementoIdPadre.innerHTML="";

    for(let i=0 ; i<tanquesf.length; i++){
        
        const crearLiEnPadre = document.createElement("li");
        const crearImagEnLi = document.createElement("img");
        crearImagEnLi.style.width="150px" ;
        crearImagEnLi.style.height="150px" ;
        crearImagEnLi.style.borderRadius="100px" ;
        crearImagEnLi.style.border = "5px solid greenyellow";

        contenedorPadre.appendChild(elementoIdPadre);
        elementoIdPadre.appendChild(crearLiEnPadre);
        crearLiEnPadre.append(crearImagEnLi);
        h2InicialSeccion.innerText = `${botones}`;
        let rutaimgena = `./imagenes/${botones}/${tanquesf[i].nombre}.jpg`;
        crearImagEnLi.setAttribute("src", rutaimgena);

        //seccion de Cards
        let cardImagen = document.querySelector(".tarjetasTank");
        const img = document.querySelector("#tanque-img");
        const nombreTanque = document.querySelector("#nombre");
        const tipoPeso = document.querySelector("#tipo");
        const añoF = document.querySelector("#fabricacion");
        const detallesTanque = document.querySelector("#info");
        //desectructuracion de codigo
        const detallesT = tanquesf[i];
        const { nombre , tipo , fabricacion , detalles}=detallesT
        function MostrarTanque (){
            img.src = rutaimgena;
            nombreTanque.textContent = nombre;
            tipoPeso.textContent = tipo;
            añoF.textContent = `Año :  ${fabricacion}`;
            detallesTanque.textContent = detalles;
        }
        crearImagEnLi.addEventListener("mouseover",()=>{ 
            
            cardImagen = MostrarTanque()
            document.querySelector('#contPrincipalT').style.display = 'flex';});

        //Agregar a favoritos 
    const starAddBtn = document.querySelector("#btnStar");
    const starBtn = document.querySelector("#btnMostrar");
    const contenedorStar = document.querySelector("#contedorStarList");
    const contenedorUl = document.querySelector("#ulStar");
    const liStar = document.createElement("li");

    function agregarStar (){
        Swal.fire({
            position: "top-end",
            icon: "success",
            title: "Agregado a Favorítos",
            showConfirmButton: false,
            timer: 1500
        });
    contenedorUl.appendChild(liStar);
    liStar.textContent= nombre;
    }
    starAddBtn.addEventListener('click', ()=>{
    agregarStar ();
    //contenedorStar.style.display = 'none';
    } ) 

    function mostrarStar (){
        Swal.fire({
            imageUrl: "./imagenes/sweet/fondo.jpg",
            imageWidth: 200,
            imageHeight: 200,
            title: contenedorUl,
            icon: ""
        });
    //contenedorStar.style.display = 'flex';
    }
    starBtn.addEventListener('click', ()=>{
    mostrarStar();
    })
    starBtn.addEventListener('dblclick', ()=>{
    ocultarStar();
})





        //json
        const tanqueJSON = JSON.stringify(tanquesf);
        localStorage.setItem("Tanques",tanqueJSON);
        //Recupero datos json
        const tanqueGuardadoJSON = localStorage.getItem("Tanques");
        const tanquesGuardados = JSON.parse(tanqueGuardadoJSON);
        console.log("Tanques recuperados de localStorage:", tanquesGuardados);
    }
};

 //cambio de fondo
const juntos = document.querySelector("#juntos");

function cambioBacck (estado){
    const rutaBanderas = `./imagenes/banderasfondo/${estado}.jpg`;
    juntos.style.background = rutaBanderas;
    juntos.style.background = `url('${rutaBanderas}') no-repeat center center fixed`;
    juntos.style.backgroundSize = "cover";
    }






btnAlemania.addEventListener("click", () => {
    mixto(alemania, "alemania");
    cambioBacck("alemania");
});
btnUrss.addEventListener("click", () => {
    mixto(urss, "urss");
    cambioBacck("urss");
});
btnAliados.addEventListener("click", () => {
    mixto(aliados, "aliados");
    cambioBacck("aliados");
});



