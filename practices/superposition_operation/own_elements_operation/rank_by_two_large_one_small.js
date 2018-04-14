'use strict';
function rank_by_two_large_one_small(collection){
  //这里写代码。。。
  var compare = function(x,y){
    if(x<y){
        return -1;
    }else if(x>y){
        return 1;
    }else{
        return 0;
    }
}
var m =collection.sort(compare);
m.splice(3,0,collection[0]);
m.splice(0,1);
m.splice(6,0,collection[3]);
m.splice(3,1);
return m;
}
module.exports = rank_by_two_large_one_small;
