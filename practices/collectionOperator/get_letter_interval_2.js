'use strict';

function get_letter_interval_2(number_a, number_b) {
  //在这里写入代码
  var x = ['','a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];
  var numbers =[];
  if(number_a<number_b)
  {
        var j = number_b%26;
        var k = (number_b-j)/26;
    if(k>=1)
    {
        for(var i=number_a;i<=26;i++)
        {
          numbers.push(x[i]);
        }
        if(k==1)
        {
           for(var q = 1;q<=j;q++)
         {
          numbers.push(x[k]+x[q]);
         }
        }
        if(k>1)
        {
          for(var p=1;p<=k-1;p++)
          {
            for(var q=1;q<=26;q++)
            numbers.push(x[p]+x[q]);
          }
          for(var r=1;r<=j;r++)
          {
            numbers.push(x[k]+x[r]);
          }
        }
    }
    else if(k=0)
    {
        for(var m =number_a;m<=number_b;m++)
        numbers.push(x[m]);
    }
  }
  else if (number_a>number_b)
  {
        var j = number_a%26;
        var k = (number_a-j)/26;
    if(k>=1)
    {
      if(k==1)
      {
        for(var i = j;i>=1;i--)
        {
        numbers.push(x[k]+x[i]);
        }
        for(var p = 26;p>=number_b;p--)
        {
         numbers.push(x[p]);
        }
      }
      if(k>1)
      {
        for(var p=j;p>=1;p--)
        {
          numbers.push(x[k]+x[p]);
        }
        for(var q=k-1;q>=1;q--)
        {
          for(var n =26;n>=1;n--)
          numbers.push(x[q]+x[n]);
        }
        for(var m=26;m>=number_b;m--)
        {
          numbers.push(x[m]);
        }
      }
    }
    else if(k=0)
    {
      for(var m=number_a;m>=number_b;m--)
      numbers.push(x[m]);
    }
  } 
  else if(number_a==number_b)
  {
    var r= number_a%26;
    var s= (number_a-r)/26;
    numbers.push(x[s]+x[r]);
  }
  return numbers;
}

module.exports = get_letter_interval_2;

