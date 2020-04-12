$(document).ready(function(){

    $("#paragraph1").hide();

    $("#paragraph2").hide();

    $("#paragraph3").hide();

    $("#design").on("click",function(){
        $("#paragraph1").toggle();
    });

    $("#dev").on("click",function(){
        $("#paragraph2").toggle();
    });

    $("#prod").on("click",function(){
        $("#paragraph3").toggle();
    });
    

        

    

});