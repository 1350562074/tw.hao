'use strict';
var single_element = function(collection){
    var result = [];
for(var i=0;i<collection.length;i++)
{
    if(i%2!=0)
    {
        result.push(collection[i]);
    }
}
for(var j=0;j<result.length;j++)
{
    
    if(result[j+2]==result[j])
    {
        result.splice(j+2,1);
    }
    if(result[j]==result[j+1])
    {
        result.splice(j,2);
    }
}
return result;
};
module.exports = single_element;
