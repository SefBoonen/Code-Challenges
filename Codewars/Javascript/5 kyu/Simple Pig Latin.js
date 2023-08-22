// https://www.codewars.com/kata/520b9d2ad5c005041100000f/train/javascript

function pigIt(str){
    let words = str.split(" ");
    let ans = "";
    
    for(let i = 0; i < words.length; i++) {
      for(let j = 1; j < words[i].length; j++) {
        if(words[i].match(/[?.!]/)) break;
        ans += words[i][j];
      }
      if(!words[i].match(/[?.!]/)) {
        ans += words[i][0];
        ans += "ay ";
      } else {
        ans += `${words[i]} `;
      }
    }
    
    return ans.slice(0, ans.length - 1);
  }