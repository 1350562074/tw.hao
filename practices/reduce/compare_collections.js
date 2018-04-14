'use strict';

function compare_collections(collection_a, collection_b) {
  //在这里写入代码
  var i=collection_a.length;
  var j=collection_b.length;
  if(i==j)
  {
    for(var m =0;m<i;m++)
    {
      if(collection_a[m]==collection_b[m])
      {
        var result = true;
      }
    }
  }
  return result;
}

module.exports = compare_collections;


