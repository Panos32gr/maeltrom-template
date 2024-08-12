//banner implementation

var bannerStatus = 1;
var bannerTimer = 4000;

window.onload = function () {
  bannerLoop();
};

var bannerStart = setInterval(function () {
  bannerLoop();
}, bannerTimer);

function bannerLoop() {
  if (bannerStatus === 1) {
    document.getElementById("imgban2").style.opacity = "0";

    setTimeout(function () {
      document.getElementById("imgban1").style.right = "0px";
      document.getElementById("imgban1").style.zIndex = "1000";
      document.getElementById("imgban2").style.right = "-1200px";
      document.getElementById("imgban2").style.zIndex = "1500";
      document.getElementById("imgban3").style.right = "1200px";
      document.getElementById("imgban3").style.zIndex = "500";
    }, 500);

    setTimeout(function () {
      document.getElementById("imgban2").style.opacity = "1";
    }, 1000);

    bannerStatus = 2;
  } else if (bannerStatus === 2) {
    document.getElementById("imgban3").style.opacity = "0";

    setTimeout(function () {
      document.getElementById("imgban2").style.right = "0px";
      document.getElementById("imgban2").style.zIndex = "1000";
      document.getElementById("imgban3").style.right = "-1200px";
      document.getElementById("imgban3").style.zIndex = "1500";
      document.getElementById("imgban1").style.right = "1200px";
      document.getElementById("imgban1").style.zIndex = "500";
    }, 500);

    setTimeout(function () {
      document.getElementById("imgban3").style.opacity = "1";
    }, 1000);

    bannerStatus = 3;
  } else if (bannerStatus === 3) {
    document.getElementById("imgban1").style.opacity = "0";

    setTimeout(function () {
      document.getElementById("imgban3").style.right = "0px";
      document.getElementById("imgban3").style.zIndex = "1000";
      document.getElementById("imgban1").style.right = "-1200px";
      document.getElementById("imgban1").style.zIndex = "1500";
      document.getElementById("imgban2").style.right = "2000px";
      document.getElementById("imgban2").style.zIndex = "500";
    }, 500);

    setTimeout(function () {
      document.getElementById("imgban1").style.opacity = "1";
    }, 1000);

    bannerStatus = 1;
  }
}

//element animations using gsap cdns
gsap.registerPlugin("scrollTrigger");

// first video container and contents
gsap.to(".placeholder1", {
  scrollTrigger: {
    trigger: ".placeholder1",
    start: "top center",
    toggleActions: "play none none none",
  },
  duration: 2,
  width: "+99.5%",
});

gsap.to(".vfxinfo", {
  scrollTrigger: {
    trigger: ".vfxinfo",
    start: "top 80%",
    toggleActions: "play none none none",
  },
  duration: 1.5,
  opacity: 1,
  ease: "power1.in",
  delay: 1,
});

gsap.to(".guidebutton1", {
  scrollTrigger: {
    trigger: ".videocontainer1",
    start: "top 50%",
    toggleActions: "play none none none",
  },
  duration: 1.5,
  right: "10%",
  ease: "power1.in",
  delay: 1,
});

//second video container and contents animations
gsap.to(".placeholder2", {
  scrollTrigger: {
    trigger: ".placeholder2",
    start: "top center",
    toggleActions: "play none none none",
  },
  duration: 2,
  width: "+99.5%",
});

gsap.to(".gamesinfo", {
  scrollTrigger: {
    trigger: ".gamesinfo",
    start: "top 80%",

    toggleActions: "play none none none",
  },
  duration: 1.5,
  opacity: 1,
  ease: "power1.in",
  delay: 1,
});

gsap.to(".guidebutton2", {
  scrollTrigger: {
    trigger: ".videocontainer2",
    start: "top 50%",
    toggleActions: "play none none none",
  },
  duration: 1.5,
  left: "10%",
  ease: "power1.in",
  delay: 1,
});

// card animations

gsap.to(".card1", {
  scrollTrigger: {
    trigger: ".cardcontainer",
    start: "top 80%",
    toggleActions: "play none none none",
  },
  duration: 2,
  top: "0",
});

gsap.to(".card2", {
  scrollTrigger: {
    trigger: ".cardcontainer",
    start: "top 80%",
    toggleActions: "play none none none",
  },
  duration: 2,
  top: "0",
  delay: 0.5,
});

gsap.to(".card3", {
  scrollTrigger: {
    trigger: ".cardcontainer",
    start: "top 80%",
    toggleActions: "play none none none",
  },
  duration: 2,
  top: "0",
  delay: 1,
});

//footer container and contents animation

gsap.to(".footer", {
  scrollTrigger: {
    trigger: ".footercontainer",
    start: "top 90%",
    toggleActions: "play none none none",
  },
  duration: 1,
  top: "0",
  ease: "power1.in",
});

gsap.from(".wrapper", {
  scrollTrigger: {
    trigger: ".footercontainer",
    start: "top 80%",
    toggleActions: "play none none none",
  },
  duration: 2,
  right: "-100%",
  ease: "bounce",
  delay: 1,
});

gsap.to(".footerlinks", {
  scrollTrigger: {
    trigger: ".footercontainer",
    start: "top 80%",
    toggleActions: "play none none none",
  },
  duration: 2,
  opacity: "1",
  delay: 2,
});

gsap.to(".footerlinks2", {
  scrollTrigger: {
    trigger: ".footercontainer",
    start: "top 80%",
    toggleActions: "play none none none",
  },
  duration: 2,
  opacity: "1",
  delay: 2.5,
});

gsap.to(".footerlinks3", {
  scrollTrigger: {
    trigger: ".footercontainer",
    start: "top 80%",
    toggleActions: "play none none none",
  },
  duration: 2,
  opacity: "1",
  delay: 3,
});

function menuActive() {
  gsap.to(".menubtn", { duration: 0.5, opacity: "0" });
  gsap.to(".sidenav", { duration: 0.2, width: "10%", ease: "power1.in" });
  gsap.to(".closemenu", { duration: 0.5, opacity: "1", delay: 0.5 });
}

function closeMenu() {
  gsap.to(".menubtn", { duration: 0.5, opacity: "1" });
  gsap.to(".sidenav", { duration: 0.2, width: "0%", ease: "power1.in" });
  gsap.to(".closemenu", { duration: 0.5, opacity: "0" });
}
