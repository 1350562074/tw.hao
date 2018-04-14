'use strict';

function average_to_letter(collection) {

  //在这里写入代码
    //在这里写入代码
    var all = [NaN,'a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];
    var result =collection[0];
   for(var i=1;i<collection.length;i++)
  {
     result +=collection[i];
  }  
  var m=result/collection.length;
  var n=parseInt(result/collection.length);
  if(m-n>=0.5)
  {
    var p =all[n+1];
  }
  else{
    var p=all[n];
  }
  return p;
}

module.exports = average_to_letter;

