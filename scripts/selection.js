$(window).ready(()=>{
    console.log('Hello');
    $('#construction').click(()=>{
        $("#selection2").addClass('H_theme_line_black');
        $("#selection1").removeClass('H_theme_line_black');
        $("#selection3").removeClass('H_theme_line_black');
    });
    $("#flight").click(()=>{
        console.log('1 Clicked');
        $("#selection1").addClass('H_theme_line_black');
        $("#selection2").removeClass('H_theme_line_black');
        $("#selection3").removeClass('H_theme_line_black');
    });
    $('#analytic').click(()=>{
        console.log('3 clicked');
        $("#selection3").addClass('H_theme_line_black');
        $("#selection1").removeClass('H_theme_line_black');
        $("#selection2").removeClass('H_theme_line_black');
    });








   /*
    if($('#construction').click()){
        console.log('2 clicked');
        $("#selection2").addClass('H_theme_line_black');
        $("#selection1").removeClass('H_theme_line_black');
        $("#selection3").removeClass('H_theme_line_black');
    }
    else if($("#flight").click(function(){console.log("mc");})){
        console.log('1 Clicked');
        $("#selection1").addClass('H_theme_line_black');
        $("#selection2").removeClass('H_theme_line_black');
        $("#selection3").removeClass('H_t   heme_line_black');
    }
    else if($("#analytic").onactive){
        console.log('3 clicked');
        $("#selection3").addClass('H_theme_line_black');
        $("#selection1").removeClass('H_theme_line_black');
        $("#selection2").removeClass('H_theme_line_black');
    }
    else
        console.log('Default');
        $("#selection2").addClass('H_theme_line_black');
        */
});

