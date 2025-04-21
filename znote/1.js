
  //编译后的JavaScript
var Direction;
(function (Direction) {
    Direction[Direction["Up"] = 3] = "Up";
    Direction[Direction["Down"] = 4] = "Down";
    Direction[Direction["Left"] = 4] = "Left";
    Direction[Direction["Right"] = 5] = "Right";
})(Direction || (Direction = {}));
//访问第一个元素
console.log(Direction.Up); // 等同于 console.log(Direction[3]);