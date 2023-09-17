// window on load

window.addEventListener("load", function () {
  document.querySelector(".main-head").style.scale = "1";
});

// end window on load

// window scroll

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

window.addEventListener("scroll", () => {
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
  // see pricing
  scale(pricing);
  // end see pricing
  // our work
  document.querySelectorAll(".work-box").forEach((e) => moveUp(e));
  // end our work
});

// end window scroll

// our work category section

const addOurworkSection = function () {
  let html = ` <section class="ourwork container text-center mx-auto px-4">
        <div class="buttons w-50 px-5 my-5 mx-auto d-flex flex-wrap gap-5 justify-content-center">
            <p class="all">All Designs</p>
            <p class="animation">Animation</p>
            <p class="brand">Brand Identity</p>
            <p class="illustration">Illustration & Infographics</p>
            <p class="landing">Landing Page Design</p>
            <p class="marketing">Marketing Asssest</p>
            <p class="powerpoint">Powerpoint Design</p>
            <p class="web">Web & App Design</p>
        </div>
        <div class="row px-md-5">
            <div class="col-lg-6 px-md-5 mb-5 work-box illustration animation">
                <div>
                    <img src="../images/ourwork/1.jpg" alt="../images/ourwork/1-.jpg">
                    <div class="text py-4" style="text-align: left;">
                        <h2>Matte Paint - Web & App Designs</h2>
                        <p style="opacity: 0.7;margin-top: 7px !important;">Matte Paint</p>
                    </div>
                </div>
            </div>
            <div class="col-lg-6 px-md-5 mb-5 work-box illustration animation">
                <div class="">
                    <img src="../images/ourwork/2.gif" alt="../images/ourwork/-2.jpg">
                    <div class="text py-4" style="text-align: left;">
                        <h2>Educative.Io - Marketing Assets & Animation</h2>
                        <p style="opacity: 0.7;margin-top: 7px !important;">Educative.io</p>
                    </div>
                </div>
            </div>
            <div class="col-lg-6 px-md-5 mb-5 work-box brand landing">
                <div class="">
                    <img src="../images/ourwork/3.png" alt="../images/ourwork/3-.png">
                    <div class="text py-4" style="text-align: left;">
                        <h2>EZucoins - Marketing Assets, Branding & Website Design</h2>
                        <p style="opacity: 0.7;margin-top: 7px !important;">Zucoins</p>
                    </div>
                </div>
            </div>
            <div class="col-lg-6 px-md-5 mb-5 work-box brand landing illustration">
                <div class="">
                    <img src="../images/ourwork/4.jpg" alt="../images/ourwork/4-.jpg">
                    <div class="text py-4" style="text-align: left;">
                        <h2>XRii - Web/App & Marketing Assets</h2>
                        <p style="opacity: 0.7;margin-top: 7px !important;">XRii</p>
                    </div>
                </div>
            </div>
            <div class="col-lg-6 px-md-5 mb-5 work-box web powerpoint">
                <div class="">
                    <img src="../images/ourwork/5.jpg" alt="../images/ourwork/5-.jpg">
                    <div class="text py-4" style="text-align: left;">
                        <h2>Manyrequests - Branding & Marketing Assets</h2>
                        <p style="opacity: 0.7;margin-top: 7px !important;">Manyrequests</p>
                    </div>
                </div>
            </div>
            <div class="col-lg-6 px-md-5 mb-5 work-box animation powerpoint landing">
                <div class="">
                    <img src="../images/ourwork/6.png" alt="../images/ourwork/6-.png">
                    <div class="text py-4" style="text-align: left;">
                        <h2>Rhyzin - Branding, Dashboard & Web Designs</h2>
                        <p style="opacity: 0.7;margin-top: 7px !important;">Rhyzin</p>
                    </div>
                </div>
            </div>
            <div class="col-lg-6 px-md-5 mb-5 work-box marketing animation">
                <div class="">
                    <img src="../images/ourwork/7.png" alt="../images/ourwork/7-.png">
                    <div class="text py-4" style="text-align: left;">
                        <h2>Inquvix - Landing Page & Website Design</h2>
                        <p style="opacity: 0.7;margin-top: 7px !important;">Inquivix</p>
                    </div>
                </div>
            </div>
            <div class="col-lg-6 px-md-5 mb-5 work-box brand powerpoint web">
                <div class="">
                    <img src="../images/ourwork/8.jpg" alt="../images/ourwork/8-.jpg">
                    <div class="text py-4" style="text-align: left;">
                        <h2>Monumental Habits - Branding, Illustrations & App Designs</h2>
                        <p style="opacity: 0.7;margin-top: 7px !important;">Monumental Habits</p>
                    </div>
                </div>
            </div>
            <div class="col-lg-6 px-md-5 mb-5 work-box web marketing">
                <div class="">
                    <img src="../images/ourwork/9.jpg" alt="../images/ourwork/9-.jpg">
                    <div class="text py-4" style="text-align: left;">
                        <h2>Live Arcade - Landing Page & Web/App Designs</h2>
                        <p style="opacity: 0.7;margin-top: 7px !important;">Live Arcade</p>
                    </div>
                </div>
            </div>
            <div class="col-lg-6 px-md-5 mb-5 work-box animation landing wep powerpoint marketing">
                <div class="">
                    <img src="../images/ourwork/10.png" alt="../images/ourwork/10-.png">
                    <div class="text py-4" style="text-align: left;">
                        <h2>LIGR Systems - Illustrations, E-Books & Blogging Graphics</h2>
                        <p style="opacity: 0.7;margin-top: 7px !important;">LIGR Systems</p>
                    </div>
                </div>
            </div>
            <div class="col-lg-6 px-md-5 mb-5 work-box marketing landing brand">
                <div class="">
                    <img src="../images/ourwork/11.png" alt="../images/ourwork/11-.png">
                    <div class="text py-4" style="text-align: left;">
                        <h2>Food Ninja - App & Marketing Assets</h2>
                        <p style="opacity: 0.7;margin-top: 7px !important;">Food Ninja</p>
                    </div>
                </div>
            </div>
            <div class="col-lg-6 px-md-5 mb-5 work-box web marketing">
                <div class="">
                    <img src="../images/ourwork/12.png" alt="../images/ourwork/12-.png">
                    <div class="text py-4" style="text-align: left;">
                        <h2>Spider Comics - Illustrations For A Book</h2>
                        <p style="opacity: 0.7;margin-top: 7px !important;">Spider Comics</p>
                    </div>
                </div>
            </div>
            <div class="col-lg-6 px-md-5 mb-5 work-box powerpoint illustration animation">
                <div class="">
                    <img src="../images/ourwork/13.jpg" alt="../images/ourwork/13-.png">
                    <div class="text py-4" style="text-align: left;">
                        <h2>Flash Hiring - Branding, Website & Illustrations</h2>
                        <p style="opacity: 0.7;margin-top: 7px !important;">Flash Hiring</p>
                    </div>
                </div>
            </div>
            <div class="col-lg-6 px-md-5 mb-5 work-box web brand landing">
                <div class="">
                    <img src="../images/ourwork/8.jpg" alt="../images/ourwork/8-.jpg">
                    <div class="text py-4" style="text-align: left;">
                        <h2>Spider Comics - Illustrations For A Book</h2>
                        <p style="opacity: 0.7;margin-top: 7px !important;">Spider Comics</p>
                    </div>
                </div>
            </div>
        </div>
        <button class="col-md-3 col-8 mx-auto mt-5 mb-5 align-self-center">LOAD MORE</button>
    </section>`;

  document.body.insertAdjacentHTML("beforeend", html);
};

