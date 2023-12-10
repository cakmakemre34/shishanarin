let left = document.getElementsByClassName("bi-caret-left-fill")[0]
let right = document.getElementsByClassName("bi-caret-right-fill")[0]
let cards = document.getElementsByClassName("cards")[0];

left.addEventListener("click", () => {
    cards.scrollLeft -= 140;
})

right.addEventListener("click", () => {
    cards.scrollLeft += 140;
})

let price_conts = document.querySelectorAll(".price_cont");

Array.from(document.getElementsByClassName("card")).forEach((ele, i) => {
    ele.addEventListener("click", () => {
        poster.src = ele.getElementsByTagName("img")[0].src;
        title.innerText = ele.getElementsByTagName("h5")[0].innerText;
        let prices = ele.getElementsByTagName("h4");
        for (let j = 0; j < prices.length; j++) {
            price_conts[j].innerText = prices[j].innerText;
        }
        explanation.innerText = ele.getElementsByTagName("h3")[0].innerText;
    });
});


let poster = document.getElementById("poster");
let title = document.getElementById("title");
let explanation = document.getElementById("explanation")
let price_cont = document.getElementById("price_cont")


Array.from(document.getElementsByClassName("card")).forEach((ele, i) => {
    // console.log(ele)
    ele.addEventListener("click", () => {
        poster.src = ele.getElementsByTagName("img")[0].src;
        title.innerText = ele.getElementsByTagName("h5")[0].innerText;
        price_cont.innerText = ele.getElementsByTagName("h4")[0].innerText;
        explanation.innerText = ele.getElementsByTagName("h3")[0].innerText;
    })
})

let subMenu = document.getElementById("subMenu")

function toggleMenu() {
    subMenu.classList.toggle("open-menu")
}



