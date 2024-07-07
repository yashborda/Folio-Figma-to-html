window.addEventListener('scroll', Scrollfn)

function Scrollfn() {
  // console.log(window.scrollY);
  if (window.scrollY > 25) {
    $("nav").addClass('active_nav');
  } else {
    $("nav").removeClass('active_nav');
  }
}

let section_2_index = 2;
let section_4_index = 1;
$(document).ready(function () {
  $("#prev").click(function () {
    $("#prev").attr("src", "assets/img/left-hover.png");
    $("#next").attr("src", "assets/img/right-hover.png");
    $('.slider-for').slick('slickPrev');
    if (section_4_index > 1) {
      $(".img_and_line-" + section_4_index).children("div").css("display", "none");
      $(".img_and_line-" + section_4_index).children("img").css("display", "none");
      section_4_index--;
      $(".img_and_line-" + section_4_index).children("div").css("display", "block");
      $(".img_and_line-" + section_4_index).children("img").css("display", "block");
    }
  });

  $("#next").click(function () {
    $("#next").attr("src", "assets/img/right.png");
    $("#prev").attr("src", "assets/img/left.png");
    $('.slider-for').slick('slickNext');
    if (section_4_index < 5) {
      $(".img_and_line-" + section_4_index).children("div").css("display", "none");
      $(".img_and_line-" + section_4_index).children("img").css("display", "none");
      section_4_index++;
      $(".img_and_line-" + section_4_index).children("div").css("display", "block");
      $(".img_and_line-" + section_4_index).children("img").css("display", "block");
    }
  });

  $("#prev1").click(function () {
    $("#prev1").attr("src", "assets/img/left-hover.png");
    $("#next1").attr("src", "assets/img/right-hover-black.png");
    if (section_2_index > 1) {
      $("#card-" + section_2_index).removeClass("card-current");
      section_2_index--;
      $("#card-" + section_2_index).addClass("card-current");
    }
  });

  $("#next1").click(function () {
    $("#next1").attr("src", "assets/img/right.png");
    $("#prev1").attr("src", "assets/img/left-black.png");
    if (section_2_index < 4) {
      $("#card-" + section_2_index).removeClass("card-current");
      section_2_index++;
      $("#card-" + section_2_index).addClass("card-current");
    }
  });

  $('.slider-for').slick({
    infinite: false,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    fade: true,
    asNavFor: '.slider-nav'
  });
  $('.slider-nav').slick({
    vertical: true,
    verticalSwiping: false,
    adaptiveHeight: false,
    infinite: false,
    slidesToShow: 1,
    slidesToScroll: 1,
    asNavFor: '.slider-for',
    arrows: false,
  });

  $('.autoplay-mob').slick({
    dots: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
  });

  // $('.card-hover').hover(function () {
  //   $(this).css({"background-color":"#232340", "color":"#fff"});
  //   $(".card-link").attr("src", "assets/img/right-hover.png");
  //   $(".card-tablet").css("display","block");
  // }, function () {
  //   $(this).css({"background-color":"#fff", "color":"#232340"});
  //   $(".card-link").attr("src", "assets/img/right-hover-black.png");
  // });
});