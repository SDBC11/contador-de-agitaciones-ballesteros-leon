input.onButtonPressed(Button.A, function () {
    if (!(contando)) {
        basic.showNumber(3)
        basic.showLeds(`
            . . . . .
            . . . . .
            . . . . .
            . . . . .
            . . . . .
            `)
        basic.showNumber(2)
        basic.showLeds(`
            . . . . .
            . . . . .
            . . . . .
            . . . . .
            . . . . .
            `)
        basic.showNumber(1)
        basic.showLeds(`
            . . . . .
            . . . . .
            . . . . .
            . . . . .
            . . . . .
            `)
        basic.showIcon(IconNames.Happy)
        contando = true
        tiempo_inicio = input.runningTime()
    }
})
input.onGesture(Gesture.Shake, function () {
    if (contando) {
        contador += 1
    }
})
input.onButtonPressed(Button.B, function () {
    basic.showLeds(`
        . . . . .
        . . . . .
        . . . . .
        . . . . .
        . . . . .
        `)
    basic.showNumber(movimientos)
    basic.showLeds(`
        . . . . .
        . . . . .
        . . # . .
        . . . . .
        . . . . .
        `)
})
let fin = 0
let tiempo_inicio = 0
let movimientos = 0
let contando = false
contando = false
movimientos = 0
let tiempo = 0
let contador = 0
basic.showLeds(`
    . . . . .
    . . . . .
    . . # . .
    . . . . .
    . . . . .
    `)
basic.forever(function () {
    if (contando) {
        fin = input.runningTime()
        tiempo = fin - tiempo_inicio
    }
    if (tiempo >= 30000) {
        movimientos = contador
        contando = false
        tiempo = 0
        contador = 0
        basic.showLeds(`
            . . . . .
            . . . . .
            . . . . .
            . . . . .
            . . . . .
            `)
        basic.showNumber(movimientos)
        basic.pause(500)
        basic.showLeds(`
            . . . . .
            . . . . .
            . . # . .
            . . . . .
            . . . . .
            `)
    }
})
