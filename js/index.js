window.onload = function () {

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
    $(document).bind("click",function () {
        $(".toolbar-left>li:last>a").parent().css({
            "background": "#f5f5f5"
        });
        $(".toolbar-left>li:last>a").find("b").eq(1).removeClass("toolbar_location");
        $(".toolbar-left>li:last>a").parent().children("div").hide();
    });

    $(".g-rec-results").bind("mouseenter",function (event) {
        event = event || window.event;
        event.stopPropagation();
    });

    $(document).bind("mouseenter",function () {
        setTimeout(function () {
            $(".g-rec-results").hide();
        }, 100);
    });

    // 头部工具条结束
    // ------------------------------------------

    let timerIdTwo = null;

    $(".nav>ul>li").bind("click", function () {
        // 2.实现滚动
        let index = $(this).index() + 5;
        // 1.获取可视区域的高度
        let screenHeight = Math.abs($(".floor-One-in").height()) + 40;
        clearInterval(timerIdTwo);
        timerIdTwo = setInterval(function () {
            // 启始位置
            let begin = getPageScroll().y;
            // 结束位置
            let target = index * screenHeight;
            let step = (target - begin) * 0.3;
            begin += step;
            if (Math.abs(Math.floor(step)) <= 1) {
                clearInterval(timerIdTwo);
                document.documentElement.scrollTop = index * screenHeight;
                return;
            }
            document.documentElement.scrollTop = begin;
        }, 50);
    });
    // ------------------------------------------
    // 返回顶部
    $(".top").click(function (event) {
        event.preventDefault();
        clearInterval(timerIdTop);
        timerIdTop = setInterval(function () {
            let begin = window.pageYOffset;
            let target = 0;
            let step = (target - begin) * 0.3;
            begin += step;
            if (Math.abs(Math.floor(step)) <= 1) {
                clearInterval(timerIdTop);
                window.scrollTo(0, 0);
                return;
            }
            window.scrollTo(0, begin);
        }, 50);
    });
    // ------------------------------------------

    // ------------------------------------------
    // 楼层导航栏开始
    window.onscroll = function () {
        if (getPageScroll().y >= 2070) {
            $(".nav").show();
        } else {
            $(".nav").hide();
        }
        /*----------------------------------全部分类可视区域发生改变现实与隐藏开始----------------------------------*/
        if (getPageScroll().y >= 800) {
            $(".ng-fix-bar").show();
            $(".Top-box-effect-p").addClass(" Top-box-effect").show();
            $(".Top-box-effect-Two-form").addClass(" Top-box-effect-Two").parent(".search-Two").show();
            $(".box-one").addClass(" Top-box-effect-right-one").show();
            $(".box-two").addClass(" Top-box-effect-right-Two").show();
            $(".box-throe").addClass(" Top-box-effect-right-Three").show();
            $(".v7-floatHc").css("bottom","0");
        } else {
            $(".ng-fix-bar").hide();
            $(".Top-box-effect-p").removeClass("Top-box-effect").hide();
            $(".Top-box-effect-Two-form").removeClass("Top-box-effect-Two").parent(".search-Two").hide();
            $(".box-one").removeClass(" Top-box-effect-right-one");
            $(".box-two").removeClass(" Top-box-effect-right-Two");
            $(".box-throe").removeClass(" Top-box-effect-right-Three");
            $(".v7-floatHc").css("bottom","-90px");
        }
        if (getPageScroll().y >= 11000) {
            $(".nav").hide();
        }
        /*----------------------------------全部分类可视区域发生改变现实与隐藏结束----------------------------------*/


        // 楼层的滑动
        let browserY = getPageScroll().y;
        if (browserY >= 2955 && browserY <= 3100) {
            $(".nav>ul>li").eq(0).addClass("hover").siblings().removeClass("hover");
        } else if (browserY >= 3546 && browserY <= 3706) {
            $(".nav>ul>li").eq(1).addClass("hover").siblings().removeClass("hover");
        } else if (browserY >= 4137 && browserY <= 4597) {
            $(".nav>ul>li").eq(2).addClass("hover").siblings().removeClass("hover");
        } else if (browserY >= 4808 && browserY <= 5000) {
            $(".nav>ul>li").eq(3).addClass("hover").siblings().removeClass("hover");
        } else if (browserY >= 5409 && browserY <= 5529) {
            $(".nav>ul>li").eq(4).addClass("hover").siblings().removeClass("hover");
        } else if (browserY >= 6010 && browserY <= 6300) {
            $(".nav>ul>li").eq(5).addClass("hover").siblings().removeClass("hover");
        } else if (browserY >= 6500 && browserY <= 6620) {
            $(".nav>ul>li").eq(6).addClass("hover").siblings().removeClass("hover");
        } else if (browserY >= 7112 && browserY <= 7300) {
            $(".nav>ul>li").eq(7).addClass("hover").siblings().removeClass("hover");
        } else if (browserY >= 7713 && browserY <= 8800) {
            $(".nav>ul>li").eq(8).addClass("hover").siblings().removeClass("hover");
        }
    };
    // 楼层导航栏结束
    // ------------------------------------------

    // ------------------------------------------
    // 广告关闭头部
    $("#close").click(function () {
        $(this).siblings().children(".img-advertising").toggle();
        let $text = $(this).attr("title");
        $text = $text === "关闭" ? "打开" : "关闭";
        if ($text === "关闭") {
            $(this).css({
                background: "url('images/index.png') -241px -145px",
                backgroundPosition: "-241px -145px"
            });
        } else {
            $(this).css({
                backgroundPosition: "-241px -160px"
            });
        }
        $(this).attr("title", $text);
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

    // ------------------------------------------
    // banner右边跑马灯效果
    let bannerIndex = 0;
    let oLiHeight = (parseInt(getComputedStyle($(".banner-right>.right-middle-div>.right-middle>li")[0]).height) + 8) * 3 + 4;
    setInterval(function () {
        bannerIndex++;
        if (bannerIndex > 2) {
            bannerIndex = 0;
            $(".banner-right>.right-middle-div>.right-middle")[0].style.marginTop = -bannerIndex * oLiHeight + "px";
            bannerIndex++;
        }

        $(".banner-right>.right-middle-div>.right-middle").animate({
            "marginTop": -bannerIndex * oLiHeight
        }, 1500);
    }, 4000);

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
            "width": 1001
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


    /*----------------------------------手风琴区域开始----------------------------------*/
    // 移入事件 这个事件不会有事件冒泡
    // $(".banner-center-Two .banner-foreground-two").mouseenter(function(){
    //     $(this).children("li").css("width","203px");
    // });
    $(".banner-foreground>li").mouseenter(function () {
        $(this).parent().fadeOut();
        $(".banner-foreground-two").fadeIn();
        let $Items = $(".banner-foreground-two").children("li");
        let index = $(this).index();
        $($Items[index]).css("width", "655px").siblings().css("width", "53px");
    });

    let $Label = $(".label1");
    let LabelOne = $Label[0];
    $(".banner-foreground-two>li").mouseenter(function () {
        // 添加一下过渡动画
        $(this).children(".label1").hide().parent().siblings().children(".label1").show();

        let Item = $(this);
        let Items = $(this).siblings();

        Item.stop();

        $(this).animate({
            width: 655
        }, 500, function () {
            LabelOne = $(this).children(".label1")[0];
        });

        Items.stop();

        $(this).siblings().animate({
            width: 53
        }, 500);
        // 自定义动画之前要先使用stop方法 避免一些bug
        // oItem.stop();

        // animate自定义动画
        // 第一个参数    要做动画的属性 一个字面量对象
        // 第二个参数    动画的执行时长
        // oItem.animate({
        //     width: 655
        // },500);
    });
    $(".banner-foreground-two").mouseleave(function () {
        $(this).fadeOut();
        $(".banner-foreground").fadeIn();
    });
    /*----------------------------------手风琴区域结束----------------------------------*/

    /*----------------------------------限时抢购开始----------------------------------*/
    $(".list-content").hover(function () {
        $(".seckill-bottom-jiantou").show();
    }, function () {
        $(".seckill-bottom-jiantou").hide();
    });

    let remDate = new Date("2020-7-10 22:00:00");
    setTime(remDate);
    setInterval(function () {
        setTime(remDate);
    }, 1000);

    function setTime(remDate) {
        $(".hour").text(getDifferTime(remDate).hour);
        $(".minute").text(getDifferTime(remDate).minute);
        $(".second").text(getDifferTime(remDate).second);
    }

    function getDifferTime(remDate, curDate = new Date()) {
        // 1.得到两个时间之间的差值(毫秒值)
        let differTime = remDate - curDate;
        // 2.得到两个时间之间的差值(秒)
        let differSecond = differTime / 1000;
        // 3.利用相差的总秒数 / 每一天的秒数 = 相差的天数
        let day = Math.floor(differSecond / (60 * 60 * 24));
        day = day >= 10 ? day : "0" + day;
        // 4.利用相差的总秒数 / 小时 % 24;
        let hour = Math.floor(differSecond / (60 * 60) % 24);
        hour = hour >= 10 ? hour : "0" + hour;
        // 5.利用相差的总秒数 / 分钟 % 60;
        let minute = Math.floor(differSecond / 60 % 60);
        minute = minute >= 10 ? minute : "0" + minute;
        // 6.利用相差的总秒数 % 秒数
        let second = Math.floor(differSecond % 60);
        second = second >= 10 ? second : "0" + second;
        return {
            day: day,
            hour: hour,
            minute: minute,
            second: second
        }
    }

    let Time_limit = 0;
    let Time_limit_Width = 1000;
    $(".plateTwo .seckill-bottom-jiantou>span").eq(0).click(function () {
        Time_limit--;
        if (Time_limit < 0) {
            Time_limit = 3;
            $(".plateTwo-content>.seckill-bottom>.list-content>.Xianshi").css("left", -Time_limit * Time_limit_Width);
            Time_limit--;
        }
        $(".plateTwo-content>.seckill-bottom>.list-content>.Xianshi").stop();
        $(".plateTwo-content>.seckill-bottom>.list-content>.Xianshi").animate({
            "left": -Time_limit * Time_limit_Width
        }, 1000);
    });

    $(".plateTwo .seckill-bottom-jiantou>span").eq(1).click(function () {
        Time_limit++;
        if (Time_limit > 3) {
            Time_limit = 0;
            $(".plateTwo-content>.seckill-bottom>.list-content>.Xianshi").css("left", -Time_limit * Time_limit_Width);
            Time_limit++;
        }
        $(".plateTwo-content>.seckill-bottom>.list-content>.Xianshi").stop();
        $(".plateTwo-content>.seckill-bottom>.list-content>.Xianshi").animate({
            "left": -Time_limit * Time_limit_Width
        }, 1000);
    });
    /*----------------------------------限时抢购结束----------------------------------*/

    /*----------------------------------猜你喜欢开始----------------------------------*/
    initImages();

    // loadItems(oItems);
    /*----------------------------------猜你喜欢结束----------------------------------*/

//    苏宁Outlets开始
    $(".floor-left-two>ul>li").mouseenter(function(){
        $(this).find(".infor-wrapper").css("top","-110px");
    }).mouseleave(function () {
        $(this).find(".infor-wrapper").css("top","0px");
    });
//    苏宁Outlets结束

//    比抢清单开始
    $(".plateThree>.plateThree-content>.floor-left>.plate-Bottom").hover(function(){
        $(".plateThree>.plateThree-content>.floor-left>.plate-Bottom>p").show();
    },function () {
        $(".plateThree>.plateThree-content>.floor-left>.plate-Bottom>p").hide();
    });

    let Bottom_Index = 0;
    let Bottom_Width = 390;
    let $Ul = $(".plateThree>.plateThree-content>.floor-left>.plate-Bottom>ul");
    let $AallS = $(".plateThree>.plateThree-content>.floor-left>.plate-Bottom .pager>a");
    let oA = $AallS[0];
    let timeThree = null;
    // 左边按钮
    $(".plateThree>.plateThree-content>.floor-left>.plate-Bottom>p>span").eq(1).click(RightBtn);

    $(".plateThree>.plateThree-content>.floor-left>.plate-Bottom>p>span").eq(0).click(function () {
        Bottom_Index--;

        $(oA).removeClass("current-a");
        $($AallS).eq(Bottom_Index).addClass(" current-a");
        oA = $($AallS).eq(Bottom_Index)[0];
        if(Bottom_Index < 0){
            Bottom_Index = 2;
            $(oA).removeClass("current-a");
            $($AallS).eq(Bottom_Index).addClass(" current-a");
            oA = $($AallS).eq(Bottom_Index)[0];
            $Ul.stop();
        }
        $Ul.stop();
        $Ul.animate({
            left: -Bottom_Index * Bottom_Width
        },500);
    });

    $(".pager-in>a").mouseenter(function () {
        Bottom_Index = $(this).index() % 3;
        $(oA).removeClass("current-a");
        $($AallS).eq(Bottom_Index).addClass(" current-a");
        oA = $($AallS).eq(Bottom_Index)[0];
        $Ul.stop();
        $Ul.animate({
            left: -Bottom_Index * Bottom_Width
        },500);
    });

    function RightBtn(){
            Bottom_Index++;

            $(oA).removeClass("current-a");
            $($AallS).eq(Bottom_Index).addClass(" current-a");
            oA = $($AallS).eq(Bottom_Index)[0];
            if(Bottom_Index > 2){
                Bottom_Index = 0;
                $(oA).removeClass("current-a");
                $($AallS).eq(Bottom_Index).addClass(" current-a");
                oA = $($AallS).eq(Bottom_Index)[0];
                $Ul.stop();
            }
            $Ul.stop();
            $Ul.animate({
                left: -Bottom_Index * Bottom_Width
            },500);
    }

    setInterval(function(){
        RightBtn();
    },4000);
    //    比抢清单结束

    // 排行榜开始
    $(".comm-list-in").mouseenter(function () {
        $(".Btn-Baranner").show();
    }).mouseleave(function () {
        $(".Btn-Baranner").hide();
    });

    let $LiItemAlls = $(".tab-list>ul>li");
    let $commList = $(".plateThree-floor-left-three>.content>.comm-list-wrapper .comm-list");
    $LiItemAlls.bind("click",function () {
        $commList.eq($(this).index()).show().siblings().hide();
    });

    let $OneItem = $LiItemAlls[0];
    let $OUl = $(".tab-list>ul");
    let leftPx = 0;
    $(".tab-list>ul>li").bind("click",function () {
        $($OneItem).removeClass("cur-selected");
        $(this).addClass(" cur-selected");
        $OneItem = $(this)[0];
    });
    $(".tab-list>ul>li").eq(2).bind("click",function () {
        leftPx = 0;
        $OUl.stop();
        $($OUl).animate({
            left: leftPx
        },300);
    });
    $(".tab-list>ul>li").eq(3).bind("click",function () {
        leftPx = -142;
        $OUl.stop();
        $($OUl).animate({
            left: leftPx
        },300);
    });
    $(".tab-list>ul>li").eq(4).bind("click",function () {
        leftPx = -215;
        $OUl.stop();
        $($OUl).animate({
            left: leftPx
        },300);
    });

    $(".comm-list .pager>a").mouseenter(function () {
        $(".comm-list .pager>a").eq($(this).index() - 1).removeClass("pager-current");
        $(this).addClass(" pager-current");
        $(".jx-wrapper").stop();
        $(".jx-wrapper").animate({
            left:-$(this).index() * 390
        },400);
    });

    let $Baranner_span = 0;
    $(".plateThree-floor-left-three>.content .comm-list-wrapper .Btn-Baranner span").eq(0).click(function () {
        $Baranner_span--;
        $(".comm-list .pager>a").eq($Baranner_span - 1).removeClass("pager-current");
        $(".comm-list .pager>a").eq($Baranner_span).addClass(" pager-current");
        $(".jx-wrapper").stop();
        console.log(-$Baranner_span * 390);
        $(".jx-wrapper").animate({
            left:-$Baranner_span * 390
        },400);
        if($Baranner_span < 0){
            $Baranner_span = 1;
            $(".jx-wrapper").stop();
            $(".jx-wrapper").animate({
                left:-$Baranner_span * 390
            },400);
        }
    });

    $(".plateThree-floor-left-three>.content .comm-list-wrapper .Btn-Baranner span").eq(1).click(function () {
        $Baranner_span++;
        $(".comm-list .pager>a").eq($Baranner_span - 1).removeClass("pager-current");
        $(".comm-list .pager>a").eq($Baranner_span).addClass(" pager-current");
        $(".jx-wrapper").stop();
        console.log(-$Baranner_span * 390);
        $(".jx-wrapper").animate({
            left:-$Baranner_span * 390
        },400);
        if($Baranner_span > 1){
            $Baranner_span = 0;
            $(".comm-list .pager>a").eq($Baranner_span - 1).removeClass("pager-current");
            $(".comm-list .pager>a").eq($Baranner_span).addClass(" pager-current");
            $(".jx-wrapper").stop();
            $(".jx-wrapper").animate({
                left:-$Baranner_span * 390
            },400);
        }
    });
    // 排行榜结束

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

    $(".sidebar-bottom-scan").mouseenter(function (event) {
        event.stopPropagation();
        $(".sidebar-bottom-scan>a>.tab-icon-tip").show();
        $(".tab-tip-code-warp").css("left","1708px");
    }).mouseleave(function (event) {
        event.stopPropagation();
        $(".sidebar-bottom-scan>a>.tab-icon-tip").hide();
        $(".tab-tip-code-warp").css("left","1868px");
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
    //scoTop();

    $("#TOP").click(scoTop);
    
    // ------------------------------------------------------------------ 搜索框
    $(".search input[type=text]").focus(function () {
        $(".g-rec-results").show();
    });

    $(".g-rec-results ul.rec-results li.title i.close").click(function () {
        $(".g-rec-results").hide();
    });
    // ------------------------------------------------------------------

};

/*function loadItems(oItems){
    let index = 0;
    // 1.监听网页的滚动事件
    window.onscroll = function(){
        // 1.拿到最后一个元素
        let lastItem = oItems[oItems.length - 1];
        // 2.拿到最后一个元素的offsetTop
        let lastItemTop = lastItem.offsetTop;
        // 3.拿到最后一个元素的高度的一半
        let lastItemHeight = lastItem.offsetHeight / 2;
        // 4.拿到可视区域的高度
        let screenHeight = getScreen().height;
        // 5.拿到滚动出去的距离
        let offsetY = getPageScroll().y;
        // 6.判断是否需要加载新的图片
        if((lastItemTop + lastItemHeight) <= (screenHeight + offsetY) && index <= 1){
            index++;
            initImages();
        }else{
            return;
        }
    }
}*/

/**
 * 创建所有的图片
 */
function initImages() {
    for (let i = 1; i <= 55; i++) {
        // 创建Div
        let oDiv = document.createElement("div");
        // 添加类名
        oDiv.className = "Guess-you-like fl clearfix";

        // 创建图片
        let oImg = document.createElement("img");
        oImg.src = `images/Guess-you-like-${i}.jpg`;
        // 添加类名
        oImg.className = "in-img";

        // 创建P
        let oP = document.createElement("p");
        let oI = document.createElement("i");
        oI.className = "zyIcon";

        let oA = document.createElement("a");
        oA.innerText = "伊利 安慕希希腊风味酸牛奶原味205g*12盒/礼盒装";

        let oPTwo = document.createElement("p");
        oPTwo.className = "Guess-you-like-price";
        oPTwo.innerText = "￥59.90";

        let oITwo = document.createElement("i");
        oITwo.innerText = "";

        let oDivTwo = document.createElement("div");
        oDivTwo.className = "label-wp";

        let oATwo = document.createElement("a");
        oATwo.innerText = "找相似";

        oP.appendChild(oI);
        oP.appendChild(oA);

        oPTwo.appendChild(oITwo);

        oDivTwo.appendChild(oATwo);

        oDiv.appendChild(oImg);
        oDiv.appendChild(oP);
        oDiv.appendChild(oPTwo);
        oDiv.appendChild(oDivTwo);

        // 添加到容器
        $(".The-container").append(oDiv);
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