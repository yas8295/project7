// window on load

window.addEventListener("load", function () {
  document
    .querySelectorAll(".plan-box img")
    .forEach((e) => (e.style.transform = "rotatex(720deg"));
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

window.addEventListener("scroll", () => {
  // main head
  document.querySelectorAll(".main-head").forEach((e) => scale(e));
  // end main head
  // plan box
  moveUp(document.querySelectorAll(".plan-box")[3]);
  // end plan box
  // cost calculator section
  scale(document.querySelector(".cost-calculator"));
  // end cost calculator section
  // compare section
  scale(document.querySelector(".compare"));
  // end compare section
  // questions-box
  document.querySelectorAll(".questions-box").forEach((e) => moveUp(e));
  // end quesions
  // see pricing
  scale(pricing);
  // end see pricing
});

// end window scroll

// plan section

const addPlanSection = () => {
  let html = `<section class="container plans mx-auto px-sm-5">
    <div class="row flex-wrap">
        <div class="col-xl-4 col px-4">
            <div class="plan-box text-center py-5 px-5">
                <img src="../images/pricing/6054c0c1f0c5cd83aa071574_5f7616518e9ff4016e6f170f_pay as you go 1.svg"
                    alt="">
                <h2 style="margin: -120px 0px 15px !important;">Enterprise
                </h2>
                <span style="text-decoration: line-through; color: #c7c7c7;">$3999
                </span>
                <h2 style="display: inline; margin-left: 5px !important; color: #50b8dc;">$3399</h2><sup
                    style="color: #c7c7c7; font-size: 15px; letter-spacing: 2px;"> /mo</sup>
                <p
                    style="color: #50b8dc; font-size: 13px; margin: 5px 0px !important; padding: 0px 0px 20px !important; border-bottom: 1px solid rgba(255, 255, 255, 0.247);">
                    Save 15% for
                    life
                </p>
                <div class="d-flex flex-column justify-content-between" style=" height: 445px;">
                    <div>
                        <p style="color: rgb(184, 184, 184); margin: 30px 0px !important;">Best suited to teams who
                            require 6+ hours of daily design work
                        </p>
                        <p style="color: rgb(184, 184, 184); text-align: left; margin-bottom: 30px !important;">
                            Everything
                            in Superhero
                        </p>
                        <div class="info">
                            <p
                                style="color: rgb(184, 184, 184);text-align: left; display: inline-block; margin-bottom: 30px !important;">
                                6+ Hours Daily
                                Design Work
                            </p>
                            <i class="fa-solid fa-circle-question">
                                <div class="info-text">
                                    <p>With Pixel True you'll be able to scale up/down the amount of hours required by
                                        your
                                        designers.
                                        <br><br>
                                        Leave the hiring, training and payroll to us!
                                    </p>
                                </div>
                            </i>
                        </div>
                    </div>
                    <button class="col-9 align-self-center">CHECKOUT</button>
                </div>
            </div>
        </div>
        <div class="col-xl-4 col px-4">
            <div class="plan-box text-center py-5 px-5">
                <img src="../images/pricing/6054c04c792c3c6a6862b556_5f761651eb1ffc20a6af9cd1_premium 1.svg" alt="">
                <h2 style="margin: -120px 0px 15px !important;">Superhero
                </h2>
                <span style="text-decoration: line-through; color: #c7c7c7;">$2589
                </span>
                <h2 style="display: inline; margin-left: 5px !important; color: #50b8dc;">$2199
                </h2><sup style="color: #c7c7c7; font-size: 15px; letter-spacing: 2px;"> /mo</sup>
                <p
                    style="color: #50b8dc; font-size: 13px; margin: 5px 0px !important; padding: 0px 0px 20px !important; border-bottom: 1px solid rgba(255, 255, 255, 0.247);">
                    Save 15% for
                    life
                </p>
                <div class="d-flex flex-column justify-content-between">
                    <div>
                        <div class="info">
                            <p
                                style="color: rgb(184, 184, 184);text-align: left; display: inline-block; margin-bottom: 30px !important; margin-top: 30px !important;">
                                4-Hours Daily Design <br> Work
                                (80 h / mo over 20 work days)
                            </p>
                            <i class="fa-solid fa-circle-question">
                                <div class="info-text">
                                    <p>Work directly with a skilled designer for 4 hours each day.
                                        <br><br>
                                        Our experienced designers will become a part of your team - ready to take on
                                        any
                                        design challenges your business has!
                                    </p>
                                </div>
                            </i>
                        </div>
                        <div class="info">
                            <p
                                style="color: rgb(184, 184, 184);text-align: left; display: inline-block; margin-bottom: 30px !important;">
                                Full Design Team
                            </p>
                            <i class="fa-solid fa-circle-question">
                                <div class="info-text">
                                    <p>We take the hassle out of hiring and managing a full specialised design team!
                                        <br><br>
                                        With our plans you'll gain access to the 4 specialist designers - a UI
                                        designer,
                                        Graphic designer, Illustrator and an
                                        Animator.
                                        ‍<br><br>
                                        Full scope of designs your designers can do
                                    </p>
                                </div>
                            </i>
                        </div>
                        <div class="info">
                            <p
                                style="color: rgb(184, 184, 184);text-align: left; display: inline-block; margin-bottom: 30px !important;">
                                Project Manager
                            </p>
                            <i class="fa-solid fa-circle-question">
                                <div class="info-text">
                                    <p>If you're worried about managing your designers, we got you covered
                                        <br><br>
                                        With our plans you'll gain access to a dedicated Project Manager with 1 goal
                                        in
                                        mind - Successful delivery of all your
                                        design projects
                                    </p>
                                </div>
                            </i>
                        </div>
                        <p style="color: rgb(184, 184, 184); text-align: left; margin-bottom: 30px !important;">
                            Unlimited brands
                        </p>
                        <p style="color: rgb(184, 184, 184); text-align: left; margin-bottom: 30px !important;">
                            Access to 1000+ Premium Illustrations
                        </p>
                        <p style="color: rgb(184, 184, 184); text-align: left; margin-bottom: 30px !important;">
                            No contracts. Cancel anytime.
                        </p>
                        <p style="color: rgb(184, 184, 184); text-align: left; margin-bottom: 30px !important;">
                            14 Day Money Back Guarantee!
                        </p>
                    </div>
                    <button class="col-9 align-self-center">CHECKOUT</button>
                </div>
            </div>
        </div>
        <div class="col-xl-4 col px-4">
            <div class="plan-box text-center py-5 px-5">
                <img src="../images/pricing/5f76165113c4ab032a9987e0_basic.svg" alt="">
                <h2 style="margin: -120px 0px 15px !important;">Hero
                </h2>
                <span style="text-decoration: line-through; color: #c7c7c7;">$1349
                </span>
                <h2 style="display: inline; margin-left: 5px !important; color: #50b8dc;">$1149
                </h2><sup style="color: #c7c7c7; font-size: 15px; letter-spacing: 2px;"> /mo</sup>
                <p
                    style="color: #50b8dc; font-size: 13px; margin: 5px 0px !important; padding: 0px 0px 20px !important; border-bottom: 1px solid rgba(255, 255, 255, 0.247);">
                    Save 15% for
                    life
                </p>
                <div class="d-flex flex-column justify-content-between">
                    <div>
                        <div class="info">
                            <p
                                style="color: rgb(184, 184, 184);text-align: left; display: inline-block; margin-bottom: 30px !important; margin-top: 30px !important;">
                                4-Hours Daily Design <br> Work
                                (80 h / mo over 20 work days)
                            </p>
                            <i class="fa-solid fa-circle-question">
                                <div class="info-text">
                                    <p>Work directly with a skilled designer for 4 hours each day.
                                        <br><br>
                                        Our experienced designers will become a part of your team - ready to take on
                                        any
                                        design challenges your business has!
                                    </p>
                                </div>
                            </i>
                        </div>
                        <div class="info">
                            <p
                                style="color: rgb(184, 184, 184);text-align: left; display: inline-block; margin-bottom: 30px !important;">
                                Full Design Team
                            </p>
                            <i class="fa-solid fa-circle-question">
                                <div class="info-text">
                                    <p>We take the hassle out of hiring and managing a full specialised design team!
                                        <br><br>
                                        With our plans you'll gain access to the 4 specialist designers - a UI
                                        designer,
                                        Graphic designer, Illustrator and an
                                        Animator.
                                        ‍<br><br>
                                        Full scope of designs your designers can do
                                    </p>
                                </div>
                            </i>
                        </div>
                        <div class="info">
                            <p
                                style="color: rgb(184, 184, 184);text-align: left; display: inline-block; margin-bottom: 30px !important;">
                                Project Manager
                            </p>
                            <i class="fa-solid fa-circle-question">
                                <div class="info-text">
                                    <p>If you're worried about managing your designers, we got you covered
                                        <br><br>
                                        With our plans you'll gain access to a dedicated Project Manager with 1 goal
                                        in
                                        mind - Successful delivery of all your
                                        design projects
                                    </p>
                                </div>
                            </i>
                        </div>
                        <p style="color: rgb(184, 184, 184); text-align: left; margin-bottom: 30px !important;">
                            Unlimited brands
                        </p>
                        <p style="color: rgb(184, 184, 184); text-align: left; margin-bottom: 30px !important;">
                            Access to 1000+ Premium Illustrations
                        </p>
                        <p style="color: rgb(184, 184, 184); text-align: left; margin-bottom: 30px !important;">
                            No contracts. Cancel anytime.
                        </p>
                        <p style="color: rgb(184, 184, 184); text-align: left; margin-bottom: 30px !important;">
                            14 Day Money Back Guarantee!
                        </p>
                    </div>
                    <button class="col-9 align-self-center">CHECKOUT</button>
                </div>
            </div>
        </div>
    </div>
</section>
  <p style="text-align: center; margin: -100px 0px 130px !important; font-size: 16px; font-weight: 100;">All our plans are backed by a 14 day money-back
        guarantee. <br>
        No Contracts, cancel anytime.</p>
        <div class="row justify-content-center">
        <div class="plan-box col-md-7 col-lg-4 col-11 text-center py-5 px-5">
            <img src="../images/pricing/5f81ae37840eee2061f8717b_ownership of files.svg" width="250px"
                style="min-height: 250px;" alt="">
            <h2 style="margin: -120px 0px 15px !important; letter-spacing: 4px;">Pay As You Go
            </h2>
            <p
                style="color: #50b8dc; font-size: 13px; margin: 5px 0px !important; padding: 0px 0px 20px !important; border-bottom: 1px solid rgba(255, 255, 255, 0.247);">
            </p>
            <p style="color: rgb(184, 184, 184); margin: 30px 0px !important; text-align: left;">One off choices if you
                have a smaller project or wanting to try Pixel True out.
                Click on each to purchase.
            </p>
            <div style="line-height: 3;">
                <p style="text-decoration: underline; cursor: pointer;color: rgb(209, 209, 209); font-size: 15px;"><span
                        style="color: #50b8dc;">$350</span> for 1
                    Illustration</p>
                <p style="text-decoration: underline; cursor: pointer;color: rgb(209, 209, 209); font-size: 15px;"><span
                        style="color: #50b8dc;">$450</span> for 1 Landing Page/UI Design
                <p style="text-decoration: underline; cursor: pointer;color: rgb(209, 209, 209); font-size: 15px;"><span
                        style="color: #50b8dc;">$350</span> for 1 Logo Design</p>
                <p
                    style="text-decoration: underline; cursor: pointer;color: rgb(209, 209, 209); font-size: 15px; margin-bottom: 30px !important;">
                    <span style="color: #50b8dc;">$350</span> for 1 Animation
                </p>
            </div>
        </div>
    </div>`;

  document.body.insertAdjacentHTML("beforeend", html);
};

addPlanSection();

// end plans section

// calculator section

const addCalculatorSection = function () {
  let html = `<h1 class="main-head" style="font-size: 37px; margin: 0px 0px 80px !important; text-align: center;line-height: 0.9;">
        Website & App
        <span style="color: #50b8dc; "> Cost Calculator</span>
    </h1>
   <section class="cost-calculator container mx-auto px-3" style="margin-bottom: 100px !important;">
        <div class="row">
            <div class="cost-calculator d-flex position-relative">
                <div class="left col-4 d-none d-lg-block p-5">
                    <img src="../images/pricing/6054c04c792c3c6a6862b556_5f761651eb1ffc20a6af9cd1_premium 1.svg" alt="">
                    <h1 class="text-center my-5" style="font-size: 37px; font-weight: 500;">Cost Calculator</h1>
                    <p style="color: rgb(184, 184, 184); line-height: 2;">Our cost calculator pricing tool gives an
                        accurate indication
                        as to what kind of figure you'd be
                        looking to pay for your new site</p>
                    <div class="left-choices">

                    </div>
                </div>
                <div class="right col-lg-8 col-12 p-5">
                        <div class="progress_bar">
                        <div class="total">
                            <span class="progress-price">$0</span>
                        </div>
                        </div>
                    <div style="  margin: 100px 0px 30px !important;"
                        class="progress2 justify-content-center gap-3 align-items-center">
                        <p class="progress-index">01</p>
                        <div class="progress_bar2"><span class="total2"></span></div>
                        <p>04</p>
                    </div>
                    <div class="box design-form show" data-index="1">
                        <h1 class="form-label" style="color: #50b8dc; text-align: center;letter-spacing: 2px;">How
                            complex
                            is the design?</h1>
                        <form class="design-shape d-flex" action="">
                            <label class="col-6 d-flex flex-column justify-content-center align-items-center gap-5"
                                for="simple">
                                <img width="100px" height="100px"
                                    src="../images/pricing/Triangle-Transparent-Background.png" alt="">
                                <p style="font-weight: 100; font-size: 18px;">Simple design</p>
                                <input class="simple" type="radio" name="design" id="simple" value="simple design"
                                    checked>
                                <div class="check"></div>
                            </label>
                            <label class="col-6 d-flex flex-column justify-content-center align-items-center gap-5"
                                for="complex">
                                <img width="100px" height="100px" src="../images/pricing/Triangle-Vector-PNG-HD.png"
                                    alt="">
                                <p style="font-weight: 100; font-size: 18px;">Complex design</p>
                                <input class="complex" type="radio" name="design" id="complex" value="complex design">
                                <div class="check"></div>
                            </label>
                        </form>
                    </div>
                    <div class="box range-form" data-index="2">
                        <h1 class="form-label" style="color: #50b8dc; text-align: center;letter-spacing: 2px;">How
                            many
                            pages do you need?</h1>
                        <label class="range-label d-flex justify-content-center" for="">
                            <h2><output style="color: white; font-size: 18px;" id="rangevalue">0</output></h2>
                        </label>
                        <form class="d-flex justify-content-center" action="">
                            <input class="pages-range col-10" type="range" min="0" max="30" value="0"
                                oninput="rangevalue.value=value">
                        </form>
                    </div>

                    <div class="box brand-radio1" data-index="3">
                        <h1 class="form-label" style="color: #50b8dc; text-align: center;letter-spacing: 2px;">Do you
                            have branding guideline?</h1>
                        <div class="brand-form">
                            <input type="checkbox" class="switch switch1">
                        </div>
                    </div>
                    <div class="box brand-radio2 " data-index="4">
                        <h1 class="form-label" style="color: #50b8dc; text-align: center;letter-spacing: 2px;">Would you
                            like custome illustrations?</h1>
                        <div class="brand-form" style="margin-bottom: 50px !important;">
                            <input type="checkbox" class="switch switch2">
                        </div>
                        <div class="animate-aria">
                            <div class="d-flex col-md-7 col mx-auto align-items-center justify-content-between"
                                style="padding: 20px !important; border-radius: 20px; background-color: rgb(27 30 71)">
                                <h3>
                                    How many
                                    would you like?
                                </h3>
                                <input class="switch2-count" type="number" value="10">
                            </div>
                            <div class="col-md-7 mt-3 col mx-auto d-flex gap-3">
                                <input class="animate" type="checkbox" id="animate">
                                <label style="cursor: pointer;" for="animate">i would like to animate them</label>
                            </div>
                        </div>
                    </div>
                     <div class="box project-price px-md-5" data-index="5">
                        <h1 class="form-label"
                            style="color: #50b8dc; text-align: center;letter-spacing: 2px; ">
                            Project's
                            Prices </h1>
                        <p style="text-align: center; margin-top: 10px !important;">No overchanges or hidden fees.</p>
                        <div class="price d-flex flex-wrap" style="margin-top: 60px !important;">
                            <div class="col-md-6 col-12 position-relative d-flex flex-column  gap-5 px-5 py-4"
                                style="background-color: #1b1e47;border-bottom-left-radius: 20px">
                                <div class="position-absolute rec p-3 px-5">
                                    <h3>RECOMMENDED</h3>
                                </div>
                                <p style="color: rgb(189, 24, 120);">Based on the <span
                                        style="color: white;">SUPERHERO</span> plan</p>
                                <img width="100px" height="80px" src="../images/5fc675c11f5b4212db8ecb65_Group 2.svg"
                                    alt="">
                                <div>
                                    <h2 style="color: #fd576c;">Pixel True</h2>
                                    <h1 class="pixel-price" style="font-size: 35px;">$0</h1>
                                    <br><br>
                                    <h3
                                        style="padding-top: 30px !important;border-top: 1px solid rgba(255, 255, 255, 0.211);">
                                        Estimated time: <p class="duration"
                                            style="color: #50b8dc; display: inline;margin-left: 5px !important;"> 0
                                            weeks</p>
                                    </h3>
                                </div>
                            </div>
                            <div class="col-md-6 col-12  position-relative d-flex flex-column  gap-5 px-5 py-4"
                                style="background-color:#1b1e47b0;border-bottom-right-radius: 20px; border-top-right-radius: 20px">
                                <p style="color: transparent;">"" <span style="color: white;"></span></p>
                                <i style="font-size: 80px;color: rgba(255, 255, 255, 0.438);"
                                    class="fa-solid fa-solar-panel"></i>
                                <div>
                                    <h2 style="color: #50b8dc;">Other Platform</h2>
                                    <h1 class="platform-price" style="font-size: 35px;">$0</h1>
                                    <br><br>
                                    <h3
                                        style="padding-top: 30px !important;border-top: 1px solid rgba(255, 255, 255, 0.211);">
                                        Estimated time: <p class="duration"
                                            style="color: #50b8dc; display: inline;margin-left: 5px !important;"> 0
                                            weeks</p>
                                    </h3>
                                </div>
                            </div>
                        </div>
                    </div>
                    <br><br><br>
                    <hr style="border-color: rgba(128, 128, 128, 0.253);">
                    <div class="calculator-btns d-flex justify-content-between">
                        <button class="calculator-btn-prev col-lg-4 col-5"><span
                                class="mx-md-3 d-inline-flex align-items-center justify-content-center"
                                style="font-size: 25px;">←</span>
                            <span class="d-none d-md-inline">Previous</span></button>
                        <button class="calculator-btn-next col-lg-3 col-5"><span class="d-none d-md-inline">NEXT</span>
                            <span class="arrow mx-md-3 d-inline-flex align-items-center justify-content-center"
                                style="font-size: 15px;">→</span></button>
                    </div>
                </div>
            </div>
        </div>
    </section>`;

  document.body.insertAdjacentHTML("beforeend", html);
};

addCalculatorSection();

const leftText = document.querySelector(".left").children[2];
const leftChoices = document.querySelector(".left .left-choices");
const nextBtn = document.querySelector(".calculator-btn-next");
const prevtBtn = document.querySelector(".calculator-btn-prev");
const boxes = document.querySelectorAll(".cost-calculator .box");
const progressIndex = document.querySelector(".progress-index");
const progressTotal2 = document.querySelector(".total2");
const simple = document.querySelector(".simple");
const complex = document.querySelector(".complex");
const designCehck = [simple, complex];
const pageNumbers = document.querySelector(".pages-range");
const switch1 = document.querySelector(".switch1");
const switch2 = document.querySelector(".switch2");
const switch2Count = document.querySelector(".switch2-count");
const animateAria = document.querySelector(".animate-aria");
const animateCheck = document.querySelector(".animate");
const progressPrice = document.querySelector(".progress-price");
const progressTotal = document.querySelector(".total");
const progressBar = document.querySelector(".progress_bar");
const progressBar2 = document.querySelector(".progress2");
const pixelPrice = document.querySelector(".pixel-price");
const platformPrice = document.querySelector(".platform-price");
const duration = document.querySelectorAll(".duration");

let current = 1;
let choices = [];
let price = [];
let progress;

const addChoices = function (choices) {
  leftChoices.innerHTML = "";
  choices.forEach(function (e, i) {
    let html = `<p style="margin-bottom: 15px !important; font-size: 15px;"><span
                            style="color: #50b8dc; margin-right: 10px !important; ">0${
                              i + 1
                            }.</span>
                       ${e === pageNumbers ? e.value + " pages" : e}</p>`;
    leftChoices.insertAdjacentHTML("beforeend", html);
  });
};

const addPrice = function () {
  progressPrice.textContent = "";
  let currentPrice =
    price.length === 0 ? 0 : price.reduce((acc, cur) => Number(acc + cur));
  progressPrice.textContent = `$${currentPrice}`;
  progressTotal.style.width = `${
    currentPrice === 0 ? 0 : currentPrice * 0.02
  }%`;
};

const nextBtnClick = function () {
  if (current >= boxes.length) {
    return;
  } else {
    current++;
    leftText.style.display = "none";
    progressIndex.textContent = `0${current}`;
    progressTotal2.style.width = `${current * 25}%`;
    prevtBtn.style.visibility = "visible";
    boxes.forEach(function (e) {
      e.classList.remove("show");
      if (e.dataset.index == current) {
        e.classList.add("show");
      }
    });
    if (current == 2) {
      price.pop();
      choices.pop();
      designCehck.forEach(function (e) {
        if (e.checked === true) {
          e.value == "simple design" ? price.push(100) : price.push(200);
          addPrice();
          choices.push(e.value);
        }
      });
    }
    if (current == 3) {
      price.splice(1, price.length);
      choices.push(pageNumbers);
      price.push(
        pageNumbers.value === undefined || pageNumbers.value === 0
          ? 0
          : pageNumbers.value * 76
      );
      addPrice();
    }
    if (current == 4) {
      nextBtn.textContent = `CALCULATOR →`;
      if (switch1.checked === false) {
        choices.push("No have Brand Guideline");
        price.push(0);
      } else {
        choices.push("Brand Guideline");
      }
      switch1.checked = false;
    }
    if (current == 5) {
      nextBtn.textContent = `VIEW COMPARISON`;
      progressBar.classList.add("hidden");
      progressBar2.classList.add("hidden");
    } else {
      progressBar.classList.remove("hidden");
      progressBar2.classList.remove("hidden");
    }
    if (animateAria.classList.contains("show") && current == 5) {
      choices.push(
        switch2.checked && animate.checked
          ? `${switch2Count.value} custome illustrations and animated`
          : "custome illustrations"
      );
      price.push(
        switch2.checked && animate.checked
          ? 320 + switch2Count.value * 20
          : 250 + switch2Count.value * 20
      );
      addPrice();
    } else if (!animateAria.classList.contains("show") && current == 5) {
      choices.push("No custome illustrations");
      price.push(0);
    }
    addChoices(choices);
  }
  pixelPrice.textContent = `$${price.reduce((acc, cur) => acc + cur)}`;
  platformPrice.textContent = `$${Math.trunc(
    price.reduce((acc, cur) => acc + cur) * 1.35
  )}`;
  duration.forEach(
    (e) =>
      (e.textContent = `${Math.ceil(
        price.reduce((acc, cur) => acc + cur) * 0.003
      )} weeks`)
  );
};

const prevBtnClick = function () {
  if (current == 2) {
    prevtBtn.style.visibility = "hidden";
    leftText.style.display = "block";
    designCehck[0].checked = true;
  }
  if (current == 1) {
    current = 1;
  } else {
    progressBar.classList.remove("hidden");
    progressBar2.classList.remove("hidden");
    if (current == 5) {
      nextBtn.textContent = `CALCULATOR →`;
    } else {
      nextBtn.textContent = `NEXT →`;
    }
    current--;
    boxes.forEach(function (e) {
      e.classList.remove("show");
      if (e.dataset.index == current) {
        e.classList.add("show");
      }
    });
    progressIndex.textContent = `0${current}`;
    progressTotal2.style.width = `${current * 25}%`;
    choices.pop();
    price.pop();
    addPrice();
    addChoices(choices);
  }
};

nextBtn.addEventListener("click", nextBtnClick);
prevtBtn.addEventListener("click", prevBtnClick);
switch2.addEventListener("click", function () {
  animateAria.classList.toggle("show");
});

pageNumbers.addEventListener("input", function () {
  price.splice(1, price.length);
  price.push(
    pageNumbers.value === undefined || pageNumbers.value === 0
      ? 0
      : pageNumbers.value * 76
  );
  addPrice();
});

designCehck.forEach((e) =>
  e.addEventListener("click", function () {
    price.pop();
    choices.pop();
    designCehck.forEach(function (e) {
      if (e.checked === true) {
        e.value == "simple design" ? price.push(100) : price.push(200);
        addPrice();
        choices.push(e.value);
      }
    });
  })
);

switch1.addEventListener("click", function () {
  if (switch1.checked === true) {
    price.push(240);
  } else {
    price.pop();
  }
  addPrice();
});

// end calculator section

// add compare section

const addCompareSection = () => {
  let html = ` <section class="compare container d-none d-md-block p-3 mx-auto">
        <h1 class="main-head"
            style="font-size: 37px; margin: 0px 0px 17px !important; text-align: center;line-height: 0.9;">
            Compare The
            <span style="color: #50b8dc; "> Alternatives</span>
        </h1>
        <p style="font-size: 18px; color: #d5d5d5; text-align: center;margin-bottom: 60px !important;">What makes this
            service the perfect fit
            for you
        </p>
        <div class="row justify-content-center">
            <img src="../images/pricing/6090f951ee80ef298ceed69d_Group 9525-p-1080.png" alt="" style="width: 950px" ;>
        </div>
    </section>`;

  document.body.insertAdjacentHTML("beforeend", html);
};

addCompareSection();

// end compare section

// wall section

const addWallSection = function () {
  let html = `<section class="wall-slide container px-3 mx-auto my-5">
        <div class="text position-static">
            <h1 class="main-head" style="font-size: 37px; text-align: center; margin: 130px 0px 15px !important;">Wall of
                <span style="color: #50b8dc;">love</span>
                <img src="../images/wallslider/60520ecc06213f162a7f9cfa_Group 3532 (1).svg" alt="">
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

// questions section

const addQuestionsSection = () => {
  let html = ` <section class="questions container mx-auto d-none d-md-block px-3">
        <h1 class="main-head" style="font-size: 37px; text-align: center; margin: 0px 0px 40px !important;">Frequently <br>
            Asked
            <br>
            <span style="color: #50b8dc;">Questions</span>
        </h1>
        <div class="row col-sm-12  col-md-12 col-lg-9 mx-auto"
            style="padding: 30px 90px !important; margin-bottom: 100px !important;background-color:rgb(18 27 70);border-radius: 30px">
            <div class="questions-box col-12 d-flex flex-column gap-4 py-2"
                style="border-bottom: 1px solid rgba(255, 255, 255, 0.048);">
                <div class="head-line col-12 d-flex justify-content-between align-items-center"
                    style="cursor: pointer;">
                    <h3>What does it mean to get 2 hours of design work a day?</h3>
                    <h1 class="head-shape" style="color: var(--main-buttons-color); font-size: 40px;">+</h1>
                </div>
                <p class="px-5 para"
                    style="font-size: 15px; line-height: 1.7;opacity: 0.7;padding: 0px 50px !important;  overflow: hidden;">
                    You'll get access to a full
                    design team that works with you 2
                    hours a day (40
                    hours/month). Your
                    design team will have 3
                    specialised designers - a UI Designer, Graphic Designer and an Illustrator.
                    <br>
                    <br>
                    For example, if you needed a website re-design, your UI Designer will work with you to create a
                    beautiful design. If you
                    needed a facebook ad design , you'll work with your dedicated Graphic Designer.
                    <br>
                    <br>
                    We take the hassle out of hiring & training a full-design team, so that you can get the designs you
                    need to grow your
                    business.
                    <br>
                    <br>
                    N.B. The same Illustrator, UI & Graphic Designer will work with you every time (unless you request
                    otherwise).
                </p>
            </div>
            <div class="questions-box col-12 d-flex flex-column gap-4 py-2"
                style="border-bottom: 1px solid rgba(255, 255, 255, 0.048);">
                <div class="head-line col-12 d-flex justify-content-between align-items-center"
                    style="cursor: pointer;">
                    <h3>Do I get a creative design team?</h3>
                    <h1 class="head-shape" style="color: var(--main-buttons-color); font-size: 40px;">+
                    </h1>
                </div>
                <p class="px-5 para"
                    style="font-size: 15px; line-height: 1.7;opacity: 0.7;padding: 0px 50px !important;  overflow: hidden;">
                    With your subscription you'll get a full creative design team. This includes an Illustrator, Graphic
                    Designer, UI
                    Designer and a Project Manager.
                    <br><br>
                    Whether you need a new website design, awesome social media graphics, or breath-taking
                    illustrations, we got you!
                </p>
            </div>
            <div class="questions-box col-12 d-flex flex-column gap-4 py-2"
                style="border-bottom: 1px solid rgba(255, 255, 255, 0.048);">
                <div class="head-line col-12 d-flex justify-content-between align-items-center"
                    style="cursor: pointer;">
                    <h3>What designs can I request</h3>
                    <h1 class="head-shape" style="color: var(--main-buttons-color); font-size: 40px;">+</h1>
                </div>
                <p class="px-5 para"
                    style="font-size: 15px; line-height: 1.7;opacity: 0.7;padding: 0px 50px !important;  overflow: hidden;">
                    With your subscription you'll get a full creative design team. This includes an Illustrator, Graphic
                    Designer, UI
                    Designer and a Project Manager.
                    <br><br>
                    Whether you need a new website design, awesome social media graphics, or breath-taking
                    illustrations, we got you!
                </p>
            </div>
            <div class="questions-box col-12 d-flex flex-column gap-4 py-2"
                style="border-bottom: 1px solid rgba(255, 255, 255, 0.048);">
                <div class="head-line col-12 d-flex justify-content-between align-items-center"
                    style="cursor: pointer;">
                    <h3>What is the turnaround time</h3>
                    <h1 class="head-shape" style="color: var(--main-buttons-color); font-size: 40px;">+</h1>
                </div>
                <p class="px-5 para"
                    style="font-size: 15px; line-height: 1.7;opacity: 0.7;padding: 0px 50px !important;  overflow: hidden;">
                    All designs are custom made! As such the turn around depends on the design request and the
                    complexity.
                    <br><br>
                    To give you an idea, on average a landing page would take 3-4 days without revisions. For more info
                    on turn-around time
                    please visit this page
                </p>
            </div>
            <div class="questions-box col-12 d-flex flex-column gap-4 py-2"
                style="border-bottom: 1px solid rgba(255, 255, 255, 0.048);">
                <div class="head-line col-12 d-flex justify-content-between align-items-center"
                    style="cursor: pointer;">
                    <h3>Can I scale up my plans?</h3>
                    <h1 class="head-shape" style="color: var(--main-buttons-color); font-size: 40px;">+</h1>
                </div>
                <p class="px-5 para"
                    style="font-size: 15px; line-height: 1.7;opacity: 0.7;padding: 0px 50px !important;  overflow: hidden;">
                    As your design needs we'll also grow with you. You'll be able to scale up the number of designers
                    working on your
                    project by subscribing to additional plans.
                </p>
            </div>
            <div class="questions-box col-12 d-flex flex-column gap-4 py-2"
                style="border-bottom: 1px solid rgba(255, 255, 255, 0.048);">
                <div class="head-line col-12 d-flex justify-content-between align-items-center"
                    style="cursor: pointer;">
                    <h3>Can I cancel any time?</h3>
                    <h1 class="head-shape" style="color: var(--main-buttons-color); font-size: 40px;">+</h1>
                </div>
                <p class="px-5 para"
                    style="font-size: 15px; line-height: 1.7;opacity: 0.7;padding: 0px 50px !important;  overflow: hidden;">
                    With your subscription you'll be able to cancel anytime. Simply message your Project Manager on
                    Basecamp and we'll go
                    ahead and cancel, no questions asked!
                </p>
            </div>
            <div class="questions-box col-12 d-flex flex-column gap-4 py-2"
                style="border-bottom: 1px solid rgba(255, 255, 255, 0.048);">
                <div class="head-line col-12 d-flex justify-content-between align-items-center"
                    style="cursor: pointer;">
                    <h3>Am I locked into a membership</h3>
                    <h1 class="head-shape" style="color: var(--main-buttons-color); font-size: 40px;">+</h1>
                </div>
                <p class="px-5 para"
                    style="font-size: 15px; line-height: 1.7;opacity: 0.7;padding: 0px 50px !important;  overflow: hidden;">
                    Not at all, you are enrolled on a month to month membership and can cancel anytime – hassle free.
                </p>
            </div>
        </div>
    </section>`;

  document.body.insertAdjacentHTML("beforeend", html);
};

addQuestionsSection();

let headLine = document.querySelectorAll(".head-line");

headLine.forEach((e) =>
  e.addEventListener("click", function () {
    let child = e.lastElementChild;
    child.classList.toggle("show");
    if (child.classList.contains("show")) {
      child.style.rotate = "-600deg";
      setTimeout(function () {
        child.style.rotate = "360deg";
      }, 100);
      setTimeout(function () {
        child.textContent = "-";
      }, 300);
    } else {
      child.style.rotate = "1000deg";
      setTimeout(function () {
        child.style.rotate = "0deg";
      }, 100);
      setTimeout(function () {
        child.textContent = "+";
      }, 300);
    }
    e.nextElementSibling.classList.toggle("show");
    if (e.nextElementSibling.classList.contains("show")) {
      e.nextElementSibling.style.height = `${e.nextElementSibling.scrollHeight}px`;
    } else {
      e.nextElementSibling.style.height = "0";
    }
  })
);

// end questions section

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
