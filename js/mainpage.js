let dropButton = document.querySelector(".drop-button");
let dropMenu = document.querySelector(".nav.dropmenu");
let dropButton2 = document.querySelector(".drop-button2");
let dropButton2Icon = document.querySelector(".drop-button2 i");
let dropMenu2 = document.querySelector(".nav.dropmenu2");
let nav = document.querySelector("nav");
let navOverlay = document.querySelector(".top");
let contactModal = document.querySelector(".contact-modal");
let contactModalButton = document.querySelector(".contact-bottom");
let contactModalClose = document.querySelector(".close");
let ModalOverlay = document.querySelector(".modal-overlay");
let main = document.querySelector(".main").children;
let header = document.querySelector("header");
let brandImages = document.querySelectorAll(".brands img");
let brandText = document.querySelector(".brands h1");
let designerBox = document.querySelectorAll(".designer-box");
let designerH1 = document.querySelector(".designer h1");
let designH1 = document.querySelector(".design h1");
let designImages = document.querySelectorAll(".design .image");
let designText = document.querySelectorAll(".design .text");
let howItWorkH1 = document.querySelectorAll(".how-it-work h1 span");
let howItWorkShape = document.querySelectorAll(".how-it-work ul li");
let howItWorkImage = document.querySelectorAll(".how-it-work .image img");
let howItWorkText = document.querySelectorAll(".how-it-work .text");
let howItWorkHead = document.querySelector(".how-it-work h1");
let slider = document.querySelector(".slider");
let sliderH1 = document.querySelector(".slider .text");
let slide = document.querySelector(".slide");
let slide2 = document.querySelector(".slide2");
let slideImages = document.querySelectorAll(".slide img");
let slideImages2 = document.querySelectorAll(".slide2 img");
let sliderBox = document.querySelectorAll(".slider-box");
let sliderBox2 = document.querySelectorAll(".slider-box2");
let sliderUl = document.querySelector(".sliderul");
let sliderUl2 = document.querySelector(".sliderul2");
let btnRight = document.querySelector(".btn-right");
let btnRight2 = document.querySelector(".btn-right2");
let btnleft = document.querySelector(".btn-left");
let btnleft2 = document.querySelector(".btn-left2");
let clickBox = document.querySelector(".click-image");
let clickImage = document.querySelector(".click-image img");
let closeImage = document.querySelector(".close-image");
let customSectionText = document.querySelector(".custom-design .text");
let customBox = document.querySelectorAll(".custom-design .custom-box");

let headObs = new IntersectionObserver(
  function (entries) {
    let [entry] = entries;
    if (!entry.isIntersecting && !nav.classList.contains("active-color")) {
      nav.classList.toggle("active-color");
      navOverlay.classList.toggle("active");
    } else if (entry.isIntersecting) {
      nav.classList.remove("active-color");
      navOverlay.classList.remove("active");
    }
  },
  {
    root: null,
    threshold: 0,
  }
);

headObs.observe(header);

dropButton.addEventListener("click", function () {
  dropMenu.classList.toggle("active");
  setTimeout(function () {
    dropMenu.classList.toggle("opacity");
  }, 200);
});

dropButton2.addEventListener("click", function () {
  dropMenu2.classList.toggle("active");
  dropButton2Icon.classList.toggle("active");
  if (dropButton2Icon.classList.contains("fa-bars")) {
    dropButton2Icon.classList.remove("fa-bars");
    dropButton2Icon.classList.add("fa-xmark");
  } else if (dropButton2Icon.classList.contains("fa-xmark")) {
    dropButton2Icon.classList.remove("fa-xmark");
    dropButton2Icon.classList.add("fa-bars");
  }
  setTimeout(function () {
    if (!nav.classList.contains("active-color")) {
      nav.classList.toggle("active-color");
      navOverlay.classList.toggle("active");
    } else if (nav.classList.contains("active-color")) {
      return false;
    }
  }, 100);
});

// login

