class Stopwatch {
  constructor(elapsedMS = 0) {
    this.elapsedMS = elapsedMS;
  }

  elapsedTime() {
    this.elapsedMS += 50;
  }

  display() {
    const milliSeconds = this.elapsedMS % 1000;
    const seconds = Math.floor(this.elapsedMS / 1000) % 60;
    const minutes = Math.floor(this.elapsedMS / (1000 * 60)) % 60;
    const hours = Math.floor(this.elapsedMS / (1000 * 3600)) % 24;

    console.log(`${hours}:${minutes}:${seconds}:${milliSeconds}`);
  }
}

const sw = new Stopwatch(0);

setInterval(() => {
  sw.elapsedTime();

  console.clear();
  sw.display();
}, 50);
