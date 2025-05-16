//selectores
const mascotaInput = document.querySelector("#mascota");
const propietarioInput = document.querySelector("#propietario");
const telefonoinput = document.querySelector("#telefono");
console.log(telefonoinput)
const fechaInput = document.querySelector("#fecha");
const horasInput = document.querySelector("#hora");
const sintomasInput =  document.querySelector("#sintomas");

let citasArray = []


//EVENTOS
mascotaInput.addEventListener("change",datosCitas);
propietarioInput.addEventListener("change",datosCitas);
telefonoinput.addEventListener("change",datosCitas);
fechaInput.addEventListener("change",datosCitas);
horasInput.addEventListener("change",datosCitas);
sintomasInput.addEventListener("change",datosCitas);


//instanciar Objeto
const citaObj = {
    mascota : "",
    propetario: "",
    telefono: "",
    fecha:"",
    horas:"",
    sintomas:""
}
// Agregar los eventos a los inputs

// mascotaInput.addEventListener("change", (e) => {
// // se puede hacer de esta forma 
//     citaObj.mascota = e.target.value
//     console.log(citaObj);
// })
//EVENTOS
// se puede asignar una funcion en general para todos los inputs
function datosCitas(e){
    citaObj[e.target.name] = e.target.value;
    console.log(citaObj)
}