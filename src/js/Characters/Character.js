export default class Character {
  constructor(level, type = 'character') {
    this.level = level;
    this.health = 100;
    this.type = type;
    if (new.target.name === 'Character') {
      throw new Error('Нельзя создать объект базового класса');
    }
  }

  levelUp() {
    if (this.health <= 0) {
      throw new Error('Персонаж умер');
    }
    this.level += 1;
    this.attack = Math.max(
      this.attack,
      (this.attack * (1.8 - this.health)) / 100
    );
    this.health = this.health + 80 > 100 ? 100 : this.health + 80;
  }
}
