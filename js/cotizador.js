function cotizar1() {
    var dato1 = 0;
    var sumaTotal = 0;
    variable1 = parseInt(document.getElementById('uno').value);
    variable2 = parseInt(document.getElementById('dos').value);
    cantidad = parseInt(document.getElementById('tres').value);
    if (variable1 > variable2) {
        if (variable1 >= 50) {
            if (variable1 >= 100) {
                if (variable1 >= 150) {
                    if (variable1 >= 200) {
                        if (variable1 < 250) {
                            dato1 = 250.00
                        } else {
                            if (variable1 == 250) {
                                if (variable2 <= 150) {
                                    dato1 = 300
                                } else {
                                    alert('bla bla bla')
                                }
                            }
                        }
                    } else {
                        dato1 = 200.00
                    }
                } else {
                    dato1 = 150.00
                }
            } else {
                dato1 = 100.00
            }
        }
    } else {
        if (variable2 >= 50) {
            if (variable2 >= 100) {
                if (variable2 >= 150) {
                    if (variable2 >= 200) {
                        if (variable2 < 250) {
                            dato1 = 250.00
                        } else {
                            if (variable2 == 250) {
                                if (variable1 <= 150) {
                                    dato1 = 300
                                } else {
                                    alert('bla bla bla')
                                }
                            }
                        }
                    } else {
                        dato1 = 200.00
                    }
                } else {
                    dato1 = 150.00
                }
            } else {
                dato1 = 100.00
            }
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
    //sumaTotal = dato1 * cantidad
    //console.log(sumaTotal)
    //$('#data').text(sumaTotal.toString())
}

$("#tres").change(function() {
    cotizar1();
});