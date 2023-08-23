//https://www.codewars.com/kata/514b92a657cdc65150000006

function solution(number){
    if(number < 2) {
      return 0;
    }
    
    let arr = [];
    
    for(let i = 0; i < number; i++) {
      if(i % 3 == 0) {
        arr.push(i);
      } else if (i % 5 == 0) {
        arr.push(i);
      }
    }
    
    return arr.reduce((acc, cur) => acc + cur, 0);
  }