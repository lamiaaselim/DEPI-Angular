// Dependency Injection Design Pattern => engineType

class Engine {
  constructor() {}
}

class Tiers {
  constructor() {}
}

class Car {
  engine: any;
  tiers: any;
  constructor() {
    this.engine = new Engine();
    this.tiers = new Tiers();
  }
}

// Breaking : ❌❌ Solid Principals
// Open/Closed Principle (OCP): Open for extension close for Modifications
// recieved a dependencies as a parameter in the constructor
