# JS Import Export

This assignment is based on your passage assignment. For your reference the passage and the questions are given at the end of this README file.

Improve the organization of your code by leveraging JavaScript's `import` and `export`. The goal is to split your code into separate files, test your functions systematically, and create a dedicated file to answer the questions based on your data structure.

## Instructions

### Organize Your Code

- Refactor the code you wrote earlier by creating a new file called data.js. This file should contain the data structure you created to represent the information in the passage.
- Create another file for all the function you have wrote for answering the given questions.
- Create a Test File to test all the functions. If your functions file name is `foo.js` then your test file name should be `foo_test.js`.
- Create a `answers.js` which when we run using `deno run answers.js` should give answer for all the questions.
  Example:

```text
1. How many individuals are currently employed?
[Answer for question 1]
2. How many people own a car?
[Answer for question 2]
```

## Passage

Rahul, a software engineer from Pune, enjoys playing chess and gardening when he's not busy coding. He owns a golden retriever named Max, who is 4 years old, fully vaccinated, and loves playing fetch in the park. Rahul is currently employed and has a car that he uses for weekend trips. Meanwhile, Ananya, who recently turned 30 and lives in Bangalore, is passionate about cooking and often experiments with Italian recipes. She has a parrot named Kiwi, who knows over 20 phrases, mimics her voice, and is also vaccinated. Unlike Rahul, Ananya doesn’t own a car but prefers using public transport. Both Rahul and Ananya studied computer science in college, though Ananya also has a minor in graphic design. Ramesh, a 45-year-old business owner from Jaipur, has little in common with them, except for his love of gardening. He spends his weekends tending to his rose garden and reading historical fiction. Ramesh has two Persian cats, Bella and Leo, who are 3 years old, fully vaccinated, and love lounging in the sun. Unlike Ramesh, Kavya, who’s 28 and a professional dancer from Chennai, prefers modern fantasy novels and binge-watching sci-fi shows in her downtime. Kavya has a rescue rabbit named Snowy, who is 2 years old, vaccinated, and enjoys hopping around her backyard and nibbling on carrots. Kavya, however, is currently unemployed and does not own a vehicle.

## Questions

1. How many individuals are currently employed?
2. How many people own a car?
3. How many pets are fully vaccinated?
4. What are the names of all the pets, and what type of animal is each?
5. Which cities do the individuals live in?
6. How many hobbies are shared across the group? What are they?
7. How many pets belong to people who are currently unemployed?
8. What is the average age of the individuals mentioned in the passage?
9. How many individuals have studied computer science, and how many of them have pets?
10. How many individuals own more than one pet?
11. Which pets are associated with specific favorite activities?
12. What are the names of all animals that belong to people who live in Bangalore or Chennai?
13. How many vaccinated pets belong to people who do not own a car?
14. What is the most common type of pet among the group?
15. How many individuals have more than two hobbies?
16. How many individuals share at least one hobby with Ramesh?
17. Which pet is the youngest, and what is its name?
18. What types of books are mentioned as interests, and who reads them?
19. How many individuals live in cities starting with the letter "B"?
20. Which individuals do not own any pets?
