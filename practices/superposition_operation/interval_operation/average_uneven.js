'use strict';

function average_uneven(collection) {

  //在这里写入代码
  var result =0;
  for(var i=0;i<collection.length;i++)
  {
    if(collection[i]%2!=0)
    {
       result +=collection[i];
       var average = result/collection.length*2;
    }
  }
  return average;
}

module.exports = average_uneven;
