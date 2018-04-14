'use strict';

function choose_divisible_integer(collection_a, collection_b) {

  //在这里写入代码
  var result = [];
  for (var i=0;i<collection_a.length;i++)
   {
     for(var j=0;j<collection_b.length;j++)
     {
       if(collection_a[i]%2==0)
       {
         result.push(collection_a[i]);
         break;
       }
       if(collection_a[i]%3==0)
       {
         result.push(collection_a[i]);
         break;
       }
       if(collection_a[i]%5==0)
       {
         result.push(collection_a[i]);
         break;
       }
     }
   }
   return result;
}

module.exports = choose_divisible_integer;
