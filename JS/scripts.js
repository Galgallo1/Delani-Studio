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
    
    $("#button").on("click",function(){
        if($("#name").value == "" || $("#mail").value == "") {
            alert("PLease fill out all the fields");
            return false;
        }else{
            alert("We have received your message and we'll respond to it appropriately. Thank you!");
            return true;
        }
    });

    $("#image").mouseover(function(){
        $(".text").show();

        $(this).mouseout(function(){
            $(".text").hide();
        })
    })

    $("#form").on("submit",function(){
        if($("#name").value == "" || $("#mail".value) == "") {
            alert("PLease fill out all the fields");
            return false;
        }else{
            return true;
        }
    });


    });