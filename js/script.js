var peso = parseFloat(prompt("Introduzca su peso (En kilos):"))

var altura = parseFloat(prompt("Introduzca su altura (En metros):"))

var resultado = (peso / (altura*altura))

let resultadoFinal = resultado.toFixed(1)

document.write("Su IMC es: " + resultadoFinal)

document.write("<br>")

if (resultado >= 18.5 && resultado <= 24.9) {
    document.write("Su peso es el adecuado.")
}

else if (resultado < 15) {
    document.write("Su peso indica delgadez muy severa.")
}

else if (resultado == 15) {
    document.write("Su peso indica delgadez severa o muy severa.")
}

else if (resultado > 15 && resultado <= 15.9) {
    document.write("Su peso indica delgadez severa.")
}

else if (resultado >= 16 && resultado <= 18.4) {
    document.write("Su peso indica delgadez.")
}

else if (resultado >= 25 && resultado <= 29.9) {
    document.write("Su peso indica obesidad.")
}

else if (resultado >= 30 && resultado <= 34.9) {
    document.write("Su peso indica obesidad moderada.")
}

else if (resultado >= 35 && resultado <= 39.9) {
    document.write("Su peso indica obesidad severa.")
}

else if (resultado >= 40) {
    document.write("Su peso indica obesidad mórbida.")
}