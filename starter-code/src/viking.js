class Soldier {
  constructor(health, strength) {
    this.health = health;
    this.strength = strength;
  }
  attack() {
    return this.strength
  }
  receiveDamage(damage) {
    this.health -= damage;
  }
}

class Viking extends Soldier {
  constructor(name, health, strength) {
    super(health, strength);
    this.name = name;
  }
  receiveDamage(damage) {
    this.health -= damage;
    if (this.health > 1) {
      return `${this.name} has received ${damage} points of damage`
    } else {
      return `${this.name} has died in act of combat`
    }
  }
  battleCry() {
    return `Odin Owns You All!`
  }
}

class Saxon extends Soldier {
  constructor(health, strength) {
    super(health, strength)
  }
  receiveDamage(damage) {
    this.health -= damage;
    if (this.health > 0) {
      return `A Saxon has received ${damage} points of damage`
    } else {
      return `A Saxon has died in combat`
    }
  }
}

class War {
  constructor() {
    this.vikingArmy = [];
    this.saxonArmy = [];
  }
  addViking(Viking) {
    this.vikingArmy.push(Viking)
  }
  addSaxon(Saxon) {
    this.saxonArmy.push(Saxon)
  }
  vikingAttack() {
    const saxonIndex = Math.floor(Math.random() * this.saxonArmy.length);
    const saxon = this.saxonArmy[saxonIndex];
    const vikingIndex = Math.floor(Math.random() * this.vikingArmy.length);
    const viking = this.vikingArmy[vikingIndex];
    const result = saxon.receiveDamage(viking.strength);
    if (saxon.health <= 0) {
      this.saxonArmy.splice(saxonIndex, 1);
    }
    return result
  }
  saxonAttack() {
    const saxonIndex = Math.floor(Math.random() * this.saxonArmy.length);
    const saxon = this.saxonArmy[saxonIndex];
    const vikingIndex = Math.floor(Math.random() * this.vikingArmy.length);
    const viking = this.vikingArmy[vikingIndex];
    const result = viking.receiveDamage(saxon.strength);
    if (viking.health <= 0) {
      this.vikingArmy.splice(vikingIndex, 1);
    }
    return result

  }
  showStatus(){
      if (this.saxonArmy.length < 1) {
        return `Vikings have won the war of the century!`
      } else if (this.vikingArmy.length < 1) {
        return `Saxons have fought for their lives and survive another day...`
      } else if (this.vikingArmy.length >= 1 && this.saxonArmy.length >=1) {
        return `Vikings and Saxons are still in the thick of battle.`
      }
  }
}
