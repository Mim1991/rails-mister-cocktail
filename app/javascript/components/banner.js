  
const initLogoLoad = () => {
  const logo = document.querySelectorAll("#logo path");
  let t = 0.3;
  logo.forEach(letter => {
  console.log(letter);
  letter.style.strokeDasharray = letter.getTotalLength()+"px";
  letter.style.strokeDashoffset = letter.getTotalLength()+"px";
  letter.style.animation = "line-anim 1s ease forwards"+" " + t +"s";
  t = t+0.25;
  })
}

export {initLogoLoad};