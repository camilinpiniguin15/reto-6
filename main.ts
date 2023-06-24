let valorLuz = 0
basic.forever(function () {
    valorLuz = input.lightLevel()
    basic.showNumber(valorLuz)
    // Pausa de 1 segundo
    basic.pause(1000)
})
