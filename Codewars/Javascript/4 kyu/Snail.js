//https://www.codewars.com/kata/521c2db8ddc89b9b7a0000c1/train/javascript

snail = function(array) {
    let ans = [];
    
    if(array.length < 2) {
      return array[0];
    }
    
    while(array.length) {
      //right
      for(let i = 0; i < array[0].length; i++) {
        ans.push(array[0][i]);
      }
      array.splice(0, 1);
  
      //downward
      for(let i = 0; i < array.length; i++) {
        ans.push(array[i][array.length]);
        array[i].splice(array.length, 1);
      }
  
      //left
      for(let i = array.length - 1; i >= 0; i--) {
        ans.push(array[array.length - 1][i]);
      }
      array.splice(array.length - 1, 1);
  
      //up
      for(let i = array.length - 1; i >= 0; i--) {
        ans.push(array[i][0]);
        array[i].splice(0, 1);
      }
    }
  
    return ans
  }