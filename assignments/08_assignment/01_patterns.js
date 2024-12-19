const STAR = "*";
const HYPHEN = "-";
const SPACE = " ";

const getHorizontalLine = function (length, char) {
  return char.repeat(length);
}

const getHollowLine = function (length) {
  return STAR + getHorizontalLine(length - 2, SPACE) + STAR;
}

const rectangle = function (width, height, getLine, char) {
  const rectangle = [];
  for (let index = 0; index < height; index++) {
    const row = getLine(width, char);
    rectangle.push(row);
  }

  return rectangle;
}

const getFilledRectangle = function ([width, height]) {
  return rectangle(width, height, getHorizontalLine, STAR);
}

const getHollowRectangle = function ([width, height]) {
  if (width <= 2 || height <= 2) {
    return rectangle(width, height, getHorizontalLine, STAR);
  }
  const hollowRectangle = rectangle(width, height - 2, getHollowLine);

  hollowRectangle.push(getHorizontalLine(width, STAR));
  hollowRectangle.unshift(getHorizontalLine(width, STAR));

  return hollowRectangle;
}

const getAlternatingPattern = function (height, width, characters) {
  const rectangle = [];

  for (let index = 1; index <= height; index++) {
    const char = characters[index % characters.length];
    rectangle.push(getHorizontalLine(width, char));
  }

  return rectangle;
}

const getAlternatingRectangle = function ([width, height]) {
  const characters = [HYPHEN, STAR];

  return getAlternatingPattern(height, width, characters);
}

const getSpacedAlternatingRectangle = function ([width, height]) {
  const characters = [SPACE, STAR, HYPHEN];

  return getAlternatingPattern(height, width, characters);
}

const getTriangle = function ([size]) {
  const triangle = [];

  for (let index = 1; index <= size; index++) {
    triangle.push(getHorizontalLine(index, STAR));
  }

  return triangle;
}

const getRightAlignedTriangle = function ([size]) {
  const triangle = [];

  for (let index = 1; index <= size; index++) {
    const row = getHorizontalLine(index, STAR);
    triangle.push(row.padStart(size, SPACE));
  }

  return triangle;
}

const diamond = function (diagonol, getLine) {
  const diamond = [getLine(diagonol, STAR)];

  for (let length = diagonol - 2; length > 1; length -= 2) {
    const row = getLine(length, STAR);
    const padLength = (diagonol + length) / 2;

    diamond.push(row.padStart(padLength, SPACE));
    diamond.unshift(row.padStart(padLength, SPACE));
  }

  diamond.push(STAR.padStart((diagonol + 1) / 2, SPACE));
  diamond.unshift(STAR.padStart((diagonol + 1) / 2, SPACE));

  return diamond;
}

function getDiamond([size]) {
  const diagonol = size % 2 === 0 ? size - 1 : size;
  if (diagonol < 2) {
    return [getHorizontalLine(diagonol, STAR)];
  }

  return diamond(diagonol, getHorizontalLine);
}

function getHollowDiamond([size]) {
  const diagonol = size % 2 === 0 ? size - 1 : size;
  if (diagonol < 2) {
    return [getHorizontalLine(diagonol, STAR)];
  }

  return diamond(diagonol, getHollowLine);
}

function createPattern(style, dimensions) {
  const patternTypes = [
    ['hollow-rectangle', getHollowRectangle],
    ['alternating-rectangle', getAlternatingRectangle],
    ['spaced-alternating-rectangle', getSpacedAlternatingRectangle],
    ['filled-rectangle', getFilledRectangle], ['triangle', getTriangle],
    ['right-aligned-triangle', getRightAlignedTriangle],
    ['diamond', getDiamond], ['hollow-diamond', getHollowDiamond]
  ];

  for (const [design, generateDesign] of patternTypes) {
    if (style === design) {
      const pattern = generateDesign(dimensions);
      return pattern.join('\n');
    }
  }
}

function createTwoPatterns(style, secondStyle, dimensions) {
  const pattern = [];
  const firstDesign = createPattern(style, dimensions).split('\n');
  const secondDesign = createPattern(secondStyle, dimensions).split('\n');

  for (let row = 0; row < firstDesign.length; row++) {
    const designRow = (firstDesign[row]).padEnd(dimensions[0], SPACE) + SPACE + secondDesign[row];
    pattern.push(designRow);
  }

  return pattern.join('\n');
}

function areDimensionsZero(dimensions) {
  return dimensions[0] === 0 || dimensions[1] === 0;
}

function generatePattern(style, dimensions, secondStyle) {
  if (areDimensionsZero(dimensions)) {
    return '';
  }
  if (secondStyle !== undefined) {
    return createTwoPatterns(style, secondStyle, dimensions);
  }

  return createPattern(style, dimensions);
}

/* ************************ Testing Segment **************************** */

function testGeneratePattern(style, dimensions, expected, failed, secondStyle) {
  const actual = generatePattern(style, dimensions, secondStyle);
  if (actual !== expected) {
    failed.push([style, secondStyle, dimensions, actual, expected]);
  }
}

