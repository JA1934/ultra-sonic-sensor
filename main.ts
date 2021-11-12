let Distance = 0
basic.forever(function () {
    Distance = sonar.ping(
    DigitalPin.P0,
    DigitalPin.P1,
    PingUnit.Centimeters
    ) + 3
    basic.showNumber(Distance)
    basic.pause(1000)
})
