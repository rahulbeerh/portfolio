$(".nav-btn").on("click", function () {
  $(".mobile-navbar-nav").addClass("show-mobile-nav");
  $(".btn-container").css("display", "none");
  $(".image_content_container").css("display", "none");
});

$(".remove-btn").on("click", function () {
  $(".mobile-navbar-nav").removeClass("show-mobile-nav");
  $(".btn-container").css("display", "block");
  $(".image_content_container").css("display", "block");
});

$(".mobile-nav-icon").on("click",function(){
    $(".mobile-navbar-nav").removeClass("show-mobile-nav");
    $(".btn-container").css("display", "block");
    $(".image_content_container").css("display", "block");
})
