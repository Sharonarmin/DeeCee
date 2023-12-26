// main hero carousel
$(document).ready(function () {
    $('.main-carousel').owlCarousel({
        loop: true,
        margin: 10,
        autoHeight: true,
        nav: false,
        dots: true,
        responsiveClass: true,
        responsive: {
            0: {
                items: 1
            },
            600: {
                items: 1
            },
            1000: {
                items: 1
            }
        }
    })
});


// testimonial  carousel
$(document).ready(function () {
    $('.testimonial-slider').owlCarousel({
        loop: true,
        margin: 20,
        center: true,
        autoHeight: true,
        nav: true,
        dots: true,
        navText: ["<i class='fa-solid fa-chevron-left'></i>", "<i class='fa-solid fa-chevron-right'></i>"],
        responsiveClass: true,
        responsive: {
            0: {
                items: 1
            },
            600: {
                items: 2
            },
            1000: {
                items: 3
            }
        }
    })
});

// courses  carousel
$(document).ready(function () {
    $('.course-slider').owlCarousel({
        loop: true,
        margin: 20,
        autoHeight: true,
        nav: true,
        dots: false,
        navText: ["<i class='fa-solid fa-chevron-left'></i>", "<i class='fa-solid fa-chevron-right'></i>"],
        responsiveClass: true,
        responsive: {
            0: {
                items: 1
            },
            600: {
                items: 2
            },
            1000: {
                items: 4
            }
        }
    })
});


// hamburger menu

function openNav() {
    document.getElementById("mySidebar").style.width = "250px";
    document.getElementById("main").style.marginLeft = "250px";
}

function closeNav() {
    document.getElementById("mySidebar").style.width = "0";
    document.getElementById("main").style.marginLeft = "0";
}


// counter

$('.counter-num').countUp(
    {
    delay: 5,
    time: 1500
    }
);


// aos
AOS.init();