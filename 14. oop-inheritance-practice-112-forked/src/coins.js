// Не удаляйте ключевое слово "export"

export class Coin {
  // Сделать: constructor, collect(), getValue(), getMessage()
  constructor(name, price) {
    this.name = name;
    this.price = price;
    this.count = 0;
  }

  collect() {
    this.count++;
  }

  getValue() {
    return this.count * this.price;
  }

  getMessage() {
    return `${this.count} ${this.name} в кошельке`;
  }
}

export class Ether extends Coin {
  // Сделать: constructor и наследование
  constructor() {
    super("ETH", 3000);
  }
}

export class Bitcoin extends Coin {
  // Сделать: constructor и наследование
  constructor() {
    super("BTC", 50000);
  }
}
