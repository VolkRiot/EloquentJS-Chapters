/*Recursion

We’ve seen that % (the remainder operator) can be used to test whether a number is even or odd by using % 2 to check whether it’s divisible by two. Here’s another way to define whether a positive whole number is even or odd:

 Zero is even.

 One is odd.

 For any other number N, its evenness is the same as N - 2.

Define a recursive function isEven corresponding to this description. The function should accept a number parameter and return a Boolean. */

function isEven(number){

	if (number < 0){
		number = number * -1;
	}

	if (number === 0){
		return true;
	}

	if (number === 1){
		return false;
	}
	else{
		number -= 2;
		return isEven(number);
	}
	
}

console.log(isEven(50));
// → true
console.log(isEven(75));
// → false
console.log(isEven(-1));
// → ??