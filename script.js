let menuVisible = false;
//Función que oculta o muestra el menu
function mostrarOcultarMenu(){
    if(menuVisible){
        document.getElementById("nav").classList ="";
        menuVisible = false;
    }else{
        document.getElementById("nav").classList ="responsive";
        menuVisible = true;
    }
}

function seleccionar(){
    //oculto el menu una vez que selecciono una opcion
    document.getElementById("nav").classList = "";
    menuVisible = false;
}
// Función para calcular la edad
function calcularEdad(fechaNacimiento) {
    const hoy = new Date();
    const nacimiento = new Date(fechaNacimiento);
    let edad = hoy.getFullYear() - nacimiento.getFullYear();
    const mes = hoy.getMonth() - nacimiento.getMonth();
    
    if (mes < 0 || (mes === 0 && hoy.getDate() < nacimiento.getDate())) {
        edad--;
    }
    
    return edad;
}

// Formulario enviar correo
const $form = document.querySelector('#form');

$form.addEventListener('submit', handleSubmit);

async function handleSubmit(event) {
    event.preventDefault();
    const form = new FormData(this);
    const response = await fetch(this.action, {
        method: this.method,
        body: form,
        headers: {
            'Accept': 'application/json'
        }
    });
    if (response.ok) {
        this.reset();
        mostrarAlerta('Mensaje enviado. Gracias por contactarme, le escribiré lo antes posible :)');
    } else {
        mostrarAlerta('Hubo un error al enviar el mensaje. Por favor, inténtalo de nuevo más tarde.');
    }
}

function mostrarAlerta(mensaje) {
    const $alerta = document.createElement('div');
    $alerta.classList.add('alerta');
    $alerta.textContent = mensaje;
    document.body.appendChild($alerta);
    setTimeout(() => {
        $alerta.remove();
    }, 10000);
}
// Actualizar el año en el pie de página
const currentYear = new Date().getFullYear();
document.getElementById('currentYear').textContent = currentYear;

// Ejecutar al cargar el DOM
document.addEventListener("DOMContentLoaded", function() {
    const fechaNacimiento = '1993-09-21';
    const edad = calcularEdad(fechaNacimiento);
    document.getElementById('edad').textContent = edad;
});