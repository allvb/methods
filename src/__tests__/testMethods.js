import Swordsman from '../js/Swordsman';

test('testing methods', () => {
  const player = new Swordsman('Robin');

  player.levelUp();
  expect(2).toBe(player.level);
  expect(100).toBe(player.health);
  expect(48).toBe(player.attack);
  expect(12).toBe(player.defence);

  player.damage(10);
  expect(91).toEqual(player.health);
});

test('testing Character errors', () => {
  expect(() => {
    const player = new Swordsman('Robin');
    player.health = -1;
    player.levelUp();
  }).toThrowError('Нельзя повысить уровень умершего');
  expect(() => {
    const player = new Swordsman('Robin');
    player.health = -1;
    player.damage(10);
  }).toThrowError('Нельзя причинить вред умершему');
});
