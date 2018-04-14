'use strict';

function compute_chain_median(collection) {
  //在这里写入代码
    //在这里写入代码
    collection=collection.split("->");
    var result = [];
    for(var i = 0;i<collection.length;i++)
    {
     var k =Number(collection[i]);
     result.push(k);
    }
    var compare = function(x,y)
    {
     if(x<y){
       return -1;
     }else if(x>y){
       return 1;
     }else{
       return 0;
     }
    }
  var m =result.sort(compare);
  var n =(m[5]+m[6])/2;
  return n;
}

module.exports = compute_chain_median;
