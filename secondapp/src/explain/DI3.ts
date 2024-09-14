import { Injectable } from '@angular/core';

@Injectable()
class Engine3 {
  constructor(public engineType: string) {}
}

@Injectable()
class Tiers3 {}

@Injectable()
class Car3 {
  constructor(public engine: Engine2, public tiers: Tiers2) {}
}
