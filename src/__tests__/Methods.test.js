import Swordsman from '../js/Swordsman';

test('testing methods', () => {
  const player = new Swordsman('Robin');

  const playerUp = {
    name: 'Robin',
    type: 'Swordsman',
    level: 2,
    health: 100,
    attack: 48,
    defence: 12,
  };

  const playerDamaged = {
    name: 'Robin',
    type: 'Swordsman',
    level: 2,
    health: 91,
    attack: 48,
    defence: 12,
  };

  player.levelUp();
  expect(player).toEqual(playerUp);

  player.damage(10);
  expect(player).toEqual(playerDamaged);
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
