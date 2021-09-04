import anime from "animejs/lib/anime.es";

///////////////////////////////////////////////////////////////////////////
// Show me button (in product card)
//////////////////////////////////////////////////////////////////////////

export let showMeDisplay = function (direction) {
  anime({
    targets: ".singleProduct__left",
    translateY: ["0vh", "-100vh"],
    duration: 1000,
    easing: "easeOutCubic",
    direction: `${direction}`,
  });
  anime({
    targets: ".singleProduct__right",
    translateY: ["0vh", "100vh"],
    duration: 1000,
    easing: "easeOutCubic",
    direction: `${direction}`,
  });
};
