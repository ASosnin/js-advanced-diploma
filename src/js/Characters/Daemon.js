import Character from './Character';

export default class Daemon extends Character {
  constructor(level) {
    super(level, 'daemon');
    this.attack = 10;
    this.defence = 40;
    this.movieRadius = 1;
    this.attackRadius = 4;
  }
}
