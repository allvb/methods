import Character from '../js/character';
import Bowman from '../js/Bowman';
import Swordsman from '../js/Swordsman';
import Magician from '../js/Magician';
import Undead from '../js/Undead';
import Zombie from '../js/Zombie';
import Daemon from '../js/Daemon';

test('testing Character', () => {
  const player = new Character('Oleg');
  expect('Oleg').toBe(player.name);
  expect(100).toBe(player.health);
  expect(1).toBe(player.level);
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
  expect('Robin').toBe(player.name);
  expect('Bowman').toBe(player.type);
  expect(25).toBe(player.attack);
  expect(25).toBe(player.defence);
});

test('testing Swordsman', () => {
  const player = new Swordsman('Robin');
  expect('Robin').toBe(player.name);
  expect('Swordsman').toBe(player.type);
  expect(40).toBe(player.attack);
  expect(10).toBe(player.defence);
});

test('testing Magician', () => {
  const player = new Magician('Robin');
  expect('Robin').toBe(player.name);
  expect('Magician').toBe(player.type);
  expect(10).toBe(player.attack);
  expect(40).toBe(player.defence);
});

test('testing Undead', () => {
  const player = new Undead('Robin');
  expect('Robin').toBe(player.name);
  expect('Undead').toBe(player.type);
  expect(25).toBe(player.attack);
  expect(25).toBe(player.defence);
});

test('testing Zombie', () => {
  const player = new Zombie('Robin');
  expect('Robin').toBe(player.name);
  expect('Zombie').toBe(player.type);
  expect(40).toBe(player.attack);
  expect(10).toBe(player.defence);
});

test('testing Daemon', () => {
  const player = new Daemon('Robin');
  expect('Robin').toBe(player.name);
  expect('Daemon').toBe(player.type);
  expect(10).toBe(player.attack);
  expect(40).toBe(player.defence);
});