const addLogin = function () {
  let html = ` <div class="login-overlay"></div>
        <div class="login position-fixed overflow-hidden col-11">
            <form class="col d-flex justify-content-center flex-column align-items-center" action="">
                <img src="images/5fc675c11f5b4212db8ecb65_Group 2.svg" alt="" width="35px">
                <h1 class="mt-4" style="color: black;font-weight: 400;">Welcome back
                </h1>
                <br>
                <hr style="width: 200%;">
                <div class="d-flex flex-column gap-3 mb-4 mt-5 w-100">
                    <label for="">Email Address</label>
                    <input class="p-4" type="email" placeholder="Email">
                </div>
                <div class="d-flex flex-column gap-3 mb-4 w-100">
                    <label for="">Password</label>
                    <input class="p-4" type="password" placeholder="Password">
                </div>
                <p class="align-self-end mb-4" style="color: #5ab7d6;font-size: 13px;">Reset my password</p>
                <button class="w-100 py-4"
                    style="background-color: #5ab7d6; color: white;border-radius: 5px;">Login</button>
            </form>
        </div>`;

  document.body.insertAdjacentHTML("afterbegin", html);
};

addLogin();

let login = document.querySelector(".login");
let loginBtn = document.querySelectorAll(".login-btn");
let loginOverlay = document.querySelector(".login-overlay");

loginBtn.forEach((e) =>
  e.addEventListener("click", function (e) {
    e.preventDefault();
    login.classList.toggle("active");
    loginOverlay.classList.toggle("active");
  })
);

loginOverlay.addEventListener("click", function () {
  login.classList.toggle("active");
  loginOverlay.classList.toggle("active");
});

// end login

contactModalButton.addEventListener("click", function () {
  contactModal.classList.toggle("active");
  ModalOverlay.classList.toggle("active");
});

contactModalClose.addEventListener("click", function () {
  contactModal.classList.toggle("active");
  ModalOverlay.classList.toggle("active");
});

ModalOverlay.addEventListener("click", function () {
  contactModal.classList.toggle("active");
  ModalOverlay.classList.toggle("active");
});

window.addEventListener("keydown", function (esc) {
  if (esc.key === "Escape") {
    if (
      ModalOverlay.classList.contains("active") &&
      contactModal.classList.contains("active")
    ) {
      contactModal.classList.toggle("active");
      ModalOverlay.classList.toggle("active");
    }
  }
});

window.addEventListener("load", function () {
  for (let x of main) {
    x.style.translate = "0px";
    x.style.opacity = "1";
  }
});

// windowScroll

function scale(section) {
  if (scrollY >= section.offsetTop - document.documentElement.clientHeight) {
    section.style.scale = "1";
    section.style.opacity = "1";
  } else if (
    scrollY <=
    section.offsetTop - document.documentElement.clientHeight
  ) {
    section.style.scale = "0";
    section.style.opacity = "0";
  }
}

function rotateX(section) {
  if (scrollY >= section.offsetTop - document.documentElement.clientHeight) {
    section.style.transform = "rotateX(0deg)";
    section.style.opacity = "1";
  } else if (
    scrollY <=
    section.offsetTop - document.documentElement.clientHeight
  ) {
    section.style.transform = "rotateX(720deg)";
    section.style.opacity = "0";
  }
}

function rotateY(section) {
  if (scrollY >= section.offsetTop - document.documentElement.clientHeight) {
    section.style.transform = "rotateY(0deg)";
    section.style.opacity = "1";
  } else if (
    scrollY <=
    section.offsetTop - document.documentElement.clientHeight
  ) {
    section.style.transform = "rotateY(720deg)";
    section.style.opacity = "0";
  }
}

function moveUp(section) {
  if (scrollY >= section.offsetTop - document.documentElement.clientHeight) {
    section.style.translate = "0";
    section.style.opacity = "1";
  } else if (
    scrollY <=
    section.offsetTop - document.documentElement.clientHeight
  ) {
    section.style.translate = "0 100%";
    section.style.opacity = "0";
  }
}

function moveLeft(section) {
  if (scrollY >= section.offsetTop - document.documentElement.clientHeight) {
    section.style.translate = "0";
    section.style.opacity = "1";
  } else if (
    scrollY <=
    section.offsetTop - document.documentElement.clientHeight
  ) {
    section.style.translate = "100%";
    section.style.opacity = "0";
  }
}

function moveRight(section) {
  if (scrollY >= section.offsetTop - document.documentElement.clientHeight) {
    section.style.translate = "0%";
    section.style.opacity = "1";
  } else if (
    scrollY <=
    section.offsetTop - document.documentElement.clientHeight
  ) {
    section.style.translate = "-100%";
    section.style.opacity = "0";
  }
}

