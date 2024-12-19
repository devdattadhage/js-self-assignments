function findDistance(point1, point2) {
  return point1 > point2 ? point1 - point2 : point2 - point1;
}

function findPosOfZebraInDanger(jungle) {
  const ZEBRA = 'Z';
  const LION = 'L';
  let zebraPosition = -1;
  let lionPosition = -1;
  let dangerPosition = -1;
  let minDistance = jungle.length;

  for (let index = 0; index < jungle.length; index++) {
    if (minDistance === 1) {
      return dangerPosition;
    }

    if (jungle[index] === ZEBRA) {
      zebraPosition = index;
    }

    if (jungle[index] === LION) {
      lionPosition = index;
    }

    const areAnimalsFound = zebraPosition > -1 && lionPosition > -1;

    if (areAnimalsFound) {
      const distance = findDistance(zebraPosition, lionPosition);

      if (distance < minDistance) {
        minDistance = distance;
        dangerPosition = zebraPosition;
      }
    }
  }

  return dangerPosition;
}

function getMark(result, expected) {
  return result === expected ? '✅' : '❌';
}

function makeMessage(jungle, expected, actual) {
  const contextSegment = "Jungle : '" + jungle;
  const resultSegment = "' | Expected : " + expected + " | Actual : " + actual;

  return contextSegment + resultSegment;
}

function testFindPosOfZebraInDanger(jungle, expected) {
  const actual = findPosOfZebraInDanger(jungle);
  const isPassing = getMark(actual, expected);

  console.log(isPassing, makeMessage(jungle, expected, actual));
}

function testAll() {
  console.log("\n   ******** Position Of Zebra In Danger!! ********\n");

  testFindPosOfZebraInDanger('L Z  L', 2);
  testFindPosOfZebraInDanger('ZL Z L', 0);
  testFindPosOfZebraInDanger('LL L Z', 5);
  testFindPosOfZebraInDanger(' ZLZ L', 1);
  testFindPosOfZebraInDanger('ZLZLZL', 0);
  testFindPosOfZebraInDanger('LMTKCZ', 5);
  testFindPosOfZebraInDanger('ZZZZZZ', -1);
  testFindPosOfZebraInDanger('LLLLLL', -1);
  testFindPosOfZebraInDanger('DDDDDD', -1);
  testFindPosOfZebraInDanger('987654', -1);
  testFindPosOfZebraInDanger('Z Z  Z', -1);
  testFindPosOfZebraInDanger('L L  L', -1);
  testFindPosOfZebraInDanger('M L  A', -1);
  testFindPosOfZebraInDanger('      ', -1);
  testFindPosOfZebraInDanger('', -1);
}

testAll();