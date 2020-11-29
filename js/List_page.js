$(function () {

    let timerIdTop = null;
    $(".weizhi-location-div i").click(function () {
        $(".toolbar-left>li:last>a").parent().css({
            "background": "#f5f5f5"
        });
        $(".toolbar-left>li:last>a").find("b").eq(1).removeClass("toolbar_location");
        $(".toolbar-left>li:last>a").parent().children("div").hide();
    });
    // 头部工具条开始
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

    // 头部工具条结束
    // ------------------------------------------

    let timerIdTwo = null;

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

    /*--------------------------------------------banner菜单栏二级开始--------------------------------------------*/
    let $Divs = $(".banner-nav-two-one");
    let oDivOne = $Divs[0];
    $(".banner-content>.banner-left>ul>li").hover(function () {
        $(oDivOne).hide();
        $(this).children(".banner-nav-two-one").show();
        $(this).children(".banner-nav-two-one").find("div").show();
        $(this).css({
            "background-color": "#fff",
            "border-right": "#fff"
        });
        $(this).children("a").css({"color": "#000"});

        let $Div = $(this).children(".banner-nav-two-one");
        $Div.stop();

        $(this).children(".banner-nav-two-one").animate({
            "width": 800
        }, 0);
    }, function () {
        // 移出
        $(this).css({
            "background-color": "#252221",
            "border-right": "none",
            "z-index": "999999"
        });
        $(this).children("a").css({"color": "#fff"});

        let $Div = $(this).children(".banner-nav-two-one");
        $Div.stop();

        $(this).children(".banner-nav-two-one").animate({
            "width": 0
        }, 100, function () {
            $(this).hide();
        });
        oDivOne = $(this).children(".banner-nav-two-one");
    });
    $(".ng-fix-bar-p>.classification-content>.Top-box-effect-p").mouseenter(function () {
        $(".box-five").addClass(" Top-box-effect-five");
        $(".box-five").show();
    });
    $(".box-five>.banner-content>.banner-left").mouseleave(function () {
        setTimeout(function () {
            $(".box-five").removeClass("Top-box-effect-five");
            $(".box-five").hide();
        }, 500);
    });

    /*--------------------------------------------banner菜单栏二级结束--------------------------------------------*/

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

    let oImageAlls = [
        "images/Accordion-area-17.png",
        "images/Accordion-area-18.png",
        "images/Accordion-area-19.png",
    ];
    let oTestAlls = [
        "【线上妈妈班】之宝妈出行36计",
        "老板盛夏狂欢，赢国际米兰澳门观球之旅",
        "【产地签售】因为爱才严苛，澳洲好物等你来"
    ];

    $(".smallshow>ul>li").mouseenter(function () {
        $(".video-area-a>img").attr("src",oImageAlls[$(this).index()]);
        $(".black-cover>.title-in").text(oTestAlls[$(this).index()]);
    });

    $(".seckill-top>ul>li").mouseenter(function () {
        $(this).addClass(" selected-current").siblings().removeClass("selected-current");
        $(".plateTwo-content>.seckill-bottom>.list-content").eq($(this).index()).show().siblings(".list-content").hide();
    });

    setTimeout(function () {
        $(".sidebar-bottom-scan").mouseleave();
    },2000);

    $(".sidebar-bottom-scan").mouseenter(function () {
        $(".sidebar-bottom-scan>a>.tab-icon-tip").show();
        $(".tab-tip-code-warp").css("left","1710px");
    }).mouseleave(function () {
        $(".sidebar-bottom-scan>a>.tab-icon-tip").hide();
        $(".tab-tip-code-warp").css("left","1885px");
    });

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

    let $TopThree = $(".sidebar-bottom-icon-iconset0269>a>.tab-tip");
    $(".sidebar-bottom-icon-iconset0269>a").mouseenter(function () {
        $TopThree.stop();
        $(".sidebar-bottom-icon-iconset0269>a>.tab-tip").css("background-color","#f90");
        $(".sidebar-bottom-icon-iconset0269>a>.tab-tip").show();
        $(".sidebar-bottom-icon-iconset0269>a>.tab-tip").animate({
            left: -94
        }, 400);
    }).mouseleave(function () {
        $TopThree.stop();
        $(".sidebar-bottom-icon-iconset0269>a>.tab-tip").css("background-color","#383838");
        $(".sidebar-bottom-icon-iconset0269>a>.tab-tip").animate({
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
        $TopThree.stop();
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

    /*-------------------------------------------- 分类二级菜单 --------------------------------------------*/

    $(".classification-content>p").mouseenter(function (event) {
        event = event || window.event;
        event.stopPropagation();
        $(".secondary-menu-1").stop();
        $(".secondary-menu-1").show();
        $(".secondary-menu-1").animate({
            height: 482
        }, 500);
    });

    $(".secondary-menu-1").mouseleave(function (event) {
        event = event || window.event;
        event.stopPropagation();
        $(".secondary-menu-1").stop();
        $(".secondary-menu-1").animate({
            height: 0
        }, 500,function () {
            $(this).hide();
        });
    });

    /*-------------------------------------------- 分类二级菜单 --------------------------------------------*/

    /*-------------------------------------------- 展示区域 --------------------------------------------*/
    // 动态创建元素
    autoCreateItems();

    $("body").delegate(".item-wrap", "mouseenter", function () {
        $(this).addClass(" on").siblings().removeClass("on");
    }).delegate(".item-wrap", "mouseleave", function () {
        $(this).removeClass("on");
    });
    /*-------------------------------------------- 展示区域 --------------------------------------------*/

    /*-------------------------------------------- 分页区域 --------------------------------------------*/

    /*-------------------------------------------- 分页区域 --------------------------------------------*/

});

function autoCreateItems(){
    // 1.1 数据
    for (let i = 5; i < 40; i++){
        let oLi = `<li class="item-wrap ad no-config">
                    <div class="item-bg">
                        <div class="product-box">
                            <div class="res-img">
                                <div class="img-block">
                                    <a href="javascript:;" class="sellPoint">
                                        <img src="images/List_page_${i}.jpg" class="Item-Image">
                                        <i class="rt">
                                            <img src="images/List_page_77.jpg">
                                        </i>
                                        <i class="rt"></i>
                                    </a>
                                </div>
                                <div class="focus-box disable-scroll">
                                    <div class="focus-img">
                                        <dl>
                                            <dd>
                                                <a href="javascript:;" class="select">
                                                    <img src="images/List_page_${i}.jpg">
                                                </a>
                                            </dd>
                                        </dl>
                                    </div>
                                </div>
                            </div>
                            <div class="res-info">
                                <div class="price-box">
                                    <span class="def-price">
                                        <i>¥</i>2699<i>.00</i>
                                    </span>
                                </div>
                                <div class="title-selling-point">
                                    <a href="javascript:;" class="sellPoint yibao">
                                        华为 荣耀(honor)20 8GB+128GB 冰岛白 移动联通电信4G全网通 4800万超广角AI四摄 3200W美颜自拍 麒麟980 全面屏手机
                                    </a>
                                </div>
                                <div class="evaluate-old clearfix">
                                    <div class="info-evaluate">
                                        <a href="javascript:;" class="num">
                                            <i>1000+</i>评价
                                        </a>
                                    </div>
                                    <em class="ad-label-tips">广告</em>
                                </div>
                                <div class="store-stock">
                                    <a href="javascript:;" class="store-class zy">苏宁自营</a>
                                </div>
                            </div>
                            <div class="res-opt one-third">
                                <a href="javascript:;" class="btn-db">
                                    <i></i>对比
                                </a>
                                <a href="javascript:;" class="btn-sc">
                                    <i></i>关注
                                </a>
                                <a href="javascript:;" class="btn-gwc">
                                    <i></i>
                                    加入购物车
                                </a>
                            </div>
                        </div>
                    </div>
                </li>`;
        $(".general").append(oLi);
    }
}

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