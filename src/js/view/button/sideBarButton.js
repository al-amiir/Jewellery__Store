import anime from "animejs/lib/anime.es";

export let sidebarButtonFunc = function (direction) {
  anime({
    targets: ".sidebar",
    translateX: ["0vw", "350px"],
    duration: 1000,
    easing: "easeOutCubic",
    direction: `${direction}`,
  });
  anime({
    targets: ".overlay",
    translateX: ["0vw", "100vw"],
    opacity: [0, 1],
    duration: 1500,
    easing: "easeOutCubic",
    direction: `${direction}`,
  });
  anime({
    targets: ".button__sidebar",
    color: ["rgb(255 225 225)", "rgb(255 0 0)"],
    duration: 1000,
    direction: `${direction}`,
  });
};
