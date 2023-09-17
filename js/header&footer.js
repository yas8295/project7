// navigation bar

const addNavigationBar = () => {
  let html = `<div class="top w-100">
        <nav class="container-xl py-5 px-4 d-flex justify-content-between">
            <div class="logo d-flex gap-3 align-items-center justify-content-center"><a href="../index.html"><img
                        src="../images/5fc675c11f5b4212db8ecb65_Group 2.svg" alt="" width="45px"> <a
                        style="font-size: 16px;  font-weight: 100;" href="../index.html">pixelture</a>
            </div>
            <ul class="links nav d-flex flex-row align-items-center">
                <li class="nav-item">
                    <a class="nav-link me-xl-4 me-3 px-xl-3 px-2" href="casestudies.html">Case Studies</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link me-xl-4 me-3 px-xl-3 px-2" href="pricing.html">Pricing</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link me-xl-4 me-3 px-xl-3 px-2" href="ourwork.html">Our Work</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link me-xl-4 me-3 px-xl-3 px-2" href="ourplatform.html">Our Platform</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link login-btn me-xl-4 me-3 px-xl-3 px-2" href="">Login</a>
                </li>
                <li class="nav-item drop-button position-relative">
                    <a class="nav-link me-xl-4 me-3 px-xl-3 px-2" style="cursor: pointer;">More <i
                            class="fa-solid fa-chevron-down"
                            style="color: #ffffff; font-size: 12px; margin-left: 5px;"></i></a>
                    <ul class="nav dropmenu position-absolute">
                        <li class="nav-item">
                            <img src="../images/5fc50b61f052f9090af8cbfb_lightning.svg" alt="" width="60px">
                        </li>
                        <li class="nav-item">
                            <a class="nav-link me-xl-4 me-3 px-xl-3 px-2" href="">About US</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link me-xl-4 me-3 px-xl-3 px-2" href="">Testimonials</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link me-xl-4 me-3 px-xl-3 px-2" href="">Blog</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link me-xl-4 me-3 px-xl-3 px-2" href="">Illustration Packs</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link me-xl-4 me-3 px-xl-3 px-2" href="">Lifetime Access</a>
                        </li>
                    </ul>
                </li>
                <button class="btn">Schedule Demo</button>
            </ul>
            </li>
            </ul>
            <li class="nav-item drop-button2">
                <a class="nav-link me-xl-4 me-3 py-0 pt-4" style="font-size: 30px; cursor: pointer;"><i
                        class="fa-solid fa-bars"></i></a>
                <ul class="nav dropmenu2">
                    <li class="nav-item">
                        <a class="nav-link mt-5 me-xl-4 me-3 px-xl-3 px-2" href="casestudies.html">Case Studies</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link me-xl-4 me-3 px-xl-3 px-2" href="pricing.html">Pricing</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link me-xl-4 me-3 px-xl-3 px-2" href="ourwork.html">Our Work</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link me-xl-4 me-3 px-xl-3 px-2" href="ourplatform.html">Our Platform</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link login-btn me-xl-4 me-3 px-xl-3 px-2" href="">Login</a>
                    </li>
                    <button class="btn">Schedule Demo</button>
                </ul>
        </nav>
    </div>`;

  document.body.insertAdjacentHTML("afterbegin", html);
};

addNavigationBar();

let dropButton = document.querySelector(".drop-button");
let dropMenu = document.querySelector(".nav.dropmenu");
let dropButton2 = document.querySelector(".drop-button2");
let dropButton2Icon = document.querySelector(".drop-button2 i");
let dropMenu2 = document.querySelector(".nav.dropmenu2");
let nav = document.querySelector("nav");
let navOverlay = document.querySelector(".top");

// login

const addLogin = function () {
  let html = ` <div class="login-overlay"></div>
        <div class="login position-fixed overflow-hidden col-11">
            <form class="col d-flex justify-content-center flex-column align-items-center" action="">
                <img src="../images/5fc675c11f5b4212db8ecb65_Group 2.svg" alt="" width="35px">
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

// modal

let contactModal = document.querySelector(".contact-modal");
let contactModalButton = document.querySelector(".contact-bottom");
let contactModalClose = document.querySelector(".close");
let ModalOverlay = document.querySelector(".modal-overlay");

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
// end modal

let headObs = new IntersectionObserver(
  function (entries) {
    let [entry] = entries;
    if (!entry.isIntersecting) {
      nav.classList.add("active-color");
      navOverlay.classList.add("active");
    }
  },
  {
    root: null,
    threshold: 0,
    rootMargin: "440px",
  }
);

headObs.observe(nav);

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

// end nav

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
        <a href="ourplatform.html">Our Platform</a>
        <a href="">Testimonials</a>
        <a href="ourwork.html">Our Work</a>
        <a href="pricing.html">Pricing</a>
        <a href="">Schedule A Demo</a>
    </div>
    <div class="services-links d-flex flex-column gap-4">
        <h3 style="margin-bottom: 15px !important">Company
        </h3>
        <a href="">About Us</a>
        <a href="">Careers</a>
        <a href="casestudies.html">Case Studies</a>
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
