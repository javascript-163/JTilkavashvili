//task1


class Shape {
    constructor(name){
        this.name = name;
    }
    area(){
        console.log(`Area calculation not implemented for generic shape.`);
    }
}


class Circle extends Shape{
    constructor(name, radius) {
        super(name);
        this.radius = radius;

    }

    area() {
        return `Area of ${this.name}: ${Math.PI * this.radius * this.radius}`;
    }

}

class Rectangle extends Shape {
    constructor(name, width , height) {
        super(name);
        this.width = width;
        this.height = height;
    }

    area() {
        return `Area of ${this.name}: ${this.width * this.height}`;
    }

}


class Triangle extends Shape {
    constructor(name, base , height) {
        super(name);
        this.base = base;
        this.height = height;
    }

    area() {
        return `Area of ${this.name}: ${(this.base * this.height) / 2}` ;
    }

}

let circle = new Circle("Circle", 5);
console.log(circle.area()); 

let rectangle = new Rectangle("Rectangle", 4, 6);
console.log(rectangle.area()); 

let triangle = new Triangle("Triangle", 4, 3);
console.log(triangle.area());

let shape = new Shape("Generic Shape");
console.log(shape.area());