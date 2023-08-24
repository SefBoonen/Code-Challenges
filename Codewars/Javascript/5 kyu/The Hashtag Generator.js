// https://www.codewars.com/kata/52449b062fb80683ec000024/train/javascript

function generateHashtag (str) {
    str = str.replace(/\s+/, " ");
    
    if(str == "" || str == " ") {
      return false;
    }
    
    let split = str.split(/\s+/);
    
    let hashtag = "#" + split.map(word => {
      return word.charAt(0).toUpperCase() + word.slice(1);
    }).join("");
    
    if(hashtag.length > 140) {
      return false;
    }
    
    return hashtag;
  }