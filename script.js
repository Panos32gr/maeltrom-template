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

//banner implementation

var bannerStatus = 1;
var bannerTimer = 6000;

window.onload = function () {
  bannerLoop();
};

var bannerStart = setInterval(function () {
  bannerLoop();
}, bannerTimer);

document.getElementById("main-banner").onmouseenter = function () {
  clearInterval(bannerStart);
};

document.getElementById("main-banner").onmouseleave = function () {
  bannerStart = setInterval(function () {
    bannerLoop();
  }, bannerTimer);
};

function bannerLoop() {
  if (bannerStatus === 1) {
    document.getElementById("imgban2").style.opacity = "0";

    setTimeout(function () {
      document.getElementById("imgban3").style.right = "-1200px";
      document.getElementById("imgban3").style.zIndex = "1";
      document.getElementById("imgban1").style.right = "0px";
      document.getElementById("imgban1").style.zIndex = "0";
      document.getElementById("imgban2").style.right = "1200px";
      document.getElementById("imgban2").style.zIndex = "2";
    }, 500);

    setTimeout(function () {
      document.getElementById("imgban2").style.opacity = "1";
    }, 1000);

    bannerStatus = 2;
  } else if (bannerStatus === 2) {
    document.getElementById("imgban3").style.opacity = "0";

    setTimeout(function () {
      document.getElementById("imgban1").style.right = "-1200px";
      document.getElementById("imgban1").style.zIndex = "1";
      document.getElementById("imgban2").style.right = "0px";
      document.getElementById("imgban2").style.zIndex = "0";
      document.getElementById("imgban3").style.right = "1200px";
      document.getElementById("imgban3").style.zIndex = "2";
    }, 500);

    setTimeout(function () {
      document.getElementById("imgban3").style.opacity = "1";
    }, 1000);

    bannerStatus = 3;
  } else if (bannerStatus === 3) {
    document.getElementById("imgban1").style.opacity = "0";

    setTimeout(function () {
      document.getElementById("imgban2").style.right = "-1200px";
      document.getElementById("imgban2").style.zIndex = "1";
      document.getElementById("imgban3").style.right = "0px";
      document.getElementById("imgban3").style.zIndex = "0";
      document.getElementById("imgban1").style.right = "1200px";
      document.getElementById("imgban1").style.zIndex = "2";
    }, 500);

    setTimeout(function () {
      document.getElementById("imgban1").style.opacity = "1";
    }, 1000);

    bannerStatus = 1;
  }
}

function reverseBanner() {
  if (bannerStatus === 2) {
    document.getElementById("imgban1").style.opacity = "0";
    setTimeout(function () {
      document.getElementById("imgban1").style.right = "-1200px";
      document.getElementById("imgban1").style.zIndex = "-1";
      document.getElementById("imgban3").style.right = "0px";
      document.getElementById("imgban3").style.zIndex = "0";
      document.getElementById("imgban2").style.right = "1200px";
      document.getElementById("imgban2").style.zIndex = "-2";
    }, 500);
    setTimeout(function () {
      document.getElementById("imgban1").style.opacity = "1";
    }, 1000);

    bannerStatus = 3;
  } else if (bannerStatus === 3) {
    document.getElementById("imgban2").style.opacity = "0";
    setTimeout(function () {
      document.getElementById("imgban2").style.right = "-1200px";
      document.getElementById("imgban2").style.zIndex = "-1";
      document.getElementById("imgban1").style.right = "0px";
      document.getElementById("imgban1").style.zIndex = "0";
      document.getElementById("imgban3").style.right = "1200px";
      document.getElementById("imgban3").style.zIndex = "-2";
    }, 500);
    setTimeout(function () {
      document.getElementById("imgban2").style.opacity = "1";
    }, 1000);

    bannerStatus = 1;
  } else if (bannerStatus === 1) {
    document.getElementById("imgban3").style.opacity = "0";
    setTimeout(function () {
      document.getElementById("imgban3").style.right = "-1200px";
      document.getElementById("imgban3").style.zIndex = "-1";
      document.getElementById("imgban2").style.right = "0px";
      document.getElementById("imgban2").style.zIndex = "0";
      document.getElementById("imgban1").style.right = "1200px";
      document.getElementById("imgban1").style.zIndex = "-2";
    }, 500);
    setTimeout(function () {
      document.getElementById("imgban3").style.opacity = "1";
    }, 1000);

    bannerStatus = 2;
  }
}

document.getElementById("imgbtn-next").onclick = function () {
  bannerLoop();
};

document.getElementById("imgbtn-prev").onclick = function () {
  reverseBanner();
};

//element animations using gsap cdns
gsap.registerPlugin("scrollTrigger");

var tl1 = gsap.timeline({ duration: 0.5 });

tl1.to(".blob1", {
  top: "-8%",
});

tl1.to(".blob1", {
  top: "-10%",
});

tl1.to(".blob2", {
  right: "-8%",
});

tl1.to(".blob2", {
  right: "-10%",
});

tl1.to(".blob3", {
  left: "-8%",
});

tl1.to(".blob3", {
  left: "-10%",
});


tl1.to(".blob4", {
  left: "28%",
});

tl1.to(".blob4", {
  left: "30%",
});

tl1.repeat(-1);

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
    start: "top 50%",
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
    start: "top 50%",
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
    top: "55%",
  }),
    gsap.to(".card4", {
      scrollTrigger: {
        trigger: ".videocontainer2",
        start: "center center",
        toggleActions: "play none none none",
      },
      duration: 1.5,
      bottom: "10%",
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
