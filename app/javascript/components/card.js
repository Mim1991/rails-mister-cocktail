
const cardAnimation = () => {
  const containerCard = document.querySelectorAll(".container-card");

  // select cocktail and iterate
  containerCard.forEach( (selection) => {
    selection.addEventListener("mousemove", (e) => {
      const card = document.querySelector(".card");
      const title = document.querySelector(".title");
      const cocktail = document.querySelector(".cocktail img");
      const view = document.querySelector(".view");
      const description = document.querySelector(".info h3");
      let xAxis = (window.innerWidth / 3 - e.pageX) / 15;
      let yAxis = (window.innerHeight * 1.3 - e.pageY) / 15;
      card.style.transform = `rotateY(${xAxis}deg) rotateX(${yAxis}deg)`;
    });
  
  // hover over animation
    selection.addEventListener("mouseenter", (e) => {
      const card = document.querySelector(".card");
      const title = document.querySelector(".title");
      const cocktail = document.querySelector(".cocktail img");
      const view = document.querySelector(".view");
      const description = document.querySelector(".info h3");
      card.style.transition = "none";
      // movement for items
      title.style.transform = "translateZ(100px)";
      cocktail.style.transform = "translateZ(120px) rotateZ(25deg)";
      description.style.transform = "translateZ(70px)";
      view.style.transform = "translateZ(30px)";
    });
  
  // hover out animation
    selection.addEventListener("mouseleave", (e) => {
      const card = document.querySelector(".card");
      const title = document.querySelector(".title");
      const cocktail = document.querySelector(".cocktail img");
      const view = document.querySelector(".view");
      const description = document.querySelector(".info h3");
      card.style.transition = "all 1s ease";
      card.style.transform = `rotateY(0deg) rotateX(0deg)`;
      // move them back
      title.style.transform = "translateZ(0px)";
      cocktail.style.transform = "translateZ(0px) rotateZ(0deg)";
      description.style.transform = "translateZ(0px)";
      view.style.transform = "translateZ(0px)";
    });
  })
  // })
}

export { cardAnimation }