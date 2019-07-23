// Soldier
class Soldier {
  constructor(health, strength) {
    this.health = health;
    this.strength = strength;
  }
}

Soldier.prototype.attack = function () {
  return this.strength
}

Soldier.prototype.receiveDamage = function(damage) {
  this.health -= damage;
}
// Viking
class Viking {
  constructor(name, health, strength) {
    this.name = name;
    this.health = health;
    this.strength = strength;
  }
}
Viking.prototype = Object.create(Soldier.prototype);
Viking.prototype.constructor = Viking;

// Saxon
class Saxon {}

// War
class War {}