window.addEventListener("scroll", function () {
  // brand
  for (let img of brandImages) {
    scale(img);
  }
  scale(brandText);
  // end brand

  // designer
  for (let box of designerBox) {
    scale(box);
    rotateY(box);
  }
  scale(designerH1);
  // end designer

  // design
  for (let image of designImages) {
    rotateY(image);
    if (image.classList.contains("left")) {
      moveRight(image);
    } else {
      moveLeft(image);
    }
  }
  for (let i = 0; i < designText.length; i++) {
    for (let j = 0; j < designText[i].children.length; j++) {
      scale(designText[i].children[j]);
    }
  }
  scale(designH1);
  for (let span of howItWorkH1) {
    rotateY(span);
  }
  // end design

  // how it work
  scale(howItWorkHead);
  for (let li of howItWorkShape) {
    rotateX(li);
  }
  for (let img of howItWorkImage) {
    moveUp(img);
  }
  for (let text of howItWorkText) {
    moveLeft(text);
  }
  // end how it work

  // custom
  scale(customSectionText);
  const arr = [...customBox];
  for (let box of arr.slice(0, 2)) {
    scale(box);
  }
  for (let box of arr.slice(2, 4)) {
    if (box.classList.contains("left")) {
      moveRight(box);
    } else {
      moveLeft(box);
    }
  }
  for (let box of arr.slice(4, 6)) {
    moveUp(box);
  }
  // end custom

  // video
  moveUp(videoSection);
  // end video

  // wall
  scale(wallSection);
  // end wall

  // membership
  for (let box of memberBox) {
    if (box.classList.contains("left")) {
      moveRight(box);
    } else {
      moveLeft(box);
    }
  }
  scale(memberText);
  // end membership

  // pricing
  scale(pricing);
  // end pricing
});

// end windowScroll

// slider1

for (let i = 0; i < sliderBox.length; i++) {
  let sliderLi = document.createElement("li");
  sliderUl.appendChild(sliderLi);
  if (i === 0) {
    sliderLi.setAttribute("class", "active");
  }
  sliderLi.setAttribute("data-index", `${i}`);
}

let i = 0;
for (let box of sliderBox) {
  box.setAttribute("data-index", `${i}`);
  i += 1;
}

const removeActive = function () {
  for (let li of sliderUl.children) {
    li.classList.remove("active");
  }
};

let current1 = 0;

const nextSlide = function () {
  removeActive();
  if (current1 == sliderBox.length - 1) {
    current1 = 0;
    sliderUl.firstChild.classList.add("active");
  } else {
    current1++;
    for (let box of sliderUl.children) {
      if (box.dataset.index == current1) {
        box.classList.add("active");
      }
    }
  }
  slide.style.translate = `${-100 * current1}%`;
};

let sliderMove = setInterval(nextSlide, 7000);

const prevSlide = function () {
  removeActive();
  if (current1 == 0) {
    current1 = sliderBox.length - 1;
    sliderUl.lastChild.classList.add("active");
  } else {
    current1--;
    for (let box of sliderUl.children) {
      if (box.dataset.index == current1) {
        box.classList.add("active");
      }
    }
  }
  slide.style.translate = `${-100 * current1}%`;
};

btnRight.addEventListener("click", function () {
  nextSlide();
  clearInterval(sliderMove);
});
btnleft.addEventListener("click", prevSlide);
sliderUl.addEventListener("click", function (li) {
  removeActive();
  li.target.classList.add("active");
  slide.style.translate = `${-100 * li.target.dataset.index}%`;
  current1 = li.target.dataset.index;
});

slideImages.forEach(function (el) {
  el.addEventListener("click", function (el) {
    clickBox.classList.add("active");
    clickImage.setAttribute("src", `${el.target.attributes.src.nodeValue}`);
  });
});

closeImage.addEventListener("click", function () {
  clickBox.classList.remove("active");
});

slider.addEventListener("click", function (el) {
  if (el.target.classList.contains("slider")) {
    clickBox.classList.remove("active");
  }
});

window.addEventListener("keydown", function (k) {
  if (k.key === "Escape") {
    clickBox.classList.remove("active");
  }
});
window.addEventListener("keydown", function (k) {
  if (k.key === "ArrowRight") {
    nextSlide();
  }
});
window.addEventListener("keydown", function (k) {
  if (k.key === "ArrowLeft") {
    prevSlide();
  }
});

// end slider1

//slider2

