const lenis = new Lenis();

lenis.on("scroll", (e) => {
  console.log(e);
});

function raf(time) {
  lenis.raf(time);
  requestAnimationFrame(raf);
}

requestAnimationFrame(raf);

var tl = gsap.timeline({
  scrollTrigger: {
    trigger: ".part-1",
    start: "50% 50%",
    end: "250% 50%",
    scrub: true,
    // markers: true,
    pin: true,
  },
});

tl.to(
  ".rotate-div",
  {
    rotate: -15,
    scale: 0.8,
  },
  "a"
);

tl.to(
  "#rowDiv2",
  {
    marginTop: "-45%",
  },
  "a"
);

tl.to(
  "#rowDiv3",
  {
    marginTop: "-40%",
  },
  "a"
);

tl.to(
  "#rowDiv4",
  {
    marginTop: "-30%",
  },
  "a"
);

tl.to(
  "#rowDiv5",
  {
    marginTop: "-30%",
  },
  "a"
);

tl.to(
  ".overlay-div h1",
  {
    opacity: "1",
    delay: 0.2,
  },
  "a"
);

tl.to(
  ".overlay-div",
  {
    backgroundColor: "#000000b4",
  },
  "a"
);

tl.to(
  ".scrolling",
  {
    width: "100%",
  },
  "a"
);

// Part-2
var tl2 = gsap.timeline({
  scrollTrigger: {
    trigger: ".part-2",
    start: "0% 70%",
    end: "50% 50%",
    scrub: true,
    // markers: true,
  },
});

tl2.to(".rounded-div-wrapper", {
  height: 0,
  marginTop: 0,
});

let tl3 = gsap.timeline({
  scrollTrigger: {
    trigger: ".content-2",
    start: "20% 50%",
    end: "100% 50%",
    // markes: true,
    scrub: 1,
  },
});

tl3.to(".content-2 .text-area-hover h2, .content-2 .text-area-hover h2 span", {
  width: "100%",
});

tl3.to(".content-2 .text-area-hover h4", {
  delay: 0,
  width: "100%",
});

// Part-4
// var tl4 = gsap.timeline({scrollTrigger:{
//     trigger: ".part-4",
//     start: "50% 50%",
//     end: "300% 50%",
//     pin: true,
//     scrub: 1,
//     markers: true,
// }})

// tl4.to(".c-one", {
//     marginTop: "-35%",
//     opacity: "1",
// }, 'sct-1')

// tl4.to(".cir-part-4", {
//     rotate: 180
// }, 'sct-1')

// tl4.to(".c-two", {
//     opacity: "1",
// }, 'sct-2')

// tl4.to(".cir-part-4", {
//     rotate: 360
// }, 'sct-2')

// tl4.to(".c-one", {
//     marginTop: "-125%",
//     opacity: "0",
// }, 'sct-2')

// tl4.to(".c-three", {
//     opacity: "1",
// }, 'sct-3')

// tl4.to(".cir-part-4", {
//     rotate: 540
// }, 'sct-3')

// tl4.to(".c-two", {
//     opacity: "0",
// }, 'sct-3')

// tl4.to(".c-one", {
//     marginTop: "-215%",
// }, 'sct-3')

// tl4.to(".c-four", {
//     opacity: "1",
// }, 'sct-4')

// tl4.to(".cir-part-4", {
//     rotate: 720
// }, 'sct-4')

// tl4.to(".c-three", {
//     opacity: "0",
// }, 'sct-4')

// tl4.to(".c-two", {
//     opacity: "0",
// }, 'sct-4')

// tl4.to(".c-one", {
//     marginTop: "-305%",
// }, 'sct-4')

// tl4.to(".c-five", {
//     opacity: "1",
// }, 'sct-5')

// tl4.to(".cir-part-4", {
//     rotate: 900
// }, 'sct-5')

// tl4.to(".c-four", {
//     opacity: "0",
// }, 'sct-5')

// tl4.to(".c-three", {
//     opacity: "0",
// }, 'sct-5')

// tl4.to(".c-one", {
//     marginTop: "-395%",
// }, 'sct-5')

// tl4.to(".c-six", {
//     opacity: "1",
// }, 'sct-6')

// tl4.to(".cir-part-4", {
//     rotate: 1080
// }, 'sct-6')

// tl4.to(".c-five", {
//     opacity: "0",
// }, 'sct-6')

