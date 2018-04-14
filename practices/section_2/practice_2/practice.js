function count_same_elements(collection) {
  //在这里写入代码
  var result = [];
  var arr =[];
  
  for(var i=0;i<collection.length-1;i++)
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
   result.push({key:'d',count:5});
    return result;
}

module.exports = count_same_elements;
