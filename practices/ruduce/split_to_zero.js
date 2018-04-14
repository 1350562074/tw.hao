'use strict';

function spilt_to_zero(number, interval) {
  //在这里写入代码
  var result = [];
  var numb =number*10;
  var inter =interval*10;
  for(var i=0; ;i++)
  {
    if(numb-inter*i>0)
    {
      result.push((numb-inter*i)/10);
    }
    else if(numb-inter*i==0)
    {
      result.push(0);
      break;
    }
    else if(numb-inter*i<0)
    {
      result.push((numb-inter*i)/10);
      break;
    }
  }
 
  return result;
}

module.exports = spilt_to_zero;
