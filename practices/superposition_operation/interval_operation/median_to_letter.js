'use strict';

function median_to_letter(collection) {

  //在这里写入代码
  var all = [NaN,'a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];
  var result = collection.length/2;
  var result1 =(collection[result]+collection[result+1])/2;
  var m=result1;
  var n=parseInt(result1);
  if(m-n>=0.5)
  {
    var p=n+1;
  }
  else{
    var p=n;
  }
  
return  'a'+all[n-26];
}

module.exports = median_to_letter;
