// 1. How many individuals are currently employed? => 2
export const getEmployedCount = (people) =>
  people.filter((person) => person.isEmployed).length;

// 2. How many people own a car? => 1
export const getCarOwnersCount = (people) =>
  people.filter((person) => person.vechicle.hasVehicle).length;

// 3. How many pets are fully vaccinated? => 5
export const vaccinatedPetsCount = (people) =>
  people.flatMap((person) => person.pets).filter((pet) => pet.vaccinated)
    .length;

// 4. What are the names of all the pets, and what type of animal is each?
// => [[Kiwi, parrot], ["name", "type"],]
export const nameAndTypeOfPets = (people) =>
  people
    .flatMap((person) => person.pets)
    .map((pet) => {
      return { name: pet.name, type: pet.type };
    });

// 5. Which cities do the individuals live in? => ["city", "city",]
export const listCities = (people) => people.map((person) => person.city);

// 6. How many hobbies are shared across the group? What are they?
// => [uniqueHobbies...]
const isUnique = (unique, hobby) => {
  if (unique.includes(hobby.name)) {
    return unique;
  }

  unique.push(hobby.name);
  return unique;
};

export const uniqueHobbies = (people) =>
  people.flatMap((person) => person.hobbies).reduce(isUnique, []);

// 7. How many pets belong to people who are currently unemployed? => 2
export const unemployedPetsCount = (people) =>
  people.filter((person) => !person.isEmployed).flatMap((person) => person.pets)
    .length;

// 8. What is the average age of the individuals mentioned in the passage? => 33
const sum = (num1, num2) => num1 + num2;

export const averageAge = (people) => {
  const ages = people.map((person) => person.age);
  return ages.reduce(sum) / ages.length;
};

// 9. How many individuals have studied computer science, and how many of them
// have pets? => 2, 2
export const countOfCSPeopleAndTheirPets = (people) => {
  const peopleFromCS = people.filter(
    (person) => person.majorIn === "computer science"
  );
  const petsOfCSPeople = peopleFromCS.flatMap((person) => person.pets);

  return [peopleFromCS.length, petsOfCSPeople.length];
};

// 10. How many individuals own more than one pet? => 1
export const countOwnersWithMoreThanOnePet = (people) =>
  people.filter((person) => person.pets.length > 1).length;

// 11. Which pets are associated with specific favorite activities?
// => [petsNames...]
export const petsWithFavoriteActivities = (people) =>
  people
    .flatMap((person) => person.pets)
    .filter((pet) => pet.lovesTo !== null)
    .map((pet) => pet.name);

// 12. What are the names of all animals that belong to people who live in
// Bangalore or Chennai? => [petNames...]
export const filterPetsByCities = (people) =>
  people
    .filter((person) => "Bangalore Chennai".includes(person.city))
    .flatMap((person) => person.pets)
    .map((pet) => pet.name);

// 13. How many vaccinated pets belong to people who do not own a car? => 4
export const vaccinatedPetsNoCar = (people) =>
  people
    .filter((person) => !person.vechicle.hasVehicle)
    .flatMap((person) => person.pets)
    .filter((pet) => pet.vaccinated).length;

// 14. What is the most common type of pet among the group? => cat
export const getCommonTypePet = (people) => {
  const petTypes = people
    .flatMap((person) => person.pets)
    .map((pet) => pet.type);

  return petTypes;
};

// 15. How many individuals have more than two hobbies?  => 0
export const peopleWithMoreThanTwoHobbies = (people) =>
  people.filter((person) => person.hobbies.length > 2).length;

// 16. How many individuals share at least one hobby with Ramesh? => 2
export const sharingCommonHobbyWithRamesh = (people) => {
  const rameshHobbies = people
    .find((person) => person.name === "Ramesh")
    .hobbies.map((hobby) => hobby.name);

  const otherPeopleHobbies = people
    .filter((person) => person.name !== "Ramesh")
    .flatMap((person) => person.hobbies);

  return otherPeopleHobbies.filter((hobby) =>
    rameshHobbies.includes(hobby.name)
  ).length;
};

// 17. Which pet is the youngest, and what is its name? => rabbit, Snowy
export const findYoungestPet = (people) => {
  const youngest = people
    .flatMap((person) => person.pets)
    .reduce((younger, youngerCandidate) =>
      younger.age < youngerCandidate.age ? younger : youngerCandidate
    );

  return { type: youngest.type, name: youngest.name };
};

// 18. What types of books are mentioned as interests, and who reads them?
export const getBookTypesAndReader = (people) => {};

// 19. How many individuals live in cities starting with the letter "B"? => 1
export const getCitiesStartsWithB = (people) =>
  people.filter((person) => person.city.at(0) === "B").length;

// 20. Which individuals do not own any pets?  => []
export const getPeopleNotOwningAnyPet = (people) =>
  people.filter((person) => person.pets === null);
