'use strict'

// function urlify(str) {
// 	return str.split(' ').join('%20');
// }
// console.log(urlify("Let's go to the movies"));

// function filter(arr) {
// 	let newArray = []
// 	arr.forEach(num => {
// 		if (num >= 5) {
// 			newArray.push(num);
// 		}
// 	})
// 	return newArray;
// }
// console.log(filter([1, 5, 6, 3, 8, 9]));

//Max Sum

// function largest(arr) {
// 	let sum = 0;
// 	let maxSum = 0;

// 	for (let i = 0; i < arr.length; i++) {
// 		sum += arr[i];
// 		if (sum > maxSum) {
// 			maxSum = sum;
// 		}
// 	}
// 	return maxSum;
// }
// console.log(largest([4, 6, -3, 5, -2, 1]))
// console.log(largest([4, 2, 6, -3, 5, -2, 1, 2, -7]))

//Merge Arrays
// function merge(arr1, arr2) {
// 	arr1.forEach(item => {
// 		arr2.push(item);
// 		arr2.sort(function (a, b) { return a - b });
// 	})
// 	return arr2;
// }
// console.log(merge([1, 3, 6, 8, 11], [2, 3, 5, 8, 9, 10]))

//Remove characters
//no filter, split, or join

function remove(str) {
	let regex = /a|e|i|o|u/gi;
	return str.replace(regex, '')
}
console.log(remove('Battle of the Vowels: Hawaii vs. Grozny'))
//'Battle of the Vowels: Hawaii vs. Grozny', 'aeiou'

//Products
// @ [0]  product = [1]*[2]*[3]

function product(arr) {
	let sum = 1;
	let sumArray = [];
	for (let i = 0; i < arr.length; i++) {

		arr.forEach(num => {
			if (arr[i] !== num) {
				sum *= num
			}
		})
		sumArray.push(sum)
		sum = 1;
	}
	return sumArray;
}
console.log(product([1, 3, 9, 4]))

//2D array

// Input: [4,6,-3,5,-2,1]
// Output: 12

function maxSum(arr) {

    let sum = 0;
    let bestSum = 0;

    for (let i = 0; i < arr.length; i++) {
        sum += arr[i];

    }
}

