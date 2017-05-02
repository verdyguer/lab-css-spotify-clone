var menu = [
  { name: "Carrots", calories: 150 },
  { name: "Steak", calories: 350 },
  { name: "Broccoli", calories: 120 },
  { name: "Chicken", calories: 250 },
  { name: "Pizza", calories: 520 }
];

var totalCalories = menu.reduce(function(sumCalc,total){
return sumCalc+ total.calories;
},0);

var averageCalories = totalCalories / menu.lenght
console.log(averageCalories);

var people = [
  { name: "Candice", age: 25 },
  { name: "Tammy", age: 30 },
  { name: "Allen", age: 49 },
  { name: "Nettie", age: 21 },
  { name: "Stuart", age: 17 },
  { name: "Bill", age: 19 }
];

var ofDrinkingAge = people.filter(function(person){
  return person.age >= 42;	
});

console.log(ofDrinkingAge);

var numbers = [1, 60, 112, 123, 100, 99, 73]
var filteredNumbers = numbers.filter (function(number){
  return (number < 42) && (number %2 !==0);	
});

console.log(filteredNumbers);