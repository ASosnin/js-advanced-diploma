import { calcTileType } from '../utils';

const nameArgs = [
  { name: 'top-left', index: 0, boardSize: 8 },
  { name: 'top-right', index: 7, boardSize: 8 },
  { name: 'bottom-right', index: 63, boardSize: 8 },
  { name: 'bottom-left', index: 56, boardSize: 8 },
  { name: 'bottom', index: 60, boardSize: 8 },
  { name: 'top', index: 6, boardSize: 8 },
  { name: 'left', index: 8, boardSize: 8 },
  { name: 'right', index: 15, boardSize: 8 },
  { name: 'center', index: 13, boardSize: 8 },
];
test.each(nameArgs)('Проверка отрисовки поля', ({ index, name, boardSize }) => {
  const result = calcTileType(index, boardSize);
  expect(result).toBe(name);
});

test('Индекс отрицательное число', () => {
  expect(() => {
    calcTileType(-1, 8);
  }).toThrowError('Индекс вне диапазона');
});

test('Индекс больше размера поля', () => {
  expect(() => {
    calcTileType(89, 8)
  }).toThrowError('Индекс вне диапазона')
});
