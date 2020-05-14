function setColor(){
    var color;
    if (seleccionar[0].checked) {
        color=seleccionar[0].value;
        
    } else if(seleccionar[1].checked) {
        color=seleccionar[1].value;
    }else{
        color=seleccionar[2].value;
    }
    document.body.style.backgroundColor=color;
}
window.onload = function (){
    seleccionar = document.formulario.radio;
    document.body.style.backgroundColor="yellow";
    document.formulario.boton.addEventListener('click',setColor);
}