
const cardAnimation = () => {
  const card = document.querySelector(".card");
  const containerCard = document.querySelector(".container-card");
  //Items
  const title = document.querySelector(".title");
  const cocktail = document.querySelector(".cocktail img");
  console.log(cocktail)
  const view = document.querySelector(".view");
  const description = document.querySelector(".info h3");
  const sizes = document.querySelector(".sizes");

  //Moving Animation Event
  containerCard.addEventListener("mousemove", (e) => {
    let xAxis = (window.innerWidth / 3 - e.pageX) / 15;
    let yAxis = (window.innerHeight * 1.25 - e.pageY) / 15;
    card.style.transform = `rotateY(${xAxis}deg) rotateX(${yAxis}deg)`;
  });
  //Animate In
  containerCard.addEventListener("mouseenter", (e) => {
    card.style.transition = "none";
    //Popout
    title.style.transform = "translateZ(100px)";
    cocktail.style.transform = "translateZ(120px) rotateZ(25deg)";
    description.style.transform = "translateZ(70px)";
    view.style.transform = "translateZ(30px)";
  });
  //Animate Out
  containerCard.addEventListener("mouseleave", (e) => {
    card.style.transition = "all 1s ease";
    card.style.transform = `rotateY(0deg) rotateX(0deg)`;
    //Popback
    title.style.transform = "translateZ(0px)";
    cocktail.style.transform = "translateZ(0px) rotateZ(0deg)";
    description.style.transform = "translateZ(0px)";
    view.style.transform = "translateZ(0px)";
  });
}

export { cardAnimation }