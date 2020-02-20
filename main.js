import Nombre from "./nombre.js"
const nombre1 = new Nombre("Eduardo Misael","Solano","Rolon");
const probarNombre = _ => console.log(nombre1.getNombreCompleto());
probarNombre();
const probarApellido = _ => console.log(nombre1.getApellidoNombre());
probarApellido ();
const probarIniciales = _ => console.log(nombre1.getIniciales());
probarIniciales();