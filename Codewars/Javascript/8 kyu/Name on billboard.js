//

function billboard(name, price = 30){
    let ans = 0;
    return name.split("").map(x => ans += price)[name.split("").map(x => ans += price).length - 1];
  } 