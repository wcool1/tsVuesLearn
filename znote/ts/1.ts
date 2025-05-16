interface Shape {
    calculateArea(): number;
}
//实现接口
class Circle implements Shape {
    constructor(private radius: number) { }

    calculateArea() {
        return Math.PI * this.radius ** 2;
    }
}



const circle:Circle = new Circle(5);
console.log(circle.calculateArea()); // 78.54