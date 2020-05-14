function nota(MiFormulario) {
    var resultado = 0;

    for (let i = 0; i < MiFormulario.elements.length; i++) {
        if ((MiFormulario.elements[i].type == "radio") && (MiFormulario.elements[i].value == "bien") && (MiFormulario.elements[i].checked))
            resultado++; {
          
        }

    }  alert("Las respuestas que has acertado son " + resultado + " de 3");
    return false;
}