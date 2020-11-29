$(function () {

    // ******************************************************************** 更多促销下面的区域
    $(".proinfo-main .support-panel .sp-item").mouseenter(function () {
        $(".tool1").show();
    }).mouseleave(function () {
        $(".tool1").hide();
    });

    $(".proinfo-deliver-tip .freight a").hover(function () {
        $(".proinfo-deliver .s-tooltip").show();
    },function () {
        $(".proinfo-deliver .s-tooltip").hide();
    });

    $(".sent-support .s-s-item a").eq(0).hover(function () {
        $(".tool2").show();
    },function () {
        $(".tool2").hide();
    });

    $(".sent-support .s-s-item a").eq(1).hover(function () {
        $(".tool3").show();
    },function () {
        $(".tool3").hide();
    });
    
    $(".proinfo-weight .noWeight").hover(function () {
        $(".tool4").show();
    },function () {
        $(".tool4").hide();
    });

    let $TabItem1 = $(".nav-tabs .active");
    let $Box1 = $(".ui-city-group-content .tab-content .tab-panel");
    let item1 = $TabItem1[0];
    let box1 = $Box1[0];
    $(".nav-tabs .active").click(function () {
        $(item1).removeClass("current");
        $(this).addClass(" current");
        item1 = $(this);

        $(box1).removeClass(" active");
        $($Box1[$(this).index()]).addClass(" active");
        box1 = $($Box1[$(this).index()]);
    });

    $(".ui-city-group>.ui-city-close").click(function (event) {
        event = event || window.event;
        event.stopPropagation();
        $(".ui-city").removeClass("active");
    });

    $(".ui-city").click(function (event) {
        event = event || window.event;
        event.stopPropagation();
        $(this).addClass(" active");
    });
    // ********************************************************************

    // ******************************************************************** 右侧侧边栏

    setTimeout(function () {
        $(".sidebar-bottom-scan").mouseleave();
    }, 2000);

    $(".sidebar-bottom-scan").mouseenter(function () {
        $(".sidebar-bottom-scan>a>.tab-icon-tip").show();
        $(".tab-tip-code-warp").css("left", "1710px");
    }).mouseleave(function () {
        $(".sidebar-bottom-scan>a>.tab-icon-tip").hide();
        $(".tab-tip-code-warp").css("left", "1868px");
    });

    let $TopThree = $(".sidebar-bottom-icon-iconset0269>a>.tab-tip");
    $(".sidebar-bottom-icon-iconset0269>a").mouseenter(function () {
        $TopThree.stop();
        $(".sidebar-bottom-icon-iconset0269>a>.tab-tip").css("background-color", "#f90");
        $(".sidebar-bottom-icon-iconset0269>a>.tab-tip").show();
        $(".sidebar-bottom-icon-iconset0269>a>.tab-tip").animate({
            left: -94
        }, 400);
    }).mouseleave(function () {
        $TopThree.stop();
        $(".sidebar-bottom-icon-iconset0269>a>.tab-tip").css("background-color", "#383838");
        $(".sidebar-bottom-icon-iconset0269>a>.tab-tip").animate({
            left: 40
        }, 400, function () {
            $(this).hide();
        });
    });

    // ********************************************************************

    // ******************************************************************** 放大镜
    let oImages = [
        "images/Goods-details-img-14.jpg",
        "images/Goods-details-img-15.jpg",
        "images/Goods-details-img-03.png",
        "images/Goods-details-img-17.jpg",
        "images/Goods-details-img-18.jpg",
        "images/Goods-details-img-19.jpg"
    ];

    $(".imgzoom-thumb-main ul li").mouseenter(function () {
        $(".thumbnail").attr("src",oImages[$(this).index()]);
        $(".A-larger-version").attr("src",oImages[$(this).index()]);
        $(this).addClass(" current").siblings().removeClass("current");
    });
    
    $(".imgzoom-thumb .next").click(function () {
        $(".imgzoom-thumb-main ul").animate({
            left: -81
        },500);
        $(this).addClass(" next-disable");
        $(".imgzoom-thumb .prev").removeClass("prev-disable");
    });
    
    $(".imgzoom-thumb .prev").click(function () {
        $(".imgzoom-thumb-main ul").animate({
            left: 0
        },500);
        $(this).addClass(" prev-disable");
        $(".imgzoom-thumb .next").removeClass("next-disable");
    });


    $(".imgzoom>.imgzoom-main").mouseenter(function () {
        $(".imgzoom-shot").css("opacity", "0.5");
        $(".imgzoom-pop").show();
    }).mouseleave(function () {
        $(".imgzoom-shot").css("opacity", "0");
        $(".imgzoom-pop").hide();
    });

    // 拿到所需要操作的元素
    /*蒙版*/
    let oBoxDiv = document.querySelector(".imgzoom-shot");
    /*小图区域*/
    let oSmaliDiv = document.querySelector(".imgzoom-main");

    // 1.监听鼠标在小图中的移动事件
    oSmaliDiv.onmousemove = function (event) {
        // 获取事件对象
        event = event || window.event;
        // 1.获取鼠标在小图中的位置
        let moveX = event.pageX - $(".wrapper").offset().left;
        let moveY = event.pageY - $(".wrapper").offset().top;

        // 1.2重新计算鼠标位置
        moveX = moveX - oBoxDiv.offsetWidth / 2;
        moveY = moveY - oBoxDiv.offsetHeight / 2;

        // 1.3安全校验 -> 不让蒙版移出小图区域 -> 左 上
        moveX = moveX < 0 ? 0 : moveX;
        moveY = moveY < 0 ? 0 : moveY;
        // 右 下
        moveX = moveX > $(".imgzoom-main")[0].offsetWidth - oBoxDiv.offsetWidth ? $(".imgzoom-main")[0].offsetWidth - oBoxDiv.offsetWidth : moveX;
        moveY = moveY > $(".imgzoom-main")[0].offsetHeight - oBoxDiv.offsetHeight ? $(".imgzoom-main")[0].offsetHeight - oBoxDiv.offsetHeight : moveY;

        // 1.4重新赋值给蒙版
        oBoxDiv.style.left = moveX + "px";
        oBoxDiv.style.top = moveY + "px";

        // 1.5计算大图展示区域的移动距离

        let maxMoseX = $(".imgzoom-main")[0].offsetWidth - oBoxDiv.offsetWidth;
        let maxMoseY = $(".imgzoom-main")[0].offsetHeight - oBoxDiv.offsetHeight;

        let maxBigX = $(".imgzoom-pop")[0].offsetWidth - $(".imgzoom-pop>img")[0].offsetWidth;
        let maxBigY = $(".imgzoom-pop")[0].offsetHeight - $(".imgzoom-pop>img")[0].offsetHeight;

        let bigX = moveX / maxMoseX * maxBigX;
        let bigY = moveY / maxMoseY * maxBigY;

        $(".imgzoom-pop>img")[0].style.position = "absolute";
        $(".imgzoom-pop>img")[0].style.left = bigX + "px";
        $(".imgzoom-pop>img")[0].style.top = bigY + "px";
    }

    // ********************************************************************

    // ******************************************************************** 手机/数码/配件区域
    $(".dropdown").click(fn1);

    /*右侧区域*/
    $(".header-shop").hover(function () {
        $(".header-shop .header-shop-pop").show();
    },function () {
        $(".header-shop .header-shop-pop").hide();
    });

    $(document).click(function (event) {
        event = event || window.event;
        $(".dropdown").removeClass(" dropdown-active");
        /*第二个*/
        $(".ui-city").removeClass("active");
    });

    function fn1(event) {
        event = event || window.event;
        event.stopPropagation();
        $(this).toggleClass(" dropdown-active");
    }
    // ********************************************************************

    // ******************************************************************** 更多促销
    $(".proinfo-promo .promo-closeup span").click(function () {
        $(".proinfo-promo .promo-closeup").hide();
        $(".proinfo-promo .promo-show").show();
        $("#yfbTitle,#pointTitle").show();
    });

    $(".proinfo-promo .promo-show span").click(function () {
        $(".proinfo-promo .promo-closeup").show();
        $(".proinfo-promo .promo-show").hide();
        $("#yfbTitle,#pointTitle").hide();
    });
    // ********************************************************************

    // ******************************************************************** 增值服务 -- 颜色 -- 数量 -- 服务
    $(".proinfo-color-ex .clr-item").click(function () {
        $(this).addClass(" selected").siblings().removeClass("selected");
    });

    let li_Index = -9;
    $(".proinfo-buytype ul li").click(function () {
        $(this).addClass(" selected").siblings().removeClass("selected");
    });

    $(".proinfo-yanbao ul li").mouseenter(function () {
        $(this).children(".child-list").show();
        $(this).addClass(" hoverli");
        $(this).find(".i-down").css("transform","rotate(-180deg)");
    }).mouseleave(function () {
        $(this).find(".i-down").css("transform","rotate(0deg)");
        $(this).removeClass("hoverli");
        $(this).children(".child-list").hide();
    });

    $(".proinfo-yanbao ul li").hover(function () {
        $(".proinfo-yanbao ul li").eq($(this).index()).removeClass(" selected");
    },function () {
        $(".proinfo-yanbao ul li").eq(li_Index).addClass(" selected");
    });

    $(".child-One a").click(function () {

        li_Index = $(this).parent().parent().index();

        $(".proinfo-yanbao ul li").eq(0).addClass(" selected");

        $(this).find(".radio").attr("checked");
        $(this).index() === 0 ? $(".promotionSpan").eq(0).text("原厂碎屏保6月  ¥128.00") : $(".promotionSpan").eq(0).text("原厂碎屏保1年  ¥168.00");

        $(".child-One").hide();
    });

    $(".child-Two a").click(function () {

        li_Index = $(this).parent().parent().index();

        $(".proinfo-yanbao ul li").eq(1).addClass(" selected");

        $(this).find(".radio").attr("checked");
        if($(this).index() === 0){
            $(".promotionSpan").eq(1).text("碎屏保6月  ¥108.00")
        }
        if($(this).index() === 1){
            $(".promotionSpan").eq(1).text("碎屏保1年  ¥149.00")
        }
        if($(this).index() === 2){
            $(".promotionSpan").eq(1).text("碎屏保2年  ¥269.00");
        }

        $(".child-Two").hide();
    });

    $(".child-Three a").click(function () {

        li_Index = $(this).parent().parent().index();

        $(".proinfo-yanbao ul li").eq(2).addClass(" selected");

        $(this).find(".radio").attr("checked");
        $(this).index() === 0 ? $(".promotionSpan").eq(2).text("全保修2年  ¥229.00") : $(".promotionSpan").eq(2).text("全保修3年  ¥279.00");

        $(".child-Three").hide();
    });

    let value = parseInt($(".proinfo-num dd input").val());

    $(".proinfo-num dd .plus").click(function () {
        value += 1;
        $(".proinfo-num dd .minus-disable").removeClass("minus-disable");
        $(".proinfo-num dd input").val(value);
    });

    $(".proinfo-num dd .minus").click(fn3);

    function fn3() {
        if(value <= 1){
            return false;
        }else{
            value -= 1;
            if(value === 1){
                $(".proinfo-num dd .minus").addClass(" minus-disable");
            }
            $(".proinfo-num dd input").val(value);
        }
    }

    $(".qrcode-panel .q-bottom").hover(function () {
        $(".qrcode-panel .qrc-wrapper").stop();
        $(".qrcode-panel .qrc-wrapper").animate({
            height: 120
        },500);
    },function () {
        $(".qrcode-panel .qrc-wrapper").stop();
        $(".qrcode-panel .qrc-wrapper").animate({
            height: 0
        },500);
    });
    // ********************************************************************

    // ********************************************************************  加入购物车
    // 委托
    let money = 0;
    let qian = parseFloat($("moneryh").text()) + parseFloat($(".monery").text());
    $("body").delegate(".g-cart-cout a.g-cart-cout-btnr", "click", function () {
        money += 1;
        money > 0 ? $(".g-cart-cout a.g-cart-cout-btnl-disabled").css("background-position","0 -190px") : $(".g-cart-cout a.g-cart-cout-btnl-disabled").css("background-position","0 -210px");
        $(".g-cart-cout .g-cart-cout-input").val(money);
        qian += parseFloat($("moneryh").text()) + parseFloat($(".monery").text());
        $(".ng-min-cart .price em").text(qian);
        $(".g-cart-bottom .g-cart-info .price").text(qian);
        $(".J_cart_total_num").text(money);
        $(".J_cart_checked_num").text(money);
    }).delegate(".g-cart-td","mouseenter",function () {
        $(".g-cart-cout a").show();
        $(".g-cart-close a").css("display","block");
        $(".g-cart-cout .g-cart-cout-input").css({
            "border-color": "#ddd"
        });
    }).delegate(".g-cart-td", "mouseleave", function () {
        $(".g-cart-cout a").hide();
        $(".g-cart-close a").hide();
        $(".g-cart-cout .g-cart-cout-input").css({
            "border-color": "#fff"
        });
    }).delegate(".g-cart-cout a.g-cart-cout-btnl-disabled", "click", function () {
        if(money <= 1){
            return false;
        }else{
            money -= 1;
            qian -= parseFloat($("moneryh").text()) + parseFloat($(".monery").text());
            if(money === 1){
                $(".g-cart-cout a.g-cart-cout-btnl-disabled").css("background-position","0 -210px")
            }
            $(".ng-min-cart .price em").text(qian);
            $(".J_cart_total_num").text(money);
            $(".J_cart_checked_num").text(money);
            $(".g-cart-bottom .g-cart-info .price").text(qian);
            $(".g-cart-cout .g-cart-cout-input").val(money);
        }
    });

    let count = 0;
    $("#GOODS").delegate(".g-cart-del-handle", "click", function () {
        count = 0;
        money = 0;
        $(".g-cart-del-handle").parents(".g-cart-td").remove();
        $(".J_cart_total_num").text(money);
        $(".J_cart_checked_num").text(money);
        $(".ng-min-cart .price em").text(0);
        $(".ng-min-cart .g-cart-info .price").text(parseFloat($(".ng-min-cart .g-cart-info .price").text()) - qian);
        qian = parseFloat($("moneryh").text()) + parseFloat($(".monery").text());
        $(".toolbar-right-The-shopping-cart>.toolbar-right-The-shopping-cart-center").show();
        $(".ng-min-cart").hide();
    });

    $(".mainbtns .btn-orange-buy").click(function () {
        count++;
        if(count === 1){
            new Goods();
            money += 1;
            money > 0 ? $(".g-cart-cout a.g-cart-cout-btnl-disabled").css("background-position","0 -190px") : $(".g-cart-cout a.g-cart-cout-btnl-disabled").css("background-position","0 -210px");
            $(".g-cart-cout .g-cart-cout-input").val(money);
            $(".g-cart-bottom .g-cart-info .price").text(qian);
            $(".mask").toggle();
            $(".toolbar-right-The-shopping-cart>.toolbar-right-The-shopping-cart-center").hide();
            $(".ng-min-cart").show();
            $(".J_cart_total_num").text(money);
            $(".J_cart_checked_num").text(money);
            $(".ng-min-cart .price em").text(qian);
        }else{
            money += 1;
            money > 0 ? $(".g-cart-cout a.g-cart-cout-btnl-disabled").css("background-position","0 -190px") : $(".g-cart-cout a.g-cart-cout-btnl-disabled").css("background-position","0 -210px");
            qian += parseFloat($("moneryh").text()) + parseFloat($(".monery").text());
            $(".J_cart_total_num").text(money);
            $(".J_cart_checked_num").text(money);
            $(".g-cart-cout .g-cart-cout-input").val(money);
            $(".g-cart-bottom .g-cart-info .price").text(qian);
            money = parseInt($(".g-cart-cout .g-cart-cout-input").val());
            $(".mask").toggle();
            $(".toolbar-right-The-shopping-cart>.toolbar-right-The-shopping-cart-center").hide();
            $(".ng-min-cart").show();
            return false;
        }
    });
    
    $(".m-dialog .container .btn.close").click(function () {
        $(".mask").hide();
    });

    let shopping_cart_index = 0;
    $(".nostore-rd .nostore-bd .nostore-rd-box .prev").click(function () {
        shopping_cart_index--;
        if(shopping_cart_index < 0){
            shopping_cart_index = 5;
            $(".nostore-rd .nostore-bd .nostore-rd-box .nostore-rd-list ul").stop();
            $(".nostore-rd .nostore-bd .nostore-rd-box .nostore-rd-list ul").animate({
                left: -shopping_cart_index * 354
            }, 200);
            shopping_cart_index--;
        }
        $(".rd-cur-count").text(shopping_cart_index+1);
        $(".nostore-rd .nostore-bd .nostore-rd-box .nostore-rd-list ul").stop();
        $(".nostore-rd .nostore-bd .nostore-rd-box .nostore-rd-list ul").animate({
            left: -shopping_cart_index * 354
        }, 200);
    });

    $(".nostore-rd .nostore-bd .nostore-rd-box .next").click(function () {
        shopping_cart_index++;
        shopping_cart_index = shopping_cart_index % 5;
        $(".rd-cur-count").text(shopping_cart_index+1);
        $(".nostore-rd .nostore-bd .nostore-rd-box .nostore-rd-list ul").animate({
            left:  -shopping_cart_index * 354
        }, 200);
    });
    // ********************************************************************

    // ******************************************************************** 全选
    // 1.拿到需要操作的元素
    let allSelectBtn = document.querySelector("#all_select");

    // 2.监听全选按钮的点击
    allSelectBtn.onclick = function () {
        let oItems = document.querySelectorAll("input[type=checkbox]");
        allSelectBtn.value == 1 ? $(allSelectBtn).attr("value",2) :$(allSelectBtn).attr("value",1);
        if(allSelectBtn.value == 1){
            oItems.forEach(function (item) {
                item.checked = false;
            });
        }else{
            oItems.forEach(function (item) {
                item.checked = true;
            });
        }
    };
    /*$(allSelectBtn).bind("click", function () {
        oItems.forEach(function (item) {
            item.checked = false;
        });
    });*/

    class Goods{
        constructor(){
            $("#GOODS").append(`<dd class="g-cart-td fisrt">
                        <div class="g-cart-item">
                            <div class="g-cart-close"><a href="javascript:;" class="g-cart-del-handle" title="删除"></a></div>
                            <div class="g-cart-checkbox fl">
                                <input type="checkbox" class="sn-sidebar-minicart-one-goods"/>
                            </div>
                            <div class="g-cart-td-images fl">
                                <a href="javascript:;">
                                    <img src="images/Goods-details-img-51.png">
                                </a>
                            </div>
                            <div class="g-cart-td-msg">
                                <p>
                                    <a href="javascript:;">华为/荣耀(honor)20 8GB+128GB 蓝水翡翠 移动联通电信4G全网通 4800万超广角AI四摄 3200W美颜自拍 麒麟980 全面屏手机</a></p>
                                <div class="clearfix">
                                    <span class="price fr">¥<em>2699.00</em></span>
                                    <div class="g-cart-cout fl">
                                        <a href="javascript:;" class="g-cart-cout-btnl g-cart-cout-btnl-disabled"></a>
                                        <input type="text" class="g-cart-cout-input" value="1"/>
                                        <a href="javascript:;" class="g-cart-cout-btnr "></a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </dd>`);
        }
    }
    // ********************************************************************

    // ******************************************************************** 删除商品
    // ********************************************************************
});