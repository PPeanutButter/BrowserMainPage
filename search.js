var input = $(".input-view");
input.bind('input propertychange', do_think);
input.focus(function() {
    //重新请求一次
    do_think();
});
input.blur(function() {
	setTimeout(function (){
		switch_input_bg("");
}, 100);
});
var think_list = [];
function do_think() {
    var a = input.val();
    if (a == "") {
    	switch_input_bg("");
    	return;
    }
    $.ajax({
        url: "https://www.baidu.com/sugrec?json=1&prod=pc&wd=" + a,
        dataType: "jsonp",
        jsonp: 'cb',
        success: function(data) {
        	think_list = [];
            for (var index in data.g) think_list.push(data.g[index].q);
            console.log(think_list);
            switch_input_bg(a);
        }
    })
}

function switch_input_bg(text) {
    if (text != "") {
        //等待请求成功再改变
        $("div.card:first").attr("class", "think_card card");
        $("div.think_panel").css("display","block");
        $("div.think_panel").html("");
        for (var index in think_list){
        	var l = "<div class=\"think_list\"><div class=\"jKWzZXdEJWi__suggestions-inner-container\" onclick=\"onThinkSelect('"+think_list[index]+"')\"><div class=\"sbic sb43\"></div><div class=\"sbtc\" role=\"option\"><div class=\"sbl1\"><span>"+think_list[index]+"</span></div></div></div></div>"
        	$("div.think_panel").append(l);
        }
    } else {
        $("div.card:first").attr("class", "card");
        //同时移除候选框
        $("div.think_panel").css("display","none");
    }
}

function onThinkSelect(text){
	input.val(text);
	$(".tsf").submit();
}