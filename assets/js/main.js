$(document).ready(function(){

    // STICKY MENU

    $(".js--services-section").waypoint(function(direction){
        if(direction == "down"){
            $("nav").addClass("sticky");
        } else{
            $("nav").removeClass("sticky")
        }
    });


    // MIXITUP
    var mixer= mixitup('.container');
});

    // SMOOTH SCROLL I / EDGE / SAFARI
    
    $("a").on('click',function(event){

        if(this.hash !== ""){
            event.prevenDefault();

            var has = this.hash;

            $('html,body').animate({
                scrolltop: $(hash).offset().top
            }, 800, function(){
                window.location.hash = hash;

            });

        }

    });


function openNav(){
    document.getElementById("myNav").style.width = "100%";
}
function closeNav(){
    document.getElementById("myNav").style.width = "0%";
}

