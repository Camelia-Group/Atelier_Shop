
function stars(rating) {
  let star = "";

  for (let i = 0; i < rating; i++) {
    star += "★";
  }
  for(let j=0; j < star.length; j++){
    if(star.length <5) {
      star += "☆"
    }
  }

  return star;
}

export default Helper;