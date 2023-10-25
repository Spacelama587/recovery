const btn = document.getElementById("menu-btn");
const menu = document.getElementById("menu");

btn.addEventListener("click", navToggle);

function navToggle() {
  btn.classList.toggle("open");
  menu.classList.toggle("flex");
  menu.classList.toggle("hidden");
}
const src = [
  "ressources/roman.jpg",
  "ressources/danish.jpg",
  "ressources/mideval.jpg",
  "ressources/eighteen.jpg",
  "ressources/18thcentuerysvg.png",
  "ressources/13879.jpg",
  "ressources/6961780.jpg",
];

// const dates = ["-3300 | 476", "476 | 1492", "1492 | 1792", "1792 | AJD"];

ScrollTrigger.create({
  trigger: ".sections",
  pin: ".tooltip",
  // Trigger Scroller
  start: "top 40%",
  end: "bottom 55%",
  // markers: true
});

const sections = document.querySelectorAll(".section");

sections.forEach((section, index) => {
  // console.log(index);
  ScrollTrigger.create({
    trigger: section,
    start: "top center",
    end: "bottom center",
    onEnter: () => {
      gsap.set(".tooltip-img", {
        attr: { src: src[index] },
      });
      // gsap.set(".tooltip p", {
      //   innerText: dates[index],
      // });
    },
    onEnterBack: () => {
      gsap.set(".tooltip-img", {
        attr: { src: src[index] },
      });
      // gsap.set(".tooltip p", {
      //   innerText: dates[index],
      // });
    },
  });
});
