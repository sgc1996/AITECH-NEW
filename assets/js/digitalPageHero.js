const lenis = new Lenis()

lenis.on('scroll', (e) => {
  console.log(e)
})

function raf(time) {
  lenis.raf(time)
  requestAnimationFrame(raf)
}

requestAnimationFrame(raf)

var tl = gsap.timeline({scrollTrigger:{
    trigger: ".part-1",
    start: "50% 50%",
    end: "250% 50%",
    scrub: true,
    // markers: true,
    pin:true,
}})

tl.to(".rotate-div", {
    rotate: -15,
    scale: 0.8,
},'a')

tl.to("#rowDiv2", {
    marginTop: "-45%"
},'a')

tl.to("#rowDiv3", {
    marginTop: "-40%"
},'a')

tl.to("#rowDiv4", {
    marginTop: "-30%"
},'a')

tl.to("#rowDiv5", {
    marginTop: "-30%"
},'a')

tl.to(".overlay-div h1", {
    opacity: "1",
    delay: 0.2,
},'a')

tl.to(".overlay-div", {
    backgroundColor: "#000000b4"
},'a')

tl.to(".scrolling", {
    width: "100%"
},'a')


// Part-2
var tl2 = gsap.timeline({scrollTrigger:{
    trigger: ".part-2",
    start: "0% 70%",
    end: "50% 50%",
    scrub: true,
    // markers: true,
}})

tl2.to(".rounded-div-wrapper", {
    height: 0,
    marginTop: 0
})

let tl3 = gsap.timeline({
    scrollTrigger:{
        trigger: ".content-2",
        start: "20% 50%",
        end: "100% 50%",
        // markes: true,
        scrub: 1,
    },
});

tl3.to(".text-area-hover h2, .text-area-hover h2 span", {
    width: "100%"
})

tl3.to(".text-area-hover h4", {
    delay: 0,
    width: "100%"
})


// Part-4
// var tl4 = gsap.timeline({scrollTrigger:{
//     trigger: ".part-4",
//     start: "50% 50%",
//     end: "300% 50%",
//     pin: true,
//     scrub: 1,
//     markers: true,
// }})

var tl4 = gsap.timeline({
    scrollTrigger: {
      trigger: ".part-4",
      start: "50% 50%",
      end: "300% 50%",
      pin: true,
      scrub: 1,
      markers: true,
      pinSpacing: true, // Controls the pin spacing behavior
      
      onUpdate: (self) => {
        // Check if the ScrollTrigger has reached its end
        if (self.progress === 1) {
          // When at the end, remove the pin spacing (extra space)
          gsap.to(".part-4", { height: "auto", clearProps: "all" });
        }
      },
      onLeave: () => { 
        // Ensure extra space is removed when leaving
        gsap.to(".part-4", { height: "auto", clearProps: "all" });
      },
      onLeaveBack: () => { 
        // If scrolling back, make sure the space is readjusted
        gsap.to(".part-4", { height: "auto", clearProps: "all" });
      }
    }
  });

tl4.to(".c-one", {
    marginTop: "-35%",
    opacity: "1",
}, 'sct-1')

tl4.to(".cir-part-4", {
    rotate: 180
}, 'sct-1')

tl4.to(".c-two", {
    opacity: "1",
}, 'sct-2')

tl4.to(".cir-part-4", {
    rotate: 360
}, 'sct-2')

tl4.to(".c-one", {
    marginTop: "-125%",
    opacity: "0",
}, 'sct-2')

tl4.to(".c-three", {
    opacity: "1",
}, 'sct-3')

tl4.to(".cir-part-4", {
    rotate: 540
}, 'sct-3')

tl4.to(".c-two", {
    opacity: "0",
}, 'sct-3')

tl4.to(".c-one", {
    marginTop: "-215%",
}, 'sct-3')

tl4.to(".c-four", {
    opacity: "1",
}, 'sct-4')

tl4.to(".cir-part-4", {
    rotate: 720
}, 'sct-4')

tl4.to(".c-three", {
    opacity: "0",
}, 'sct-4')

tl4.to(".c-two", {
    opacity: "0",
}, 'sct-4')

tl4.to(".c-one", {
    marginTop: "-305%",
}, 'sct-4')

tl4.to(".c-five", {
    opacity: "1",
}, 'sct-5')

tl4.to(".cir-part-4", {
    rotate: 900
}, 'sct-5')

tl4.to(".c-four", {
    opacity: "0",
}, 'sct-5')

tl4.to(".c-three", {
    opacity: "0",
}, 'sct-5')

tl4.to(".c-one", {
    marginTop: "-395%",
}, 'sct-5')

tl4.to(".c-six", {
    opacity: "1",
}, 'sct-6')

tl4.to(".cir-part-4", {
    rotate: 1080
}, 'sct-6')

tl4.to(".c-five", {
    opacity: "0",
}, 'sct-6')

tl4.to(".c-four", {
    opacity: "0",
}, 'sct-6')

tl4.to(".c-one", {
    marginTop: "-485%",
}, 'sct-6')

tl4.to(".c-seven", {
    opacity: "1",
}, 'sct-7')

tl4.to(".cir-part-4", {
    rotate: 1260
}, 'sct-7')

tl4.to(".c-six", {
    opacity: "0",
}, 'sct-7')

tl4.to(".c-five", {
    opacity: "0",
}, 'sct-7')

tl4.to(".c-one", {
    marginTop: "-575%",
}, 'sct-7')

tl4.to(".c-one", {
    marginTop: "-665%",
}, 'sct-9')

tl4.to(".c-seven", {
    opacity: "0",
}, 'sct-9')

tl4.to(".cir-part-4", {
    marginLeft: "100%",
    rotate: 1440
}, 'sct-9')