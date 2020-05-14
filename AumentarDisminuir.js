var imagen1;
function Aumnetar() {
    imagen1.style.width = "25%";

}

function Disminuir() {
    imagen1.style.width = "15%";

}

function Iniciar() {
    imagen1 = document.imagen1;
    imagen1.style.width = "300px";
  
}

function configurarEventos() {
    imagen1.addEventListener('mouseover', Aumnetar);
    imagen1.addEventListener('mouseout', Disminuir);

}
window.onload = function() {
    Iniciar();
    configurarEventos();

}