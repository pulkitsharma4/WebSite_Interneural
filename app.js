let barbtn = document.querySelector(".bar-icon");
let sidebar = document.querySelector(".side-bar");
let crossbtn = document.querySelector(".cross-icon");

let homebtn = document.querySelector(".home");
let aboutbtn = document.querySelector(".about-us");
let servicesbtn = document.querySelector(".our-services");
let projectsbtn = document.querySelector(".our-projects");
let reviewsbtn = document.querySelector(".clients-reviews");
let contactbtn = document.querySelector(".contact-us");

let homebtn2 = document.querySelector(".home2");
let aboutbtn2 = document.querySelector(".about2");
let servicesbtn2 = document.querySelector(".services2");
let projectsbtn2 = document.querySelector(".projects2");
let reviewsbtn2 = document.querySelector(".reviews2");
let contactbtn2 = document.querySelector(".contact2");

function show(a) {
  a.style.display = "block";
}

function hide(a) {
  a.style.display = "none";
}

function scroll(a, b) {
  a.addEventListener("click", function () {
    window.scrollTo(0, b);
  });
}

scroll(homebtn, 0);
scroll(aboutbtn, 600);
scroll(servicesbtn, 1180);
scroll(projectsbtn, 1850);
scroll(reviewsbtn, 2600);
scroll(contactbtn, 2800);

function sidescroll(a, b) {
  a.addEventListener("click", function () {
    window.scrollTo(0, b);
    hide(sidebar);
    hide(crossbtn);
    show(barbtn);
  });
}

const q = window.matchMedia("(max-width: 768px)");

if (q.matches) {
  console.log("matches");

  show(barbtn);

}

// q.addEventListener("change" function(){
//     location.reload();
// })

barbtn.addEventListener("click", function () {
  show(sidebar);
  show(crossbtn);
  hide(barbtn);
  sidescroll(homebtn2, 0);
  sidescroll(aboutbtn2, 460);
  sidescroll(servicesbtn2, 830);
  sidescroll(projectsbtn2, 1170);
  sidescroll(reviewsbtn2, 1560);
  sidescroll(contactbtn2, 2100);
});
crossbtn.addEventListener("click", function () {
  hide(sidebar);
  hide(crossbtn);
  show(barbtn);
});
