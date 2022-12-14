GAME_ZIP64.onButtonPress(GAME_ZIP64.ZIP64ButtonPins.Up, GAME_ZIP64.ZIP64ButtonEvents.Up, function () {
    sprite.change(LedSpriteProperty.Y, -2)
    Sprite_2.change(LedSpriteProperty.Y, -2)
    basic.pause(2 * Temps)
    sprite.change(LedSpriteProperty.Y, 2)
    Sprite_2.change(LedSpriteProperty.Y, 2)
})
input.onButtonPressed(Button.AB, function () {
	
})
let index = 0
let Temps = 0
let Sprite_2: game.LedSprite = null
let sprite: game.LedSprite = null
let display = GAME_ZIP64.createZIP64Display()
let Obstacle = game.createSprite(0, 4)
sprite = game.createSprite(3, 4)
Sprite_2 = game.createSprite(3, 3)
Temps = 500
let Niveau = 1
basic.forever(function () {
    if (sprite.isTouching(Obstacle)) {
        game.gameOver()
    }
})
basic.forever(function () {
    basic.showString("" + (Niveau))
    for (let index2 = 0; index2 < 6; index2++) {
        for (let index = 0; index <= 4; index++) {
            Obstacle.set(LedSpriteProperty.X, index)
            basic.pause(Temps)
        }
    }
    Temps = Temps * 0.9
    index += 1
})
