const mascotaInput = document.querySelector("#mascota");
const propetarioInput = document.querySelector("#propetario");
const telefonoinput = document.querySelector("#telefono");
console.log(telefonoinput)
const fechaInput = document.querySelector("#fecha");
const horasInput = document.querySelector("#hora");
const sintomasInput =  document.querySelector("#sintomas");

let citasArray = []

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

mascotaInput.addEventListener("change", (e) => {
    e.preventDefault();
    // se puede hacer de esta forma 
    citaObj.mascota = e.target.value
    console.log(citaObj);
})

propetarioInput.addEventListener("change", (e) => {
    e.preventDefault();
    // o esta otra forma, agarra el name del input y lo asigna al objeto
    citaObj[e.tarfget.name] = e.target.value
    console.log(citaObj);
})