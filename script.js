function toggleMenu() {
  var sideMenu = document.getElementById("topnav");
  var menu = document.getElementById("menucontainer");

  if (sideMenu.style.width === "0px") {
    gsap.to(".topnav", { duration: 0.2, width: "300px", ease: "power1.in" });
    menu.classList.toggle("change");
  } else {
    gsap.to(".topnav", { duration: 0.2, width: "0px", ease: "power1.in" });
    menu.classList.remove("change");
  }
}



//element animations using gsap cdns
gsap.registerPlugin("scrollTrigger");




gsap.to(".videosection", {
  scrollTrigger: {
    trigger: ".videosection",
    start: "center center",
    end: "+=1000",
    pin: true,
    toggleActions: "play none none none",
  },
});


gsap.to(".content", {
  scrollTrigger: {
    trigger: ".content",
    start: "center center",
    toggleActions: "play none none none",
  },
  duration: 1,
  width: "1100px"
});


gsap.to("#vid1", {
  scrollTrigger: {
    onEnterBack: function () {
      gsap.to("#vid2", {opacity: 0}),
      gsap.to("#vid1", {opacity: 1})
    },
    trigger: ".vfxtext",
    start: "top center",
    toggleActions: "play none none none",
  },
  duration: 2,
  opacity: 1,
});

gsap.to("#vid1", {
  scrollTrigger: {
    trigger: ".gmdtext",
    start: "top center",
    toggleActions: "play none none none",
  },
  duration: 2,
  opacity: 0,
});

gsap.to("#vid2", {
  scrollTrigger: {
    onEnter: function () {
      gsap.to("#vid1", {opacity: 0}),
      gsap.to("#vid2", {opacity: 1})
    },
    trigger: ".gmdtext",
    start: "top center",
    toggleActions: "play none none none",
  },
  duration: 2,
  opacity: 1,
});




gsap.to(".vfxbutton", {
  scrollTrigger: {
    trigger: ".videocontainer1",
    start: "top center",
    toggleActions: "play none none none",
  },
  duration: 1.5,

  delay: 2,
});








if (window.innerWidth < 800) {

}

//footer container and contents animation

gsap.to(".footer", {
  scrollTrigger: {
    trigger: ".footercontainer",
    start: "center bottom",
    toggleActions: "play none none none",
  },
  duration: 2,
  bottom: "20%",
  height: "500px",
});

gsap.from(".wrapper", {
  scrollTrigger: {
    trigger: ".footercontainer",
    start: "center bottom",
    toggleActions: "play none none none",
  },
  duration: 2,
  right: "-100%",
  ease: "bounce",
  delay: 1,
});

gsap.to(".footerlinks", {
  scrollTrigger: {
    trigger: ".footercontainer1",
    start: "bottom center",
    toggleActions: "play none none none",
  },
  duration: 2,
  opacity: "1",
  delay: 2,
});

gsap.to(".mail", {
  scrollTrigger: {
    trigger: ".footercontainer",
    start: "top 80%",
    toggleActions: "play none none none",
  },
  duration: 2,
  opacity: "1",
  delay: 2.5,
});

gsap.to(".corp", {
  scrollTrigger: {
    trigger: ".footercontainer",
    start: "top 80%",
    toggleActions: "play none none none",
  },
  duration: 2,
  opacity: "1",
  delay: 3,
});
