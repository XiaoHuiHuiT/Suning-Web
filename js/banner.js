$(function () {

    // 2.定义一些需要控制的变量
    let index = 0;
    let $timerId = null;

    let oColors = [
        "rgb(255, 119, 35)",
        "rgb(227, 13, 15)",
        "rgb(71, 127, 246)",
        "rgb(96, 52, 141)",
        "rgb(255, 232, 214)",
        "rgb(49, 8, 16)",
        "rgb(137, 93, 248)",
        "rgb(80, 182, 230)"
    ];

    // 初始化颜色
    function InitializeColor() {
        for (let i = 0; i < $(".banner>ul>li").length; i++) {
            let $item = $(".banner>ul>li").eq(i);
            $($item).css("background", oColors[i]);
        }
        $(".banner>ul>li").eq(0).show().siblings().hide();
    }

    InitializeColor();

    // 右边
    $(".banner-background>p>span").eq(1).click(rightBtn);

    // 左边
    $(".banner-background>p>span").eq(0).click(function(){
        index--;
        index = index % 8;
        $(".banner-background>img").eq(index).stop().fadeIn(1000).siblings("img").stop().fadeOut(1000);
        $(".banner>ul>li").eq(index).stop().fadeIn(1000).siblings().stop().fadeOut(1000);
        // 排它
        $(".banner-background>ol>li").eq(index).addClass("selectedDot").siblings().removeClass("selectedDot");
    });

    // 定义一个定时器一直往右的展示广告
    $timerId = setInterval(function () {
        $(".banner-background>p>span").eq(1).click(rightBtn());
    }, 5000);

    // 右边
    function rightBtn() {
        index++;
        index = index % 8;
        $(".banner-background>img").eq(index).stop().fadeIn(1000).siblings("img").stop().fadeOut(1000);
        $(".banner>ul>li").eq(index).stop().fadeIn(1000).siblings().stop().fadeOut(1000);
        // 排它
        $(".banner-background>ol>li").eq(index).addClass("selectedDot").siblings().removeClass("selectedDot");
    }

    // 鼠标移入效果
    $(".banner-background>ol>li").mouseenter(function(){
        index = $(this).index() % 8;
        $(".banner-background>img").eq(index).stop().fadeIn(1000).siblings("img").stop().fadeOut(1000);
        $(".banner>ul>li").eq(index).stop().fadeIn(1000).siblings().stop().fadeOut(1000);
        // 排它
        $(".banner-background>ol>li").eq(index).addClass("selectedDot").siblings().removeClass("selectedDot");
    });

    // 鼠标移入左右箭头显示
    $(".banner").hover(function(){
        $(".banner-background").children("p").show();
        // 移入清除定时器
        clearInterval($timerId);
    },function(){
        $(".banner-background").children("p").hide();
        // 移出开启定时器
        $timerId = setInterval(function () {
            $(".banner-background>p>span").eq(1).click(rightBtn());
        },5000);
    });

    // 鼠标移开左右箭头隐藏

});