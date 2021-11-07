// cashing
const panel = $("#pic ul");
const prev = $(".btnPrev");
const next = $(".btnNext");

const txt = $("#txt ul");
const txt_li = txt.children("li");
const sub_txt = $("#subTxt ul");
const bg = $(".bg ul");

const img = $("#pic ul");
const num = $("#num ul");
const speed = 1000;


// slide motion

txt.find("li").eq(1).addClass("on");
sub_txt.find("li").eq(1).addClass("on");
img.find("li").eq(1).addClass("on");

// next
next.on("click",function(e){
    e.preventDefault();

    panel.find("li").removeClass("on");

    panel.stop().animate({marginLeft: "-200%"},speed, ()=>{
        panel.find("li").first().appendTo(panel);
        panel.css({marginLeft: "-100%"});
        panel.find("li").eq(1).addClass("on");
    }); 

    txt.find("li").removeClass("on");
    
    txt.stop().animate({top: "-200%"}, 400, ()=>{
        txt.find("li").first().appendTo(txt);
        txt.css({top: "-100%"});
        txt.find("li").eq(1).addClass("on");
    });

    sub_txt.find("li").removeClass("on");
    
    sub_txt.stop().animate({left: "-100%"}, 700, ()=>{
        sub_txt.find("li").first().appendTo(sub_txt);
        sub_txt.css({left: "0%"});
        sub_txt.find("li").eq(1).addClass("on");
    });

    bg.find("li").removeClass("on");

    bg.stop().animate({left:"-100%"}, 400, ()=>{
        bg.find("li").first().appendTo(bg);
        bg.css({left: "0%"});
        bg.find("li").eq(1).addClass("on");
    })

    img.find("li").removeClass("on");

    img.stop().animate({left: "-100%"}, speed, ()=>{
        img.find("li").first().appendTo(img);
        img.css({left: "0%"});
        img.find("li").eq(1).addClass("on");
    });

    num.stop().animate({right: "-100%"}, speed, ()=>{
        num.find("li").first().appendTo(num);
        num.css({right: "-0%"});
        num.find("li").eq(1).addClass("on");
    });

});

// prev
prev.on("click",function(e){
    e.preventDefault();

    panel.find("li").removeClass("on");

    panel.stop().animate({marginLeft: "0%"},speed, ()=>{
        panel.find("li").last().prependTo(panel);
        panel.css({marginLeft: "-100%"});
        panel.find("li").eq(1).addClass("on");
    });

    txt.find("li").removeClass("on");

    txt.stop().animate({top: "0%"}, 400, ()=>{
        txt.find("li").last().prependTo(txt);
        txt.css({top: "-100%"});
        txt.find("li").eq(1).addClass("on");
    });

    sub_txt.find("li").removeClass("on");

    sub_txt.stop().animate({left: "-200%"}, 700, ()=>{
        sub_txt.find("li").last().prependTo(sub_txt);
        sub_txt.css({left: "0%"});
        sub_txt.find("li").eq(1).addClass("on");
    });

    bg.find("li").removeClass("on");

    bg.stop().animate({left:"100%"}, 400, ()=>{
        bg.find("li").first().appendTo(bg);
        bg.css({left: "0%"});
        bg.find("li").eq(1).addClass("on");
    })

    img.find("li").removeClass("on");

    img.stop().animate({left: "100%"}, speed, ()=>{
        img.find("li").last().prependTo(img);
        img.css({left: "0%"});
        img.find("li").eq(1).addClass("on");
    });


    num.stop().animate({marginRight: "100%"}, speed, ()=>{
        num.find("li").last().prependTo(num);
        num.css({marginRight: "0%"});
        num.find("li").eq(1).addClass("on");
    });
});


// $("body").on("click", ".btnview", function(e){
//     e.preventDefault();

//     let imgSrc = $(this).children("video");
//     // var video = $('<video />', {
//     //     id: 'video',
//     //     src: './img/interior.mp4',
//     //     type: 'video/mp4',
//     //     controls: true
//     // });
//     video.appendTo($('#video'));
//     var video = $('<video width="640" height="264" autoplay></video>')
//             .append('<source src="./img/interior.mp4" type="video/mp4" />')
//             .appendTo($("#video"));

//     $("body").append(
//         $("<div class = 'pop'>")
//             .append(
//                 $("<video>"),
//                 $("<span>").text("close")
//             )
//     )
// });

// $("body").on("click", ".pop span", function(){
//     $(".pop").fadeOut(500,function(){
//         $(this).remove();
//     })
// });


$("body").on("click", ".btnview", function(e){
    e.preventDefault();

    let imgSrc = $(this).children("a").attr("href");
    var video = $('<video width="640" height="264" autoplay></video>')
            .append('<source src="./img/interior.mp4" type="video/mp4" />')
            .appendTo($("#video"));

    $("body").append(
        $("<div class = 'pop'>")
            .append(
                $("<video>").attr({src: imgSrc}),
                $("<span>").text("close")
            )
    )
});

$("body").on("click", ".pop span", function(){
    $(".pop").fadeOut(500,function(){
        $(this).remove();
    })
});