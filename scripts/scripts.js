$(function(){
    // 스크롤 시 header fade-in
    $(document).on('scroll', function(){
        if($(window).scrollTop() > 100){
            $("#menuid").removeClass("menu");
            $("#menuid").addClass("menuActive");
        }else{
            $("#menuid").removeClass("menuActive");
            $("#menuid").addClass("menu");
        }
    })

});


// $(function(){
//     $(document).on('scroll', function(){
//         if($(window).scrollTop() > 20000){
//             $("#pagecolor").removeClass("largeTitle-content ");
//             $("#pagecolor").addClass("largeTitle-contentActive");
//         }else{
//             $("#pagecolor").removeClass("largeTitle-content");
//             $("#pagecolor").addClass("largeTitle-contentActive ");
//         }
//     })

// });
