const leapleapYearCandidateCandidate = 1000;

// if(leapleapYearCandidateCandidate % 4 === 0) {
//     if(leapYearCandidate % 100 === 0) {
//         if(leapYearCandidate % 400 === 0) {
//             console.log(leapYearCandidate," is a leap leapYearCandidate");
//         }
//         else {
//             console.log(leapYearCandidate," is not leap leapYearCandidate");
//         }
//     }
//     else {
//         console.log(leapYearCandidate," is a leap leapYearCandidate");
//     }
// }
// else {
//     console.log(leapYearCandidate," is not leap leapYearCandidate");
// }

const divideBy4 = (leapYearCandidate % 4 === 0);
const divideBy100 = (leapYearCandidate % 100 === 0);
const divideBy400 = (leapYearCandidate % 400 === 0);

// if((divideBy4 == 0 && divideBy100 !== 0) || (divideBy100 == 0 && divideBy400 == 0)) {
//     console.log(leapYearCandidate," is a leap leapYearCandidate");
// } else {
// console.log(leapYearCandidate," is not a leap leapYearCandidate");
// }

const isLeapleapYearCandidate = (divideBy400 || (!divideBy100 && divideBy4));
console.log(isLeapleapYearCandidate);