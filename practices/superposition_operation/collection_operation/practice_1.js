'use strict';

function hybrid_operation(collection) {

  //在这里写入代码
  var result =3*collection[0]+2 ;
  for(var i=1;i<collection.length;i++)
  {
     result += 3*collection[i]+2;
  }
  return result;
}

module.exports = hybrid_operation;

