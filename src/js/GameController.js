import Bowman from './Characters/Bowman';
import Swordsman from './Characters/Swordsman';
import Vampire from './Characters/Vampire';
import Daemon from './Characters/Daemon';
import Undead from './Characters/Undead';
import Magician from './Characters/Magician';
import GameState from './GameState';
import { allowedPositionGenerator, generateTeam } from './generators';
import {getTooltipMsg} from "./utils";

export default class GameController {
  constructor(gamePlay, stateService) {
    this.gamePlay = gamePlay;
    this.stateService = stateService;
    this.state = undefined;
  }

  init() {
    // TODO: add event listeners to gamePlay events
    this.loadGame();
    this.gamePlay.drawUi(this.state.getLevelTheme());

    // TODO: load saved stated from stateService
    this.gamePlay.addCellEnterListener(this.onCellEnter.bind(this));
    this.gamePlay.addCellLeaveListener(this.onCellLeave.bind(this));
    this.gamePlay.addCellClickListener(this.onCellClick.bind(this));

    this.gamePlay.addNewGameListener(this.newGame.bind(this));
    this.gamePlay.addLoadGameListener(this.onLoadGame.bind(this));
    this.gamePlay.addSaveGameListener(this.saveGame.bind(this));
    this.gamePlay.redrawPositions(this.state.teams.members);
  }

  saveGame() {
    this.stateService.save(this.state);
  }

  loadGame() {
    try {
      this.state = GameState.from(this.stateService.load());
    } catch (err) {
      console.log(err);
      this.newGame();
    }
  }

  onLoadGame() {
    this.loadGame();
    this.gamePlay.redrawPositions(this.state.teams.members);
  }

  newGame() {
    const allowedPositionPlayer = allowedPositionGenerator('left', 8);
    const allowedPositionNpc = allowedPositionGenerator('right', 8);

    const playerTeam = generateTeam(
      [Bowman, Swordsman, Magician],
      1,
      2,
      allowedPositionPlayer
    );

    const npcTeam = generateTeam(
      [Daemon, Vampire, Undead],
      1,
      2,
      allowedPositionNpc
    );

    this.state = GameState.from({
      teams: [...playerTeam, ...npcTeam],
      gameLevel: 1,
      score: 0,
      turnPlayer: true,
    });
    this.gamePlay.redrawPositions(this.state.teams.toArray());
  }

  onCellClick(index) {
    // TODO: react to click
    console.log('on cell click', this.state.teams.getInfoByIndex(index));
  }

  onCellEnter(index) {
    // TODO: react to mouse enter
    const pers = this.state.teams.getInfoByIndex(index);
    console.log(pers)
    if (pers) {
      this.gamePlay.showCellTooltip(
        getTooltipMsg(pers.character),
        index
      );
    }
  }

  onCellLeave(index) {
    this.gamePlay.hideCellTooltip(index);
  }
}
