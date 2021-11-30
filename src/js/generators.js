/**
 * Generates random characters
 *
 * @param allowedTypes iterable of classes
 * @param maxLevel max character level
 * @returns Character type children (ex. Magician, Bowman, etc)
 */
import PositionedCharacter from './PositionedCharacter';

export function* characterGenerator(
  allowedTypes,
  maxLevel,
  positionGeneratior,
) {
  while (true) {
    const indexType = Math.floor(Math.random() * allowedTypes.length);
    const level = Math.floor(Math.random() * maxLevel + 1);
    const allowedCharacter = new allowedTypes[indexType](level);
    const positionedCharacter = new PositionedCharacter(
      allowedCharacter,
      positionGeneratior.next().value,
    );
    yield positionedCharacter;
  }
}

export function generateTeam(
  allowedTypes,
  maxLevel,
  characterCount,
  positionGeneratior,
) {
  const team = [];
  const generator = characterGenerator(
    allowedTypes,
    maxLevel,
    positionGeneratior,
  );
  for (let i = 0; i < characterCount; i += 1) {
    team.push(generator.next().value);
  }
  return team;
}

export function* allowedPositionGenerator(side, size) {
  const allowedIndex = new Set();
  if (side === 'left') {
    for (let i = 0; i < size * size; i += size) {
      allowedIndex.add(i);
    }
    for (let i = 1; i < size * size; i += size) {
      allowedIndex.add(i);
    }
  }
  if (side === 'right') {
    for (let i = 6; i < size * size; i += size) {
      allowedIndex.add(i);
    }
    for (let i = 7; i < size * size; i += size) {
      allowedIndex.add(i);
    }
  }
  while (allowedIndex.size > 0) {
    const rnd = Math.floor(Math.random() * allowedIndex.size);
    const position = [...allowedIndex][rnd];
    allowedIndex.delete(position);
    yield position;
  }
}
