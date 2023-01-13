const portfolio = {};

portfolio.navFadeIn = () => {
    const $nav =  $("header");
    $nav.fadeIn(2000);
}

portfolio.openerTextFadeOut = () => {
    const $openingText =  $(".opening-text");
    $openingText.fadeOut(1200);
}

// portfolio.headerBackgroundScroll = () => {
//     const $headerHeight =  $("header").height();
//     const $headerBackground = $(".header-background");
//     $headerBackground.animate({height:($headerHeight + 20)}, 1700)

//     const $aboutSection = $("#about");
//     $aboutSection.animate({"margin-top": 0}, 2500)
// }


window.onscroll = function() {scrollFunction()};

function scrollFunction() {
    const oldHeaderHeight = window.innerHeight;
    const $newHeaderHeight =  $("header").height() + 20;
    const $headerBackground = $(".header-background");

  if (document.body.scrollTop > 80 || document.documentElement.scrollTop > 80) {
    $headerBackground.animate({height:$newHeaderHeight}, 1500)
        const $aboutSection = $("#about");
        $aboutSection.animate({"margin-top": 0}, 3500)
  } else {
    $headerBackground.height(oldHeaderHeight);
    // console.log(oldHeaderHeight);
  }
}

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

portfolio.listeners = () => {
    window.addEventListener("scroll", () => {
        portfolio.navFadeIn();
        // portfolio.headerBackgroundScroll();
        portfolio.openerTextFadeOut();
    })
}

portfolio.init = () => {
    portfolio.listeners();
    portfolio.whatTime();
}

$(() => {
    portfolio.init();
})

$('.tech-stack > li').hover(function () {
    $(this).children("i").toggleClass('colored').siblings().removeClass('colored');
    });

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