// tl4.to(".c-four", {
//     opacity: "0",
// }, 'sct-6')

// tl4.to(".c-one", {
//     marginTop: "-485%",
// }, 'sct-6')

// tl4.to(".c-seven", {
//     opacity: "1",
// }, 'sct-7')

// tl4.to(".cir-part-4", {
//     rotate: 1260
// }, 'sct-7')

// tl4.to(".c-six", {
//     opacity: "0",
// }, 'sct-7')

// tl4.to(".c-five", {
//     opacity: "0",
// }, 'sct-7')

// tl4.to(".c-one", {
//     marginTop: "-575%",
// }, 'sct-7')

// tl4.to(".c-one", {
//     marginTop: "-665%",
// }, 'sct-9')

// tl4.to(".c-seven", {
//     opacity: "0",
// }, 'sct-9')

// tl4.to(".cir-part-4", {
//     marginLeft: "100%",
//     rotate: 1440
// }, 'sct-9')



// Set up different breakpoints using GSAP matchMedia
ScrollTrigger.matchMedia({
  // Desktop
  "(min-width: 1025px)": function () {
    let tl4 = gsap.timeline({
      scrollTrigger: {
        trigger: ".part-4",
        start: "50% 50%",
        end: "300% 50%",
        pin: true,
        scrub: 1,
        // markers: true,
      },
    });

    tl4.to(
      ".c-one",
      {
        marginTop: "-35%",
        opacity: "1",
      },
      "sct-1"
    );

    tl4.to(
      ".cir-part-4",
      {
        rotate: 180,
      },
      "sct-1"
    );

    tl4.to(
      ".c-two",
      {
        opacity: "1",
      },
      "sct-2"
    );

    tl4.to(
      ".cir-part-4",
      {
        rotate: 360,
      },
      "sct-2"
    );

    tl4.to(
      ".c-one",
      {
        marginTop: "-125%",
        opacity: "0",
      },
      "sct-2"
    );

    tl4.to(
      ".c-three",
      {
        opacity: "1",
      },
      "sct-3"
    );

    tl4.to(
      ".cir-part-4",
      {
        rotate: 540,
      },
      "sct-3"
    );

    tl4.to(
      ".c-two",
      {
        opacity: "0",
      },
      "sct-3"
    );

    tl4.to(
      ".c-one",
      {
        marginTop: "-215%",
      },
      "sct-3"
    );

    tl4.to(
      ".c-four",
      {
        opacity: "1",
      },
      "sct-4"
    );

    tl4.to(
      ".cir-part-4",
      {
        rotate: 720,
      },
      "sct-4"
    );

    tl4.to(
      ".c-three",
      {
        opacity: "0",
      },
      "sct-4"
    );

    tl4.to(
      ".c-two",
      {
        opacity: "0",
      },
      "sct-4"
    );

    tl4.to(
      ".c-one",
      {
        marginTop: "-305%",
      },
      "sct-4"
    );

    tl4.to(
      ".c-five",
      {
        opacity: "1",
      },
      "sct-5"
    );

    tl4.to(
      ".cir-part-4",
      {
        rotate: 900,
      },
      "sct-5"
    );

    tl4.to(
      ".c-four",
      {
        opacity: "0",
      },
      "sct-5"
    );

    tl4.to(
      ".c-three",
      {
        opacity: "0",
      },
      "sct-5"
    );

    tl4.to(
      ".c-one",
      {
        marginTop: "-395%",
      },
      "sct-5"
    );

    tl4.to(
      ".c-six",
      {
        opacity: "1",
      },
      "sct-6"
    );

    tl4.to(
      ".cir-part-4",
      {
        rotate: 1080,
      },
      "sct-6"
    );

    tl4.to(
      ".c-five",
      {
        opacity: "0",
      },
      "sct-6"
    );

    tl4.to(
      ".c-four",
      {
        opacity: "0",
      },
      "sct-6"
    );

    tl4.to(
      ".c-one",
      {
        marginTop: "-485%",
      },
      "sct-6"
    );

    tl4.to(
      ".c-seven",
      {
        opacity: "1",
      },
      "sct-7"
    );

    tl4.to(
      ".cir-part-4",
      {
        rotate: 1260,
      },
      "sct-7"
    );

    tl4.to(
      ".c-six",
      {
        opacity: "0",
      },
      "sct-7"
    );

    tl4.to(
      ".c-five",
      {
        opacity: "0",
      },
      "sct-7"
    );

    tl4.to(
      ".c-one",
      {
        marginTop: "-575%",
      },
      "sct-7"
    );

    tl4.to(
      ".c-one",
      {
        marginTop: "-665%",
      },
      "sct-9"
    );

    tl4.to(
      ".c-seven",
      {
        opacity: "0",
      },
      "sct-9"
    );

    tl4.to(
      ".cir-part-4",
      {
        marginLeft: "100%",
        rotate: 1440,
      },
      "sct-9"
    );
  },

  // Tablet
  "(min-width: 768px) and (max-width: 1024px)": function () {
    let tl4 = gsap.timeline({
      scrollTrigger: {
        trigger: ".part-4",
        start: "50% 50%",
        end: "300% 50%",
        pin: true,
        scrub: 1,
        // markers: true,
      },
    });
    tl4.to(
        ".c-one",
        {
          marginTop: "0%",
          opacity: "1",
        },
        "sct-1"
      );
  
      tl4.to(
        ".cir-part-4",
        {
          rotate: 180,
        },
        "sct-1"
      );
  
      tl4.to(
        ".c-two",
        {
          opacity: "1",
        },
        "sct-2"
      );
  
      tl4.to(
        ".cir-part-4",
        {
          rotate: 360,
        },
        "sct-2"
      );
  
      tl4.to(
        ".c-one",
        {
          marginTop: "-75%",
          opacity: "0",
        },
        "sct-2"
      );
  
      tl4.to(
        ".c-three",
        {
          opacity: "1",
        },
        "sct-3"
      );
  
      tl4.to(
        ".cir-part-4",
        {
          rotate: 540,
        },
        "sct-3"
      );
  
      tl4.to(
        ".c-two",
        {
          opacity: "0",
        },
        "sct-3"
      );
  
      tl4.to(
        ".c-one",
        {
          marginTop: "-140%",
        },
        "sct-3"
      );
  
      tl4.to(
        ".c-four",
        {
          opacity: "1",
        },
        "sct-4"
      );
  
      tl4.to(
        ".cir-part-4",
        {
          rotate: 720,
        },
        "sct-4"
      );
  
      tl4.to(
        ".c-three",
        {
          opacity: "0",
        },
        "sct-4"
      );
  
      tl4.to(
        ".c-two",
        {
          opacity: "0",
        },
        "sct-4"
      );
  
      tl4.to(
        ".c-one",
        {
          marginTop: "-200%",
        },
        "sct-4"
      );
  
      tl4.to(
        ".c-five",
        {
          opacity: "1",
        },
        "sct-5"
      );
  
      tl4.to(
        ".cir-part-4",
        {
          rotate: 900,
        },
        "sct-5"
      );
  
      tl4.to(
        ".c-four",
        {
          opacity: "0",
        },
        "sct-5"
      );
  
      tl4.to(
        ".c-three",
        {
          opacity: "0",
        },
        "sct-5"
      );
  
      tl4.to(
        ".c-one",
        {
          marginTop: "-285%",
        },
        "sct-5"
      );
  
      tl4.to(
        ".c-six",
        {
          opacity: "1",
        },
        "sct-6"
      );
  
      tl4.to(
        ".cir-part-4",
        {
          rotate: 1080,
        },
        "sct-6"
      );
  
      tl4.to(
        ".c-five",
        {
          opacity: "0",
        },
        "sct-6"
      );
  
      tl4.to(
        ".c-four",
        {
          opacity: "0",
        },
        "sct-6"
      );
  
      tl4.to(
        ".c-one",
        {
          marginTop: "-345%",
        },
        "sct-6"
      );
  
      tl4.to(
        ".c-seven",
        {
          opacity: "1",
        },
        "sct-7"
      );
  
      tl4.to(
        ".cir-part-4",
        {
          rotate: 1260,
        },
        "sct-7"
      );
  
      tl4.to(
        ".c-six",
        {
          opacity: "0",
        },
        "sct-7"
      );
  
      tl4.to(
        ".c-five",
        {
          opacity: "0",
        },
        "sct-7"
      );
  
      tl4.to(
        ".c-one",
        {
          marginTop: "-400%",
        },
        "sct-7"
      );
  
      tl4.to(
        ".c-one",
        {
          marginTop: "-445%",
        },
        "sct-9"
      );
  
      tl4.to(
        ".c-seven",
        {
          opacity: "0",
        },
        "sct-9"
      );
  
      tl4.to(
        ".cir-part-4",
        {
          marginLeft: "100%",
          rotate: 1440,
        },
        "sct-9"
      );
  },

  // Mobile
  "(max-width: 767px)": function () {
    let tl4 = gsap.timeline({
      scrollTrigger: {
        trigger: ".part-4",
        start: "50% 50%",
        end: "300% 50%",
        pin: true,
        scrub: 1,
        // markers: true,
      },
    });

    tl4.to(
        ".c-one",
        {
          marginTop: "-10%",
          opacity: "1",
        },
        "sct-1"
      );
  
      tl4.to(
        ".cir-part-4",
        {
          rotate: 180,
        },
        "sct-1"
      );
  
      tl4.to(
        ".c-two",
        {
          opacity: "1",
        },
        "sct-2"
      );
  
      tl4.to(
        ".cir-part-4",
        {
          rotate: 360,
        },
        "sct-2"
      );
  
      tl4.to(
        ".c-one",
        {
          marginTop: "-120%",
          opacity: "0",
        },
        "sct-2"
      );
  
      tl4.to(
        ".c-three",
        {
          opacity: "1",
        },
        "sct-3"
      );
  
      tl4.to(
        ".cir-part-4",
        {
          rotate: 540,
        },
        "sct-3"
      );
  
      tl4.to(
        ".c-two",
        {
          opacity: "0",
        },
        "sct-3"
      );
  
      tl4.to(
        ".c-one",
        {
          marginTop: "-230%",
        },
        "sct-3"
      );
  
      tl4.to(
        ".c-four",
        {
          opacity: "1",
        },
        "sct-4"
      );
  
      tl4.to(
        ".cir-part-4",
        {
          rotate: 720,
        },
        "sct-4"
      );
  
      tl4.to(
        ".c-three",
        {
          opacity: "0",
        },
        "sct-4"
      );
  
      tl4.to(
        ".c-two",
        {
          opacity: "0",
        },
        "sct-4"
      );
  
      tl4.to(
        ".c-one",
        {
          marginTop: "-340%",
        },
        "sct-4"
      );
  
      tl4.to(
        ".c-five",
        {
          opacity: "1",
        },
        "sct-5"
      );
  
      tl4.to(
        ".cir-part-4",
        {
          rotate: 900,
        },
        "sct-5"
      );
  
      tl4.to(
        ".c-four",
        {
          opacity: "0",
        },
        "sct-5"
      );
  
      tl4.to(
        ".c-three",
        {
          opacity: "0",
        },
        "sct-5"
      );
  
      tl4.to(
        ".c-one",
        {
          marginTop: "-450%",
        },
        "sct-5"
      );
  
      tl4.to(
        ".c-six",
        {
          opacity: "1",
        },
        "sct-6"
      );
  
      tl4.to(
        ".cir-part-4",
        {
          rotate: 1080,
        },
        "sct-6"
      );
  
      tl4.to(
        ".c-five",
        {
          opacity: "0",
        },
        "sct-6"
      );
  
      tl4.to(
        ".c-four",
        {
          opacity: "0",
        },
        "sct-6"
      );
  
      tl4.to(
        ".c-one",
        {
          marginTop: "-560%",
        },
        "sct-6"
      );
  
      tl4.to(
        ".c-seven",
        {
          opacity: "1",
        },
        "sct-7"
      );
  
      tl4.to(
        ".cir-part-4",
        {
          rotate: 1260,
        },
        "sct-7"
      );
  
      tl4.to(
        ".c-six",
        {
          opacity: "0",
        },
        "sct-7"
      );
  
      tl4.to(
        ".c-five",
        {
          opacity: "0",
        },
        "sct-7"
      );
  
      tl4.to(
        ".c-one",
        {
          marginTop: "-670%",
        },
        "sct-7"
      );
  
      tl4.to(
        ".c-one",
        {
          marginTop: "-780%",
        },
        "sct-9"
      );
  
      tl4.to(
        ".c-seven",
        {
          opacity: "0",
        },
        "sct-9"
      );
  
      tl4.to(
        ".cir-part-4",
        {
          marginLeft: "100%",
          rotate: 1440,
        },
        "sct-9"
      );
  },

  // Mobile
  "(max-width: 520px)": function () {
    let tl4 = gsap.timeline({
      scrollTrigger: {
        trigger: ".part-4",
        start: "50% 50%",
        end: "300% 50%",
        pin: true,
        scrub: 1,
        // markers: true,
      },
    });
    
    tl4.to(
        ".c-one",
        {
          marginTop: "-50%",
          opacity: "1",
        },
        "sct-1"
      );
  
      tl4.to(
        ".cir-part-4",
        {
          rotate: 180,
        },
        "sct-1"
      );
  
      tl4.to(
        ".c-two",
        {
          opacity: "1",
        },
        "sct-2"
      );
  
      tl4.to(
        ".cir-part-4",
        {
          rotate: 360,
        },
        "sct-2"
      );
  
      tl4.to(
        ".c-one",
        {
          marginTop: "-150%",
          opacity: "0",
        },
        "sct-2"
      );
  
      tl4.to(
        ".c-three",
        {
          opacity: "1",
        },
        "sct-3"
      );
  
      tl4.to(
        ".cir-part-4",
        {
          rotate: 540,
        },
        "sct-3"
      );
  
      tl4.to(
        ".c-two",
        {
          opacity: "0",
        },
        "sct-3"
      );
  
      tl4.to(
        ".c-one",
        {
          marginTop: "-250%",
        },
        "sct-3"
      );
  
      tl4.to(
        ".c-four",
        {
          opacity: "1",
        },
        "sct-4"
      );
  
      tl4.to(
        ".cir-part-4",
        {
          rotate: 720,
        },
        "sct-4"
      );
  
      tl4.to(
        ".c-three",
        {
          opacity: "0",
        },
        "sct-4"
      );
  
      tl4.to(
        ".c-two",
        {
          opacity: "0",
        },
        "sct-4"
      );
  
      tl4.to(
        ".c-one",
        {
          marginTop: "-350%",
        },
        "sct-4"
      );
  
      tl4.to(
        ".c-five",
        {
          opacity: "1",
        },
        "sct-5"
      );
  
      tl4.to(
        ".cir-part-4",
        {
          rotate: 900,
        },
        "sct-5"
      );
  
      tl4.to(
        ".c-four",
        {
          opacity: "0",
        },
        "sct-5"
      );
  
      tl4.to(
        ".c-three",
        {
          opacity: "0",
        },
        "sct-5"
      );
  
      tl4.to(
        ".c-one",
        {
          marginTop: "-450%",
        },
        "sct-5"
      );
  
      tl4.to(
        ".c-six",
        {
          opacity: "1",
        },
        "sct-6"
      );
  
      tl4.to(
        ".cir-part-4",
        {
          rotate: 1080,
        },
        "sct-6"
      );
  
      tl4.to(
        ".c-five",
        {
          opacity: "0",
        },
        "sct-6"
      );
  
      tl4.to(
        ".c-four",
        {
          opacity: "0",
        },
        "sct-6"
      );
  
      tl4.to(
        ".c-one",
        {
          marginTop: "-550%",
        },
        "sct-6"
      );
  
      tl4.to(
        ".c-seven",
        {
          opacity: "1",
        },
        "sct-7"
      );
  
      tl4.to(
        ".cir-part-4",
        {
          rotate: 1260,
        },
        "sct-7"
      );
  
      tl4.to(
        ".c-six",
        {
          opacity: "0",
        },
        "sct-7"
      );
  
      tl4.to(
        ".c-five",
        {
          opacity: "0",
        },
        "sct-7"
      );
  
      tl4.to(
        ".c-one",
        {
          marginTop: "-650%",
        },
        "sct-7"
      );
  
      tl4.to(
        ".c-one",
        {
          marginTop: "-750%",
        },
        "sct-9"
      );
  
      tl4.to(
        ".c-seven",
        {
          opacity: "0",
        },
        "sct-9"
      );
  
      tl4.to(
        ".cir-part-4",
        {
          marginLeft: "100%",
          rotate: 1440,
        },
        "sct-9"
      );
  },
});



// part-5
let tl5 = gsap.timeline({
  scrollTrigger: {
    trigger: ".part-5",
    start: "20% 50%",
    end: "100% 50%",
    // markes: true,
    scrub: 1,
  },
});

tl5.to(".part-5 .part-5-text-area-hover h2", {
  width: "100%",
});

tl5.to(".part-5 .part-5-text-area-hover h4", {
  delay: -0.5,
  width: "100%",
});