for (let i = 0; i < sliderBox2.length; i++) {
  let sliderLi = document.createElement("li");
  sliderUl2.appendChild(sliderLi);
  if (i === 0) {
    sliderLi.setAttribute("class", "active");
  }
  sliderLi.setAttribute("data-index", `${i}`);
}

const removeActive2 = function () {
  for (let li of sliderUl2.children) {
    li.classList.remove("active");
  }
};

let current2 = 0;

const nextSlide2 = function () {
  clearInterval(sliderMove);
  removeActive2();
  if (current2 >= sliderBox2.length - 1) {
    current2 = 0;
    sliderUl2.firstChild.classList.add("active");
  } else {
    current2++;
    for (let box of sliderUl2.children) {
      if (box.dataset.index == current2) {
        box.classList.add("active");
      }
    }
  }
  slide2.style.translate = `${-100 * current2}%`;
};

const prevSlide2 = function () {
  removeActive2();
  if (current2 == 0) {
    current2 = sliderBox2.length - 1;
    sliderUl2.lastChild.classList.add("active");
  } else {
    current2--;
    for (let box of sliderUl2.children) {
      if (box.dataset.index == current2) {
        box.classList.add("active");
      }
    }
  }
  slide2.style.translate = `${-100 * current2}%`;
};

btnRight2.addEventListener("click", nextSlide2);
btnleft2.addEventListener("click", prevSlide2);
sliderUl2.addEventListener("click", function (li) {
  removeActive2();
  li.target.classList.add("active");
  slide2.style.translate = `${-100 * li.target.dataset.index}%`;
  current2 = li.target.dataset.index;
});

slideImages2.forEach(function (el) {
  el.addEventListener("click", function (el) {
    clickBox.classList.add("active");
    clickImage.setAttribute("src", `${el.target.attributes.src.nodeValue}`);
  });
});

// end slider2

// custom section

let addBoxesImage = function () {
  let arr = [...customBox];
  let arrSlice = arr.slice(3, 7);
  arrSlice.forEach(function (b, i) {
    let html = `<img src="images/custom designer/${i + 4}.png" alt="">`;
    b.insertAdjacentHTML("afterbegin", html);
  });
};

addBoxesImage();

// end custom section

// video section

const addVideoSection = function () {
  let html = `<section class="video container px-3 py-5 mx-auto">
        <div class="text position-static">
            <h1 class="" style="font-size: 37px; text-align: center; margin: 70px 0px 15px !important;">Our Process on
                <span style="color: #50b8dc;">Youtube</span>
            </h1>
        </div>
        <iframe class="col-12" height="700px" src="https://www.youtube.com/embed/A6WEAuSvcgY"
            title="On-Demand Design Team - How it Works" frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowfullscreen></iframe>
    </section>`;
  document.body.insertAdjacentHTML("beforeend", html);
};
addVideoSection();
const videoSection = document.querySelector(".video");

// end video section

// wall section

