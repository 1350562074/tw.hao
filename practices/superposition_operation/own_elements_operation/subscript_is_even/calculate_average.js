'use strict';
var calculate_average = function(collection){
    var result =0;
    for(var i=0;i<collection.length;i++)
    {
        if(collection[i]%2==0)
        {
        result += collection[i];
        }
    }
    var average = result/collection.length*2;
    return average;
};
module.exports = calculate_average;
