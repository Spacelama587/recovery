const btn = document.getElementById("menu-btn");
const menu = document.getElementById("menu");

btn.addEventListener("click", navToggle);

function navToggle() {
  btn.classList.toggle("open");
  menu.classList.toggle("flex");
  menu.classList.toggle("hidden");
}
// const src = [
//   "ressources/roman.jpg",
//   "ressources/danish.jpg",
//   "ressources/mideval.jpg",
//   "ressources/eighteen.jpg",
//   "ressources/18thcentuerysvg.png",
//   "ressources/13879.jpg",
//   "ressources/6961780.jpg",
// ];

// // const dates = ["-3300 | 476", "476 | 1492", "1492 | 1792", "1792 | AJD"];

// ScrollTrigger.create({
//   trigger: ".sections",
//   pin: ".tooltip",
//   // Trigger Scroller
//   start: "top 40%",
//   end: "bottom 55%",
//   // markers: true
// });

// const sections = document.querySelectorAll(".section");

// sections.forEach((section, index) => {
//   // console.log(index);
//   ScrollTrigger.create({
//     trigger: section,
//     start: "top center",
//     end: "bottom center",
//     onEnter: () => {
//       gsap.set(".tooltip-img", {
//         attr: { src: src[index] },
//       });
//       // gsap.set(".tooltip p", {
//       //   innerText: dates[index],
//       // });
//     },
//     onEnterBack: () => {
//       gsap.set(".tooltip-img", {
//         attr: { src: src[index] },
//       });
//       // gsap.set(".tooltip p", {
//       //   innerText: dates[index],
//       // });
//     },
//   });
// });

const sections = document.querySelectorAll(".section");
let currentSection = 0;

function showNextSection(button) {
  sections[currentSection].style.display = "none";

  // Hide the "Read More" button for the previous section
  button.style.display = "none";

  currentSection++;
  if (currentSection < sections.length) {
    sections[currentSection].style.display = "block";

    // Update the "Read More" button text for the new section
    if (currentSection < sections.length - 1) {
      const nextSection = sections[currentSection + 1];
      button.textContent =
        "Read More about " +
        nextSection.querySelector(".bg-green-500").textContent;
      nextSection.querySelector("button").style.display = "block";
    }
  }
}

// Initialize to display the first section
sections[currentSection].style.display = "block";

// Show the modal
function showContactModal() {
  const modal = document.getElementById("contactModal");
  modal.classList.remove("opacity-0", "pointer-events-none");
  modal.classList.add("opacity-100", "pointer-events-auto");

  // Add the 'modal-open' class to disable background scrolling
  document.body.classList.add("modal-open");
}

// Hide the modal
function hideContactModal() {
  const modal = document.getElementById("contactModal");
  modal.classList.remove("opacity-100", "pointer-events-auto");
  modal.classList.add("opacity-0", "pointer-events-none");

  // Remove the 'modal-open' class to enable background scrolling
  document.body.classList.remove("modal-open");
}

// Attach the event listener to your "Contact Us" cards
const contactCards = document.querySelectorAll(".contact-card");
contactCards.forEach(function (contactCard) {
  contactCard.addEventListener("click", showContactModal);
});

document
  .getElementById("contactCloseButton")
  .addEventListener("click", hideContactModal);

// Show the modal after a delay of 9 seconds
setTimeout(function () {
  showContactModal();
}, 1400);
