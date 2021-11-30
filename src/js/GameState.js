import themes from './themes';
import Team from './Team';

export default class GameState {
  constructor(object) {
    this.teams = new Team(object.teams);
    this.gameLevel = object.gameLevel;
    this.score = object.score;
    this._turnPlayer = object.turnPlayer;
  }

  get isTurnPlayer() {
    return this._turnPlayer;
  }

  getLevelTheme() {
    switch (this.gameLevel) {
      case 1:
        return themes.prairie;
      case 2:
        return themes.desert;
      case 3:
        return themes.arctic;
      case 4:
        return themes.mountain;
      default:
        return themes.prairie;
    }
  }

  toggleTurn() {
    this._turnPlayer = !this._turnPlayer;
  }

  static from(object) {
    return new GameState(object);
  }
}
