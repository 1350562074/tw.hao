'use strict';

function get_letter_interval(number_a, number_b) {
  //在这里写入代码
  var all = [NaN,'a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];
  var result = [];
  if(number_a<number_b)
  {
    for(var i= number_a;i<=number_b;i++)
    {
     result.push(all[i]);
    }
  }
  else if(number_a>number_b)
  {
    for(var j=number_a;j>=number_b;j--)
    {
      result.push(all[j]);
    }
  }
  else if(number_a==number_b)
  {
    result.push(all[number_a]);
  }
  return result;
}

module.exports = get_letter_interval;
