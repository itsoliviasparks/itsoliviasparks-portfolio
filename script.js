const portfolio = {};

portfolio.devStackHover = () => {
    $('.tech-stack > li').hover(function () {
        $(this).children("i").toggleClass('colored').siblings().removeClass('colored');
        });
}

portfolio.setJumpAnchorPosition = () => {
    const $headerHeight = $("header").outerHeight();
    $(".anchor").css({
        "height":`${$headerHeight}px`,
        "margin-top": `-${$headerHeight}px`,
    });
}

portfolio.whatTime = () => {
    const currentHr = new Date().getHours();
    const $time = $("h2.time");
    if (currentHr >= 23 || currentHr < 3) {
        $time.text("Good Evening, Night Owl!");
    } else if (currentHr >= 3 && currentHr < 6) {
        $time.text("Good Morning, Early Riser!");
    } else if (currentHr >= 6 && currentHr < 12) {
        $time.text("Good Morning!");
    } else if (currentHr >= 12 && currentHr < 17) {
        $time.text("Good Afternoon!");
    } else if (currentHr >= 17 && currentHr < 23) {
        $time.text("Good Evening!");
        }
}

portfolio.init = () => {
    portfolio.setJumpAnchorPosition();
    portfolio.whatTime();
    portfolio.devStackHover();
}

$(() => {
    portfolio.init();
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