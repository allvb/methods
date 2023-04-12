export default class Character {
  constructor(name) {
    if (typeof name === 'string' && name.length > 1 && name.length < 11) {
      this.name = name;
    } else {
      throw new Error('Введено имя с неподходящими параметрами');
    }
    this.health = 100,
    this.level = 1
  }

  levelUp() {
    if (this.health > 0) {
      this.level += 1;
      this.health = 100;
      this.attack += this.attack * 0.2;
      this.defence += this.defence * 0.2;
    } else {
      throw new Error('Нельзя повысить уровень умершего');
    }
  }

  damage(points) {
    if (this.health > 0) {
      this.health -= points * (1 - this.defence / 100);
      this.health = Math.round(this.health);
    } else {
      throw new Error('Нельзя причинить вред умершему');
    }
  }
}
