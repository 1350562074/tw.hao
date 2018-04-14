'use strict';

function compute_median(collection) {
  //在这里写入代码
  if(collection.length%2!=0)
  {
    var result =collection[(collection.length+1)/2-1];
  }
  else if(collection.length%2==0)
  {
    for(var i=0;i<collection.length-1;i++)
   {
    for(var j=0;j<collection.length-i-1;j++)
    {
      if(collection[j]>collection[j+1])
      {
        var t=collection[j];
        collection[j]=collection[j+1];
        collection[j+1] =t;
      }
    }

   }
   var m=collection.length/2;
   var n=m-1;
   var result =(collection[n]+collection[m])/2;
  }
  return result;
}

module.exports = compute_median;


