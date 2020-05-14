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
    for (var i in array) {
        document.getElementById("mes").innerHTML += "<option value='" + array[i] + "'>" + array[i] + "</option>";

    }
}

function Dia() {
    var dia = 1


    var select = document.getElementById("dia");
    for (var i = dia; i <= 31; i++) select.options.add(new Option(i, i)); {

    }


}
