function validarForm() {
    if (document.cafe.descafeinado.checked == false && document.cafe.suave.checked == false && document.cafe.intenso.checked == false) {
        alert("Debe de selecionar un tipo de cafe");
        return false;

    }
    if (document.cafe.cap1.value == 0 && document.cafe.cap2.value == 0 && document.cafe.cap3.value == 0) {
        alert("Debe de selecionar una cantidad de cafe");
        return false;

    }
    var n_cap1 = parseInt(document.cafe.cap1.value);
    var n_cap2 = parseInt(document.cafe.cap2.value);
    var n_cap3 = parseInt(document.cafe.cap3.value);

    var suma = n_cap1 + n_cap2 + n_cap3;

    
if (suma < 25) {
    alert("Pedido minimo de 25 Capsulas");
    return false;

}
if (document.cafe.descafeinado.checked==false && document.cafe.cap1.value != 0) {
    alert("Las capsulas seleccionadas no coinciden con el producto");
    return false;
}
if (document.cafe.suave.checked==false && document.cafe.cap2.value != 0) {
    alert("Las capsulas seleccionadas no coinciden con el producto");
    return false;
}
if (document.cafe.intenso.checked==false && document.cafe.cap3.value != 0) {
    alert("Las capsulas seleccionadas no coinciden con el producto");
    return false;
}
if (document.cafe.descafeinado.checked==true && document.cafe.cap1.value == 0) {
    alert("Las capsulas seleccionadas no coinciden con el producto");
    return false;
}
if (document.cafe.suave.checked==true && document.cafe.cap2.value == 0) {
    alert("Las capsulas seleccionadas no coinciden con el producto");
    return false;
}
if (document.cafe.intenso.checked==true && document.cafe.cap3.value == 0) {
    alert("Las capsulas seleccionadas no coinciden con el producto");
    return false;
}
alert(document.nombre.value + " con dirrecion de envio " + document.cafe.dir.value + ". Recibira el pedido realizado en su domicilio en el plazo de 72h. Gracias por confiar en nosotros!!!");
return true;
}
