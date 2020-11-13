  
const initLogoLoad = () => {
  const logo = document.querySelectorAll("#logo path");
  let t = 0.2;
  logo.forEach(letter => {
  letter.style.strokeDasharray = letter.getTotalLength()+"px";
  letter.style.strokeDashoffset = letter.getTotalLength()+"px";
  letter.style.animation = "line-anim 1s ease forwards"+" " + t +"s";
  t = t+0.1;
  })
}

export {initLogoLoad};