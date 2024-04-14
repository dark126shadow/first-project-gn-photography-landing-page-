var crsr = document.querySelector("#cursor");
var bl = document.querySelector("#blur");
document.addEventListener("mousemove", function (dets) {
  crsr.style.left = dets.x + "px";
  crsr.style.top = dets.y + "px";
  bl.style.left = dets.x - 150 + "px";
  bl.style.top = dets.y - 150 + "px";
});
var h4all = document.querySelectorAll("#nav h4");
h4all.forEach(function (elem) {
  elem.addEventListener("mouseenter", function () {
    crsr.style.scale = 3;
    crsr.style.border = "1px solid #fff";
    crsr.style.backgroundColor = "transparent";
  });
  elem.addEventListener("mouseleave", function () {
    crsr.style.scale = 1;
    crsr.style.border = "0px solid rgba(0, 255, 255, 0.541)";
    crsr.style.backgroundColor = "rgba(0, 255, 255, 0.541)";
  });
});

let viewportWidth = window.innerWidth;
window.addEventListener("resize", () => {
  viewportWidth = window.innerWidth;
});

gsap.to("#nav", {
  backgroundColor: "#000",
  duration: 0.5,
  height: 80,
  scrollTrigger: {
    trigger: "#nav",
    scroller: "body",

    start: "Top -10%",
    end: "Top -11%",
    scrub: 2,
  },
});

if (viewportWidth <= 768) {
  gsap.to("#main", {
    backgroundColor: "#000",
    scrollTrigger: {
      trigger: "#main",
      scroller: "body",
      start: "Top -30%",
      end: "Top -60%",
      scrub: 3,
    },
  });
  gsap.from("#about-us img,#aboutusin", {
    y: 50,
    opacity: 0,
    duration: 0.5,
    scrollTrigger: {
      trigger: "#page2",
      scroller: "body",
      start: "top 90%",
      end: "top 80%",
      scrub: 2,
    },
  });
  gsap.from(".card", {
    scale: 0.8,
    opacity: 0,
    duration: 1,
    scrollTrigger: {
      trigger: "#card-container",
      scroller: "body",

      start: "top 80%",
      end: "top 70%",
      scrub: 2,
    },
  });
  gsap.from("#colon1", {
    y: -70,
    x: -70,
    duration: 1,
    scrollTrigger: {
      trigger: "#page3",
      scroller: "body",
      start: "top 85%",
      end: "top 65%",
      scrub: 1,
    },
  });
  gsap.from("#colon2", {
    y: 70,
    x: 70,
    duration: 1,
    scrollTrigger: {
      trigger: "#page3",
      scroller: "body",
      start: "top 40%",
      end: "top 20%",
      scrub: 1,
    },
  });
  gsap.from("#page4 h1", {
    y: 50,
    scrollTrigger: {
      trigger: "#page4 h1",
      scroller: "body",
      start: "top 100%",
      end: "top 75%",
      scrub: 3,
    },
  });
} else {
  gsap.to("#main", {
    backgroundColor: "#000",
    scrollTrigger: {
      trigger: "#main",
      scroller: "body",
      start: "Top -50%",
      end: "Top -100%",
      scrub: 3,
    },
  });
  gsap.from("#about-us img,#aboutusin", {
    y: 50,
    opacity: 0,
    duration: 1,
    scrollTrigger: {
      trigger: "#about-us",
      scroller: "body",
      start: "top 60%",
      end: "top 35%",
      scrub: 2,
    },
  });
  gsap.from(".card", {
    scale: 0.8,
    opacity: 0,
    duration: 1,
    scrollTrigger: {
      trigger: ".card",
      scroller: "body",

      start: "top 50%",
      end: "top 40%",
      scrub: 2,
    },
  });
  gsap.from("#colon1", {
    y: -70,
    x: -70,
    scrollTrigger: {
      trigger: "#colon1",
      scroller: "body",

      start: "top 85%",
      end: "top 57%",
      scrub: 1,
    },
  });
  gsap.from("#colon2", {
    y: 70,
    x: 70,
    scrollTrigger: {
      trigger: "#colon1",
      scroller: "body",

      start: "top 30%",
      end: "top 27%",
      scrub: 1,
    },
  });
  gsap.from("#page4 h1", {
    y: 50,
    scrollTrigger: {
      trigger: "#page4 h1",
      scroller: "body",
      start: "top 85%",
      end: "top 80%",
      scrub: 3,
    },
  });
}
