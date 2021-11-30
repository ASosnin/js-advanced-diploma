export function calcTileType(index, boardSize) {
  const countCells = boardSize * boardSize;
  if (index >= countCells || index < 0) {
    throw new Error('Индекс вне диапазона');
  }
  if (index < boardSize) {
    if (index === 0) {
      return 'top-left';
    }
    if (index + 1 === boardSize) return 'top-right';
    return 'top';
  }
  if (index === countCells - 1) return 'bottom-right';
  if (index === countCells - boardSize) return 'bottom-left';
  if (index < countCells - 1 && index > countCells - boardSize) return 'bottom';
  if (index % boardSize === 0) return 'left';
  if ((index + 1) % boardSize === 0) return 'right';
  return 'center';
}

export function calcHealthLevel(health) {
  if (health < 15) {
    return 'critical';
  }

  if (health < 50) {
    return 'normal';
  }

  return 'high';
}

export function getTooltipMsg(character) {
  const level = '\uD83C\uDF96';
  const attack = '\u2694';
  const defence = '\uD83D\uDEE1';
  const health = '\u2764';
  return `${level}${character.level} ${attack}${character.attack} ${defence}${character.defence} ${health}${character.health}`;
}