addOurworkSection();

const categoryButtons = document.querySelectorAll(".buttons p");
const boxes = document.querySelectorAll(".work-box");
const boxesimg = document.querySelectorAll(".work-box img");
const webImageBox = document.querySelector(".web-image");
const closeBtn = document.querySelector(".close-btn");
const webimg = document.querySelector(".web-image img");
const loadButton = document.querySelector(".ourwork button");

const showLess = function () {
  boxes.forEach(function (e, i) {
    if (i >= 4) {
      e.classList.add("hidden");
    }
  });
};

showLess();

const showAll = function () {
  boxes.forEach((e) => e.classList.remove("hidden"));
};

const categoryFilter = function (button) {
  boxes.forEach((e) => e.classList.add("hidden"));
  boxes.forEach(function (e) {
    if (e.classList.contains(`${button}`)) {
      e.classList.remove("hidden");
    }
  });
};

loadButton.addEventListener("click", function () {
  if (loadButton.textContent === "LOAD MORE") {
    showAll();
    loadButton.textContent = "SHOW LESS";
  } else {
    showLess();
    document.querySelector(".ourwork").scrollIntoView({ behavior: "smooth" });
    loadButton.textContent = "LOAD MORE";
  }
});

categoryButtons.forEach(function (e) {
  e.addEventListener("click", function (b) {
    if (b.target.attributes.class.value === "all") {
      boxes.forEach((e) => e.classList.remove("hidden"));
      loadButton.style.display = "block";
      loadButton.textContent = "SHOW LESS";
    } else {
      categoryFilter(b.target.attributes.class.value);
      loadButton.style.display = "none";
    }
  });
});

boxes.forEach(function (e, i) {
  e.addEventListener("click", function (b) {
    webImageBox.classList.toggle("show");
    closeBtn.classList.toggle("show");
    webimg.src = boxesimg[i].alt;
  });
});

