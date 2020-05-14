function inicio() {
  year();
  Meses();
  Edad()
  Dia();



}


function Edad() {
  var yea = 1


  var select = document.getElementById("edad");
  for (var i = yea; i <= 100; i++) select.options.add(new Option(i, i)); {

  }


}



function year() {
  var n = (new Date()).getFullYear()
  var select = document.getElementById("year");
  for (var i = n; i >= 1900; i--) select.options.add(new Option(i, i)); {

  }

}


function Meses() {

  var array = ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"];
  for (var i = 0; i < 12; i++) {
    document.getElementById("mes").innerHTML += "<option value='" + array[i] + "'>" + array[i] + "</option>";

  }
}

function Dia() {
  var dia = 1


  var select = document.getElementById("dia");
  for (var i = dia; i <= 31; i++) select.options.add(new Option(i, i)); {

  }


}

function validar() {
  /**Registro */
  /*almacenamos los valores de la cajas en los que introducimos los datos */
  var nombre, apellido1, apellido2, mail, expresion, clave1, clave2;
  nombre = document.getElementById("nombre");
  apellido1 = document.getElementById("apellido1");
  apellido2 = document.getElementById("apellido2");
  mail = document.getElementById("email");
  pass1 = document.getElementById("pass1");
  pass2 = document.getElementById("pass2");



  /* Estructura de un correo electronico: text123@texto.com, .es, etc */
  expresion = /\w+@\w+\.+[a-z]/;
  /**************************************************************** */

  if (!nombre.value) {
    alert("Ingrese su nombre");
    nombre.style.backgroundColor = "red";
    return false;
  } else
    nombre.style.backgroundColor = "green";

  if (nombre.value.length > 20) {
    alert(
      "El numero de caracteres introducido superan el limite permitido. 20 caracteres maximo"
    );

    return false;
  }

  if (!apellido1.value) {
    alert("Ingrese su primer apellido");
    apellido1.style.backgroundColor = "red";
    return false;
  } else
    apellido1.style.backgroundColor = "green";

  if (apellido1.value.length > 20) {
    alert(
      "El numero de caracteres introducido superan el limite permitido. 20 caracteres maximo"
    );

    return false;

  }

  if (!apellido2.value) {
    alert("Ingrese su segundo apellido");
    apellido2.style.backgroundColor = "red";
    return false;
  } else
    apellido2.style.backgroundColor = "green";

  if (apellido2.value.length > 20) {
    alert(
      "El numero de caracteres introducido superan el limite permitido. 20 caracteres maximo"
    );

    return false;

  }

  if (!mail.value || !expresion.test(mail.value)) {
    alert("Ingrese un Email correctamente");
    mail.style.backgroundColor = "red";
    return false;
  } else
    mail.style.backgroundColor = "green";

  if (mail.value.length > 50) {
    alert(
      "El numero de caracteres introducido superan el limite permitido. 50 caracteres maximo"
    );
    return false;
  }


  if (!pass1.value) {
    alert("Ingrese una contraseña");
    pass1.style.backgroundColor = "red";
    return false;
  }
  if (!pass2.value) {
    alert("Confirme la contraseña");
    pass2.style.backgroundColor = "red";
    return false;
  }

  if (document.getElementById("ESO").checked == false && document.getElementById("pruebadeacceso").checked == false && document.getElementById("bachiller").checked == false && document.getElementById("gradomedio").checked == false && document.getElementById("diplomatura").checked == false && document.getElementById("linceciatura").checked == false && document.getElementById("grado").checked == false) {
    alert("Debe de selecionar almenos una casilla en estudios ");
    return false;
  }

  if (pass1.value != pass2.value) {
    alert("Las dos claves son distintas");
    pass1.style.backgroundColor = "red";
    pass2.style.backgroundColor = "red";
    return false;

  } else {
    alert("Todo se ha enviado correctamente, nos pondremos en contacto con usted los antes posible ");
    pass1.style.backgroundColor = "green";
    pass2.style.backgroundColor = "green";
    return true;
  }


}