$(document).ready(function () {
    $(".a1 li").click(function () {
        $(".a1 li").attr("class", "");
        $(this).attr("class", "biaoqian-xz");
    });
});
$(document).ready(function () {
    $("#F1 a").click(function () {
        $("#F1 a").attr("class", "");
        $(this).attr("class", "Fxuanzhong");
    });
});$(document).ready(function () {
    $("#F2 a").click(function () {
        $("#F2 a").attr("class", "");
        $(this).attr("class", "Fxuanzhong");
    });
});
$(document).ready(function () {
    $("#F3 a").click(function () {
        $("#F3 a").attr("class", "");
        $(this).attr("class", "Fxuanzhong");
    });
});
$(document).ready(function () {
    $("#F4 a").click(function () {
        $("#F4 a").attr("class", "");
        $(this).attr("class", "Fxuanzhong");
    });
});
$(document).ready(function () {
    $("#F5 a").click(function () {
        $("#F5 a").attr("class", "");
        $(this).attr("class", "Fxuanzhong");
    });
});
$(document).ready(function () {
    $(".sq-xq-1 li").hover(function () {
        $(".sq-xq-1 li").attr("class", "");
        $(this).attr("class", "bor-quan-3B9BFF");
        var a = $(this).children("img").attr("src");
        $(".sq-xq-tu1").attr("src", a);
    });
});
$(function () {
    var price = 0;
    $(".jian").click(function () {
        price = $("#num").val();
        if ($("#num").val() == 0) {
            return
        }
        else {
            price--;
        }
        $("#num").val(price);
    })
    $(".jia").click(function () {
        price = $("#num").val();
        price++;
        $("#num").val(price);
    })
})$(document).ready(function () {
    $(".dizhi-tanc button").click(function () {
        $(".dizhi-tanc button").attr("class", "zc-button");
       // $(this).attr("class", "dizhi-tc-xuanz zc-button");
        $(this).addClass("dizhi-tc-xuanz");
    });
});
$(function () {
  
    price = $("#num").val();
        if (price == 1) {
            $(".jian").attr("style", "color:#999 !important");
        }
})