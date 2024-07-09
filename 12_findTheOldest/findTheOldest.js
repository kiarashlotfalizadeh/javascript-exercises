const findTheOldest = function(people) {
  let currentDate = new Date();

  for (let person of people) {
    if (!(person.hasOwnProperty("yearOfDeath"))) {
      person.yearOfDeath = currentDate.getFullYear();
    }
  }


  let ages = people.map((person) => person.yearOfDeath - person.yearOfBirth);

  let oldestIndex = ages.indexOf(Math.max(...ages));
  
  return people[oldestIndex];
};

// Do not edit below this line
module.exports = findTheOldest;