function testFilledRectangle(failed) {
  testGeneratePattern('filled-rectangle', [0, 0], '', failed);
  testGeneratePattern('filled-rectangle', [1, 0], '', failed);
  testGeneratePattern('filled-rectangle', [0, 1], '', failed);
  testGeneratePattern('filled-rectangle', [1, 1], '*', failed);
  testGeneratePattern('filled-rectangle', [2, 1], '**', failed);
  testGeneratePattern('filled-rectangle', [2, 2], '**\n**', failed);
  testGeneratePattern('filled-rectangle', [3, 3], '***\n***\n***', failed);
}

function testHollowRectangle(failed) {
  testGeneratePattern('hollow-rectangle', [0, 0], '', failed);
  testGeneratePattern('hollow-rectangle', [1, 0], '', failed);
  testGeneratePattern('hollow-rectangle', [1, 1], '*', failed);
  testGeneratePattern('hollow-rectangle', [1, 3], '*\n*\n*', failed);
  testGeneratePattern('hollow-rectangle', [3, 1], '***', failed);
  testGeneratePattern('hollow-rectangle', [3, 3], '***\n* *\n***', failed);
  testGeneratePattern('hollow-rectangle', [5, 4], '*****\n*   *\n*   *\n*****',
    failed);
}

function testAlternatingRectangle(failed) {
  testGeneratePattern('alternating-rectangle', [0, 0], '', failed);
  testGeneratePattern('alternating-rectangle', [1, 0], '', failed);
  testGeneratePattern('alternating-rectangle', [1, 1], '*', failed);
  testGeneratePattern('alternating-rectangle', [1, 3], '*\n-\n*', failed);
  testGeneratePattern('alternating-rectangle', [3, 2], '***\n---', failed);
  testGeneratePattern('alternating-rectangle', [5, 4],
    '*****\n-----\n*****\n-----', failed);
}

function testTriangle(failed) {
  testGeneratePattern('triangle', [0], '', failed);
  testGeneratePattern('triangle', [1], '*', failed);
  testGeneratePattern('triangle', [2], '*\n**', failed);
  testGeneratePattern('triangle', [3], '*\n**\n***', failed);
  testGeneratePattern('triangle', [5], '*\n**\n***\n****\n*****', failed);
}

function testRightAlignedTriangle(failed) {
  testGeneratePattern('right-aligned-triangle', [0], '', failed);
  testGeneratePattern('right-aligned-triangle', [1], '*', failed);
  testGeneratePattern('right-aligned-triangle', [2], ' *\n**', failed);
  testGeneratePattern('right-aligned-triangle', [3], '  *\n **\n***', failed);
}

function testSpacedAlternatingRectangle(failed) {
  testGeneratePattern('spaced-alternating-rectangle', [0, 0], '', failed);
  testGeneratePattern('spaced-alternating-rectangle', [1, 0], '', failed);
  testGeneratePattern('spaced-alternating-rectangle', [0, 1], '', failed);
  testGeneratePattern('spaced-alternating-rectangle', [4, 2],
    '****\n----', failed);
  testGeneratePattern('spaced-alternating-rectangle', [4, 3],
    '****\n----\n    ', failed);
  testGeneratePattern('spaced-alternating-rectangle', [4, 6],
    '****\n----\n    \n****\n----\n    ', failed);
}

function testDiamond(failed) {
  testGeneratePattern('diamond', [0], '', failed);
  testGeneratePattern('diamond', [1], '*', failed);
  testGeneratePattern('diamond', [2], '*', failed);
  testGeneratePattern('diamond', [3], ' *\n***\n *', failed);
  testGeneratePattern('diamond', [5], '  *\n ***\n*****\n ***\n  *', failed);
  testGeneratePattern('diamond', [7],
    '   *\n  ***\n *****\n*******\n *****\n  ***\n   *', failed);
}

function testHollowDiamond(failed) {
  testGeneratePattern('hollow-diamond', [0], '', failed);
  testGeneratePattern('hollow-diamond', [1], '*', failed);
  testGeneratePattern('hollow-diamond', [2], '*', failed);
  testGeneratePattern('hollow-diamond', [3], ' *\n* *\n *', failed);
  testGeneratePattern('hollow-diamond', [5],
    '  *\n * *\n*   *\n * *\n  *', failed);
  testGeneratePattern('hollow-diamond', [7],
    '   *\n  * *\n *   *\n*     *\n *   *\n  * *\n   *', failed);
}

function testSecondaryPattern(failed) {
  testGeneratePattern('filled-rectangle', [1, 1], '* *',
    failed, 'hollow-rectangle');
  testGeneratePattern('filled-rectangle', [3, 3], '*** ***\n*** * *\n*** ***',
    failed, 'hollow-rectangle');
  testGeneratePattern('triangle', [3], '*     *\n**   **\n*** ***',
    failed, 'right-aligned-triangle');
  testGeneratePattern('diamond', [3], ' *  *\n*** **\n *  ***',
    failed, 'triangle');
  // testGeneratePattern('diamond', [4], ' *  *\n*** **\n *  ***\n    **** ',
  //   failed, 'triangle');
}

function testAll() {
  const failed = [];
  testFilledRectangle(failed);
  testHollowRectangle(failed);
  testAlternatingRectangle(failed);
  testSpacedAlternatingRectangle(failed);
  testTriangle(failed);
  testRightAlignedTriangle(failed);
  testDiamond(failed);
  testHollowDiamond(failed);
  testSecondaryPattern(failed);

  console.table(failed);
}

testAll();