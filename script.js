function toggleMenu() {
  var sideMenu = document.getElementById("topnav");
  var menu = document.getElementById("menucontainer");

  if (sideMenu.style.width === "0%") {
    gsap.to(".topnav", { duration: 0.2, width: "40%", ease: "power1.in" });
    menu.classList.toggle("change");
  } else {
    gsap.to(".topnav", { duration: 0.2, width: "0%", ease: "power1.in" });
  }
}

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
      document.getElementById("imgban1").style.zIndex = "0";
      document.getElementById("imgban2").style.right = "-1200px";
      document.getElementById("imgban2").style.zIndex = "1";
      document.getElementById("imgban3").style.right = "1200px";
      document.getElementById("imgban3").style.zIndex = "2";
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
      document.getElementById("imgban3").style.right = "0%";
      document.getElementById("imgban3").style.zIndex = "1000";
      document.getElementById("imgban1").style.right = "-100%";
      document.getElementById("imgban1").style.zIndex = "1500";
      document.getElementById("imgban2").style.right = "200%";
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


gsap.to("#vid1", {
  scrollTrigger: {
    trigger: ".videocontainer1",
    start: "top center",
    toggleActions: "play none none none",
  },
  duration: 2,
  opacity: 1,
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
  opacity: 1,
  delay: 1,
});

gsap.to(".card", {
  scrollTrigger: {
    trigger: ".videocontainer1",
    start: "center center",
    toggleActions: "play none none none",
  },
  duration: 1.5,
  opacity: 1,
  right: "10%",
  delay: 0.5,
});

gsap.to(".card2", {
  scrollTrigger: {
    trigger: ".videocontainer1",
    start: "center center",
    toggleActions: "play none none none",
  },
  duration: 1.5,
  opacity: 1,
  left: "10%",
  delay: 0.5,
});

//second video container and contents animations
gsap.to("#vid2", {
  scrollTrigger: {
    trigger: ".videocontainer2",
    start: "top center",
    toggleActions: "play none none none",
  },
  duration: 2,
  opacity: 1,
});

gsap.to(".gamesinfo", {
  scrollTrigger: {
    trigger: ".gamesinfo",
    start: "top 50%",

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
    start: "top center",
    toggleActions: "play none none none",
  },
  duration: 1.5,
  opacity: 1,
  delay: 1,
});

if (window.innerWidth < 800) {
  gsap.to(".card3", {
    scrollTrigger: {
      trigger: ".videocontainer2",
      start: "center center",
      toggleActions: "play none none none",
    },
    duration: 1.5,
    top: "50%",
  }),
    gsap.to(".card4", {
      scrollTrigger: {
        trigger: ".videocontainer2",
        start: "center center",
        toggleActions: "play none none none",
      },
      duration: 1.5,
      bottom: "5%",
    });
} else {
  gsap.to(".card3", {
    scrollTrigger: {
      trigger: ".videocontainer2",
      start: "center center",
      toggleActions: "play none none none",
    },
    duration: 1.5,
    top: "65%",
  }),
    gsap.to(".card4", {
      scrollTrigger: {
        trigger: ".videocontainer2",
        start: "center center",
        toggleActions: "play none none none",
      },
      duration: 1.5,
      bottom: "12%",
    });
}

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
