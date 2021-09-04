import anime from "animejs/lib/anime.es.js";

export let section3Animation = function (d) {
  if (d === "destroy") {
    let destroy = anime.timeline({
      easing: "easeOutExpo",
      duration: 250,
    });
    destroy.add({
      targets: ".section3__necklace--svg-path",
      opacity: [1, 0],
    });
    destroy.add({
      targets: ".section3__necklace--jewellery",
      opacity: [1, 0],
    });
  } else {
    let startAnimation = anime({
      targets: ".section3__necklace--svg-path",
      strokeDashoffset: [anime.setDashoffset, 0],
      easing: "easeInOutSine",
      duration: 700,
      delay: function (el, i) {
        return i * 150;
      },
      strokeWidth: [1, 2],
      opacity: [0, 1],
      autoplay: false,
      complete: function (anim) {
        anime({
          targets: ".section3__necklace--svg-path",
          fill: ["#fff27a00", "#fff27a"],
          duration: 700,
          strokeWidth: [0],
          easing: "easeInOutSine",
        });
        anime({
          targets: ".section3__necklace--jewellery",
          duration: 700,
          easing: "easeInOutSine",
          filter: "drop-shadow(1px 5px 5px black) contrast(2.5)",
          opacity: [0, 1],
        });
      },
      begin: function (anim) {
        document
          .querySelectorAll(".section3__necklace--svg-path")
          .forEach((p) => {
            p.style.fill = "none";
          });
      },
    });
    startAnimation.play();
  }
};
