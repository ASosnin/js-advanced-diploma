
import PositionedCharacter from "./PositionedCharacter";

export default class Team {
  constructor() {
    this.members = new Set();
  }

  add(member) {
    if (member instanceof PositionedCharacter) {
      if (this.members.has(member)) {
        throw new Error(
          'Нельзя добавить персонажа, который уже есть в команде'
        );
      }
      this.members.add(member);
    } else {
      throw new Error('Добавить можно только объект класса Character');
    }
  }

  addAll(...members) {
    members.forEach((member) => {
      this.members.add(member);
    })
  }

  toArray() {
    return [...this.members];
  }
}
