const target = 1000;
let firstPythagorean = 1;

let hasFoundSpecialPytTriplet = true;

while (firstPythagorean < 1000 && hasFoundSpecialPytTriplet) {
    let secondPythagorean = firstPythagorean + 1;
    let thirdPythagorean = secondPythagorean + 1;

    while ((secondPythagorean < 1000 && thirdPythagorean < 1000) && hasFoundSpecialPytTriplet) {
        let thirdPythagorean = (firstPythagorean ** 2) + (secondPythagorean ** 2);
        thirdPythagorean = thirdPythagorean ** 0.5;

        if ((firstPythagorean + secondPythagorean + thirdPythagorean) === target) {
            console.log(firstPythagorean * secondPythagorean * thirdPythagorean);
            hasFoundSpecialPytTriplet = false;
        }
        
        secondPythagorean++;
    }

    firstPythagorean++;
}