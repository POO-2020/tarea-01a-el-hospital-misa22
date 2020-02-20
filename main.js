import Nombre from "./nombre.js";
import Fecha from "./fecha.js";
const nombre1 = new Nombre("Eduardo Misael","Solano","Rolon");
const probarNombre = _ => console.log(nombre1.getNombreCompleto());
probarNombre();
const probarApellido = _ => console.log(nombre1.getApellidoNombre());
probarApellido ();
const probarIniciales = _ => console.log(nombre1.getIniciales());
probarIniciales();
const fecha1 = new Fecha("25","05","2002");
const probarFecha = _ =>
    console.log(
        fecha1.getAnnios(),
        fecha1.getDiaFecha(),
        fecha1.getDias(),
        fecha1.getFecha(),
        fecha1.getMeses(),
        fecha1.getSemanas()
    );
    probarFecha();
    