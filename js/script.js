////////////////////////////
/*--- Global Variables ---*/
////////////////////////////

let currentGalleryImg = 1;

////////////////////////////
/*--- Modal Gallery ---*/
////////////////////////////

//// Clicking a thumbnail
document.querySelectorAll(".gal-img").forEach((el) => {
  el.addEventListener("click", function () {
    palceholderValue = el.alt;

    currentGalleryImg = `${palceholderValue}`.replace("gallery image ", "");

    document.querySelector(
      ".gal-img-large"
    ).src = `img/fullscreen/gal${currentGalleryImg}.jpg`;

    if (currentGalleryImg.class === "gal1.jpg" || "gal5.jpg") {
      document.querySelector(".gal-img-large").classList.add("port");
      document.querySelector(".gal-img-large").classList.remove("land");
    } else {
      document.querySelector(".gal-img-large").classList.remove("port");
      document.querySelector(".gal-img-large").classList.add("land");
    }

    document.querySelector(".modal-background").style.display = "inline-block";
    document.querySelector(".modal-gal-img").style.display = "inline-block";
    document.querySelector(".btn-close-gal").style.display = "inline-block";
  });
});

//// clicking the modal background window to close everything
document
  .querySelector(".modal-background")
  .addEventListener("click", function () {
    document.querySelector(".modal-background").style.display = "none";
    document.querySelector(".modal-gal-img").style.display = "none";
    document.querySelector(".btn-close-gal").style.display = "none";
    document.querySelector(".modal-text-box-popup").style.display = "none";
  });

//// clicking the modal close button to close everything
document.querySelector(".btn-close-gal").addEventListener("click", function () {
  document.querySelector(".modal-background").style.display = "none";
  document.querySelector(".modal-gal-img").style.display = "none";
  document.querySelector(".btn-close-gal").style.display = "none";
});

//// clicking the modal gallery prev button
document.querySelector(".btn-prev").addEventListener("click", function () {
  if (currentGalleryImg == 1) {
    currentGalleryImg = 10;

    document.querySelector(
      ".gal-img-large"
    ).src = `img/fullscreen/gal${currentGalleryImg}.jpg`;
  } else {
    currentGalleryImg--;
    document.querySelector(
      ".gal-img-large"
    ).src = `img/fullscreen/gal${currentGalleryImg}.jpg`;
  }

  if (currentGalleryImg.class === "gal1.jpg" || "gal5.jpg") {
    document.querySelector(".gal-img-large").classList.add("port");
    document.querySelector(".gal-img-large").classList.remove("land");
  } else {
    document.querySelector(".gal-img-large").classList.remove("port");
    document.querySelector(".gal-img-large").classList.add("land");
  }
});

//// clicking the modal gallery next button
document.querySelector(".btn-next").addEventListener("click", function () {
  if (currentGalleryImg == 10) {
    currentGalleryImg = 1;

    document.querySelector(
      ".gal-img-large"
    ).src = `img/fullscreen/gal${currentGalleryImg}.jpg`;
  } else {
    currentGalleryImg++;
    document.querySelector(
      ".gal-img-large"
    ).src = `img/fullscreen/gal${currentGalleryImg}.jpg`;
  }

  if (currentGalleryImg.class === "gal1.jpg" || "gal5.jpg") {
    document.querySelector(".gal-img-large").classList.add("port");
    document.querySelector(".gal-img-large").classList.remove("land");
  } else {
    document.querySelector(".gal-img-large").classList.remove("port");
    document.querySelector(".gal-img-large").classList.add("land");
  }
});

////////////////////////
////// nav-links ///////
////////////////////////

const navLinks = function () {
  // Selectors

  const sectionDormsBounding = document.getElementById("sectionDorms");
  const sectionFacilitiesBounding =
    document.getElementById("sectionFacilities");
  const sectionGalleryBounding = document.getElementById("sectionGallery");
  const sectionLocationBounding = document.getElementById("sectionLocation");
  const sectionContactBounding = document.getElementById("sectionContact");

  const scrollToDorms = document.getElementById("scrollToDorms");
  const scrollToFacilities = document.getElementById("scrollToFacilities");
  const scrollToGallery = document.getElementById("scrollToGallery");
  const scrollToLocation = document.getElementById("scrollToLocation");
  const scrollToContact = document.getElementById("scrollToContact");

  const navOffset = document.querySelector(".nav-bar").offsetHeight;

  // Functions
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
    document.querySelector(".modal-popup-text ").textContent =
      "The Book Now button would take you to Hostelworld to make a booking, this feature is not included as part of the London Wayfarer portfolio piece.";
    document.querySelector(".modal-background").style.display = "inline-block";
    document.querySelector(".modal-text-box-popup").style.display = "flex";
  });
});

//// clicking the Close Button to close everything
document
  .querySelector(".btn-close-popup")
  .addEventListener("click", function () {
    document.querySelector(".modal-background").style.display = "none";
    document.querySelector(".modal-text-box-popup").style.display = "none";
  });

//////////////////////////////////
/*--- Modal Social Icons Popup ---*/
////////////////////////////////////

// Book Now Button
document.querySelectorAll(".icon").forEach((el) => {
  el.addEventListener("click", function () {
    document.querySelector(".modal-popup-text ").textContent =
      "This icon button would take you to the hostel's social media channels. This feature is not included as part of the London Wayfarer portfolio piece.";
    document.querySelector(".modal-background").style.display = "inline-block";
    document.querySelector(".modal-text-box-popup").style.display = "flex";
  });
});

//// clicking the Close Button to close everything
document
  .querySelector(".btn-close-popup")
  .addEventListener("click", function () {
    document.querySelector(".modal-background").style.display = "none";
    document.querySelector(".modal-text-box-popup").style.display = "none";
  });

//// Trigger
navLinks();
