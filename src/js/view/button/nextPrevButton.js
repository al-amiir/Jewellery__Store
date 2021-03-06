export function nextButtonFunc(nextButton, prevButton, counter, array) {
  // next button
  if (counter === array.length - 1) {
    nextButton.style.opacity = ".5";
    nextButton.style.cursor = "not-allowed";
    nextButton.style.filter = "drop-shadow(0px 0px 0px black)";
    nextButton.disabled = true;
  }
  // prev button
  if (counter > 0) {
    prevButton.style.opacity = "1";
    prevButton.style.cursor = "pointer";
    prevButton.style.filter = "drop-shadow(0px 3px 4px black)";
    prevButton.disabled = false;
  }
}
export function prevButtonFunc(nextButton, prevButton, counter, array) {
  // next button
  if (counter < array.length - 1) {
    nextButton.style.opacity = "1";
    nextButton.style.cursor = "pointer";
    nextButton.style.filter = "drop-shadow(0px 3px 4px black)";
    nextButton.disabled = false;
  }
  // prev button
  if (counter == 0) {
    prevButton.style.opacity = ".5";
    prevButton.style.cursor = "not-allowed";
    prevButton.style.filter = "drop-shadow(0px 0px 0px black)";
    prevButton.disabled = true;
  }
}
