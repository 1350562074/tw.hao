'use strict';
var calculate_median = function(collection){

    var result1 =[];
 for(var i=0;i<collection.length;i++)
 {
     if(collection[i]%2==0)
     {
       result1.push(collection[i]);
     }
 }
if(result1.length%2!=0)
{
    var p =(result1.length +1)/2;
    var q =result1[p-1];
}
else if(result1.length%2==0)
{
    var p =(result1.length/2);
    var q =(result1[p-1]+result1[p])/2;
}
return q;
};
module.exports = calculate_median;
