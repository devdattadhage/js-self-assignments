const periods = [" hundred ", " thousand ", " million ", " billion "];
const units = ['zero', 'one', 'two', 'three', 'four', 'five', 'six',
  'seven', 'eight', 'nine'];
const elevenths = ['eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen',
  'sixteen', 'seventeen', 'eighteen', 'nineteen'];
const tens = ['ten', 'twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy',
  'eighty', 'ninety'];

012 345 678 9 10 11
999,999,999,9 9  9  to  0

``` 
            length        index
billion ->  12,11,10      0,1,2
million ->   9,8,7        3,4,5
thousand ->  6,5,4        6,7,8
hundred ->    3             9
tens ->       2             10
unit ->       1             11

```
billion  million  thousand  hundred  
ninety eighty seventy sixty fifty forty thirty twenty  
nineteen eighteen seventeen sixteen fifteen fourteen thirteen twelve eleven ten  
nine  eight  seven  six  five  four  three  two  one  zero

function get1000toAbove(num, to, i) {
  let number = +(num.slice(0, to));
  const nextNum = (num.slice(to, num.length));

  if (i === 0) {
    return getThreeDigitInWord(num);
  }
  if (number === 0) {
    return get1000toAbove(nextNum, to - 3, i - 1);
  }

  const isTrue = number < 100;
  number += "";
  const slicedNum = isTrue ?
    getTwoDigitInWord(number) : getThreeDigitInWord(number);

  return (slicedNum + periods[i] + get1000toAbove(nextNum, to - 3, i - 1)).trim();
}

