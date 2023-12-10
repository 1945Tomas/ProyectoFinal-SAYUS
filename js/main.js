alert('Hola Viajero de Cronicas de guerra 🧐')

let elegir = prompt  ("Elegi un bando : Alemania , URSS , Aliados ").toLowerCase();

let alemania = tanquesAlemanes ; 
let aliados = tanquesAliados;
let urss = tanquesSoviéticos;

const fF = new Date();

function mixto (tanquesf){
    for(let i=0 ; i<tanquesf.length; i++){
        let edadTanque = (a , b ) => a-b;
        let saludotank = guerra => `Hola soy  ${guerra}  y hace  ${edadTanque( fF.getFullYear() , tanquesf[i].fabricacion)}  años que fui construido ! Estas son mis características : `
        console.log(saludotank(tanquesf[i].nombre));
        console.table(tanquesf[i]);
        console.log("---------------------"+  i  +"---------------------------")
    }
}
if (elegir === "alemania"){
    console.table(mixto(alemania));
    //console.table(alemania); 
}
else if (elegir === "urss"){
    console.table(mixto(urss));
    //console.table(urss)
}
else if (elegir === "aliados"){
    console.table(mixto(aliados));
    //console.table(aliados)
}
else{
    alert("No es correcto lo ingresado ")
}

//----------------------ELECCION DE   TIPO DE TANQUE -------------------------------------------

let elegirTpo = alert("Ahora pasamos a otra seccion ! 😲");
const todosLosTanques = [tanquesAlemanes, tanquesSoviéticos, tanquesSoviéticos];
const tanquesPesados = todosLosTanques.flat();

function eleccionTipo (t){
    return (t.filter(tanque => tanque.tipo == "Tanque Pesado"));
}
function eleccionTipo2 (s){
    return (s.filter(tanque => tanque.tipo == "Tanque Mediano"));
}
const peso = prompt(" Elige un tipo de tanque! PESADOS , MEDIANOS .").toLowerCase();
if ( peso == "pesados"){
    console.log(`Estos son los tanques ${peso} :`)
    console.table(eleccionTipo(tanquesPesados));
}
else if ( peso == "medianos"){
    console.log(`Estos son los tanques ${peso} :`)
    console.table(eleccionTipo2(tanquesPesados));
}
else{
    alert("Intente otra vez")
}
