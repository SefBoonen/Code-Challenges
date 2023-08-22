//https://www.codewars.com/kata/570e8ec4127ad143660001fd/train/javascript

function billboard(name, price = 30){
    let ans = 0;
    return name.split("").map(x => ans += price)[name.split("").map(x => ans += price).length - 1];
  } 