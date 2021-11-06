// cashing
const panel = $("#pic ul");
const prev = $(".btnPrev");
const next = $(".btnNext");

const txt = $("#txt ul");
const txt_li = txt.children("li");
const sub_txt = $("#subTxt ul");

const img = $("#pic ul");
const num = $("#num ul");
const speed = 1000;


// slide motion

txt.find("li").eq(1).addClass("on");
sub_txt.find("li").eq(1).addClass("on");
img.find("li").eq(1).addClass("on");

// next
next.on("click",e=>{
    e.preventDefault();

    panel.find("li").removeClass("on");

    panel.stop().animate({marginLeft: "-200%"},speed, ()=>{
        panel.find("li").first().appendTo(panel);
        panel.css({marginLeft: "-100%"});
        panel.find("li").eq(1).addClass("on");
    }); 

    txt.find("li").removeClass("on");
    
    txt.stop().animate({top: "-200%"}, speed, ()=>{
        txt.find("li").first().appendTo(txt);
        txt.css({top: "-100%"});
        txt.find("li").eq(1).addClass("on");
    });

    sub_txt.find("li").removeClass("on");
    
    sub_txt.stop().animate({top: "-200%"}, speed, ()=>{
        sub_txt.find("li").first().appendTo(sub_txt);
        sub_txt.css({top: "-100%"});
        sub_txt.find("li").eq(1).addClass("on");
    });

    img.find("li").removeClass("on");

    img.stop().animate({top: "-200%"}, speed, ()=>{
        img.find("li").first().appendTo(img);
        img.css({top: "-100%"});
        img.find("li").eq(1).addClass("on");
    });

    num.stop().animate({marginRight: "-200%"}, speed, ()=>{
        num.find("li").first().appendTo(num);
        num.css({marginRight: "-100%"});
        num.find("li").eq(1).addClass("on");
    });

});

// prev
prev.on("click",e=>{
    e.preventDefault();

    panel.find("li").removeClass("on");

    panel.stop().animate({marginLeft: "0%"},speed, ()=>{
        panel.find("li").last().prependTo(panel);
        panel.css({marginLeft: "-100%"});
        panel.find("li").eq(1).addClass("on");
    });

    txt.find("li").removeClass("on");

    txt.stop().animate({top: "0%"}, speed, ()=>{
        txt.find("li").last().prependTo(txt);
        txt.css({top: "-100%"});
        txt.find("li").eq(1).addClass("on");
    });

    sub_txt.find("li").removeClass("on");

    sub_txt.stop().animate({top: "0%"}, speed, ()=>{
        sub_txt.find("li").last().prependTo(sub_txt);
        sub_txt.css({top: "-100%"});
        sub_txt.find("li").eq(1).addClass("on");
    });

    img.find("li").removeClass("on");

    img.stop().animate({top: "0%"}, speed, ()=>{
        img.find("li").last().prependTo(img);
        img.css({top: "-100%"});
        img.find("li").eq(1).addClass("on");
    });

    num.stop().animate({marginRight: "0%"}, speed, ()=>{
        num.find("li").last().prependTo(num);
        num.css({marginRight: "-100%"});
        num.find("li").eq(1).addClass("on");
    });
});