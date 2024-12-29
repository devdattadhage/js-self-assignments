import {
  getEmployedCount,
  getCarOwnersCount,
  vaccinatedPetsCount,
} from "./answerProvider.js";
import { test } from "./testFramework.js";

const pets = {
  max: {
    name: "Max",
    type: "Dog",
    breed: "golden retriever",
    age: 4,
    vaccinated: true,
    lovesTo: ["playing fetch in park"],
  },
  kiwi: {
    name: "Kiwi",
    type: "parrot",
    breed: "",
    age: 3,
    vaccinated: true,
    lovesTo: ["mimics her voice"],
  },
  bella: {
    name: "Bella",
    type: "Cat",
    breed: "Persian",
    age: 3,
    vaccinated: true,
    lovesTo: ["lounging in the sun"],
  },
  leo: {
    name: "Leo",
    type: "Cat",
    breed: "Persian",
    age: 3,
    vaccinated: true,
    lovesTo: ["lounging in the sun"],
  },
  snowy: {
    name: "Snowy",
    type: "rabbit",
    breed: "",
    age: 2,
    vaccinated: true,
    lovesTo: ["enjoys hopping around her backyard", "nibbling on carrots"],
  },
};

const hobbies = {
  chess: { name: "chess" },
  gardening: { name: "gardening", specific: "when he's not busy coding" },
  cooking: {
    name: "cooking",
    specific: "often experiments with Italian recipes",
  },
  roseGardening: { name: "gardening", specific: "rose garden" },
  readingHifi: { name: "reading", specific: "historical fiction" },
  bingeWatching: { name: "binge-watching", specific: "sci-fi shows" },
  readingFantasy: { name: "reading", specific: "modern fantasy novels" },
};

const rahul = {
  name: "Rahul",
  age: 30,
  city: "Pune",
  isEmployed: true,
  vechicle: { hasVehicle: true, type: "car" },
  occupation: "Software Engineer",
  majorIn: "computer science",
  hobbies: [hobbies.chess, hobbies.gardening],
  pets: [pets.max],
};
const ananya = {
  name: "Ananya",
  age: 30,
  city: "Bangalore",
  isEmployed: false,
  vechicle: { hasVehicle: false, type: "" },
  occupation: "",
  majorIn: "computer science",
  minorIn: "graphic design",
  hobbies: [hobbies.cooking],
  pets: [pets.kiwi],
};
const ramesh = {
  name: "Ramesh",
  age: 45,
  city: "Jaipur",
  isEmployed: true,
  vechicle: { hasVehicle: false, type: "" },
  occupation: "Business man",
  majorIn: "",
  hobbies: [hobbies.roseGardening, hobbies.readingHifi],
  pets: [pets.bella, pets.leo],
};
const kavya = {
  name: "Kavya",
  age: 28,
  city: "Chennai",
  isEmployed: false,
  vechicle: { hasVehicle: false, type: "" },
  occupation: "professional dancer",
  majorIn: "",
  hobbies: [hobbies.bingeWatching, hobbies.readingFantasy],
  pets: [pets.snowy],
};

const testGetEmployedCount = () => {
  console.log("\n-----------Testing getEmployedCount Function -------------\n");

  test(
    "1. Two people currently employed",
    2,
    getEmployedCount([{ ...rahul }, { ...ramesh }])
  );

  test(
    "2. Nobody currently employed",
    0,
    getEmployedCount([{ ...kavya }, { ...ananya }])
  );

  test(
    "3. Everybody currently employed",
    4,
    getEmployedCount([
      { ...rahul },
      { ...ramesh },
      { ...kavya, isEmployed: true },
      { ...ananya, isEmployed: true },
    ])
  );

  test("4. Passing No Data", 0, getEmployedCount([]));
};

const testGetCarOwnersCount = () => {
  console.log("\n-----------Testing getCarOwnersCount Function ------------\n");

  test(
    "1. Two people having car",
    2,
    getCarOwnersCount([
      { ...rahul },
      { ...ramesh, vechicle: { hasVehicle: true } },
    ])
  );

  test(
    "2. Everybody having car",
    4,
    getCarOwnersCount([
      { ...rahul },
      { ...ramesh, vechicle: { hasVehicle: true } },
      { ...kavya, vechicle: { hasVehicle: true } },
      { ...ananya, vechicle: { hasVehicle: true } },
    ])
  );

  test(
    "3. Nobody having car",
    0,
    getCarOwnersCount([
      { ...rahul, vechicle: { hasVehicle: false } },
      { ...ramesh },
      { ...ananya },
    ])
  );

  test("4. Passing No Data", 0, getCarOwnersCount([]));
};

const testVaccinatedPetsCount = () => {
  console.log("\n---------- Testing vaccinatedPetsCount Function ----------\n");

  test(
    "1. Two Pets are Vaccinated",
    2,
    vaccinatedPetsCount([{ ...rahul }, { ...kavya }])
  );

  test(
    "2. Every Pet is Vaccinated",
    5,
    vaccinatedPetsCount([
      { ...rahul },
      { ...ramesh },
      { ...kavya },
      { ...ananya },
    ])
  );

  test(
    "3. No Pet is Vaccinated",
    0,
    vaccinatedPetsCount([
      { ...rahul, pets: { vaccinated: false } },
      { ...ramesh, pets: { vaccinated: false } },
      { ...ananya, pets: { vaccinated: false } },
    ])
  );

  test("4. Passing No Data", 0, vaccinatedPetsCount([]));
};

const testAll = () => {
  testGetEmployedCount();
  testGetCarOwnersCount();
  testVaccinatedPetsCount();
};

testAll();
