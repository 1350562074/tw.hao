'use strict';
function one_add_next_multiply_three(collection){
  var result = [];
  for(var i =0;i<collection.length-1;i++)
  {
   var m= (collection[i]+collection[i+1])*3;
   result.push(m);
  }
  return result;
}
module.exports = one_add_next_multiply_three;
