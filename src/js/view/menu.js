import anime from "animejs/lib/anime.es.js";

export let menuAnimation = function (direction, display, seconds) {
  anime({
    targets: ".menu",
    height: ["0%", "100%"],
    easing: "easeOutQuart",
    duration: 800,
    direction: `${direction}`,
    begin: function (anim) {
      anime({
        targets: ".section0__diamond--liquid-3",
        translateY: ["204vh", "0vh"],
        delay: 200,
        width: [8, 0],
        duration: 1000,
        easing: "linear",
        direction: `${direction}`,
        begin: function (anim) {
          setTimeout(() => {
            document.querySelector(
              ".menu .text__container "
            ).style.display = `${display}`;
          }, seconds);
          anime({
            targets: ".menu .text__container .text .text__main ",
            delay: function (el, i) {
              return i * 100;
            },
            duration: 800,
            translateY: [100, 0],
            easing: "easeOutQuart",
            direction: `${direction}`,
          });
        },
      });
    },
  });
  anime({
    targets: ".button__menu--back",
    translateX: [0, -100],
    opacity: [0, 1],
    easing: "easeOutQuart",
    duration: 500,
    direction: `${direction}`,
  });
};
