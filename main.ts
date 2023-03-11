input.onPinPressed(TouchPin.P0, function () {
    basic.showNumber(sprite.get(LedSpriteProperty.X))
})
input.onLogoEvent(TouchButtonEvent.Pressed, function () {
    basic.pause(1000)
    sprite.move(1)
    basic.pause(1000)
    sprite.move(1)
    basic.pause(1000)
    sprite.move(1)
})
input.onButtonPressed(Button.A, function () {
    sprite.move(-1)
})
input.onButtonPressed(Button.AB, function () {
    sprite.turn(Direction.Right, 90)
})
input.onButtonPressed(Button.B, function () {
    sprite.move(1)
})
let sprite: game.LedSprite = null
sprite = game.createSprite(2, 2)
basic.forever(function () {
    if (true) {
        sprite.ifOnEdgeBounce()
    }
})
