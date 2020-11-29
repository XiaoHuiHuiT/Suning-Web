$(function () {

    let $Qrcode = $(".qrcode");

    // 扫码登陆
    $(".scan-box").mouseenter(function () {
        // "transform": "translateX(0px)"
        $Qrcode.stop();
        $Qrcode.animate({
            left: -76
        }, 300, function () {
            $(".phone-scan").show();
        });
    }).mouseleave(function () {
        $Qrcode.stop();
        $Qrcode.animate({
            left: 0
        }, 300);
        $(".phone-scan").hide();
    });

    // TAB选项卡
    let $oTabItems = $(".Tab-item");
    let oTabItem = $oTabItems[0];
    $(".tab-item").click(function () {
        $(this).addClass(" on").siblings().removeClass("on");
        $(oTabItem).hide();
        $($oTabItems).eq($(this).index()).show();
        oTabItem = $($oTabItems)[$(this).index()];
    });

    // 文本框的获取焦点与失去焦点
    $("input[type=text]").focus(function () {
        $(this).attr("placeholder", "");
        $(".login-form .pc-login .input-box .username-icon").css("background-position","-82px -67px");
    }).blur(function () {
        $(this).attr("placeholder", "用户名/手机/邮箱");
        $(".login-form .pc-login .input-box .username-icon").css("background-position","-123px -67px");
    });

    $("input[type=password]").focus(function () {
        $(this).attr("placeholder", "");
        $(".login-form .pc-login .input-box .password-icon").css("background-position","-41px -67px");
    }).blur(function () {
        $(this).attr("placeholder", "密码");
        $(".login-form .pc-login .input-box .password-icon").css("background-position","0 -108px");
    });

    // -----------------------------------------------------------------------------------------    登录
    $(".login-submit").click(function () {
        // 获取需要操作的元素
        let userNameEmailPhoneValue = $("#userName").val();
        let userPwdValue = $("#password").val();

        let flag = false;

        // 用户名/手机/邮箱
        let uNameEmailPhone = /^[a-zA-Z0-9_\u4e00-\u9fa5-]{4,16}$/;
        if(!uNameEmailPhone.test(userNameEmailPhoneValue)){
            $(".login-form .pc-login .login-error").show();
            return false;
        }else{
            flag = true;
        }
        /*else{
            $(".login-form .pc-login .login-error").hide();
            return true;
        }*/

        // 密码
        let uPwd = /^(\w){6,20}$/;
        if(!uPwd.test(userPwdValue)){
            $(".login-form .pc-login .login-error").show().children(".Prompt-information").text("请输入6-20位密码！");
            return false;
        }else{
            flag = true;
        }
        /*else{
            $(".login-form .pc-login .login-error").hide();
            return true;
        }*/

        if(flag){
            $(".login-form .pc-login .login-error").hide();
        }

        return flag;
    });

    // -----------------------------------------------------------------------------------------    登录
});