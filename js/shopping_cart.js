$(function () {

    /* ---------------------------------   头部工具条 ---------------------------------*/
    $(".toolbars-content>.toolbar-right li").eq(5).unbind("mouseenter");

    $(".toolbars-content>.toolbar-right li").eq(7).mouseenter(function () {
        oLiMove(this);
        $(this).children(".toolbar-right-Mobile-phone-suning").stop().slideDown(200);
    }).mouseleave(function () {
        $(this).children(".toolbar-right-Mobile-phone-suning").stop().slideUp(200);
        oLiRemoved_From_The($(this));
    });

    function oLiMove(obj) {
        $(obj).css({
            "background": "#fff",
            "border-left": "1px solid #ddd",
            "border-right": "1px solid #ddd",
            "border-top": "1px solid #ddd",
            "border-bottom": "1px solid #fff"
        });
        $(obj).children("i").css("transform", "rotateZ(-180deg)");
    }

    function oLiRemoved_From_The(obj) {
        $(obj).css({
            "background": "#f5f5f5",
            "border-left": "1px solid #f5f5f5",
            "border-right": "1px solid #f5f5f5",
            "border-top": "1px solid #f5f5f5",
            "border-bottom": "0px solid #f5f5f5"
        });
        $(obj).children("i").css("transform", "rotateZ(0deg)");
    }

    /* ---------------------------------   头部工具条 ---------------------------------*/

    /* ---------------------------------   地区二级菜单 ---------------------------------*/
    $(".Secondary-menu").click(function (event) {
        event = event || window.event;
        event.stopPropagation();
        $(".ui-city-group").show();

        $(".ui-city").addClass(" active");
    });
    $(".ui-city-group-content .nav-tabs li").click(function () {
        $(this).addClass(" current").siblings().removeClass("current");
        $(".ui-city-group-content .tab-content .tab-panel").eq($(this).index()).addClass(" active").siblings().removeClass("active");
    });
    $(".ui-city-group .ui-city-close").click(function (event) {
        event = event || window.event;
        event.stopPropagation();
        $(".ui-city").removeClass("active");
        $(".ui-city-group").hide();
    });
    /* ---------------------------------   地区二级菜单 ---------------------------------*/

    /* ---------------------------------   documnet的点击 ---------------------------------*/
    $(document).click(function () {
        $(".ui-city").removeClass("active");
        $(".ui-city-group").hide();
    });
    /* ---------------------------------   documnet的点击 ---------------------------------*/
});