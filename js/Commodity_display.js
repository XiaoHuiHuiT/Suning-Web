$(function () {

    // ---------------------------------------------------------- 右侧工具条
    let $Top = $(".sidebar-bottom-icon-control101>a>.tab-tip");
    $(".sidebar-bottom-icon-control101>a").mouseenter(function () {
        $Top.stop();
        $(".sidebar-bottom-icon-control101>a>.tab-tip").css("background-color","#f90");
        $(".sidebar-bottom-icon-control101>a>.tab-tip").show();
        $(".sidebar-bottom-icon-control101>a>.tab-tip").animate({
            left: -94
        }, 400);
    }).mouseleave(function () {
        $Top.stop();
        $(".sidebar-bottom-icon-control101>a>.tab-tip").css("background-color","#383838");
        $(".sidebar-bottom-icon-control101>a>.tab-tip").animate({
            left: 40
        }, 400, function () {
            $(this).hide();
        });
    });
    let $TopTwo = $(".sidebar-bottom-icon-iconfront->a>.tab-tip");
    $(".sidebar-bottom-icon-iconfront->a").mouseenter(function () {
        $TopTwo.stop();
        $(".sidebar-bottom-icon-iconfront->a>.tab-tip").css("background-color","#f90");
        $(".sidebar-bottom-icon-iconfront->a>.tab-tip").show();
        $(".sidebar-bottom-icon-iconfront->a>.tab-tip").animate({
            left: -94
        }, 400);
    }).mouseleave(function () {
        $TopTwo.stop();
        $(".sidebar-bottom-icon-iconfront->a>.tab-tip").css("background-color","#383838");
        $(".sidebar-bottom-icon-iconfront->a>.tab-tip").animate({
            left: 40
        }, 400, function () {
            $(this).hide();
        });
    });
    let $TopFore = $(".sidebar-bottom-icon-qiandao>a>.tab-tip");
    $(".sidebar-bottom-icon-qiandao>a").mouseenter(function () {
        $TopFore.stop();
        $(".sidebar-bottom-icon-qiandao>a>.tab-tip").css("background-color","#f90");
        $(".sidebar-bottom-icon-qiandao>a>.tab-tip").show();
        $(".sidebar-bottom-icon-qiandao>a>.tab-tip").animate({
            left: -80
        }, 400);
    }).mouseleave(function () {
        $TopFore.stop();
        $(".sidebar-bottom-icon-qiandao>a>.tab-tip").css("background-color","#383838");
        $(".sidebar-bottom-icon-qiandao>a>.tab-tip").animate({
            left: 40
        }, 400, function () {
            $(this).hide();
        });
    });
    let $Top6 = $(".sidebar-bottom-icon-shijian>a>.tab-tip");
    $(".sidebar-bottom-icon-shijian>a").mouseenter(function () {
        $Top6.stop();
        $(".sidebar-bottom-icon-shijian>a>.tab-tip").css("background-color","#f90");
        $(".sidebar-bottom-icon-shijian>a>.tab-tip").show();
        $(".sidebar-bottom-icon-shijian>a>.tab-tip").animate({
            left: -80
        }, 400);
    }).mouseleave(function () {
        $Top6.stop();
        $(".sidebar-bottom-icon-shijian>a>.tab-tip").css("background-color","#383838");
        $(".sidebar-bottom-icon-shijian>a>.tab-tip").animate({
            left: 40
        }, 400, function () {
            $(this).hide();
        });
    });
    let $Top7 = $(".sidebar-bottom-icon-icon-qian>a>.tab-tip");
    $(".sidebar-bottom-icon-icon-qian>a").mouseenter(function () {
        $Top7.stop();
        $(".sidebar-bottom-icon-icon-qian>a>.tab-tip").css("background-color","#f90");
        $(".sidebar-bottom-icon-icon-qian>a>.tab-tip").show();
        $(".sidebar-bottom-icon-icon-qian>a>.tab-tip").animate({
            left: -80
        }, 400);
    }).mouseleave(function () {
        $Top7.stop();
        $(".sidebar-bottom-icon-icon-qian>a>.tab-tip").css("background-color","#383838");
        $(".sidebar-bottom-icon-icon-qian>a>.tab-tip").animate({
            left: 40
        }, 400, function () {
            $(this).hide();
        });
    });
    let $Top8 = $(".sidebar-bottom-icon-icon-xiaoxi>a>.tab-tip");
    $(".sidebar-bottom-icon-icon-xiaoxi>a").mouseenter(function () {
        $Top8.stop();
        $(".sidebar-bottom-icon-icon-xiaoxi>a>.tab-tip").css("background-color","#f90");
        $(".sidebar-bottom-icon-icon-xiaoxi>a>.tab-tip").show();
        $(".sidebar-bottom-icon-icon-xiaoxi>a>.tab-tip").animate({
            left: -80
        }, 400);
    }).mouseleave(function () {
        $Top8.stop();
        $(".sidebar-bottom-icon-icon-xiaoxi>a>.tab-tip").css("background-color","#383838");
        $(".sidebar-bottom-icon-icon-xiaoxi>a>.tab-tip").animate({
            left: 40
        }, 400, function () {
            $(this).hide();
        });
    });
    $(".sidebar .cart").click(function () {
        $(".cart-gouwuc").toggleClass(" Gouwuche-left");
        $(".cart .tab-icon-cart-tip").toggle();
    });
    $(".userTouxiang").click(function () {
        $(".sn-sidebar-member-wrap").toggleClass(" sn-sidebar-member-wrap-left");
        $(".userTouxiang>.tab-icon-tip").toggle();
    });
    $("#TOP").click(scoTop);
    $("#TOP-two").click(scoTop);

    $(".sidebar-bottom-scan").mouseenter(function (event) {
        event.stopPropagation();
        $(".sidebar-bottom-scan>a>.tab-icon-tip-2").show();
        $(".tab-tip-code-warp").removeClass(" tab-tip-code-warp-4");
        $(".tab-tip-code-warp").addClass(" tab-tip-code-warp-3");
    }).mouseleave(function (event) {
        event.stopPropagation();
        $(".sidebar-bottom-scan>a>.tab-icon-tip-2").hide();
        $(".tab-tip-code-warp").removeClass("tab-tip-code-warp-3");
        $(".tab-tip-code-warp").addClass(" tab-tip-code-warp-4");
    });

    // ---------------------------------------------------------- 头部工具条
    $(".toolbar-left>li:last>a").click(function (e) {
        e.stopPropagation();
        $(this).find("b").eq(1).addClass(" toolbar_location");
        $(this).parent().children(".weizhi-location-div").show();
        $(this).parent().css({
            "background": "#fff"
        });
    });
    $(".toolbars>.toolbars-content>.toolbar-left>li:last-child .weizhi-location-div").click(function (e) {
        e.stopPropagation();
    });
    $(document).click(function () {
        $(".toolbar-left>li:last>a").parent().css({
            "background": "#f5f5f5"
        });
        $(".toolbar-left>li:last>a").find("b").eq(1).removeClass("toolbar_location");
        $(".toolbar-left>li:last>a").parent().children("div").hide();
    });

    /*----------头部工具栏选项卡----------*/
    $(".weizhi-location-div>ul>li").bind("click", function (e) {
        e.stopPropagation();
        $(".toolbar-left>li:last>a").parent().css({
            "background": "#fff"
        });
        $(".toolbar-left>li:last>a").find("b").eq(1).addClass(" toolbar_location");
        $(this).css("border-bottom", "1px solid #fff").siblings().css("border-bottom", "1px solid #ededed");
        $(".weizhi-nav>ul").eq($(this).index()).show().siblings().hide();
    });
    /*----------头部工具栏选项卡----------*/

    // 二级菜单的关闭按钮
    $(".toolbars-content>.toolbar-left>li:nth-child(1) div i").click(function () {
        $(".toolbars-content>.toolbar-left>li").eq(0).css({
            "background": "#f5f5f5",
            "border-left": "1px solid #f5f5f5",
            "border-right": "1px solid #f5f5f5"
        });
        $(".toolbars-content>.toolbar-left>li").eq(0).children("i").css("transform", "rotateZ(0deg)");
        $(".toolbars-content>.toolbar-left>li").eq(0).children(".webSiteNavigation-Second").stop().slideUp(200);
    });
    // ------------------------------------------

    // ------------------------------------------
    // 分类图标从下向上过度
    $(".classification-content>ul li").mouseenter(function () {
        $(this).children("span")[0].style.display = "inline-block";
        $(this).children("span").stop();
        $(this).children("span").animate({
            bottom: 0
        }, 500);
    }).mouseleave(function () {
        $(this).children("span").stop();
        $(this).children("span").animate({
            bottom: -8
        }, 500);
    });
    // ------------------------------------------

    // ------------------------------------------
    // 菜单栏的二级菜单
    $(".toolbars-content>.toolbar-left>li").eq(0).mouseenter(function () {
        oLiMove($(this));
        $(this).children(".webSiteNavigation-Second").stop().slideDown(200);
    }).mouseleave(function () {
        oLiRemoved_From_The($(this));
        $(this).children(".webSiteNavigation-Second").stop().slideUp(200);
    });
    $(".toolbars-content>.toolbar-left>li").eq(1).mouseenter(function () {
        oLiMove($(this));
        $(this).children(".tenants").stop().slideDown(200);
    }).mouseleave(function () {
        $(this).children(".tenants").stop().slideUp(200);
        oLiRemoved_From_The($(this));
    });
    $(".toolbars-content>.toolbar-left>li").eq(2).mouseenter(function () {
        oLiMove($(this));
        $(this).children(".Customer-service").stop().slideDown(200);
    }).mouseleave(function () {
        $(this).children(".Customer-service").stop().slideUp(200);
        oLiRemoved_From_The($(this));
    });
    // 头部菜单栏右边的Li
    $(".toolbars-content>.toolbar-right li").eq(2).mouseenter(function () {
        oLiMove(this);
        $(this).children(".toolbar-right-The-order").stop().slideDown(200);
    }).mouseleave(function () {
        $(this).children(".toolbar-right-The-order").stop().slideUp(200);
        oLiRemoved_From_The($(this));
    });
    $(".toolbars-content>.toolbar-right li").eq(3).mouseenter(function () {
        oLiMove(this);
        $(this).children(".toolbar-right-My-tesco").stop().slideDown(200);
    }).mouseleave(function () {
        $(this).children(".toolbar-right-My-tesco").stop().slideUp(200);
        oLiRemoved_From_The($(this));
    });
    $(".toolbars-content>.toolbar-right li").eq(5).mouseenter(function () {
        oLiMove(this);
        $(this).children(".toolbar-right-The-shopping-cart").stop().slideDown(200);
    }).mouseleave(function () {
        $(this).children(".toolbar-right-The-shopping-cart").stop().slideUp(200);
        oLiRemoved_From_The($(this));
    });
    $(".toolbars-content>.toolbar-right li").eq(8).mouseenter(function () {
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

    // 二级菜单的关闭按钮
    $(".toolbars-content>.toolbar-left>li:nth-child(1) div i").click(function () {
        $(".toolbars-content>.toolbar-left>li").eq(0).css({
            "background": "#f5f5f5",
            "border-left": "1px solid #f5f5f5",
            "border-right": "1px solid #f5f5f5"
        });
        $(".toolbars-content>.toolbar-left>li").eq(0).children("i").css("transform", "rotateZ(0deg)");
        $(".toolbars-content>.toolbar-left>li").eq(0).children(".webSiteNavigation-Second").stop().slideUp(200);
    });
    // ------------------------------------------

    // ------------------------------------------
    // 分类图标从下向上过度
    $(".classification-content>ul li").mouseenter(function () {
        $(this).children("span")[0].style.display = "inline-block";
        $(this).children("span").stop();
        $(this).children("span").animate({
            bottom: 0
        }, 500);
    }).mouseleave(function () {
        $(this).children("span").stop();
        $(this).children("span").animate({
            bottom: -8
        }, 500);
    });
    // ------------------------------------------

});

/**
 * 返回顶部
 */
function scoTop(){

    let TimerId = null;
    clearInterval(TimerId);
    TimerId = setInterval(function () {
        // 起始位置
        let begin = getPageScroll().y;

        // 目标位置
        let target = 0;

        // 步长 =  目标位置 - begin开始位置 * 缓动系数
        // 步长
        let step = (target - begin) * 0.5;
        begin += step;
        if(Math.abs(Math.floor(step)) <= 1){
            clearInterval(TimerId);
            window.scrollTo(0,0);
            return;
        }
        window.scrollTo(0,begin);
    }, 50);
    return false;
}