const addWallSection = function () {
  let html = `<section class="wall-slide container px-3 mx-auto my-5">
        <div class="text position-static">
            <h1 class="" style="font-size: 37px; text-align: center; margin: 130px 0px 15px !important;">Wall of
                <span style="color: #50b8dc;">love</span>
                <img src="images/wallslider/60520ecc06213f162a7f9cfa_Group 3532 (1).svg" alt="">
            </h1>
        </div>
        <div class="position-relative overflow-hidden ">
            <i class="fa-solid fa-chevron-right fa-xl wall-btn-right" style="color: #ffffff;"></i>
            <i class="fa-solid fa-chevron-left fa-xl wall-btn-left" style="color: #ffffff;"></i>
            <div class="col-12 col-lg-8  mx-auto my-5">
                <div class="wall-slide-content d-flex flex-row flex-nowrap justify-content-start">
                    <div class="wall-box p-5 col-12">
                        <h2>DANIEL VALLEDOR
                        </h2>
                        <h3 class="text-primary">Founder at Tubeast</h3>
                        <p class="mt-4">Pixeltrue design subscription has proven to be very valuable for us, the team is
                            responsive, Andy the
                            manager is
                            aunderstanding and professional.
                            <br> <br>
                            We are happy with the work being delivered and the managing team behind
                        </p>
                    </div>
                    <div class="wall-box p-5 col-12">
                        <h2>TOMMY ISACS

                        </h2>
                        <h3 class="text-primary">Founder at Tubeast</h3>
                        <p class="mt-4">Working with Pixel True has been a pleasure so far. Hard to find a better team
                            to work on your projects as if they were
                            just next to you. Fast and efficient, yet you will be amazed by the quality they're able to
                            deliver !
                        </p>
                    </div>
                    <div class="wall-box p-5 col-12">
                        <h2>ALISTAIR FRASER
                        </h2>
                        <h3 class="text-primary">Founder at peoplecollective.io</h3>
                        <p class="mt-4">From the kick off call, right through to the end of the project, the comms was
                            on point and they always kept us updated.
                            The speed at which they work is phenomenal and this is no doubt down to not only having a
                            dedicated account manager but
                            also the skill of the designer.
                            <br><br>
                            The unlimited package worked perfectly for us and was great value for money.
                        </p>
                    </div>
                    <div class="wall-box p-5 col-12">
                        <h2>MICHAEL
                        </h2>
                        <h3 class="text-primary">Founder at splice.agency</h3>
                        <p class="mt-4">As an agency, I have personally sought and vetted high quality designers myself
                            so I know it isn't easy. Then I found
                            Pixel True, who does it so well that I don't have to worry about building my own in-house
                            team anymore.
                            <br><br>
                            The quality of work their designers come up is outstanding as are the people that make up
                            the Pixel True team. We view
                            Pixel True as a long term partner and an indispensable extension to my agency. I always get
                            excited when I start new
                            projects with them!
                        </p>
                    </div>
                </div>
            </div>
        </div>
    </section>`;

  document.body.insertAdjacentHTML("beforeend", html);
};

addWallSection();

const wallSection = document.querySelector(".wall-slide");
const wallSlider = document.querySelector(".wall-slide-content");
const wallSliderBox = document.querySelectorAll(".wall-box");
const wallBtnRight = document.querySelector(".wall-btn-right");
const wallBtnLeft = document.querySelector(".wall-btn-left");

let current3 = 0;

const wallNext = function () {
  if (current3 == wallSliderBox.length + 2) {
    current3 = 0;
  } else {
    current3 += 2;
  }
  wallSlider.style.translate = `${-100 * current3}%`;
};

const wallPrev = function () {
  if (current3 == 0) {
    current3 = wallSliderBox.length + 2;
  } else {
    current3 -= 2;
  }
  wallSlider.style.translate = `${-100 * current3}%`;
};

const wallSliderPlay = setInterval(wallNext, 4000);

wallBtnRight.addEventListener("click", function () {
  wallNext();
  clearInterval(wallSliderPlay);
});
wallBtnLeft.addEventListener("click", wallPrev);

// end wall section

// membership sectoin

const addMembershipSection = function () {
  let html = `<section class="membership container overflow-hidden mx-auto">
        <div class="text mb-5">
            <h1 class="" style="font-size: 37px; text-align: center; margin: 70px 0px 40px !important;">Membership <span
                    style="color: #50b8dc;">benefits</span>
            </h1>
        </div>
        <div class="row py-5 d-flex justify-content-center">
            <div class="p-4 mb-5 col-12 col-md-6 d-flex justify-content-end">
                <div
                    class="member-box left col-lg-9 col-12 d-flex flex-column gap-3 p-4 justify-content-center  position-relative">
                    <img src="images/membership/5fc675c11f5b4212db8ecb65_Group 2.svg" alt="">
                    <h2>Human support
                    </h2>
                    <p style="color: rgb(182, 182, 182);">Dedicated Project Manager to ensure smooth delivery of design
                        projects.
                    </p>
                </div>
            </div>
            <div class="p-4 mb-5  col-12 col-md-6 d-flex justify-content-start">
                <div
                    class="member-box right col-lg-9 col-12 d-flex flex-column gap-3 p-4 justify-content-center  position-relative">
                    <img src="images/membership/5f8d5a0e57a4e239e3fda39f_Fast turnaround.svg" alt="">
                    <h2>Fast turnaround
                    </h2>
                    <p style="color: rgb(182, 182, 182);">Get your designs back on average in 2-3 days.
                    </p>
                </div>
            </div>
            <div class="p-4 mb-5 col-12 col-md-6 d-flex justify-content-end">
                <div
                    class="member-box left col-lg-9 col-12 d-flex flex-column gap-3 p-4 justify-content-center  position-relative">
                    <img src="images/membership/5f81ae38dc86b5bd32518460_Team collaboration.svg" alt=""
                        style="width: 160px;">
                    <h2>Team collaboration
                    </h2>
                    <p style="color: rgb(182, 182, 182);">Work directly with your new design team and project manager.
                    </p>
                </div>
            </div>
            <div class="p-4 mb-5 col-12 col-md-6 d-flex justify-content-start">
                <div
                    class="member-box right col-lg-9 col-12 d-flex flex-column gap-3 p-4 justify-content-center  position-relative">
                    <img src="images/membership/5f8d5a0e2cdfb8dc6f5eddc0_Ownership of files.svg" alt="">
                    <h2>Ownership of files
                    </h2>
                    <p style="color: rgb(182, 182, 182);">Have 100% ownership of all original source files created for
                        your project.
                    </p>
                </div>
            </div>
        </div>
    </section>`;

  document.body.insertAdjacentHTML("beforeend", html);
};

