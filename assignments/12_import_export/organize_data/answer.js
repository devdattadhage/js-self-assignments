import { people } from "./records.js";
import {
  getEmployedCount,
  getCarOwnersCount,
  vaccinatedPetsCount,
  nameAndTypeOfPets,
  listCities,
  uniqueHobbies,
} from "./answerProvider.js";

const display = (question, answer) => {
  console.log(question, "\n=>", answer);
};

const displayAnswer = () => {
  display(
    "\n1. How many people are currently employed?",
    getEmployedCount(people)
  );
  display("\n2. How many people own a car?", getCarOwnersCount(people));
  display(
    "\n3. How many pets are fully vaccinated?",
    vaccinatedPetsCount(people)
  );
  display(
    "\n4. What are the names of all the pets, and what type of animal is each?",
    nameAndTypeOfPets(people)
  );
  display("\n5. Which cities do the individuals live in?", listCities(people));
  display(
    "\n6. How many hobbies are shared across the group? What are they?",
    uniqueHobbies(people)
  );
};

displayAnswer();
/*
const testAll = () => {
  console.log("\n Pets Belong to Unemployed : ", unemployedPetsCount(people));
  console.log("\n Average Age : ", averageAge(people));
  let message = "\n Computer Science People and Their Pets Count : ";
  console.log(message, countOfCSPeopleAndTheirPets(people));
  message = "\n Owning More Than One Pet : ";
  console.log(message, countOwnersWithMoreThanOnePet(people));
  message = "\n Pet Associated With Specific Favorite Activities : ";
  console.log(message, petsWithFavoriteActivities(people));
  message = "\n Pets Belonging to people who lives in bangalore or chennai : ";
  console.log(message, filterPetsByCities(people));
  message = "\n Vaccinated Pets Count Belong to people who don't own a car : ";
  console.log(message, vaccinatedPetsNoCar(people));
  // console.log("\n Common Type Pet : ", getCommonTypePet(people));
  message = "\n People With More Than Two Hobbies : ";
  console.log(message, peopleWithMoreThanTwoHobbies(people));
  message = "\n People Sharing At Least One Hobby With Ramesh : ";
  console.log(message, sharingCommonHobbyWithRamesh(people));
  console.log("\n Youngest Pet : ", findYoungestPet(people));
  // console.log("\n Book Type And Reader : ", getBookTypesAndReader(people));
  console.log("\n Cities Starting With B : ", getCitiesStartsWithB(people));
  console.log("\n People Not Owning Pet : ", getPeopleNotOwningAnyPet(people));
};

testAll();

// console.log("\n Common Type Pet : ", getCommonTypePet(people));
// console.log("\n Book Type And Reader : ", getBookTypesAndReader(people));
*/
