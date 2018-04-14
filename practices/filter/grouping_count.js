'use strict';

function grouping_count(collection) {

  //在这里写入代码
  var res = [];
  collection.forEach(function(x){
    res[x] = res[x]>=1?res[x]+1:1;

  })
 return res;
}


module.exports = grouping_count;
