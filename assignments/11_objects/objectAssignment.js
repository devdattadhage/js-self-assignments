const countries = ["India", "United States", "France", "Japan", "Brazil",
  "Australia", "Germany", "Canada", "Italy", "South Korea"];

const capitals = ["New Delhi", "Washington, D.C.", "Paris", "Tokyo", "Brasília",
  "Canberra", "Berlin", "Ottawa", "Rome", "Seoul"];

const findCapital = function (country) {
  const index = countries.indexOf(country);

  return capitals[index];
}

console.log(findCapital('India'));

/* ----------------------------------------------------------------------- */

const people = [
  ["Alice", "9876543210", 25, "123 Elm Street, Springfield"],
  ["Bob", "8765432109", 35, "456 Oak Avenue, Metropolis"],
  ["Charlie", "7654321098", 19, "789 Pine Road, Gotham City"],
  ["Diana", "6543210987", 42, "101 Maple Lane, Smallville"],
  ["Eve", "5432109876", 28, "202 Birch Boulevard, Star City"],
  ["Frank", "4321098765", 31, "303 Cedar Drive, Central City"],
  ["Grace", "3210987654", 18, "404 Willow Way, Coast City"],
  ["Hank", "2109876543", 45, "505 Aspen Circle, Riverdale"],
  ["Ivy", "1098765432", 23, "606 Fir Terrace, Hill Valley"],
  ["Jack", "0198765431", 37, "707 Spruce Court, Twin Peaks"]
];

const ageAbove20 = function (element) {
  return element[2] > 20;
}

const ageBelow30 = function (element) {
  return element[2] < 30;
}

const peopleAbove20 = function () {
  return people.filter(ageAbove20);
}

const peopleBelow30 = function () {
  return people.filter(ageBelow30);
}

console.log(peopleAbove20());
console.log(peopleBelow30());

/* --------------------------------------------------------------------- */

// work on this block ASAP

const records = [
  ["Aarav", 25, 9876543210, "123 MG Road, Mumbai", ["Rohan", 5432109876]],
  ["Ananya", 35, 8765432109, "456 Brigade Road, Bengaluru", ["Lakshmi", 8223456781]],
  ["Ishaan", 19, 7654321098, "789 Park Street, Kolkata", ["Aarav", 9876543210]],
  ["Meera", 42, 6543210987, "101 Connaught Place, Delhi", ["Sunita", 8423456783]],
  ["Rohan", 28, 5432109876, "202 Marine Drive, Chennai", ["Lakshmi", 7654321098]],
  ["Priya", 31, 4321098765, "303 Sarjapur Road, Hyderabad", ["Geeta", 8623456785]],
  ["Kavya", 18, 3210987654, "404 Carter Road, Pune", ["Aditya", 2109876543]],
  ["Aditya", 45, 2109876543, "505 Residency Road, Ahmedabad", ["Vimala", 8823456787]],
  ["Naina", 23, 1098765432, "606 MG Road, Jaipur", ["Meera", 6543210987]],
  ["Veer", 37, 1987654321, "707 Lodhi Road, Chandigarh", ["Rajesh", 8723456786]]
];

const getNames = function ([name, age, mob, address, [guardian, guardianMob]]) {
  return records.some(function ([name, ...rest]) {
    return name === guardian;
  });
}

const isGuardianAbove20 = function (initial, [name, age, mob, address, [guardian, guardianMob]]) {
  return records.reduce(function (init, [name, age, ...rest]) {
    if (name === guardian && age > 20) {
      init.push([name, age]);
      return init;
    }
  })
}

const guardiansAbove20 = function () {
  const names = records.filter(getNames);
  const guardian = names.reduce(isGuardianAbove20, []);

  return guardian;
}

guardiansAbove20();