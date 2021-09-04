import anime from "animejs/lib/anime.es.js";

export let section4Animation = function (d) {
  if (d === "destroy") {
    let destroy = anime.timeline({
      easing: "easeOutExpo",
      duration: 250,
    });
    destroy.add({
      targets: ".section4__necklace--svg-path",
      opacity: [1, 0],
    });
    destroy.add({
      targets: ".section4__necklace--jewellery",
      opacity: [1, 0],
    });
    destroy.add({
      targets: ".section4__necklace--jewellery-svg-path",
      opacity: [1, 0],
    });
  } else {
    let one = anime({
      targets: ".section4__necklace--svg-path",
      strokeDashoffset: [anime.setDashoffset, 0],
      easing: "easeInOutSine",
      duration: 3000,
      opacity: [0, 1],
      autoplay: false,
      complete: function (anim) {
        anime({
          targets: ".section4__necklace--svg-path",
          fill: ["none", "#580d0d"],
          duration: 1000,
          easing: "easeInOutSine",
        });
      },
      begin: function (anim) {
        document
          .querySelectorAll(".section4__necklace--svg-path")
          .forEach((p) => {
            p.style.fill = "none";
          });
      },
    });
    let two = anime({
      targets: ".section4__necklace--jewellery",
      //   filter: "brightness(0)",
      duration: 0,
      opacity: 1,
      autoplay: false,
      complete: function (anim) {
        anime({
          targets: ".section4__necklace--jewellery",
          filter: [
            "brightness(1)",
            "brightness(1.3) drop-shadow(black 2px 4px 16px) contrast(1.3) sepia(1)",
          ],
          easing: "linear",
          opacity: [0, 1],
          delay: 1000,
          duration: 1500,
        });
      },
    });
    let three = anime({
      autoplay: false,
      targets: ".section4__necklace--jewellery-svg-path",
      strokeDashoffset: [anime.setDashoffset, 0],
      easing: "linear",
      duration: 1500,
      opacity: [0, 1],
      easing: "linear",
    });
    one.play();
    two.play();
    three.play();
  }
};
