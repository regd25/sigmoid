$("#error_dimensiones").hide();
$("#show-grosor-dos").hide();
$("#show-grosor-tres").hide();
$("#cotizar-pro").hide();
$("#error_dimensiones_pro").hide();


// Funcion select que ejecuta CNC Simple
$("#cantidad").change(function() {
    Cnc();
});

// Funcion CNC Simple ejecutable
function Cnc() {
    var dato1 = 0;
    variable1 = parseInt(document.getElementById('dimension_inquierdo').value);
    variable2 = parseInt(document.getElementById('dimension_derecho').value);
    cantidad = parseInt(document.getElementById('cantidad').value);

    if (variable1 > variable2) {
        if (variable1 > 0 && variable1 <= 250 && variable2 <= 150) {
            HideErrors();
            if (variable1 > 0 && variable1 <= 50) {
                dato1 = 100
            } else if (variable1 > 50 && variable1 <= 100) {
                dato1 = 150
            } else if (variable1 > 100 && variable1 <= 150) {
                dato1 = 200
            } else if (variable1 > 150 && variable1 < 200) {
                dato1 = 250
            } else {
                dato1 = 300
            }
        } else {
            ShowErrors();
        }
    } else {
        if (variable2 > 0 && variable2 <= 250 && variable1 <= 150) {
            HideErrors();
            if (variable2 > 0 && variable2 <= 50) {
                dato1 = 100
            } else if (variable2 > 50 && variable2 <= 100) {
                dato1 = 150
            } else if (variable2 > 100 && variable2 <= 150) {
                dato1 = 200
            } else if (variable2 > 150 && variable2 < 200) {
                dato1 = 250
            } else {
                dato1 = 300
            }
        } else {
            ShowErrors();
        }
    }
    Quantity(cantidad, dato1);
}

// Funcion de la cantidad
function Quantity(cantidad, valor) {
    var sumaTotal = 0;
    if (cantidad <= 3) {
        sumaTotal = valor * cantidad
        $('#data').text(sumaTotal.toString())
    } else {
        if (cantidad == 4) {
            sumaTotal = valor * 3.75
            $('#data').text(sumaTotal.toString())
        } else {
            sumaTotal = valor * 4.5
            $('#data').text(sumaTotal.toString())
        }
    }
}

// Funciones de validaciones 

function HideErrors() {
    $("#error_dimensiones").hide("slow");
    $("#show_precio").show("slow");
    $("#show_button").show("slow");
}

function ShowErrors() {
    $('#error_dimensiones').text('Verifique sus dimensiones')
    $("#error_dimensiones").show("slow");
    $("#show_precio").hide("slow");
    $("#show_button").hide("slow");
}

function ShowErrorsFile() {
    $('#error_dimensiones').text('Tamaño de archivo pasa los 10mb')
    $("#error_dimensiones").show("slow");
    $("#show_precio").hide("slow");
    $("#show_button").hide("slow");
}

function HideErrorsFile() {
    $("#error_dimensiones").hide("slow");
    $("#show_precio").show("slow");
    $("#show_button").show("slow");
}

// ---------------- Cotizador CNC PRO ---------------------
// Funciones select que ejecuta CNC Pro
$("#grosor_pro").change(function() {
    CncPro();
    HideFinish();
});
$("#cantidad_pro").change(function() {
    CncPro();
});
$("#capas_pro").change(function() {
    CncPro();
    HideThickness();
});
$("input[name='acabado']:radio").change(function() {
    CncPro();
})



function CncPro() {
    dimension_izq = parseInt(document.getElementById('dimension_izq_pro').value);
    dimension_der = parseInt(document.getElementById('dimension_der_pro').value);
    cantidad_pro = parseInt(document.getElementById('cantidad_pro').value);
    capas_pro = parseInt(document.getElementById('capas_pro').value);
    grosor_pro = parseFloat(document.getElementById('grosor_pro').value);
    var price = 0;
    acabado_pro = $("input[name='acabado']:checked").val()
    if (dimension_izq > 0 && dimension_izq <= 250 && dimension_der > 0 && dimension_der <= 250 &&
        cantidad_pro == 5 && capas_pro <= 2 && grosor_pro >= .6 && grosor_pro <= 1.6 && acabado_pro === "HASL") {
        HideErrorsPro();
        if (dimension_der > dimension_izq) {
            price = ValidatorPrice(dimension_der);
            $('#price_pro').text(price.toString())
        } else {
            price = ValidatorPrice(dimension_izq)
            $('#price_pro').text(price.toString())
        }
    } else {
        CncProSpecial(dimension_izq, dimension_der);
    }
}

