var debug = true;

var siteHost = {
    home: debug ? "../js" : "gulpTag/js"
}

//入口文件版本控制
var mainVision = {
    welcome: "1.0.0", //欢迎界面
}

//var comboExSet = debug ? /.*/ : "";
var comboExSet = /.*/
var distPath = debug ? "modules" : "dist";

seajs.config({
    charset: "utf-8",
    base: siteHost.home,
    alias: {
        "iScroll": "lib/iscroll/iscroll",
        "template": "view/template.js",
        "common": distPath + "/common/1.0.0/common",
        "proHub": distPath + "/proHub/1.0.0/proHub",
        "proTools": distPath + "/proTools/1.0.0/proTools"
    },
    paths: {
        "mod": distPath
    },
    comboExcludes: comboExSet,
    comboMaxLength: 1000
})


$(function () {
    var $pageType = $("#page_main");
    var main_enter = $pageType.attr("data-main");  //对应页面程序入口
    FastClick && FastClick.attach(document.body);

    if (main_enter) {
        seajs.use(["main/" + main_enter + "/" + mainVision[main_enter] + "/" + main_enter, "common"], function (e, common) {
            if (e != null) {
                window.pageMod = e;
            }
        });  //进入入口
    }
})





