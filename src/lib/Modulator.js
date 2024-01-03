export default class Modulator {
  constructor(depth, rate) {
    this.depth = depth;
    this.rate = rate;
    this.epoch = Date.now();
  }

  get state() {
    const ms = this.rate * 1000;

    return ((Date.now() - this.epoch) % ms) / ms;
  }

  get saw() {
    return this.state * this.depth;
  }

  get triangle() {
    return Math.abs(this.state - 0.5) * this.depth * 2;
  }

  get square() {
    return Math.round(this.state) * this.depth;
  }
}
