import Character from 'src/js/Characters/Character';

test('Попытка создать объект Character', () => {
  expect(() => {
    new Character(1, 'Daemon');
  }).toThrowError(new Error('Нельзя создать объект базового класса'));
});
