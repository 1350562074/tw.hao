'use strict';

function compute_average(collection) {
  //在这里写入代码
  var result =collection[0];
  for(var i=1;i<collection.length;i++)
  {
    result +=collection[i];
  }
  result = result / collection.length;
  return result;
}

module.exports = compute_average;

