function create_updated_collection(collection_a, object_b) {
  //在这里写入代码
  var result = collection_a;
  for(var i = 0; i<collection_a.length;i++)
  {
    for(var j=0;j<object_b.value.length;j++)
    {
      if(collection_a[i].key==object_b.value[j])
      {
        var n =parseInt(collection_a[i].count/3);
        /*var m=collection_a[i].count % 3;
        var n=(collection_a[i].count - m)/3;*/
        collection_a[i].count -= n;
      }
    }
  }
    return result;
}

module.exports = create_updated_collection;
