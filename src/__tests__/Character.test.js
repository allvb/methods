import Character from '../js/character';
import Bowman from '../js/Bowman';
import Swordsman from '../js/Swordsman';
import Magician from '../js/Magician';
import Undead from '../js/Undead';
import Zombie from '../js/Zombie';
import Daemon from '../js/Daemon';

test('testing Character', () => {
  const player = new Character('Oleg');

  const plyaerToBe = {
    name: 'Oleg',
    level: 1,
    health: 100,
  };
  expect(player).toEqual(plyaerToBe);
});

test('testing Character errors', () => {
  expect(() => {
    const player = new Character(1);
    player.name = 1;
  }).toThrowError('Ошибка, имя должно быть строкой, а не числом или чем-то иным');
  expect(() => {
    const player = new Character('R');
    player.name = 'R';
  }).toThrowError('Ошибка, длина имени должна быть от 2 до 10 символов');
  expect(() => {
    const player = new Character('RobinRobinRobin');
    player.name = 'RobinRobinRobin';
  }).toThrowError('Ошибка, длина имени должна быть от 2 до 10 символов');
});

test('testing Bowman', () => {
  const player = new Bowman('Robin');
  const testedPlayer = {
    name: 'Robin',
    type: 'Bowman',
    level: 1,
    health: 100,
    attack: 25,
    defence: 25,
  };
  expect(player).toEqual(testedPlayer);
});

test('testing Swordsman', () => {
  const player = new Swordsman('Robin');
  const testedPlayer = {
    name: 'Robin',
    type: 'Swordsman',
    level: 1,
    health: 100,
    attack: 40,
    defence: 10,
  };
  expect(player).toEqual(testedPlayer);
});

test('testing Magician', () => {
  const player = new Magician('Robin');
  const testedPlayer = {
    name: 'Robin',
    type: 'Magician',
    level: 1,
    health: 100,
    attack: 10,
    defence: 40,
  };
  expect(player).toEqual(testedPlayer);
});

test('testing Undead', () => {
  const player = new Undead('Robin');
  const testedPlayer = {
    name: 'Robin',
    type: 'Undead',
    level: 1,
    health: 100,
    attack: 25,
    defence: 25,
  };
  expect(player).toEqual(testedPlayer);
});

test('testing Zombie', () => {
  const player = new Zombie('Robin');
  const testedPlayer = {
    name: 'Robin',
    type: 'Zombie',
    level: 1,
    health: 100,
    attack: 40,
    defence: 10,
  };
  expect(player).toEqual(testedPlayer);
});

test('testing Daemon', () => {
  const player = new Daemon('Robin');
  const testedPlayer = {
    name: 'Robin',
    type: 'Daemon',
    level: 1,
    health: 100,
    attack: 10,
    defence: 40,
  };
  expect(player).toEqual(testedPlayer);
});
