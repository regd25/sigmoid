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
                                dato1 = 300
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
                                dato1 = 300
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
    sumaTotal = dato1 * (cantidad - 0.25)
    if (sumaTotal == null) {
        $('#data').text('0')
    } else {
        $('#data').text(sumaTotal.toString())
    }
}