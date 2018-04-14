'use strict';
var even_asc_odd_desc = function(collection){
    var result1 = [];
    var result2 = [];
    var result = [];
    for(var i = 0;i<collection.length;i++)
    {
        if(collection[i]%2==0)
        {
            result1.push(collection[i]);
        }
        if(collection[i]%2!=0)
        {
            result2.push(collection[i]);
        }
    }
    var compare = function(x,y){
        if(x<y){
            return -1;
        }else if(x>y){
            return 1;
        }else{
            return 0;
        }
    }
    var m =result1.sort(compare);
    var compare = function(x,y){
        if(x<y){
            return 1;
        }else if(x>y){
            return -1;
        }else{
            return 0;
        }
    }
    var n=result2.sort(compare);
    for(var j =0;j<n.length;j++)
    {
     m.push(n[j]);
    }
    return m;
};
module.exports = even_asc_odd_desc;
