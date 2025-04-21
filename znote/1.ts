enum CardinalDirection {
    Up = 3,
    Down,    // 将自动取值为 4
    Left = 5,    // 修改为 5
    Right,   // 将自动取值为 6
}

console.log(CardinalDirection.Up); // 等同于 console.log(CardinalDirection[3]);
