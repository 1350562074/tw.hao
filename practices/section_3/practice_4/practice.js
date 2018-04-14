function create_updated_collection(collection_a, object_b) {
  //在这里写入代码
  var arr =[];
  var result = [];
  for(var i=0;i<collection_a.length;i++)
  {
      if(!arr[collection_a[i]])
      {
          arr[collection_a[i][0]] = {};
          arr[collection_a[i][0]].key = collection_a[i][0];
          arr[collection_a[i][0]].count = 1;
      }
      else
      {
          arr[collection_a[i][0]].count ++;
      }
      if(collection_a[i].length>1)
      {
        arr[collection_a[i][0]].count +=collection_a[i][2]-1;
      }
  }
   for(var i in arr){
      result.push(arr[i]);
   }
   
    for(var i=0;i<result.length;i++)
    {
      for(var j =0;j<object_b.value.length;j++)
      {
        if(object_b.value[j]==result[i].key)
        {
          var m=result[i].count%3;
          var n=(result[i].count-m)/3;
          result[i].count -=n;
          break;
        }
      }
    }
    return result;
}

module.exports = create_updated_collection;
