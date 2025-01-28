// make a stopwatch which have hour:minutes:second:millisecond,
// the stop watch should reset after 24 hour of running

const calculateMS = (timeInMS) => timeInMS % 1000;

const calculateTimeUnit = (timeInMS, timeUnit, limit) =>
  Math.floor(timeInMS / timeUnit) % limit;

const stopwatch = () => {
  let timeInMS = 0;

  setInterval(() => {
    console.clear();
    const hours = calculateTimeUnit(timeInMS, 1000 * 3600, 24);
    const minutes = calculateTimeUnit(timeInMS, 1000 * 60, 60);
    const seconds = calculateTimeUnit(timeInMS, 1000, 60);

    console.log(`${hours}:${minutes}:${seconds}:${calculateMS(timeInMS)}`);
    timeInMS += 10;
  }, 10);
};

stopwatch();
