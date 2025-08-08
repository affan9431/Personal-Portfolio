// // TYPE JS
var typed = new Typed("#span", {
  strings: ["Full stack  developer", "Ui/Ux designer"],
  typeSpeed: 50,
  loop: true,
});

// // GSAP

// PAGE 1
let tl = gsap.timeline();

// Check if the screen width is greater than 768px
if (window.innerWidth > 768) {
  tl.from(".logo", {
    y: 30,
    opacity: 0,
    duration: 0.4,
    delay: 0.4,
  });

  tl.from(".list", {
    y: 30,
    opacity: 0,
    duration: 0.4,
    delay: 0.4,
    stagger: 0.2,
  });
}

tl.from("#text", {
  x: -200,
  opacity: 0,
  duration: 0.4,
  delay: 0.4,
});

tl.from("#Myimage", {
  x: 200,
  opacity: 0,
  duration: 0.4,
  delay: 0.4,
});

// Optional: Re-run the check when the window is resized
window.addEventListener("resize", () => {
  if (window.innerWidth <= 768) {
    // Reset or clear the animation for mobile screens
    tl.clear();
  }
});

// SHERY JS
Shery.mouseFollower({
  //Parameters are optional.
  skew: true,
  ease: "cubic-bezier(0.23, 1, 0.320, 1)",
  duration: 1,
});

// Ensure Shery.js is properly initialized
Shery.makeMagnet("#html-logo", {
  ease: "cubic-bezier(0.23, 1, 0.320, 1)",
  duration: 1,
});

Shery.makeMagnet("#css-logo", {
  ease: "cubic-bezier(0.23, 1, 0.320, 1)",
  duration: 1,
});

Shery.makeMagnet("#js-logo", {
  ease: "cubic-bezier(0.23, 1, 0.320, 1)",
  duration: 1,
});

Shery.makeMagnet("#react-logo", {
  ease: "cubic-bezier(0.23, 1, 0.320, 1)",
  duration: 1,
});

Shery.makeMagnet("#bootstrap-logo", {
  ease: "cubic-bezier(0.23, 1, 0.320, 1)",
  duration: 1,
});

Shery.makeMagnet("#tailwind-css-logo", {
  ease: "cubic-bezier(0.23, 1, 0.320, 1)",
  duration: 1,
});

Shery.makeMagnet("#nodejs-logo", {
  ease: "cubic-bezier(0.23, 1, 0.320, 1)",
  duration: 1,
});

Shery.makeMagnet("#mongo-logo", {
  ease: "cubic-bezier(0.23, 1, 0.320, 1)",
  duration: 1,
});

Shery.makeMagnet("#gsap-logo", {
  ease: "cubic-bezier(0.23, 1, 0.320, 1)",
  duration: 1,
});

Shery.makeMagnet("#flask-logo", {
  ease: "cubic-bezier(0.23, 1, 0.320, 1)",
  duration: 1,
});
Shery.makeMagnet("#golang-logo", {
  ease: "cubic-bezier(0.23, 1, 0.320, 1)",
  duration: 1,
});
Shery.makeMagnet("#postman-logo", {
  ease: "cubic-bezier(0.23, 1, 0.320, 1)",
  duration: 1,
});
Shery.makeMagnet("#figma-logo", {
  ease: "cubic-bezier(0.23, 1, 0.320, 1)",
  duration: 1,
});

Shery.imageMasker("#web-img img" /* Element to target.*/, {
  //Parameters are optional.
  mouseFollower: true,
  text: "Affan Dev",
  ease: "cubic-bezier(0.23, 1, 0.320, 1)",
  duration: 1,
});
Shery.imageMasker("#Myimage" /* Element to target.*/, {
  //Parameters are optional.
  mouseFollower: true,
  text: "Affan Dev",
  ease: "cubic-bezier(0.23, 1, 0.320, 1)",
  duration: 1,
});
Shery.imageMasker("#html-logo", {
  mouseFollower: true,
  text: "HTML",
  ease: "cubic-bezier(0.23, 1, 0.320, 1)",
  duration: 1,
});

Shery.imageMasker("#css-logo", {
  mouseFollower: true,
  text: "CSS",
  ease: "cubic-bezier(0.23, 1, 0.320, 1)",
  duration: 1,
});

Shery.imageMasker("#js-logo", {
  mouseFollower: true,
  text: "JavaScript",
  ease: "cubic-bezier(0.23, 1, 0.320, 1)",
  duration: 1,
});

Shery.imageMasker("#react-logo", {
  mouseFollower: true,
  text: "React",
  ease: "cubic-bezier(0.23, 1, 0.320, 1)",
  duration: 1,
});

