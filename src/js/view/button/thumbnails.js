export function createThumbnails(parentName, array) {
  let parent = document.querySelector(`.${parentName}`);
  array.forEach((arr) => {
    let child = document.createElement("img");
    child.classList.add("singleProduct__img-thumbnails-elm");
    child.setAttribute("src", arr);
    parent.appendChild(child);
  });
}
export function deletThumbnails(parentName) {
  let parent = document.querySelector(`.${parentName}`);
  parent.innerHTML = "";
}

// which tumbnail
export function whichThumbnail(counter, thumbnailName) {
  let target = document.querySelectorAll(`.${thumbnailName}`);
  target.forEach((tar) => {
    tar.style = "";
  });
  target[counter].style.border = "2px solid black";
  target[counter].style.borderRaduis = "5px";
  target[counter].style.filter = "drop-shadow(4px 7px 6px black)";
}
