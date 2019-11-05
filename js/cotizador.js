$("#error_dimensiones").hide();
$("#show-grosor-dos").hide();
$("#show-grosor-tres").hide();
$("#cotizar-pro").hide();
$("#error_dimensiones_pro").hide();

function cotizar1() {

    var dato1 = 0;
    var sumaTotal = 0;
    variable1 = parseInt(document.getElementById('dimension_inquierdo').value);
    variable2 = parseInt(document.getElementById('dimension_derecho').value);
    cantidad = parseInt(document.getElementById('cantidad').value);

    if (variable1 > variable2) {
        if (variable1 > 50 && variable1 <= 250 && variable2 <= 150) {
            console.log('voy a verificar la varible 1')
            $("#error_dimensiones").hide("slow");
            $("#show_precio").show("slow");
            $("#show_button").show("slow");
            if (variable1 > 50 && variable1 <= 100) {
                dato1 = 100
            } else if (variable1 > 100 && variable1 <= 150) {
                dato1 = 150
            } else if (variable1 > 150 && variable1 <= 200) {
                dato1 = 200
            } else if (variable1 > 200 && variable1 < 250) {
                dato1 = 250
            } else {
                dato1 = 300
            }
        } else {
            $('#error_dimensiones').text('La dimensiones estan malas verifique')
            $("#error_dimensiones").show("slow");
            $("#show_precio").hide("slow");
            $("#show_button").hide("slow");
        }
    } else {
        if (variable2 > 50 && variable2 <= 250 && variable1 <= 150) {
            console.log('voy a verificar la varible 2')
            $("#error_dimensiones").hide("slow");
            $("#show_precio").show("slow");
            $("#show_button").show("slow");
            if (variable2 > 50 && variable2 <= 100) {
                dato1 = 100
            } else if (variable2 > 100 && variable2 <= 150) {
                dato1 = 150
            } else if (variable2 > 150 && variable2 <= 200) {
                dato1 = 200
            } else if (variable2 > 200 && variable2 < 250) {
                dato1 = 250
            } else {
                dato1 = 300
            }
        } else {
            $('#error_dimensiones').text('La dimensiones estan malas verifique')
            $("#error_dimensiones").show("slow");
            $("#show_precio").hide("slow");
            $("#show_button").hide("slow");
        }
    }
    if (cantidad <= 3) {
        sumaTotal = dato1 * cantidad
        $('#data').text(sumaTotal.toString())
    } else {
        if (cantidad == 4) {
            sumaTotal = dato1 * 3.75
            $('#data').text(sumaTotal.toString())
        } else {
            sumaTotal = dato1 * 4.5
            $('#data').text(sumaTotal.toString())
        }
    }
}


function cotizarPro() {
    dimension_izq = parseInt(document.getElementById('dimension_izq_pro').value);
    dimension_der = parseInt(document.getElementById('dimension_der_pro').value);
    cantidad_pro = parseInt(document.getElementById('cantidad_pro').value);
    capas_pro = parseInt(document.getElementById('capas_pro').value);
    grosor_pro = parseFloat(document.getElementById('grosor_pro').value);
    console.log(grosor_pro)
    if (dimension_izq >= 100 && dimension_izq <= 300 && dimension_der >= 100 && dimension_der <= 300) {
        $("#error_dimensiones_pro").hide("slow");
        $("#show_precio_pro").show("slow");
        $("#solicitar_pro").show("slow");
        $("#cotizar-pro").hide();
        if (dimension_izq >= 200 || dimension_der >= 200) {
            $("#show_precio_pro").hide("slow");
            $("#solicitar_pro").hide("slow");
            $("#cotizar-pro").show("slow");
        } else {
            $("#show_precio_pro").show("slow");
            $("#solicitar_pro").show("slow");
            if (cantidad_pro >= 15 || capas_pro > 3) {
                $("#show_precio_pro").hide("slow");
                $("#solicitar_pro").hide("slow");
                $("#cotizar-pro").show("slow");
            } else {
                if (grosor_pro == 0.4) {
                    $("#show_radio1").hide("slow");
                    $("#show_radio2").hide("slow");
                } else {
                    console.log('xdxdxd')
                    $("#show_radio1").show("slow");
                    $("#show_radio2").show("slow");
                }
            }
        }
    } else {
        $("#error_dimensiones_pro").show("slow");
        $("#show_precio_pro").hide("slow");
        $("#solicitar_pro").hide("slow");
        $("#cotizar-pro").hide("slow");
    }
}

function ocultarGrosor() {
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

$("#cantidad").change(function() {
    cotizar1();
});
$("#cantidad_pro").change(function() {
    cotizarPro();
});
$("#capas_pro").change(function() {
    cotizarPro();
    ocultarGrosor();
});

$("#grosor_pro").change(function() {
    cotizarPro();
});