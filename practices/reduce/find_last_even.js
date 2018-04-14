'use strict';

function find_last_even(collection) {
  //在这里写入代码
  var m =collection.length;
  var result =collection[m-1];
  for(var i=m-1;i>=0;i--)
  if(collection[i]%2==0)
  {
    break;
  }
  result = collection[i];
  return result;
}

module.exports = find_last_even;
