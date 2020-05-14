var mensaje;
var telefono;
function inicializar() {
    mensaje = document.getElementById("errorTelefono");
    telefono = document.FormularioDatos.telefono;

}

function validarTelefono() {
    if (telefono.value.length == 9) {
        mensaje.innerHTML = "";

    } else {
        mensaje.innerHTML = "Debe tener 9 digitos.";
        mensaje.style.color = "red";
    }

}
window.onload = function() {
    inicializar();
    document.FormularioDatos.BotonValidar.addEventListener('click', validarTelefono);
}
ugñuo