closeBtn.addEventListener("click", function () {
  webImageBox.classList.toggle("show");
  closeBtn.classList.toggle("show");
});

// end our work category section

// custom section

const addCustomSection = function () {
  let html = ` <section class="custom-design  overflow-hidden container-lg px-3 px-lg-5 mx-auto">
        <div class="text position-static">
            <h1 class="" style="font-size: 37px; text-align: center; margin: 70px 0px 15px !important;">Custom <span
                    style="color: #50b8dc;">Designs</span>
            </h1>
            <p style="text-align: center; color: rgb(195, 195, 195); font-size: 17px; margin-bottom: 80px !important;">
                Crafted with skill and care to help our clients grow their business!
            </p>
        </div>
        <div class="row px-md-5 gap-5 justify-content-center">
            <div class="custom-box position-relative col-12 col-lg-5 justify-content-center d-flex">
                <img src="../images/custom designer/1.svg" alt="">
                <div class="label">
                    <p>App Design</p>
                </div>
                <div class="label2 d-flex justify-content-between px-5 flex-row align-items-center">
                    <p>Mobile Design</p>
                    <a href="" class="d-flex gap-4 flex-row align-items-center">
                        <p>View More</p> <i class="fa-solid fa-chevron-right" style="color: #ffffff;"></i>
                    </a>
                </div>
            </div>
            <div class="custom-box position-relative col-12 col-lg-5 justify-content-center d-flex">
                <img src="../images/custom designer/2.gif" alt="">
                <div class="label">
                    <p>Animation</p>
                </div>
                <div class="label2 d-flex justify-content-between px-5 flex-row align-items-center">
                    <p>Animation for Educative</p>
                    <a href="" class="d-flex gap-4 flex-row align-items-center">
                        <p>View More</p> <i class="fa-solid fa-chevron-right" style="color: #ffffff;"></i>
                    </a>
                </div>
            </div>
            <div class="custom-box left position-relative col-12 col-lg-5 justify-content-center d-flex">
                <img src="../images/custom designer/3.jpg" alt="">
                <div class="label">
                    <p>App Design
                    </p>
                </div>
                <div class="label2 d-flex justify-content-between px-5 flex-row align-items-center">
                    <p>Habits App Design</p>
                    <a href="" class="d-flex gap-4 flex-row align-items-center">
                        <p>View More</p> <i class="fa-solid fa-chevron-right" style="color: #ffffff;"></i>
                    </a>
                </div>
            </div>
            <div class="custom-box right position-relative col-12 col-lg-5 justify-content-center d-flex">
                <div class="label">
                    <p>UI Design
                    </p>
                </div>
                <div class="label2 d-flex justify-content-between px-5 flex-row align-items-center">
                    <p>Website Design for Flash Hiring
                    </p>
                    <a href="" class="d-flex gap-4 flex-row align-items-center">
                        <p>View More</p> <i class="fa-solid fa-chevron-right" style="color: #ffffff;"></i>
                    </a>
                </div>
            </div>
            <div class="custom-box position-relative col-12 col-lg-5 justify-content-center d-flex">
                <div class="label">
                    <p>Graphic Design
                    </p>
                </div>
                <div class="label2 d-flex justify-content-between px-5 flex-row align-items-center">
                    <p>Graphics for Xrii.io
                    </p>
                    <a href="" class="d-flex gap-4 flex-row align-items-center">
                        <p>View More</p> <i class="fa-solid fa-chevron-right" style="color: #ffffff;"></i>
                    </a>
                </div>
            </div>
            <div class="custom-box position-relative col-12 col-lg-5 justify-content-center d-flex">
                <div class="label">
                    <p>UI Design
                    </p>
                </div>
                <div class="label2 d-flex justify-content-between px-5 flex-row align-items-center">
                    <p>Illustration Design for Ligrsystems
                    </p>
                    <a href="" class="d-flex gap-4 flex-row align-items-center">
                        <p>View More</p> <i class="fa-solid fa-chevron-right" style="color: #ffffff;"></i>
                    </a>
                </div>
            </div>
        </div>
        <a class="custom-link mx-auto my-5 col-8 col-md-3" href="ourwork.html">View more</a>
    </section>`;

  document.body.insertAdjacentHTML("beforeend", html);
};

addCustomSection();

let customSectionText = document.querySelector(".custom-design .text");
let customBox = document.querySelectorAll(".custom-design .custom-box");

let addBoxesImage = function () {
  let arr = [...customBox];
  let arrSlice = arr.slice(3, 7);
  arrSlice.forEach(function (b, i) {
    let html = `<img src="../images/custom designer/${i + 4}.png" alt="">`;
    b.insertAdjacentHTML("afterbegin", html);
  });
};

addBoxesImage();

// end custom section

// see pricing section

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

// end see pricing section