// Funciones logicas y matematicas

function ValidatorPrice(dimension) {
    if (dimension > 0 && dimension <= 50) {
        return 600
    } else if (dimension > 50 && dimension <= 100) {
        return 800
    } else if (dimension > 100 && dimension <= 150) {
        return 1000
    } else if (dimension > 150 && dimension <= 200) {
        return 1200
    } else {
        return 1400
    }
}

function CncProSpecial(dimension_one, dimension_two) {
    if (dimension_one > 0 && dimension_one <= 400 && dimension_two > 0 && dimension_two <= 400) {
        ShowQuote();
    } else {
        ShowErrorsPro();
    }
}

function HideThickness() {
    capas_validar = parseInt(document.getElementById('capas_pro').value);
    if (capas_validar == 4) {
        $("#show-grosor-uno").hide();
        $("#show-grosor-dos").show();
        $("#show-grosor-tres").hide();
    } else if (capas_validar == 6) {
        $("#show-grosor-uno").hide();
        $("#show-grosor-dos").hide();
        $("#show-grosor-tres").show();
    } else {
        $("#show-grosor-uno").show();
        $("#show-grosor-dos").hide();
        $("#show-grosor-tres").hide();
    }
}

function HideFinish() {
    grosor_validate = parseFloat(document.getElementById('grosor_pro').value);
    if (grosor_validate === 0.4) {
        $("#show_radio1").hide("slow")
        $("#show_radio2").hide("slow")
    } else {
        $("#show_radio1").show("slow")
        $("#show_radio2").show("slow")
    }
}

// Funciones de validaciones de errores Cnc PRO
function HideErrorsPro() {
    $("#error_dimensiones_pro").hide("slow");
    $("#show_precio_pro").show("slow");
    $("#solicitar_pro").show("slow");
    $("#cotizar-pro").hide();
}

function ShowErrorsPro() {
    $("#error_dimensiones_pro").show("slow");
    $("#show_precio_pro").hide("slow");
    $("#solicitar_pro").hide("slow");
    $("#cotizar-pro").hide("slow");
}

function HideQuote() {
    $("#show_precio_pro").show("slow");
    $("#solicitar_pro").show("slow");
    $("#cotizar-pro").hide("slow");
}

function ShowQuote() {
    $("#error_dimensiones_pro").hide("slow");
    $("#show_precio_pro").hide("slow");
    $("#solicitar_pro").hide("slow");
    $("#cotizar-pro").show("slow");
}


// file-upload
document.getElementById("file-upload").addEventListener("change", function () {
    var fullPath = document.getElementById('file-upload').value;
    var fileName = fullPath.split(/(\\|\/)/g).pop();  // fetch the file name
    document.getElementById("file-text").innerHTML = fileName;  // display the file name
    //console.log(this.files[0])
    let mb = parseInt(this.files[0].size) / 1000000
    if (mb < 10) {
        HideErrorsFile()
    } else {
        ShowErrorsFile()
    }
}, false);

document.getElementById("file-upload-pro").addEventListener("change", function () {
    var fullPath = document.getElementById('file-upload-pro').value;
    var fileName = fullPath.split(/(\\|\/)/g).pop();  // fetch the file name
    document.getElementById("file-text-pro").innerHTML = fileName;  // display the file name
    let mb = parseInt(this.files[0].size) / 1000000
    if (mb < 10) {
        HideErrorsFile()
    } else {
        ShowErrorsFile()
    }
}, false);


// Pedido

$(document).ready(function () {
    $('#pedido').on('click', function (e) {
        dato_is = $('#dimension_inquierdo').val()
        file = $('#file-upload').val()
        console.log(file)
        $('#left-Id').val(dato_is)
        $('#right-Id').val(dato_is)
        $('#cantidad-Id').val(dato_is)
        e.preventDefault();
        var dataString = $('#form-contacto').serialize();
        console.log('Datos serializados: ' + dataString);
    });
});