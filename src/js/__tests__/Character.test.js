import Character from '../Characters/Character';

test('Попытка создать объект Character', () => {
  expect(() => new Character(1, 'Daemon')).toThrowError(new Error('Нельзя создать объект базового класса'));
});
