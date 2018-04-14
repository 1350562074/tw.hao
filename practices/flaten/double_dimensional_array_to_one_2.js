'use strict';

function double_to_one(collection) {

  //在这里写入代码
  var collection1;
  collection1 = collection.join(",").split(",");
  for(var i =0 ;i<collection1.length;i++)
  {
    collection1[i]=Number(collection1[i]);
  }
  collection1.splice(4,2);
  collection1.splice(5,2);
  return collection1;
}

module.exports = double_to_one;
