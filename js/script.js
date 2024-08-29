document.getElementById("navbar-mobile").addEventListener("click", () => {
  if (window.innerWidth < 990)
    document.getElementById("navbar-toggler").click();
});
document.getElementById("navbar-toggler").addEventListener("click", () => {
  $('i[name="appsicon"]').removeClass("Visually-hidden");
});

$(".menu, .menu1").on("click", function () {
  $("object").attr("data", "/images/event1.pdf");
});

$(".responsive").slick({
  dots: true,
  infinite: true,
  slidesToShow: 3,
  slidesToScroll: 1,
  dots: true,
  variableWidth: false,
  autoplay: true,
  autoplaySpeed: 1000,
  responsive: [
    {
      breakpoint: 1200,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
        infinite: true,
        dots: true,
      },
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
      },
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
      },
    },
    // You can unslick at a given breakpoint now by adding:
    // settings: "unslick"
    // instead of a settings object
  ],
});

var btn = $("#button");
$(window).scroll(function () {
  if ($(window).scrollTop() > 300) {
    btn.addClass("show");
  } else {
    btn.removeClass("show");
  }
});

window.onscroll = function () {
  myFunction();
};

var navlist = document.getElementById("navbar-toggler");
var sticky = navlist.offsetTop;

/* Function to stick the nav bar */
function myFunction() {
  if (window.pageYOffset >= sticky) {
    navlist.classList.add("sticky");
  } else {
    navlist.classList.remove("sticky");
  }
}

btn.on("click", function (e) {
  e.preventDefault();
  $("html, body").animate({ scrollTop: 0 }, "300");
});
