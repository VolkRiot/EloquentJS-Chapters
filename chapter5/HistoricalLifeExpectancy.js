/*When we looked up all the people in our data set that lived more
than 90 years, only the latest generation in the data came out. Let’s take a
closer look at that phenomenon.
Compute and output the average age of the people in the ancestry data set
per century. A person is assigned to a century by taking their year of death,
dividing it by 100, and rounding it up, as in Math.ceil(person.died / 100).*/

function average(array) {
  function plus(a, b) { return a + b; }
  return array.reduce(plus) / array.length;
}

// Declare object to hold items keys by century
var final = {}

ancestry.forEach(function(person){
  // If no century property defined then create one based on the calculation
	if(!final.hasOwnProperty(Math.ceil(person.died / 100))){
		final[Math.ceil(person.died / 100)] = [];
	}
  	final[Math.ceil(person.died / 100)].push(person.died - person.born)
})

for (var item in final){
	console.log(item + ": " + average(final[item]));
}

// → 16: 43.5
//   17: 51.2
//   18: 52.8
//   19: 54.8
//   20: 84.7
//   21: 94
