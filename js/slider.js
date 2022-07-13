function goToTab(targetIndex) {
  const navChildElems = document.querySelector("#navigation").children;
  for (let i = 0; i < navChildElems.length; i++) {
    navChildElems[i].classList.remove("active");
  }
  navChildElems[targetIndex].classList.add("active");

  // Change body color onClick
  const galleryChildElems = document.querySelector(".slider__wrapper").children;
  for (let i = 0; i < galleryChildElems.length; i++) {
    galleryChildElems[i].classList.remove("slide-animation");
    if (galleryChildElems[i].classList.contains("active") || i == targetIndex) {
      galleryChildElems[i].classList.add("slide-animation");
    }
    galleryChildElems[i].classList.remove("active");
    galleryChildElems[i].classList.remove("move-right");

    if (targetIndex < i) {
      galleryChildElems[i].classList.add("move-right");
    }
  }
  galleryChildElems[targetIndex].classList.add("active");
  document.querySelector(".slider__wrapper").style["min-height"] =
    galleryChildElems[targetIndex].offsetHeight + "px";
}

goToTab(0);
