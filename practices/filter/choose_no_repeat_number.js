'use strict';

function choose_no_repeat_number(collection) {

  //在这里写入代码
  var result = [collection[0]];
  for(var i=0;i<collection.length-1;i++)
  if(collection[i] != collection[i+1])
  result.push(collection[i+1]);
  return result;
}

module.exports = choose_no_repeat_number;