Shery.imageMasker("#bootstrap-logo", {
  mouseFollower: true,
  text: "Bootstrap",
  ease: "cubic-bezier(0.23, 1, 0.320, 1)",
  duration: 1,
});

Shery.imageMasker("#tailwind-css-logo", {
  mouseFollower: true,
  text: "Tailwind CSS",
  ease: "cubic-bezier(0.23, 1, 0.320, 1)",
  duration: 1,
});

Shery.imageMasker("#nodejs-logo", {
  mouseFollower: true,
  text: "Node.js",
  ease: "cubic-bezier(0.23, 1, 0.320, 1)",
  duration: 1,
});

Shery.imageMasker("#mongo-logo", {
  mouseFollower: true,
  text: "MongoDB",
  ease: "cubic-bezier(0.23, 1, 0.320, 1)",
  duration: 1,
});

Shery.imageMasker("#gsap-logo", {
  mouseFollower: true,
  text: "GSAP",
  ease: "cubic-bezier(0.23, 1, 0.320, 1)",
  duration: 1,
});

Shery.imageMasker("#flask-logo", {
  mouseFollower: true,
  text: "Flask",
  ease: "cubic-bezier(0.23, 1, 0.320, 1)",
  duration: 1,
});
Shery.imageMasker("#golang-logo", {
  mouseFollower: true,
  text: "Golang",
  ease: "cubic-bezier(0.23, 1, 0.320, 1)",
  duration: 1,
});
Shery.imageMasker("#postman-logo", {
  mouseFollower: true,
  text: "Postman",
  ease: "cubic-bezier(0.23, 1, 0.320, 1)",
  duration: 1,
});
Shery.imageMasker("#figma-logo", {
  mouseFollower: true,
  text: "Figma",
  ease: "cubic-bezier(0.23, 1, 0.320, 1)",
  duration: 1,
});
Shery.imageMasker("#project-1", {
  mouseFollower: true,
  text: "Developed with Vanilla JS",
  ease: "cubic-bezier(0.23, 1, 0.320, 1)",
  duration: 1,
});
Shery.imageMasker("#project-2", {
  mouseFollower: true,
  text: "Built with React",
  ease: "cubic-bezier(0.23, 1, 0.320, 1)",
  duration: 1,
});
Shery.imageMasker("#project-3", {
  mouseFollower: true,
  text: "Built with Node.js",
  ease: "cubic-bezier(0.23, 1, 0.320, 1)",
  duration: 1,
});
Shery.imageMasker("#project-4", {
  mouseFollower: true,
  text: "Built with MERN Stack",
  ease: "cubic-bezier(0.23, 1, 0.320, 1)",
  duration: 1,
});
Shery.imageMasker("#project-5", {
  mouseFollower: true,
  text: "Built with React + Flask",
  ease: "cubic-bezier(0.23, 1, 0.320, 1)",
  duration: 1,
});
Shery.imageMasker("#project-6", {
  mouseFollower: true,
  text: "Built with MERN Stack",
  ease: "cubic-bezier(0.23, 1, 0.320, 1)",
  duration: 1,
});

// Add event listeners to elements with class 'cancel'
document.querySelectorAll(".cancel").forEach((item) => {
  item.addEventListener("click", () => {
    // Hide the main list
    document.getElementById("main-list").classList.add("hide");

    // Show hamburger icon and hide cross icon
    document.querySelector(".hamburger-icon").classList.remove("hidden");
    document.querySelector(".hamburger-icon").classList.add("visible");
    document.querySelector(".cross-icon").classList.add("hidden");
    document.querySelector(".cross-icon").classList.remove("visible");
  });
});

// Toggle hamburger menu visibility
document.getElementById("hamburger").addEventListener("click", () => {
  const mainList = document.getElementById("main-list");
  const isHidden = mainList.classList.contains("hide");

  // Toggle visibility of the main list
  if (isHidden) {
    mainList.classList.remove("hide");

    // Show cross icon and hide hamburger icon
    document.querySelector(".hamburger-icon").classList.add("hidden");
    document.querySelector(".cross-icon").classList.add("visible");
    document.querySelector(".cross-icon").classList.remove("hidden");
  } else {
    mainList.classList.add("hide");

    // Show hamburger icon and hide cross icon
    document.querySelector(".hamburger-icon").classList.remove("hidden");
    document.querySelector(".hamburger-icon").classList.add("visible");
    document.querySelector(".cross-icon").classList.add("hidden");
    document.querySelector(".cross-icon").classList.remove("visible");
  }
});

