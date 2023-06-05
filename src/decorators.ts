/**
 * NOTE: Decorators are an experimental feature that may change in future releases.
 * Needs to be enabled in tsconfig.json with "experimentalDecorators": true
 */

// Class Decorator
function ClassDecorator(obj: typeof DecoratorDemo) {
  console.log('ClassDecorator called on: ', obj);
}

// Property Decorator
function PropertyDecorator(target: any, propertyKey: string) {
  console.log('PropertyDecorator called on: ', target, propertyKey);
}

// Method Decorator
function MethodDecorator(
  target: any,
  propertyKey: string,
  descriptor: PropertyDescriptor,
) {
  descriptor.value;
  console.log('MethodDecorator called on: ', target, propertyKey, descriptor);
}

// Applying the decorators
@ClassDecorator
class DecoratorDemo {
  @PropertyDecorator
  public name: string;

  constructor(name: string) {
    this.name = name;
  }

  @MethodDecorator
  greet() {
    console.log(`Hello, ${this.name}`);
  }
}

const demo = new DecoratorDemo('John Doe');
demo.greet();
