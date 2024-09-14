// Dependency Injection Design Pattern

class Engine2 {
  engineType: any;

  constructor(engineType: any) {
    this.engineType = engineType;
  }
}

class Tiers2 {
  constructor() {}
}

class Car2 {
  engine: Engine2;
  tiers: Tiers2;

  constructor(engine: Engine2, tiers: Tiers2) {
    this.engine = engine;
    this.tiers = tiers;
  }
}

// Now, to create a Car2 object, you need to pass the engineType explicitly.
const engine = new Engine2('V8');
const tiers = new Tiers2();
const car = new Car2(engine, tiers);


