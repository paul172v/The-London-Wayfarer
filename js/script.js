////////////////////////////
/*--- Global Variables ---*/
////////////////////////////

let currentGalleryImg = 1;

////////////////////////////
/*--- Reusable Functions ---*/
////////////////////////////

const updateGalleyFullscreenImage = function () {
  document.querySelector(
    ".gal-img-large"
  ).src = `img/fullscreen/gal${currentGalleryImg}.jpg`;
};

const updateGalleryFullscreenOrientation = function (imageNum) {
  if (imageNum == 1 || imageNum == 5) {
    document.querySelector(".gal-img-large").classList.remove("land");
    document.querySelector(".gal-img-large").classList.add("port");
  } else {
    document.querySelector(".gal-img-large").classList.remove("port");
    document.querySelector(".gal-img-large").classList.add("land");
  }
};

const hideAllModals = function () {
  document.querySelector(".modal-background").style.display = "none";
  document.querySelector(".modal-gal-img").style.display = "none";
  document.querySelector(".btn-close-gal").style.display = "none";
  document.querySelector(".modal-text-box-popup").style.display = "none";
};

const showTextPopup = function (message) {
  document.querySelector(".modal-popup-text ").textContent = message;
  document.querySelector(".modal-background").style.display = "inline-block";
  document.querySelector(".modal-text-box-popup").style.display = "flex";
};

////////////////////////////
/*--- Modal Gallery ---*/
////////////////////////////

//// Clicking a thumbnail
document.querySelectorAll(".gal-img").forEach((el) => {
  el.addEventListener("click", function () {
    console.log(el);
    palceholderValue = el.alt;
    currentGalleryImg = `${palceholderValue}`.replace("gallery image ", "");
    updateGalleryFullscreenOrientation(currentGalleryImg);
    updateGalleyFullscreenImage();

    document.querySelector(".modal-background").style.display = "inline-block";
    document.querySelector(".modal-gal-img").style.display = "inline-block";
    document.querySelector(".btn-close-gal").style.display = "inline-block";
  });
});

//// clicking the modal background window to close everything
document
  .querySelector(".modal-background")
  .addEventListener("click", function () {
    hideAllModals();
  });

//// clicking the modal close button to close everything
document.querySelector(".btn-close-gal").addEventListener("click", function () {
  hideAllModals();
});

//// clicking the modal gallery prev button
document.querySelector(".btn-prev").addEventListener("click", function () {
  if (currentGalleryImg == 1) {
    currentGalleryImg = 10;
    updateGalleryFullscreenOrientation(currentGalleryImg);
    updateGalleyFullscreenImage();
  } else {
    currentGalleryImg--;
    updateGalleryFullscreenOrientation(currentGalleryImg);
    updateGalleyFullscreenImage();
  }
});

//// clicking the modal gallery next button
document.querySelector(".btn-next").addEventListener("click", function () {
  if (currentGalleryImg == 10) {
    currentGalleryImg = 1;
    updateGalleryFullscreenOrientation(currentGalleryImg);
    updateGalleyFullscreenImage();
  } else {
    currentGalleryImg++;
    updateGalleryFullscreenOrientation(currentGalleryImg);
    updateGalleyFullscreenImage();
  }
});

////////////////////////
////// Nav-links ///////
////////////////////////

const activateNavLinks = function () {
  // Selectors
  const scrollToTop = document.getElementById("scrollToTop");
  const scrollToDorms = document.getElementById("scrollToDorms");
  const scrollToFacilities = document.getElementById("scrollToFacilities");
  const scrollToGallery = document.getElementById("scrollToGallery");
  const scrollToLocation = document.getElementById("scrollToLocation");
  const scrollToContact = document.getElementById("scrollToContact");

  const navOffset = document.querySelector(".nav-bar").offsetHeight;

  // Function
  const scrollToSection = function (section) {
    let currentScollPosition = 0;
    let x = section.getBoundingClientRect();
    console.log(section);

    currentScollPosition = x.top -= navOffset;
    console.log(currentScollPosition);
    window.scrollBy({
      top: currentScollPosition,
      left: 0,
      behavior: "smooth",
    });
  };

  // Scroll to Buttons
  scrollToTop.addEventListener("click", function () {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "smooth",
    });
  });

  scrollToDorms.addEventListener("click", function () {
    scrollToSection(sectionDorms);
  });

  scrollToFacilities.addEventListener("click", function () {
    scrollToSection(sectionFacilities);
  });

  scrollToGallery.addEventListener("click", function () {
    scrollToSection(sectionGallery);
  });

  scrollToLocation.addEventListener("click", function () {
    scrollToSection(sectionLocation);
  });

  scrollToContact.addEventListener("click", function () {
    scrollToSection(sectionContact);
  });
};

/////////////////////////////////
/*--- Modal Book Now Popup ---*/
////////////////////////////////

// Book Now Button
document.querySelectorAll(".btn-book-now").forEach((el) => {
  el.addEventListener("click", function () {
    showTextPopup(
      "The Book Now button would take you to Hostelworld to make a booking, this feature is not included as part of the London Wayfarer portfolio piece."
    );
  });
});

//// clicking the Close Button to close everything
document
  .querySelector(".btn-close-popup")
  .addEventListener("click", function () {
    hideAllModals();
  });

////////////////////////////////////
/*--- Modal Social Icons Popup ---*/
////////////////////////////////////

// Book Now Button
document.querySelectorAll(".icon").forEach((el) => {
  el.addEventListener("click", function () {
    showTextPopup(
      "This icon button would take you to the hostel's social media channels. This feature is not included as part of the London Wayfarer portfolio piece."
    );
  });
});

//// clicking the Close Button to close everything
document
  .querySelector(".btn-close-popup")
  .addEventListener("click", function () {
    hideAllModals();
  });

////////////////////
/*--- Triggers ---*/
///////////////////
activateNavLinks();
