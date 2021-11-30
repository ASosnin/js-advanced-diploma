import PositionedCharacter from './PositionedCharacter';

export default class Team {
  constructor(members) {
    this.members = new Set(members);
  }

  add(member) {
    if (member instanceof PositionedCharacter) {
      if (this.members.has(member)) {
        throw new Error(
          'Нельзя добавить персонажа, который уже есть в команде',
        );
      }
      this.members.add(member);
    } else {
      throw new Error('Добавить можно только объект класса Character');
    }
  }

  toArray() {
    return [...this.members];
  }

  getInfoByIndex(index) {
    return [...this.members].find((item) => item.position === index);
  }
}
