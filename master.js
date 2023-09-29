let inputs = document.querySelectorAll(".content form input");
let phone = document.querySelector("#phone");
let name = document.querySelector("#name");
let email = document.querySelector("#email");
let nextBtn = document.querySelector("#nextBtn");
inputs.forEach(function (el) {
    el.addEventListener("focus", function () {
        el.style.border = "1px solid gray";
        msgs[0].style.display = "none";
        msgs[1].style.display = "none";
    })
})

let categories = document.querySelectorAll(".cards li");
categories.forEach(function (el) {
    el.addEventListener("click", function () {
        categories.forEach(function (el) {
            el.classList.remove("activeCard");
        });
        el.classList.toggle("activeCard");
        // onsTitle.appendChild(document.createTextNode(el.innerHTML))
    })
})
let boxes = document.querySelectorAll(".addOns");
boxes.forEach((box) => {
    box.addEventListener("click", function () {
        box.parentElement.classList.toggle("selected");
    })
})
let msgs = document.querySelectorAll(".content form label .msgs");
            let regPhone = /^(\()?\d{3}(\))?(-|\s)?\d{3}(-|\s)\d{4}$/;
            let regMail = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
            let nextBtn1 = document.querySelector("#nextBtn1");
            nextBtn1.addEventListener("click", function () {
                if (regPhone.test(phone.value) === false) {
                    phone.style.border = "1px solid red";
                    msgs[1].style.display = "flex";
                }
                if (regMail.test(email.value) === false) {
                    email.style.border = "1px solid red";
                    msgs[0].style.display = "flex";
                }
                if (regPhone.test(phone.value) && regMail.test(email.value)) {
                    document.querySelector(".official").classList.toggle("closed");
                    document.querySelector(".primary").classList.toggle("closed");

                }
            })
            let choosePlan = document.querySelector(".card .choosePlan");
            let ballPlan = document.querySelector(".card .choosePlan .ball");
            let plans = document.querySelectorAll(".card .choose span");
            let cards = document.querySelectorAll(".card .cards");
            choosePlan.addEventListener("click", function () {
                ballPlan.classList.toggle("monthly");
                plans[0].classList.toggle("active");
                plans[1].classList.toggle("active");
                cards.forEach(function (card) {
                    card.classList.toggle("active");
                });
                document.querySelector(".month").classList.toggle("closed");
                document.querySelector(".year").classList.toggle("closed");
            });
            let nextBtn2 = document.querySelector("#nextBtn2");
            nextBtn2.onclick = function () {
                document.querySelector(".primary").classList.toggle("closed");
                document.querySelector(".card1").classList.toggle("closed");
            };
            let goBack2 = document.querySelector("#goBack2");
            goBack2.onclick = function () {
                document.querySelector(".primary").classList.toggle("closed");
                document.querySelector(".official").classList.toggle("closed");

            };
            let goBack3 = document.querySelector("#goBack3");
            goBack3.onclick = function () {
                document.querySelector(".primary").classList.toggle("closed");
                document.querySelector(".card1").classList.toggle("closed");
            }
            let nextBtn3 = document.querySelector("#nextBtn3");
            nextBtn3.addEventListener("click", function () {
                document.querySelector(".card2").classList.toggle("closed");
                document.querySelector(".card1").classList.toggle("closed");
                document.querySelector(".finalTitle").innerHTML = plan.planName;
                document.querySelector(".results .total").innerHTML = `$${plan.planPrice}/mo`;
            })
            document.querySelector(".goBack4").addEventListener("click", function () {
                document.querySelector(".card2").classList.toggle("closed");
                document.querySelector(".card1").classList.toggle("closed");
            })
            document.querySelector("#nextBtn4").addEventListener("click", function () {
                document.querySelector(".card2").classList.add("closed");
                document.querySelector(".msgConfirm").classList.toggle("closed");
            })
            let onsTitle = document.querySelector(".onsTitle");
            let adds = [];
            let totalPrice = 0;
            let plan = {
                planPrice: 0,
                planName: ""
            }
            let addsPrice = 0;
            function getPlanPrice(name, price) {
                totalPrice = 0
                plan.planPrice = price;
                plan.planName = name;
                totalPrice += price;
            }
            function getAddOnsPrice(option, name, price) {
                if (option.checked) {
                    addsPrice += price;
                    adds.push(name);
                    totalPrice += price;
                }
                else {
                    addsPrice -= price;
                    adds.pop();
                    totalPrice -= price;
                }
            }
            document.querySelector(".calculate").addEventListener("click", function () {
                for (let i = 0; i < adds.length; i++) {
                    let el = `<div class="service">
                        <div class="onsTitle">${adds[i]}</div>
                        <div class="onsPlan">$2/mo</div>
                    </div>`;
                    document.querySelector(".services").innerHTML += el;
                }
                document.querySelector(".results .totalPlan").innerHTML = `$${totalPrice}`;
            })
