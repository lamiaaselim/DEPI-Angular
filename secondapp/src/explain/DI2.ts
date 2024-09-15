// Dependency Injection Design Pattern

class Engine2 {
  engineType: any;

  constructor(engineType: any) {
    this.engineType = engineType;
  }
}

class Tiers2 {
  constructor(tierNum: any) {}
}

class Car2 {
  engine: Engine2;
  tiers: Tiers2;

  constructor(engine: Engine2, tiers: Tiers2) {
    this.engine = engine;
    this.tiers = tiers;
  }
}




