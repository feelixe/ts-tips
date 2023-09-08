/**
 * Function overloading in TypeScript is a feature that allows you to have multiple
 * function type definitions for a function based on the number and types of the arguments.
 * In other words, you can have the same function behave differently based on different
 * input parameters.
 */

class Circle {
  constructor(public radius: number) {}
}

class Square {
  constructor(public side: number) {}
}

class Rectangle {
  constructor(public width: number, public height: number) {}
}

/**
 * Returns an copy of the shape scaled by multiplier.
 */
function scale(shape: Circle, multiplier: number): Circle;
function scale(shape: Square, multiplier: number): Square;
function scale(shape: Rectangle, multiplier: number): Rectangle;
function scale(
  shape: Circle | Square | Rectangle,
  multiplier: number,
): Circle | Square | Rectangle {
  if (shape instanceof Circle) {
    return new Circle(shape.radius * multiplier);
  }
  if (shape instanceof Square) {
    return new Square(shape.side * multiplier);
  }
  if (shape instanceof Rectangle) {
    return new Rectangle(shape.width * multiplier, shape.height * multiplier);
  }
  throw new Error('Invalid shape');
}

const circle = new Circle(10);
const biggerCircle = scale(circle, 2);

const square = new Square(10);
const smallerSquare = scale(square, 0.5);

const rectangle = new Rectangle(10, 5);
const biggerRectangle = scale(rectangle, 1.5);

/**
 *
 * Without overloading, typescript cannot infer the return type based on our arguments.
 *
 */
function resize(
  shape: Circle | Square | Rectangle,
  multiplier: number,
): Circle | Square | Rectangle {
  if (shape instanceof Circle) {
    return new Circle(shape.radius * multiplier);
  }
  if (shape instanceof Square) {
    return new Square(shape.side * multiplier);
  }
  if (shape instanceof Rectangle) {
    return new Rectangle(shape.width * multiplier, shape.height * multiplier);
  }
  throw new Error('Invalid shape');
}

const circle2 = new Circle(10);
const biggerCircle2 = resize(circle, 2);
