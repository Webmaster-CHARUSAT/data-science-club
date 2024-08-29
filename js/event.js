// Get the image and pop-up container
const popup = document.getElementById("image-popup");
const popupImage = document.getElementById("popup-image");
const closeBtn = document.getElementById("close-popup");
const navBar = document.getElementById("navbar");

let notVisibleElm = null;

// Get the image and pop-up container
const popEffects = document.getElementsByClassName("popupEffect");

for (let elm of popEffects) {
  elm.addEventListener("click", function () {
    popup.style.display = "flex";

    navBar.style.visibility = "hidden";
    // To resolve hover bug
    elm.style.visibility = "hidden";
    notVisibleElm = elm;
    popupImage.src = elm.src;
  });
}

function closePopup() {
  popupImage.src = null;
  popup.style.display = "none";
  navBar.style.visibility = "visible";
  notVisibleElm.style.visibility = "visible";
  notVisibleElm = null;
}

document.addEventListener("click", (e) => {
  if (e.target.id == "image-popup") closePopup();
});

closeBtn.addEventListener("click", closePopup);
