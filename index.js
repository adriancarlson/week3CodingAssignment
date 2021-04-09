// 1.	Create an array called ages that contains the following values: 3, 9, 23, 64, 2, 8, 28, 93.
let ages = [3, 9, 23, 64, 2, 8, 28, 93];

// a.	Programmatically subtract the value of the first element in the array from the value in the last element of the array (do not use numbers to reference the last element, find it programmatically, ages[7] – ages[0] is not allowed). Print the result to the console.

let firstAge = ages[0];
// let firstAge = ages.shift(); cannot use because it actually removes the first element from the array which we need all elements for later functions
let lastAge = ages[ages.length - 1];
// let lastAge = ages.pop(); cannot use because it actually removes the first element from the array which we need all elements for later functions
let firstFromLast = lastAge - firstAge;

console.log('1a. result: ', firstFromLast);

// b.	Add a new age to your array and repeat the step above to ensure it is dynamic (works for arrays of different lengths).

ages.push(33);

// c.	Use a loop to iterate through the array and calculate the average age. Print the result to the console.

let sum = 0;
let total = ages.length;
for (age of ages) {
	sum += age;
}
let avg = sum / total;

console.log('1c. result: ', avg);

// 2.	Create an array called names that contains the following values: ‘Sam’, ‘Tommy’, ‘Tim’, ‘Sally’, ‘Buck’, ‘Bob’.
let names = ['Sam', 'Tommy', 'Tim', 'Sally', 'Buck', 'Bob'];

// a.	Use a loop to iterate through the array and calculate the average number of letters per name. Print the result to the console.
// let nameLengths = names.map(function (name) {
// 	return name.length;
// });

let letterSum = 0;
let letterTotal = names.length;
for (name of names) {
	letterSum += name.length;
}
let letterAvg = letterSum / letterTotal;

console.log('2a. result: ', letterAvg);

// b.	Use a loop to iterate through the array again and concatenate all the names together, separated by spaces, and print the result to the console.
namesString = '';
for (name of names) {
	namesString += name + ' ';
}
console.log('2b. result: ', namesString.trim());

// 3.	How do you access the last element of any array?
// array[array.length - 1];

// 4.	How do you access the first element of any array?
// array[0];

// 5.	Create a new array called nameLengths. Write a loop to iterate over the previously created names array and add the length of each name to the nameLengths array.

let nameLengths = names.map(function (element) {
	return element.length;
});

// console.log('5. result: ', nameLengths);

// 6.	Write a loop to iterate over the nameLengths array and calculate the sum of all the elements in the array. Print the result to the console.
let nameLengthSum = 0;
for (nameLength of nameLengths) {
	nameLengthSum += nameLength;
}

// console.log('6. result: ', nameLengthSum);

// 7.	Write a function that takes two parameters, word and n, as arguments and returns the word concatenated to itself n number of times. (i.e. if I pass in ‘Hello’ and 3, I would expect the function to return ‘HelloHelloHello’).

function concatenateWords(word, n) {
	let finalString = '';
	for (let i = 0; i < n; i++) {
		finalString += word;
	}
	return finalString;
}
concatenateWords('Hello', 3);
// console.log('7. result: ', concatenateWords('Hello', 3));

// 8.	Write a function that takes two parameters, firstName and lastName, and returns a full name (the full name should be the first and the last name separated by a space).
function fullName(firstName, lastName) {
	return firstName + ' ' + lastName;
}
fullName('Adrian', 'Carlson');
// console.log('8. result: ', fullName('Adrian', 'Carlson'));

// 9.	Write a function that takes an array of numbers and returns true if the sum of all the numbers in the array is greater than 100.
testNumbers = [2, 3, 4, 5, 6, 7, 8, 19, 33];
function isGreaterThanAHundy(array) {
	let sum = array.reduce(function (accumulator, currentValue) {
		return accumulator + currentValue;
	});
	if (sum > 100) {
		return true;
	} else {
		return false;
	}
}
isGreaterThanAHundy(testNumbers);
// console.log('9. result: ', isGreaterThanAHundy(testNumbers));
// 10.	Write a function that takes an array of numbers and returns the average of all the elements in the array.

function findAvg(array) {
	let sum = 0;
	let total = array.length;
	for (element of array) {
		sum += element;
	}
	let avg = sum / total;
	return avg;
}
findAvg(testNumbers);
// console.log('10. result: ', findAvg(testNumbers));

// 11.	Write a function that takes two arrays of numbers and returns true if the average of the elements in the first array is greater than the average of the elements in the second array.
function testArrayAvgs(array1, array2) {
	let avg1 = findArrayAvg(array1);
	let avg2 = findArrayAvg(array2);

	function findArrayAvg(array) {
		let sum = 0;
		let total = array.length;
		for (element of array) {
			sum += element;
		}
		let avg = sum / total;
		return avg;
	}
	if (avg1 > avg2) {
		return true;
	} else {
		return false;
	}
}
testArrayAvgs(ages, testNumbers);
// console.log('11. result: ', testArrayAvgs(ages, testNumbers));

// 12.	Write a function called willBuyDrink that takes a boolean isHotOutside, and a number moneyInPocket, and returns true if it is hot outside and if moneyInPocket is greater than 10.50.
let isHotOutside = true;
let moneyInPocket = 11;

function willBuyDrink(boolean, number) {
	if (boolean === true && number > 10.5) {
		return true;
	} else {
		return false;
	}
}
willBuyDrink(isHotOutside, moneyInPocket);
// console.log('12. result: ', willBuyDrink(isHotOutside, moneyInPocket));

// 13.	Create a function of your own that solves a problem. In comments, write what the function does and why you created it.
function canIBuyIt(cost, wallet) {
	if (cost < wallet) {
		return true;
	} else {
		return false;
	}
}

canIBuyIt(5, 50);
// checks if I can purchase an item based on if the cost is less than the amount of money in my wallet.
