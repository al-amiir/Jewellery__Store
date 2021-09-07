import anime from "animejs/lib/anime.es.js";
import { sectionDown } from "./sectionUpDownLogic";
import { typing } from "../typing";

/**
 * Animation occured in section 0
 * 1) Display liquid lines
 * 2) Display diamond
 * 3) Display text
 * 4) Move to section 1
 */
export let section0Animation = function () {
  // sectionDown("section0", "section1");

  //////////////////
  // 1)
  anime({
    targets: ".section0__diamond--liquid-1 path",
    strokeDashoffset: [anime.setDashoffset, 0],
    easing: "linear",
    duration: 1000,
    stroke: "#ffffff",
    strokeWidth: "1px",
    delay: 1000,
  });
  anime({
    targets: ".section0__diamond--liquid-2 path",
    strokeDashoffset: [anime.setDashoffset, 0],
    easing: "linear",
    duration: 1000,
    stroke: "#ffffff",
    strokeWidth: "1px",
    delay: 1000,
  });
  anime({
    targets: ".section0__diamond--liquid-3",
    delay: 1100,
    translateY: ["0vh", "50vh"],
    width: [0, 8],
    duration: 900,
    easing: "easeOutQuad",

    //////////////////
    // 2)
    begin: () => {
      setTimeout(() => {
        anime({
          targets: ".section0__diamond--svg-path",
          strokeDashoffset: [anime.setDashoffset, 0],
          easing: "easeOutQuad",
          duration: 800,
          stroke: "rgb(239 88 90)",
          strokeWidth: "9px",
          delay: function (el, i) {
            return i * 50;
          },
          complete: () => {
            anime({
              targets: ".section0__diamond--liquid-3",
              translateY: ["50vh", "100vh"],
              duration: 900,
              easing: "easeOutQuad",
              complete: () => {
                anime({
                  targets: ".section0__diamond--liquid-1 path",
                  duration: 1500,
                  strokeWidth: "0px",
                });
                anime({
                  targets: ".section0__diamond--liquid-2 path",
                  duration: 1500,
                  strokeWidth: "0px",
                });
                anime({
                  targets: ".section0__diamond--liquid-3",
                  width: [8, 0],
                  duration: 1500,
                  complete: () => {
                    //////////////////
                    // 3)
                    typing("0");
                    setTimeout(() => {
                      //////////////////
                      // 4)
                      sectionDown("section0", "section1");
                      setTimeout(() => {
                        typing("1");
                      }, 600);
                    }, 2000); //2000
                  },
                });
              },
            });
          },
        });
      }, 1500);
    },
  });
};
