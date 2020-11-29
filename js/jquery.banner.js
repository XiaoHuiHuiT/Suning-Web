$.fn.banner = function(option){

    var index = 0;
    var timerID = null;
    var bannerNode = $(option.bannerNode),
        style = option.style,
        btnList = $(option.btnList),
        className = option.className;
    var selStyle = Object.keys(style)[0];
    var changeStyle = Object.create(Object);
    let currentIndex = 0;

    btnList.bind("mouseenter",function (){
        currentIndex = index;
        index = $(this).index();
        $(this).addClass(className).siblings().removeClass(className);

        changeStyle[selStyle] = index*style[selStyle] + "%";

        bannerNode.animate(changeStyle);
    });

    $(".focusNextArr").click(function () {
        currentIndex++;
        currentIndex = currentIndex % 5;
        $(btnList).eq(currentIndex).addClass(className).siblings().removeClass(className);
        changeStyle[selStyle] = -currentIndex * -style[selStyle] + "%";
        bannerNode.animate(changeStyle);
    });

    $(".focusPreArr").click(function () {
        currentIndex--;
        currentIndex = currentIndex % 5;
        if(currentIndex < 0){
            currentIndex = 4;
        }
        $(btnList).eq(currentIndex).addClass(className).siblings().removeClass(className);
        changeStyle[selStyle] = -currentIndex * -style[selStyle] + "%";
        bannerNode.animate(changeStyle);
    });

    timerID = setInterval(function () {
        $(".focusNextArr").click();
    },5000);

    $(".banner-in").hover(function () {
        clearInterval(timerID);
        $(".focusPreArr").css("opacity","1");
        $(".focusNextArr").css("opacity","1");
    },function () {
        $(".focusPreArr").css("opacity","0");
        $(".focusNextArr").css("opacity","0");
        timerID = setInterval(function () {
            $(".focusNextArr").click();
        },5000);
    });

}