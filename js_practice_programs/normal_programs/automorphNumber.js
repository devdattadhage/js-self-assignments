const automorphCandidate  = 76;
const squareOfAutomorphCandidate = automorphCandidate ** 2;
let power = 1;

while(10 ** power < automorphCandidate) {
    power++;
}

const lastDigits = squareOfAutomorphCandidate % (10 ** power);

const isAutomorph = (automorphCandidate === lastDigits);

console.log("Automorph?",automorphCandidate,isAutomorph);