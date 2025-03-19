const getReports = () => {
  const data = Deno.readTextFileSync("./input.txt");
  const lines = data.split("\n");

  return lines.map((line) => line.split(" ").map((level) => parseInt(level)));
};

const isSafe = (report) => {
  let increasing = true;
  let decreasing = true;
  for (let i = 1; i < report.length; i++) {
    if (report[i] > report[i - 1]) {
      decreasing = false;
    } else if (report[i] < report[i - 1]) {
      increasing = false;
    }

    const diff = Math.abs(report[i] - report[i - 1]);
    if (diff > 3 || diff < 1) {
      return false;
    }
  }
  return increasing || decreasing;
};

const problemDampener = (report) => {
  let increasing = true;
  let decreasing = true;
  let badlevel = 0;
  for (let i = 1; i < report.length; i++) {
    if (report[i] > report[i - 1]) {
      decreasing = false;
    } else if (report[i] < report[i - 1]) {
      increasing = false;
    }

    const diff = Math.abs(report[i] - report[i - 1]);
    if (diff > 3 || diff < 1) {
      badlevel += 1;
    }
  }
  return (increasing || decreasing) && badlevel <= 1;
};

const part1 = () => {
  const reports = getReports();
  let safeReports = 0;

  for (const report of reports) {
    if (isSafe(report)) {
      safeReports++;
    }
  }

  console.log(safeReports);
};

const part2 = () => {
  const reports = getReports();
  let safeReports = 0;

  for (const report of reports) {
    if (problemDampener(report)) {
      safeReports++;
    }
  }

  console.log(safeReports);
};

part1();
part2();
