export default class Character {
  constructor(name) {
    if (typeof name !== 'string') {
      throw new Error('Ошибка, имя должно быть строкой, а не числом или чем-то иным');
    } else if (name.length < 2 || name.length > 10) {
      throw new Error('Ошибка, длина имени должна быть от 2 до 10 символов');
    } else {
      this.name = name;
    }
    this.health = 100;
    this.level = 1;
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
