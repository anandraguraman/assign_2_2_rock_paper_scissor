let tools = 0
input.onGesture(Gesture.Shake, function () {
    tools = randint(0, 2)
    if (tools == 0) {
        basic.showIcon(IconNames.SmallSquare)
    } else if (tools == 1) {
        basic.showIcon(IconNames.Square)
    } else {
        basic.showIcon(IconNames.Scissors)
    }
})
