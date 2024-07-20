window.addEventListener("load", enableMobileMenu);
   window.addEventListener("resize", enableMobileMenu);

function enableMobileMenu() {
  let menu = document.querySelector(".menu"),
    links = document.querySelector(".links");
  if (window.innerWidth <= 1024) {
    menu.addEventListener("click", () => {
      menu.classList.toggle("opened");
      links.classList.toggle("show");
    });
  } else {
    if (menu.classList.contains("opened")) menu.classList.remove("opened");
    if (links.classList.contains("show")) links.classList.remove("show");
  }
}


(function () {
    "use strict";

    var carousels = function () {
      $(".owl-carousel1").owlCarousel({
        loop: true,
        center: true,
        margin: 0,
        responsiveClass: true,
        nav: false,
        responsive: {
          0: {
            items: 1,
            nav: false
          },
          680: {
            items: 2,
            nav: false,
            loop: false
          },
          1000: {
            items: 3,
            nav: true
          }
        }
      });
    };

    $(document).ready(function () {
      carousels();
    });
})();


$(function () {

    var activeIndex = $('.active-tab').index(),
        $contentlis = $('.tabs-content li'),
        $tabslis = $('.tabs li');
    
    // Show content of active tab on loads
    $contentlis.eq(activeIndex).show();
  
    $('.tabs').on('click', 'li', function (e) {
      var $current = $(e.currentTarget),
          index = $current.index();
      
      $tabslis.removeClass('active-tab');
      $current.addClass('active-tab');
      $contentlis.hide().eq(index).show();
       });
  });

  const tabs = document.querySelectorAll(".tab-container button");
const panels = document.getElementsByClassName("panel");
tabs.forEach((tab) => tab.addEventListener("click", handleTabClick));

function handleTabClick(e) {
  const targetKey = e.target.getAttribute("key");

  // Remove the orange border from each tab. Since the number of tabs is usually very low,
  // it's fine to iterate through the entire list for this operation.
  tabs.forEach((tab) =>
    tab.classList.remove("border-b-2", "border-orange-600")
  );

  // Add the orange border to the tab that you clicked on.
  e.target.classList.add("border-b-2", "border-orange-600");

  // Make the panel corresponding to the selected tab visible. Since the number of tabs is usually very low,
  // it's fine to iterate through the entire list for this operation.
  for (const panel of panels) {
    const key = panel.getAttribute("key");
    if (key === targetKey) {
      panel.classList.remove("hidden");
    } else {
      panel.classList.add("hidden");
    }
  }
}



document.addEventListener('DOMContentLoaded', function() {
    const tabs = document.querySelectorAll('.tabs a.tab');
    const contents = document.querySelectorAll('.tab-content');

    tabs.forEach(tab => {
        tab.addEventListener('click', function(event) {
            event.preventDefault();
            const target = this.getAttribute('href').substring(1);

            tabs.forEach(t => t.classList.remove('active'));
            contents.forEach(c => c.classList.remove('active'));

            this.classList.add('active');
            document.getElementById(target).classList.add('active');
        });
    });
});


(function(b) {
  b.fn.bcSwipe = function(c) {
    var f = { threshold: 50 };
    c && b.extend(f, c);
    this.each(function() {
      function c(a) {
        1 == a.touches.length &&
          ((d = a.touches[0].pageX),
          (e = !0),
          this.addEventListener("touchmove", g, !1));
      }
      function g(a) {
        e &&
          ((a = d - a.touches[0].pageX),
          Math.abs(a) >= f.threshold &&
            (h(), 0 < a ? b(this).carousel("next") : b(this).carousel("prev")));
      }
      function h() {
        this.removeEventListener("touchmove", g);
        d = null;
        e = !1;
      }
      var e = !1,
        d;
      "ontouchstart" in document.documentElement &&
        this.addEventListener("touchstart", c, !1);
    });
    return this;
  };
})(jQuery);

$(document).ready(function() {
  $(".carousel").bcSwipe({ threshold: 50 });
});


// NAVBAR SECTION
