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

gsap.from(".vfxinfo", {
  scrollTrigger: {
    trigger: ".vfxinfo",
    start: "center center",
    markers: true,
    toggleActions: "play none none none",
  },
  duration: 1.5,
  right: "-100%",
  ease: "power1.in",
});

gsap.from(".guidebutton", {
  scrollTrigger: {
    trigger: ".guidebutton",
    start: "top 50%",
    markers: true,
    toggleActions: "play none none none",
  },
  duration: 1.5,
  right: "-120%",
  ease: "power1.in",
});




gsap.from(".gamesinfo", {
  scrollTrigger: {
    trigger: ".gamesinfo",
    start: "top center",
    markers: true,
    toggleActions: "play none none none",
  },
  duration: 1.5,
  left: "-100%",
  ease: "power1.in",
});






gsap.from(".wrapper", {
  scrollTrigger: {
    trigger: ".wrapper",
    start: "top center",
    markers: true,
    toggleActions: "play none none none",
  },
  duration: 3.5,
  right: "-100%",
  ease: "bounce",
});


gsap.to(".footerlinks", {
  scrollTrigger: {
    trigger: ".footerlinks",
    start: "top 40%",
    markers: true,
    toggleActions: "play none none none",
  },
  duration: 2,
  opacity: "1",
  delay: 4.
});

gsap.to(".footerlinks2", {
  scrollTrigger: {
    trigger: ".footerlinks",
    start: "top 40%",
    markers: true,
    toggleActions: "play none none none",
  },
  duration: 2,
  opacity: "1",
  delay: 4.
});


gsap.to(".footerlinks3", {
  scrollTrigger: {
    trigger: ".footerlinks",
    start: "top 40%",
    markers: true,
    toggleActions: "play none none none",
  },
  duration: 2,
  opacity: "1",
  delay: 4.
});

