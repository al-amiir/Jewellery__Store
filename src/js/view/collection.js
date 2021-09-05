import anime from "animejs/lib/anime.es.js";

export let collectionSection = (direction) => {
  anime({
    targets: ".collection",
    clipPath: ["circle(0%)", "circle(100%)"],
    easing: "easeInQuart",
    duration: 1500,
    direction: `${direction}`,
    begin: function (anim) {
      anime({
        targets: ".collection__background",
        scale: [2, 1],
        duration: 2000,
        easing: "easeOutQuad",
        direction: `${direction}`,
      });
    },
  });
};
