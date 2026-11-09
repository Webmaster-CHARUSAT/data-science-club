// Wait for jQuery to be available before using $ 
(function waitForjQuery() {
  if (typeof window.jQuery === 'undefined') {
    setTimeout(waitForjQuery, 50);
    return;
  }
  initScripts();
})();

function initScripts() {
  // Mobile navbar collapse on link click
  document.getElementById("navbar-mobile").addEventListener("click", function () {
    if (window.innerWidth < 990)
      document.getElementById("navbar-toggler").click();
  });

  document.getElementById("navbar-toggler").addEventListener("click", function () {
    jQuery('i[name="appsicon"]').removeClass("Visually-hidden");
  });

  // Slick carousel – only init if .responsive elements exist
  if (jQuery(".responsive").length) {
    jQuery(".responsive").slick({
      dots: true,
      infinite: true,
      slidesToShow: 3,
      slidesToScroll: 1,
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
      ],
    });
  }

  // Back-to-top button
  var btn = jQuery("#button");

  jQuery(window).scroll(function () {
    if (jQuery(window).scrollTop() > 300) {
      btn.addClass("show");
    } else {
      btn.removeClass("show");
    }
  });

  btn.on("click", function (e) {
    e.preventDefault();
    jQuery("html, body").animate({ scrollTop: 0 }, "300");
  });

  // Sticky navbar
  var navlist = document.getElementById("navbar-toggler");
  var sticky = navlist.offsetTop;

  window.onscroll = function () {
    if (window.pageYOffset >= sticky) {
      navlist.classList.add("sticky");
    } else {
      navlist.classList.remove("sticky");
    }
  };
}
