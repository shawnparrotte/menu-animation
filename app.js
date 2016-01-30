$("#click-me").mouseenter(function(){

  $("#slide-left").css({
    "transition": "transform .5s",
    "transform": "translateX(-202px)"
  });
  $("#home").css({
    "transform": "translateY(59px)",
    "transition-delay": ".3s"
  });
  $("#about").css({
    "transform": "translateY(118px)",
    "transition-delay": ".35s"
  });
  $("#portfolio").css({
    "transform": "translateY(177px)",
    "transition-delay": ".4s"
  });
  $("#blog").css({
    "transform": "translateY(236px)",
    "transition-delay": ".45s"
  });
  $("#contact").css({
    "transform": "translateY(295px)",
    "transition-delay": ".5s"
  });
});

$("#slide-left").mouseleave(function(){
  $("#home").css({
    "transform": "translateY(0)",
    "transition-delay": "0s"
  });
  $("#about").css({
    "transform": "translateY(0)",
    "transition-delay": ".05s"
  });
  $("#portfolio").css({
    "transform": "translateY(0)",
    "transition-delay": ".1s"
  });
  $("#blog").css({
    "transform": "translateY(0)",
    "transition-delay": ".15s"
  });
  $("#contact").css({
    "transform": "translateY(0)",
    "transition-delay": ".2s"
  });
  $("#slide-left").css({
    "transform": "translateX(0)",
    "transition-delay": ".4s"
  });
});

$(".panel").mouseenter(function(){
  var panel = $(this).children();
  $(panel[0]).css({
    "transition": "transform .5s",
    "transform": "translateX(-50px) skewX(-45deg)"
  });
}).mouseleave(function(){
  var panel = $(this).children();
  $(panel[0]).css("transform", "translateX(400px) skewX(-45deg)");
  setTimeout(function(){
    $(panel[0]).css({
      "transition": "transform 0s",
      "transform": "translateX(-400px) skewX(-45deg)"
    });
  },300)
})