addMembershipSection();

const memberText = document.querySelector(".membership .text");
const memberBox = document.querySelectorAll(".member-box");

// end membership sectoin

// pricing section

const addPricingSection = function () {
  let html = `<section
        class="pricing container mx-auto col-11 col-lg-7 px-5 text-center py-5 my-5 d-flex flex-column justify-content-center">
        <h1 class="mb-5" style="font-size: 35px;">Try us out!
        </h1>
        <p class="mb-2" style="font-size: 16px;">All our plans are backed by a
        </p>
        <p style="font-size: 19px; text-decoration: underline;">14 day money-back guarantee.
        </p>
        <a class="custom-link mx-auto my-5 col-8 col-md-3" href="html/work.html">SEE PRICING</a>
    </section>`;

  document.body.insertAdjacentHTML("beforeend", html);
};

addPricingSection();

const pricing = document.querySelector(".pricing");

// end pricing section

// footer

const addFooterSection = function () {
  let html = `<footer class="container mx-auto d-flex flex-wrap py-5 px-5 px-sm-0">
    <div class="text col-sm-4">
        <p style="font-size: 16px; line-height: 1.8;">Get actionable tips on how to increase sales and conversions with
            design!
        </p>
        <button class="col-6">
          READ NOW 🤓
        </button>
    </div>
    <div class="services-links d-flex flex-column gap-4">
        <h3 style="margin-bottom: 15px !important">Services
        </h3>
        <a href="html/ourplatform.html">Our Platform</a>
        <a href="">Testimonials</a>
        <a href="html/ourwork.html">Our Work</a>
        <a href="html/pricing.html">Pricing</a>
        <a href="">Schedule A Demo</a>
    </div>
    <div class="services-links d-flex flex-column gap-4">
        <h3 style="margin-bottom: 15px !important">Company
        </h3>
        <a href="">About Us</a>
        <a href="">Careers</a>
        <a href="html/casestudies.html">Case Studies</a>
        <a href="">License</a>
        <a href="">FAQs</a>
        <a href="">Refund Policy</a>
        <a href="">Terms Of Service</a>
        <a href="">Privacy Policy</a>
    </div>
    <div class="services-links d-flex flex-column gap-4">
        <h3 style="margin-bottom: 15px !important">Resources
        </h3>
        <a href="">Blog</a>
        <a href="">Website & App Cost Calculator</a>
        <a href="">Mockup Generator</a>
        <a href="">Illustration Packs</a>
        <a href="">Lifetime Access</a>
    </div>
    <div class="services-links d-flex flex-column gap-4 col-sm-2">
        <h3 style="margin-bottom: 15px !important">Contact
        </h3>
        <a href="">support@pixeltrue.com</a>
        <div class="d-flex gap-2 flex-wrap w-100">
            <i class="fab fa-instagram"></i>
            <i class="fa-brands fa-tiktok" style="color: #ffffff;"></i>
            <i class="fab fa-youtube"></i>
            <i class="fab fa-facebook-f"></i>
            <i class="fab fa-pinterest-p"></i>
            <i class="fab fa-twitter"></i>
            <i class="fab fa-linkedin"></i>
        </div>
    </div>
<p class="pt-5">© 2023 Pixel True Design Studios ALL RIGHTS RESERVED.
</p>
</footer>`;

  document.body.insertAdjacentHTML("beforeend", html);
};

addFooterSection();

// end footer
