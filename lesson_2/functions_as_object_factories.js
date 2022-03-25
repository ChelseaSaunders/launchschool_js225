"use strict"

function makeCar(rate, brakeRate) {
  return {
    speed: 0,
    rate,
    brakeRate,
    accellerate() {
      this.speed += this.rate
    },
    brake() {
       this.speed -= this.breakRate;
       if (this.speed < 0) this.speed = 0;
    },
}

let hatchback = makeCar(9);

