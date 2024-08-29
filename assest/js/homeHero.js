// Navigation megamenu
function Menu(e) {
  let list = document.querySelector("#mainMenuTitle");

  e.name === "menu-outline"
    ? ((e.name = "close-outline"),
      list.classList.add("top-[80px]"),
      list.classList.add("opacity-100"))
    : ((e.name = "menu-outline"),
      list.classList.remove("top-[80px]"),
      list.classList.remove("opacity-100"));
}

function SubMenu(e, subMenuId) {
  let list = document.getElementById(subMenuId);

  if (window.innerWidth < 1024) {
    if (e.name === "add-outline") {
      e.name = "remove-outline";
      list.classList.remove("opacity-0", "max-h-0", "overflow-hidden");
      list.classList.add("opacity-100", "max-h-[1000px]", "overflow-auto");
    } else {
      e.name = "add-outline";
      list.classList.add("opacity-0", "max-h-0", "overflow-hidden");
      list.classList.remove("opacity-100", "max-h-[1000px]", "overflow-auto");
    }
  }
}

// Hero secsion animation effect
const parallax_el = document.querySelectorAll(".parallax");
const main = document.querySelector("main");

let xValue = 0,
  yValue = 0;

let rotateDegree = 0;

function update(cursorPosition) {
  parallax_el.forEach((el) => {
    let speedx = el.dataset.speedx;
    let speedy = el.dataset.speedy;
    let speedz = el.dataset.speedz;
    let rotateSpeed = el.dataset.rotation;

    let isInLeft =
      parseFloat(getComputedStyle(el).left) < window.innerWidth / 2 ? 1 : -1;
    let zValue =
      (cursorPosition - parseFloat(getComputedStyle(el).left)) * isInLeft * 0.1;

    el.style.transform = `perspective(2300px) translateZ(${
      zValue * speedz
    }px) rotateY(${rotateDegree * rotateSpeed}deg) translateX(calc(-50% + ${
      -xValue * speedx
    }px)) translateY(calc(-50% + ${yValue * speedy}px)) `;
  });
}

update(0);

window.addEventListener("mousemove", (e) => {
  if (timeline.isActive()) return;

  xValue = e.clientX - window.innerWidth / 2;
  yValue = e.clientY - window.innerHeight / 2;

  rotateDegree = (xValue / (window.innerHeight / 2)) * 20;

  update(e.clientX);
});

if (window.innerWidth >= 725) {
  main.style.maxHeight = `${window.innerWidth * 0.6}px`;
} else {
  main.style.maxHeight = `${window.innerWidth * 1.6}px`;
}

// GSAP Animation

let timeline = gsap.timeline();

Array.from(parallax_el)
  .filter((el) => !el.classList.contains("text"))
  .forEach((el) => {
    timeline.from(
      el,
      {
        top: `${el.offsetHeight / 2 + +el.dataset.distance}px`,
        duration: 3.5,
        ease: "power3.out",
      },
      "1"
    );
  });

timeline
  .from(
    ".text h1",
    {
      y:
        window.innerHeight -
        document.querySelector(".text h1").getBoundingClientRect().top +
        200,
      duration: 2,
    },
    "2.5"
  )
  .from(
    ".text h2",
    {
      y: -150,
      opacity: 0,
      duration: 1.5,
    },
    "3"
  )
  .from(
    ".hide",
    {
      opacity: 0,
      duration: 1.5,
    },
    "3"
  );

// Type animation effect
let typingEffect = new Typed(".multiText", {
  strings: ["Digital Marketing", "Web", "Development"],
  loop: true,
  typeSpeed: 100,
  backSpeed: 80,
  backDelay: 1500,
});
