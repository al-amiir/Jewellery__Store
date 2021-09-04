import hoverEffect from "hover-effect";

export function hoverChange(parent, src1, src2) {
  document.querySelector(`.${parent}`).innerHTML = "";
  new hoverEffect({
    parent: document.querySelector(`.${parent}`),
    intensity: 0.3,
    image1: `${src1}`,
    image2: `${src2}`,
    displacementImage: "./pix/collection/fluid.jpg",
  });
}
