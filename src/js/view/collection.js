import anime from "animejs/lib/anime.es.js";

export let collectionSection = function () {
  anime({
    targets: ".collection",
    clipPath: ["circle(0%)", "circle(100%)"],
    easing: "easeInQuart",
    duration: 1500,
    begin: function (anim) {
      anime({
        targets: ".collection__background",
        scale: [2, 1],
        duration: 2000,
        easing: "easeOutQuad",
        // transform: "scale(1)",
      });
    },
  });
};
