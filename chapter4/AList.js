/* Write a function arrayToList that builds up a data structure like the previous
one when given [1, 2, 3] as argument, and write a listToArray function that
produces an array from a list.
Also write the helper functions prepend, which takes an element and a list
and creates a new list that adds the element to the front of the input list,
and nth, which takes a list and a number and returns the element at the given
position in the list, or undefined when there is no such element.

If you haven’t already, also write a recursive version of nth.*/

function arrayToList(passedArray){
    var obj = {};
    var list = null;

    for(var i = passedArray.length - 1; i >= 0; i--){
      list = {value: passedArray[i], rest: list};
    }

    return list;
}

function listToArray(passedList){

  var returnArray = [];

  for(var obj = passedList; obj; obj = obj.rest){
    returnArray.push(obj.value);
  }

  return returnArray;
}

function prepend(elem, list){
  return {value: elem, rest: list};
}

function nth(list, num){
  if(num === 0){
    return list.value;
  }
  return nth(list.rest, num - 1);
}

console.log(arrayToList([10, 20]));
// → {value: 10, rest: {value: 20, rest: null}}
console.log(listToArray(arrayToList([10, 20, 30])));
// → [10, 20, 30]
console.log(prepend(10, prepend(20, null)));
// → {value: 10, rest: {value: 20, rest: null}}
console.log(nth(arrayToList([10, 20, 30]), 1));
// → 20
