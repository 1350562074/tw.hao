function collect_same_elements(collection_a, object_b) {
  //在这里写入代码
  var result = [];
  var collection_b = {value: ["a", "d", "e", "f"]};
  var collection_c =collection_b.value;
  for(var i=0;i<collection_a.length;i++)
  {
    for(var j=0;j<collection_c.length;j++)
    {
      if(collection_a[i]==collection_c[j])
      {
        result.push(collection_a[i]);
      }
    }
  }
  return result;
}

module.exports = collect_same_elements;
