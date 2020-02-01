$(".dont").click(function(e) {
  e.preventDefault();

  $(".not").removeClass("none");
  setTimeout(function() {
    $(".not").addClass("none");
  }, 2000);
});

const controller = new ScrollMagic.Controller();

var scene = new ScrollMagic.Scene({
  triggerElement: "#trigger1",
  duration: 10000,
  tweenChanges: true
})
  .setTween("#animate-zoom", { scale: 200, translateX: "-100rem" })
  .setPin("#animate-zoom")
  .addTo(controller);
