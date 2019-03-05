 $("#treasurechest").dblclick(function() {
    $("img").hide();
    $("#start").css("display", "block");
});  
 $("#start").click(function() {
    $("img").show();
});
  $("body").css("background-color","black");
  $("body").css("color","white");

$("#map").hover(function() {
    $("img").hide();
    $("#here").css("display", "block");
});

$("#now").dblclick(function() {
    $("body").css("background-color","#00ff00");
});

$("#hellouu").dblclick(function() {
    $("body").css("background-color","#cc0000");
    $("#barco").show();
});


