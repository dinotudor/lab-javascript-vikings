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


class Viking extends Soldier {
  constructor(name, health, strength) {
    super(health, strength);
    this.name = name;
  }
  receiveDamage (damage) {
    this.health -= damage;
    if (this.health > 0) {
      return`${this.name} has received ${damage} points of damage`;
    } else if (this.health <= 0) {
      return `${this.name} has died in act of combat`;
    }
  }
  battleCry() {
    return `Odin Owns You All!`
  }
}

class Saxon extends Soldier {
  constructor(health, strength) {
    super(health, strength)
    this.health = health;
    this.strength = strength;
  }
  receiveDamage(damage){
    this.health -= damage;
    if (this.health > 0) {
      return `A Saxon has received ${damage} points of damage`
    } else if (this.health <= 0) {
      return `A Saxon has died in combat`
    }
  }
}

class War {}
