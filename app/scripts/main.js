$(".dont").click(function(e){
    e.preventDefault();
    
    $(".not").removeClass("none");
    setTimeout(function(){
        $(".not").addClass("none");
    }, 2000);
});


