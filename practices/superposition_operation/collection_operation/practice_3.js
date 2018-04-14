'use strict';

function hybrid_operation_to_uneven(collection) {
  var result =0 ;
  for(var i=0;i<collection.length;i++)
  {
    if(collection[i]%2!=0)
    {
     result += 3*collection[i]+5;
    }
  }
  return result;
  //在这里写入代码
}

module.exports = hybrid_operation_to_uneven;

