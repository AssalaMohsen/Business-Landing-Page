function increment(elem, finalVal, inc,delay) {
  var currVal = parseInt(document.getElementById(elem).innerHTML, 10);
  if (currVal+inc <= finalVal) {
    currVal+=inc;
    document.getElementById(elem).textContent = currVal;

    setTimeout(function () {
      increment(elem, finalVal,inc,delay);
    }, delay);
  }
}

function check_visibility() {
  if ($("#header").visible(true)) {
    $("nav").css("background-color", "rgba(16, 22, 54, 0.2)");
  }
  if ($("#features").visible(true)||$("#works").visible(true)
  ||$("#team").visible(true)||$("#facts").visible(true) 
||$("#discution").visible(true)) {
    $("nav").css("background-color", "rgb(14, 180, 147)");
  }
  if ($(".h-bd").visible()) {
    $(".h-bd").addClass("animate__animated animate__bounceInDown visible");
  }
  if ($(".h-bl").visible()) {
    $(".h-bl").addClass("animate__animated animate__bounceInLeft visible");
  }
  if ($(".h-br").visible()) {
    $(".h-br").addClass("animate__animated animate__bounceInRight visible");
  }
  if ($(".f-bd").visible()) {
    $(".f-bd").addClass("animate__animated animate__bounceInDown visible");
  }
  if ($(".f-fl").visible()) {
    $(".f-fl").addClass("animate__animated animate__fadeInLeft visible");
  }
  if ($(".f-fu").visible()) {
    $(".f-fu").addClass("animate__animated animate__fadeInUp visible");
  }
  if ($(".f-fr").visible()) {
    $(".f-fr").addClass("animate__animated animate__fadeInRight visible");
  }
  if ($(".w-bd").visible(true)) {
    $(".w-bd").addClass("animate__animated animate__bounceInDown visible");
  }
  if ($("#works").visible()) {
    $(".w-fr").addClass("animate__animated animate__fadeInRight visible");
    $("#works figure").addClass("animate__animated animate__zoomIn visible");
  }
  if ($(".t-bd").visible(true)) {
    $(".t-bd").addClass("animate__animated animate__bounceInDown visible");
  }
  if ($("#team").visible(true)) {
    $(".team-member-card:nth-child(1)").addClass(
      "animate__animated animate__fadeIn animate__delay-1s visible"
    );
    $(".team-member-card:nth-child(1) figure").addClass(
      "animate__animated animate__fadeIn animate__delay-1s visible"
    );
    $(".team-member-card:nth-child(2)").addClass(
      "animate__animated animate__fadeIn animate__delay-2s visible"
    );
    $(".team-member-card:nth-child(2) figure").addClass(
      "animate__animated animate__fadeIn animate__delay-2s visible"
    );
    $(".team-member-card:nth-child(3)").addClass(
      "animate__animated animate__fadeIn animate__delay-3s visible"
    );
    $(".team-member-card:nth-child(3) figure").addClass(
      "animate__animated animate__fadeIn animate__delay-3s visible"
    );
    $(".team-member-card:nth-child(4)").addClass(
      "animate__animated animate__fadeIn animate__delay-4s visible"
    );
    $(".team-member-card:nth-child(4) figure").addClass(
      "animate__animated animate__fadeIn animate__delay-4s visible"
    );
  }
  if ($(".c-bd").visible()) {
    $(".c-bd").addClass("animate__animated animate__bounceInDown visible");
  }
  if ($("#facts").visible()) {
      $(".c-fI1").addClass("animate__animated animate__fadeIn visible");
      increment('counter1', 3200,10, 5);
      $(".c-fI2").addClass("animate__animated animate__fadeIn animate__delay-1s visible");
      increment('counter2', 120,1,10);
      $(".c-fI3").addClass("animate__animated animate__fadeIn animate__delay-2s visible");
      increment('counter3', 360 ,1,5);
      $(".c-fI4").addClass("animate__animated animate__fadeIn animate__delay-3s visible");
      increment('counter4', 6454,14,2);
  }

  if ($(".d-bd").visible(true)) {
    $(".d-bd").addClass("animate__animated animate__bounceInDown visible");
  }

  if ($(".d-fl").visible()) {
    $(".d-fl").addClass("animate__animated animate__fadeInLeft visible");
  }

  if ($(".d-fu").visible()) {
    $(".d-fu").addClass("animate__animated animate__fadeInUp visible");
  }

  if ($(".d-fr").visible()) {
    $(".d-fr").addClass("animate__animated animate__fadeInRight visible");
  }

  if ($("#footer").visible(true)) {
    $(".footer-fu1").addClass("animate__animated animate__fadeInUp animate__delay-1s visible");
    $(".footer-fu2").addClass("animate__animated animate__fadeInUp animate__delay-2s visible");
    $(".footer-fu3").addClass("animate__animated animate__fadeInUp animate__delay-3s visible");
    $(".footer-fu4").addClass("animate__animated animate__fadeInUp animate__delay-4s visible");
  }

  if ($(".d-rb").visible()) {
    $(".d-rb").addClass("animate__animated animate__rubberBand visible");
  }
}

$(document).ready(function () {
  jQuery('#preloader').fadeOut('slow');
  /*animate carousel-caption elements */
  check_visibility();
  /* animate features section elements */
  $(window).scroll(function () {
    check_visibility();
  });
});

