//https://www.codewars.com/kata/51ba717bb08c1cd60f00002f/train/javascript

function solution(list){
    let ans = "";
    for(let i = 0; i < list.length; i++) {
      let start = list[i];
      let startI = i;
      while(list[i] == list[i + 1] - 1) {
        i++;
      }
      if(i - startI > 1) {
        ans += `${start.toString()}-${list[i].toString()},`;
      } else if(i - startI == 1) {
        ans += `${start.toString()},${list[i].toString()},`;
      } else {
        ans += `${start.toString()},`;
      }
    }
    ans = ans.slice(0, ans.length - 1);
    return ans;
  }