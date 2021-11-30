import Character from './Character';

export default class Undead extends Character {
  constructor(level) {
    super(level, 'undead');
    this.attack = 40;
    this.defence = 10;
    this.movieRadius = 4;
    this.attackRadius = 1;
  }
}
