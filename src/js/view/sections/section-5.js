import anime from "animejs/lib/anime.es.js";

export let section5Animation = function () {
  let path = anime.path(".section5__necklace--peral-svg-path");
  anime({
    targets: ".section5__necklace--peral-svg-jewellery",
    translateX: path("x"),
    translateY: path("y"),
    rotate: path("angle"),
    easing: "linear",
    duration: 1000,
    delay: anime.stagger(100),
    scale: 0,
    opacity: 1,
    begin: function (anim) {
      anime({
        targets: ".section5__necklace--woman",
        filter: "drop-shadow(2px 4px 10px black) brightness(1)",
        easing: "linear",
      });
    },
  });
};
