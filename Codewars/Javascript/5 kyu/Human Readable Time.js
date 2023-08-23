// https://www.codewars.com/kata/52685f7382004e774f0001f7/train/javascript

function humanReadable (seconds) {
    let ans = "";
    
    //hours
    let hours = Math.floor(seconds / 3600);
    seconds -= hours * 3600;
    
    //mins
    let min = Math.floor(seconds / 60);
    seconds -= min * 60;
    
    if(hours.toString().length == 1) {
      hours = `0${hours}`;
    }
    if(min.toString().length == 1) {
      min = `0${min}`;
    }
    if(seconds.toString().length == 1) {
      seconds = `0${seconds}`;
    }
    
    return `${hours}:${min}:${seconds}`;
  }