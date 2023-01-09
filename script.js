const portfolio = {};

portfolio.headerFadeIn = () => {
    const $header =  $("header");
    $header.fadeIn(700);
}

portfolio.openerTextFadeOut = () => {
    const $openingText =  $(".opening-text");
    $openingText.fadeOut(700);
}

portfolio.headerBackgroundScroll = () => {
    const $headerHeight =  $("header").height();
    const $headerBackground = $(".header-background");
    $headerBackground.animate({height:($headerHeight + 20)},1000)
}


portfolio.scrollListener = window.addEventListener("scroll", () => {
    portfolio.headerBackgroundScroll();
    portfolio.openerTextFadeOut();
    portfolio.headerFadeIn();
})



//vanilla JS:
// portfolio.whatTime = () => {
//     const currentHr = new Date().getHours();
//     const time = document.querySelector("h2.time")
//     if (currentHr >= 23 && currentHr < 3) {
//         time.textContent="Good Evening Night Owl!";
//     } else if (currentHr >= 3 && currentHr < 6) {
//         time.textContent="Good Morning Early Riser!";
//     } else if (currentHr >= 6 && currentHr < 12) {
//         time.textContent="Good Morning!";
//     } else if (currentHr >= 12 && currentHr < 17) {
//         time.textContent="Good Afternoon!";
//     } else if (currentHr >= 17 && currentHr < 23) {
//         time.textContent="Good Evening!";
//         }
// }

//jQuery:
portfolio.whatTime = () => {
    const currentHr = new Date().getHours();
    const $time = $("h2.time");

    if (currentHr >= 23 && currentHr < 3) {
        $time.text("Good Evening Night Owl!");
    } else if (currentHr >= 3 && currentHr < 6) {
        $time.text("Good Morning Early Riser!");
    } else if (currentHr >= 6 && currentHr < 12) {
        $time.text("Good Morning!");
    } else if (currentHr >= 12 && currentHr < 17) {
        $time.text("Good Afternoon!");
    } else if (currentHr >= 17 && currentHr < 23) {
        $time.text("Good Evening!");
        }
}

portfolio.init = () => {
    portfolio.whatTime();
}

$(() => {
    portfolio.init();
})