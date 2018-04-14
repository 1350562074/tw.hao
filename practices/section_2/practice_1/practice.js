function count_same_elements(collection) {
  //在这里写入代码
  var result = [];
var arr =[];

for(var i=0;i<collection.length;i++)
{
    if(!arr[collection[i]])
    {
        arr[collection[i]] = {};
        arr[collection[i]].key = collection[i];
        arr[collection[i]].count = 1;
    }
    else
    {
        arr[collection[i]].count ++;
    }
}
 for(var i in arr){
    result.push(arr[i]);
 }
  return result;
}

module.exports = count_same_elements;
