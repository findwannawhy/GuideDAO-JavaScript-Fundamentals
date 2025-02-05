export default class Wallet {
  // Сделать: constructor, addCoin() и getBalance()
  constructor() {
    this.coins = [];
  }

  addCoin(coin) {
    this.coins.push(coin);
  }
  getBalance() {
    return this.coins.reduce((acc, coin) => acc + coin.getValue(), 0);
  }
}
