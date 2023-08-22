//https://www.codewars.com/kata/5264d2b162488dc400000001/train/javascript

function spinWords(string){
    return string.split(" ").map(x => {if(x.length >= 5) {return x.split("").reverse().join("")} else {return x}}).join(" ")
  }