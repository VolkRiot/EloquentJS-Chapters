/*Write a function, deepEqual, that takes two values and
returns true only if they are the same value or are objects with the
 same properties whose values are also equal when compared with a
 recursive call to deepEqual.
To find out whether to compare two things by identity
(use the === operator for that) or by looking at their properties,
you can use the typeof operator.
If it produces "object" for both values, you should do a deep comparison.
But you have to take one silly exception into account: by a historical accident,
typeof null also produces "object".*/

function deepEqual(obj1, obj2){

  if( (typeof obj1 === 'object' && obj1 !== null) && (typeof obj2 === 'object' && obj2 !== null) ){
    if(Object.keys(obj1).length !== Object.keys(obj2).length){
      return false;
    }

    for (var item in obj1){
        if(obj2.hasOwnProperty(item)){
          if(!deepEqual(obj1[item], obj2[item])){
            return false;
          }
        }else{
          return false;
        }
    }

    return true;

  }else{
    return obj1 === obj2;
  }

}
var obj = {here: {is: "an"}, object: 2};
console.log(deepEqual(obj, obj));
// → true
console.log(deepEqual(obj, {here: 1, object: 2}));
// → false
console.log(deepEqual(obj, {here: {is: "an"}, object: 2}));
// → true
