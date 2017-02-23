/*Write a range function that takes two arguments, start and end, 
and returns an array containing all the numbers from start up to (and including) end. */

function range(start, end, step){

	var finalArray = [];

	if(step === undefined){
		step = 1;
	}

	if(start < end){
		
		for(var i = start; i <= end; i+=step){
		finalArray.push(i);
		}
	
	}else{
		
		for(var i = start; i >= end; i+=step){
		finalArray.push(i);
		}

	}

	return finalArray;
}

/*Next, write a sum function that takes an array of numbers and returns the sum of these numbers. 
Run the previous program and see whether it does indeed return 55.*/

function sum(numArray){

	var total = numArray[0];

	for(var i = 1; i < numArray.length; i++){
		total+= parseInt(numArray[i]);
	}
	return total;
}



console.log(range(1, 10));
// → [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
console.log(range(5, 2, -1));
// → [5, 4, 3, 2]
console.log(sum(range(1, 10)));
// → 55

