// window on load

window.addEventListener("load", function () {
  [...platformHeader].forEach((e) => (e.style.scale = "1"));
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
    section.style.opacity = "1 !important";
  } else if (
    scrollY <=
    section.offsetTop - document.documentElement.clientHeight
  ) {
    section.style.translate = "100%";
    section.style.opacity = "0 !important";
  }
}

function moveLeftRotate(section) {
  if (scrollY >= section.offsetTop - document.documentElement.clientHeight) {
    section.style.translate = "0";
    setTimeout(() => (section.style.rotate = "0deg"), 500);
    section.style.opacity = "1";
  } else if (
    scrollY <=
    section.offsetTop - document.documentElement.clientHeight
  ) {
    section.style.translate = "100%";
    section.style.rotate = "90deg";
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

function moveRightRotate(section) {
  if (scrollY >= section.offsetTop - document.documentElement.clientHeight) {
    section.style.translate = "0%";
    setTimeout(() => (section.style.rotate = "0deg"), 500);
    section.style.opacity = "1";
  } else if (
    scrollY <=
    section.offsetTop - document.documentElement.clientHeight
  ) {
    section.style.translate = "-100%";
    section.style.rotate = "90deg";
    section.style.opacity = "0";
  }
}

window.addEventListener("scroll", () => {
  // main head
  document.querySelectorAll(".main-head").forEach((e) => scale(e));
  // end main head
  // platform text & boxes
  platformText.forEach((e) =>
    e.classList.contains("right") ? moveLeftRotate(e) : moveRightRotate(e)
  );
  platformImages.forEach((e) =>
    e.classList.contains("right") ? moveLeftRotate(e) : moveRightRotate(e)
  );
  // end platform text & boxes
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
  // client
  document
    .querySelectorAll(".questions-box .head-line")
    .forEach((e) => moveUp(e));
  document.querySelectorAll(".client-box").forEach((e) => scale(e));
  // end client
  // who is
  moveRight(document.querySelector(".who-text"));
  moveLeft(document.querySelector(".who-image"));
  // end who is
  // our services
  ul.forEach((e) => scale(e));
  moveLeft(servicesImage);
  // end our services
  // see pricing
  scale(pricing);
  // end see pricing
});

// end window scroll

// add platform header

const addPlatformSection = function () {
  let html = `<div class="overflow-hidden" style="background-color: #131753;">
        <section class="platform-header d-flex text-center text-md-start container mx-auto px-4 px-sm-0 flex-wrap gap-3 gap-md-0"
            style="margin-top: 160px !important;">
            <div class="col-12 col-md-6 pt-5" style="padding-top: 50px !important;">
                <h1>Our <span style="color: #50b8dc;">Platform</span></h1>
                <p style="margin: 25px 0px 40px !important;line-height: 1.8;">Getting breath-taking designs has never
                    been breasier!
                    Submit
                    your
                    design requests <br> and receive it back
                    within 24-48 hours.
                </p>
                <button class="learn col-5 d-none d-md-block">LEARN MORE</button>
            </div>
            <div class="col-12 col-md-6 ">
                <img src="../images/ourplatform/60de558c8465687b9ffbf104_Frame 9613 (1).svg" alt=""
                    style="max-width: 100%;">
            </div>
        </section>
    </div>`;

  document.body.insertAdjacentHTML("beforeend", html);
};

addPlatformSection();

let platformHeader = document.querySelector(".platform-header").children;

[...platformHeader].forEach((e) => (e.style.scale = "0"));

// end platform header

// add platform boxes

const addPlatformBoxes = function () {
  let html = `<section class="container mx-auto px-md-5">
            <div class="row overflow-hidden" style="margin-top: 80px !important;">
                <div class="d-flex flex-wrap">
                    <div class="text left p-md-5 p-1 col-12 col-md-6 text-center text-md-start"
                        style="padding: 70px 30px 30px !important;">
                        <img src="../images/ourplatform/605204f211d57dae071db78b_Group 3526.svg" alt="" width="80px">
                        <h2 style="margin: 10px 0px  20px !important;">Submit Design Requests
                        </h2>
                        <p style="line-height: 1.9;opacity: 0.7;">Create a design task with just a few clicks - UI/UX,
                            Illustrations, Graphics & Animations - we
                            got your back! Simply
                            fill out our brief sheet, hit submit and we’ll get started on your task right away.
                        </p>
                    </div>
                    <div class="box-image right col-12 col-md-6">
                        <img src="../images/ourplatform/60de52fa55e62d6839a33228_submit-design-request-p-800.png"
                            alt="">
                    </div>
                </div>
                <div class="d-flex flex-wrap-reverse">
                    <div class="box-image left col-12 col-md-6">
                        <img src="../images/ourplatform/60de52f949a1c2e817636fd2_track-requests (1)-p-800.png" alt="">
                    </div>
                    <div class="text right p-md-5 p-1 col-12 col-md-6 text-center text-md-start"
                        style="padding: 70px 30px 30px !important;">
                        <img src="../images/ourplatform/6054f2a6b96d3f69456802cf_Group 3545.svg" alt="" width="80px">
                        <h2 style="margin: 10px 0px  20px !important;">Track Your Requests
                        </h2>
                        <p style="line-height: 1.9;opacity: 0.7;">Easily track all your tasks at a glance with our
                            intuitive dashboard - you’ll never have to worry about what’s going on
                            with your project. See what’s been submitted, what’s in progress, easily reply to your
                            creative design team and give
                            feedback.
                        </p>
                    </div>
                </div>
                <div class="d-flex flex-wrap">
                    <div class="text left p-md-5 p-1 col-12 col-md-6 text-center text-md-start"
                        style="padding: 70px 30px 30px !important;">
                        <img src="../images/ourplatform/6054edc9d64521714bfb4cd7_Group 3544.svg" alt="" width="80px">
                        <h2 style="margin: 10px 0px  20px !important;">Everything You Need
                            In One Place
                        </h2>
                        <p style="line-height: 1.9;opacity: 0.7;">Storage, Invoices and Billing all in one place. No
                            more losing files, long email chains and lost invoices!
                        </p>
                    </div>
                    <div class="box-image right col-12 col-md-6">
                        <img src="../images/ourplatform/60de52f98c0c71706955cd22_everything-in-one-place-p-800 (1).png"
                            alt="">
                    </div>
                </div>
                <div class="d-flex flex-wrap-reverse">
                    <div class="box-image left col-12 col-md-6">
                        <img src="../images/ourplatform/60de52f836a3d8189a16c3f4_user-management-p-800.png" alt="">
                    </div>
                    <div class="text right p-md-5 p-1 col-12 col-md-6 text-center text-md-start"
                        style="padding: 70px 30px 30px !important;">
                        <img src="../images/ourplatform/605204f3638f385e85dee6ff_Group 3527.svg" alt="" width="80px">
                        <h2 style="margin: 10px 0px  20px !important;">User Management
                        </h2>
                        <p style="line-height: 1.9;opacity: 0.7;">Have more than one team member? Invite as many team
                            members as you’d like. Your members will be able to directly
                            collaborate with your dedicated design team with ease.
                        </p>
                    </div>
                </div>
            </div>
        </section>`;

  document.body.insertAdjacentHTML("beforeend", html);
};

addPlatformBoxes();

const platformText = document.querySelectorAll(".text");
const platformImages = document.querySelectorAll(".box-image");

// end platform boxes

// membership sectoin

const addMembershipSection = function () {
  let html = `<section class="membership container overflow-hidden mx-auto">
        <div class="text mb-5">
            <h1 class="main-head" style="font-size: 37px; text-align: center; margin: 110px 0px 60px !important;">And <span
                    style="color: #50b8dc;">Much More</span>
            </h1>
        </div>
        <div class="row py-5 d-flex justify-content-center">
            <div class="p-4 mb-5 col-12 col-md-6 d-flex justify-content-end">
                <div
                    class="member-box left col-lg-9 col-12 d-flex flex-column gap-3 p-4 justify-content-center  position-relative">
                    <img src="../images/membership/5fc675c11f5b4212db8ecb65_Group 2.svg" alt="">
                    <h2>Direct Communication
                    </h2>
                    <p style="color: rgb(182, 182, 182);">Communicate directly with your dedicated Designer and Project Manager. No middle-men.
                    </p>
                </div>
            </div>
            <div class="p-4 mb-5  col-12 col-md-6 d-flex justify-content-start">
                <div
                    class="member-box right col-lg-9 col-12 d-flex flex-column gap-3 p-4 justify-content-center  position-relative">
                    <img src="../images/membership/5f8d5a0e57a4e239e3fda39f_Fast turnaround.svg" alt="">
                    <h2>Reviewing System
                    </h2>
                    <p style="color: rgb(182, 182, 182);">After each completed project give your designs a rating. This helps us to adjust the designs to make it even better on the next design.
                    </p>
                </div>
            </div>
            <div class="p-4 mb-5 col-12 col-md-6 d-flex justify-content-end">
                <div
                    class="member-box left col-lg-9 col-12 d-flex flex-column gap-3 p-4 justify-content-center  position-relative">
                    <img src="../images/membership/5f81ae38dc86b5bd32518460_Team collaboration.svg" alt=""
                        style="width: 160px;">
                    <h2>Notifications
                    </h2>
                    <p style="color: rgb(182, 182, 182);">Get notified immediately when your designs are ready with in-app and email notifications
                    </p>
                </div>
            </div>
            <div class="p-4 mb-5 col-12 col-md-6 d-flex justify-content-start">
                <div
                    class="member-box right col-lg-9 col-12 d-flex flex-column gap-3 p-4 justify-content-center  position-relative">
                    <img src="../images/membership/5f8d5a0e2cdfb8dc6f5eddc0_Ownership of files.svg" alt="">
                    <h2>Storage
                    </h2>
                    <p style="color: rgb(182, 182, 182);">Keep all your brand assets and materials in one place! No more digging around your computer for assets.
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

// client section

const addClientSection = function () {
  let html = ` <section  class="client container mx-auto px-3">
            <h1 class="main-head" style="font-size: 37px; text-align: center; margin: 20px 0px 7px !important;"><span
                    style="color: #50b8dc;">How Clients Work With Us
                </span>
            </h1>
            <p style="text-align: center;line-height: 1.8;margin-bottom: 80px !important">Getting high quality designs without breaking the <br> bank
                has
                never been
                easier.
            </p>
            <div class="client-box d-flex col-md-7 align-items-center col-12 justify-content-center text-center text-sm-start mx-auto flex-lg-nowrap flex-wrap"
                style="gap: 5px;">
                <div class="client-text">
                    <img src="../images/ourplatform/605204f211d57dae071db78b_Group 3526.svg" alt="" width="60px"
                        style="translate: -15px;">
                    <h2 style="margin: 10px 0px  20px !important;font-size: 19px;">01. Create Your Design Request
                    </h2>
                    <p style="line-height: 1.9;opacity: 0.7; margin-bottom: 20px !important;">Once you've become a member you'll get access to our
                        custom software where you'll be able to submit as many job requests
                        as you want, chat with us in real time and download completed designs immediately.
                    </p>
                </div>
                <div class="client-image" style="translate: 0px 15px">
                    <img src="../images/how it work/60520913668a04140cdbd2e7_5f8824c807ae067bd51de921_Wade 1 (1).png"
                        alt="" style="width: 260px;">
                </div>
            </div>
            <div class="questions-box col-md-7 mx-auto d-flex flex-column gap-4 py-5"
                style="border-bottom: 1px solid rgba(255, 255, 255, 0.048);background-color: rgb(18 27 70); border-radius: 15px;  margin-bottom: 80px !important;">
                <div class="head-line col-12 d-flex justify-content-between align-items-center"
                    style="cursor: pointer;padding: 0px 50px !important;">
                    <h4>What type of designs can I request?</h4>
                    <h1 class="head-shape" style="color: var(--main-buttons-color); font-size: 40px;">+</h1>
                </div>
                <p class="px-5 para"
                    style="font-size: 15px; line-height: 1.7;opacity: 0.7;padding: 0px 55px !important;  overflow: hidden;">
                    You can request anything related to design. This includes UI work for websites and apps,
                    Illustrations, social media
                    graphics, icons and much more!
                </p>
                <div class="head-line col-12 d-flex justify-content-between align-items-center"
                    style="cursor: pointer;padding: 0px 50px !important;">
                    <h4>How many designs can I submit at once?</h4>
                    <h1 class="head-shape" style="color: var(--main-buttons-color); font-size: 40px;">+</h1>
                </div>
                <p class="px-5 para"
                    style="font-size: 15px; line-height: 1.7;opacity: 0.7;padding: 0px 55px !important;  overflow: hidden;">
                    You can submit as many design requests as you want! We'll work on 1 request at a time. Once a
                    request has been completed
                    we'll immediately move on to the next task.
                </p>
                <div class="head-line col-12 d-flex justify-content-between align-items-center"
                    style="cursor: pointer;padding: 0px 50px !important;">
                    <h4>How long does a request take to complete?</h4>
                    <h1 class="head-shape" style="color: var(--main-buttons-color); font-size: 40px;">+</h1>
                </div>
                <p class="px-5 para"
                    style="font-size: 15px; line-height: 1.7;opacity: 0.7;padding: 0px 55px !important;  overflow: hidden;">
                    You will be assigned a dedicated designer who will be working on your requests each business day.
                    The turn around of a
                    task depends on the complexity of the task, you can find more information here on delivery times.
                    <br><br>
                    Simpler tasks will be done within the day e.g. icons and social media graphics
                </p>
            </div>
            <div class="client-box d-flex col-md-7 align-items-center col-12 justify-content-center text-center text-sm-start mx-auto flex-lg-nowrap flex-wrap"
                style="gap: 5px;">
                <div class="client-text">
                    <img src="../images/ourplatform/6054f2a6b96d3f69456802cf_Group 3545.svg " alt="" width="60px"
                        style="translate: -15px;">
                    <h2 style="margin: 10px 0px  20px !important;font-size: 19px;">02. Assigned an Experienced Designer
                    </h2>
                    <p style="line-height: 1.9;opacity: 0.7;    margin-bottom: 30px !important;">Once you've added your first job request we'll assign you
                        an experienced designer and a dedicated project manager for
                        smooth delivery of all designs.
                    </p>
                </div>
                <div class="client-image" style="translate: 0px 15px">
                    <img src="../images/how it work/6052091433a0fd19fedabc17_5f8d845b34c9a03634cb6016_bigchange 3 1 (1).png"
                        alt="" style="width: 260px;">
                </div>
            </div>
            <div class="questions-box col-md-7 mx-auto d-flex flex-column gap-4 py-5"
                style="border-bottom: 1px solid rgba(255, 255, 255, 0.048);background-color:rgb(18 27 70); border-radius: 15px; margin-bottom: 80px !important;">
                <div class="head-line col-12 d-flex justify-content-between align-items-center"
                    style="cursor: pointer;padding: 0px 50px !important;">
                    <h4>How long does a request take to complete?</h4>
                    <h1 class="head-shape" style="color: var(--main-buttons-color); font-size: 40px;">+</h1>
                </div>
                <p class="px-5 para"
                    style="font-size: 15px; line-height: 1.7;opacity: 0.7;padding: 0px 55px !important;  overflow: hidden;">
                    You will be assigned a dedicated designer who will be working on your requests each business day.
                    The turn around of a
                    task depends on the complexity of the task, you can find more information here on delivery times :)
                    <br><br>
                    Simpler tasks will be done within the day e.g. icons and social media graphics
                </p>
                <div class="head-line col-12 d-flex justify-content-between align-items-center"
                    style="cursor: pointer;padding: 0px 50px !important;">
                    <h4>How do I communicate with my Designer?</h4>
                    <h1 class="head-shape" style="color: var(--main-buttons-color); font-size: 40px;">+</h1>
                </div>
                <p class="px-5 para"
                    style="font-size: 15px; line-height: 1.7;opacity: 0.7;padding: 0px 55px !important;  overflow: hidden;">
                    You'll be able to directly message your designer on our design request tool software. You'll also
                    have a dedicated
                    Project Manager to help if any issues arise.
                </p>
                <div class="head-line col-12 d-flex justify-content-between align-items-center"
                    style="cursor: pointer;padding: 0px 50px !important;">
                    <h4>How long does a revision take?</h4>
                    <h1 class="head-shape" style="color: var(--main-buttons-color); font-size: 40px;">+</h1>
                </div>
                <p class="px-5 para"
                    style="font-size: 15px; line-height: 1.7;opacity: 0.7;padding: 0px 55px !important;  overflow: hidden;">
                    It depends on how big the revision is but we generally complete revisions within 24 hours.
                </p>
            </div>
            <div class="client-box d-flex col-md-7 align-items-center col-12 justify-content-center text-center text-sm-start mx-auto flex-lg-nowrap flex-wrap"
                style="gap: 5px;">
                <div class="client-text">
                    <img src="../images/ourplatform/6054edc9d64521714bfb4cd7_Group 3544.svg " alt="" width="60px"
                        style="translate: -15px;">
                    <h2 style="margin: 10px 0px  20px !important;font-size: 19px;">03. Complete & download
                    </h2>
                    <p style="line-height: 1.9;opacity: 0.7;    margin-bottom: 30px !important;">Once completed, you'll be able to download all the source
                        files instantly. We keep all the files in one convenient
                        location, no more emailing files.
                    </p>
                </div>
                <div class="client-image" style="translate: 0px 15px">
                    <img src="../images/how it work/60520914b7e7250d461eca07_5f882487f7aee3ea81b72143_complete and download 1 (1).png"
                        alt="" style="width: 260px; height: 220px;">
                </div>
            </div>
            <div class="questions-box col-md-7 mx-auto d-flex flex-column gap-4 py-5"
                style="border-bottom: 1px solid rgba(255, 255, 255, 0.048);background-color: rgb(18 27 70); border-radius: 15px;  margin-bottom: 80px !important;">
                <div class="head-line col-12 d-flex justify-content-between align-items-center"
                    style="cursor: pointer;padding: 0px 50px !important;">
                    <h4>Where can I download the source files</h4>
                    <h1 class="head-shape" style="color: var(--main-buttons-color); font-size: 40px;">+</h1>
                </div>
                <p class="px-5 para"
                    style="font-size: 15px; line-height: 1.7;opacity: 0.7;padding: 0px 55px !important;  overflow: hidden;">
                    As soon as the design job is completed you'll be able to download all the source files within the
                    job request tool
                </p>
                <div class="head-line col-12 d-flex justify-content-between align-items-center"
                    style="cursor: pointer;padding: 0px 50px !important;">
                    <h4>How can I get more info on the Pixel True Service</h4>
                    <h1 class="head-shape" style="color: var(--main-buttons-color); font-size: 40px;">+</h1>
                </div>
                <p class="px-5 para"
                    style="font-size: 15px; line-height: 1.7;opacity: 0.7;padding: 0px 55px !important;  overflow: hidden;">
                    You can schedule a call with us here
                </p>
                </div>
                <a class="my-5 d-block col-lg-3 col-6 mx-auto" href="pricing.html">TRY RISK FREE</a>
                  <p style="line-height: 1.8; opacity: 0.8;text-align: center;">If we're not a good fit in the first 14 days we'll give you a full <br> refund and a $75 Amazon voucher for your time.
                </p>
</section>`;

  document.body.insertAdjacentHTML("beforeend", html);
};

addClientSection();

// end client section

// who is section

const addWhoIsSection = function () {
  let html = ` <section
            class="who-is overflow-hidden align-items-center justify-content-center container mx-auto px-3 d-flex flex-wrap-reverse"
            style="margin-top: 100px !important;">
            <div class="who-text col-lg-6 col-12" style="padding: 0px 40px !important;box-shadow: 1px 1px 12px rgba(0,0,0,.07);>
                <h1 class="text-center text-lg-start">Who Is Pixel True For?
                </h1>
                <p style="line-height: 1.8; padding: 20px 0px !important;opacity: 0.8;">With Pixel True you'll get an
                    experienced
                    design team that works with you and your team each day to
                    deliver high-quality
                    designs.
                    <br><br>
                    We're perfect for businesses and/or entrepreneurs who are looking for high-quality designs without
                    all the headaches of
                    finding, vetting and managing designers themselves.
                    ‍<br><br>
                    We're also great for companies with in-house designers who are looking to outsource or scale-up
                    their operations.
                    ‍<br><br>
                    We work with many individuals and businesses such as SMEs, agencies, start-ups, entrepreneurs, VCs
                    and more.
                </p>
                <h4 style="color: rgb(239, 26, 26);">Book A Free Consultation
                    →</h3>
            </div>
            <div class="who-image col-lg-6 col-12"><img
                    src="../images/membership/5f81ae38dc86b5bd32518460_Team collaboration.svg" alt="" width="100%">
            </div>
        </section>`;

  document.body.insertAdjacentHTML("beforeend", html);
};

addWhoIsSection();

// end who is section

// our services sections

const addOurServices = function () {
  let html = `<h1 class="main-head" style="font-size: 37px; text-align: center; margin: 60px 0px 7px !important;">Our
            <span style="color: #50b8dc;">Services
            </span>
        </h1>
        <div class="our-services overflow-hidden">
            <div class="btns d-flex justify-content-center" style="gap: 40px">
                <p class="btn left active">What's Included</p>
                <p class="btn right">What's Not Included</p>
            </div>
            <div class="w-100" style="background-color: rgb(17 23 66);">
                <div
                    class="our-services-content d-flex justify-content-center align-items-center flex-wrap-reverse my-4 container mx-auto px-3 d-flex" style="margin-bottom: 100px !important">
                    <div class="text d-flex flex-grow-1 w-50">
                    </div>
                    <div class="image flex-grow-1 text-center d-none d-lg-block">
                        <img src="../images/ourservices/5f900b8b304c96391ccf9ee2_aboutus.svg" alt="">
                    </div>
                </div>
            </div>
        </div>`;

  document.body.insertAdjacentHTML("beforeend", html);
};

addOurServices();

const servicesText = document.querySelector(".our-services .text");
const servicesImage = document.querySelector(".our-services .image");

const addInclude = function () {
  servicesText.innerHTML = "";
  let html = `<ul class="flex-grow-1 align-content-center align-items-lg-start">
                            <li>Website Design</li>
                            <li>App Design</li>
                            <li>Illustrations</li>
                            <li>Animation</li>
                            <li>Branding</li>
                            <li>Presentations</li>
                            <li>Logos</li>
                            <li>Social Media Graphics</li>
                            <li>Display Ads</li>
                            <li>Podcast Graphics</li>
                        </ul>
                        <ul class="flex-grow-1 align-content-center align-items-lg-start">
                            <li>Merchandise</li>
                            <li>Event Graphics
                            </li>
                            <li>Ecommerce Graphics
                            </li>
                            <li>Books and Ebook Covers
                            </li>
                            <li>Photo Editing
                            </li>
                            <li>Business Cards
                            </li>
                            <li>Flyers
                            </li>
                            <li>Posters</li>
                            <li>Email Banners
                            </li>
                            <li>And much more!!
                            </li>
                        </ul>`;
  servicesText.innerHTML = html;
};

addInclude();

const addNotInclude = function () {
  servicesText.innerHTML = "";
  let html = `<ul class="flex-grow-1 align-content-center align-items-lg-start">
                            <li>Complex UX Design
</li>
                            <li>3D Illustrations
</li>
                            <li>Complex animation
</li>
                        </ul>
`;
  servicesText.innerHTML = html;
};

const ul = [...document.querySelectorAll(".our-services-content .text ul")]
  .map((e) => [...e.children])
  .flat();

const removeActiveBtn = () => {
  document
    .querySelectorAll(".btn")
    .forEach((e) => e.classList.remove("active"));
};

document.querySelectorAll(".btn").forEach((e) =>
  e.addEventListener("click", function () {
    removeActiveBtn();
    e.classList.add("active");
    if (e.classList.contains("left")) {
      addInclude();
    } else {
      addNotInclude();
    }
  })
);

// end services sections

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

// questions section

const addQuestionsSection = () => {
  let html = ` <section class="questions container mx-auto d-none d-md-block px-3">
        <h1 class="main-head" style="font-size: 37px; text-align: center; margin: 90px 0px 40px !important;">Frequently <br>
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
