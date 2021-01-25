function getSiteContent(name,link,icon) {
	if (icon != null) {
		return "<div class=\"c-span3 c-gap-left-large nav-item\"><a class=\"border-for-item\" href=\""+link+"\" target=\"_blank\"><div class=\"nav-icon\"><img height=\"32px\" src=\""+icon+"\" width=\"32px\"></img></div><div class=\"c-gap-left-small nav-text\">"+name+"</div></a></div>"
	}else{
		return "<div class=\"c-span3 c-gap-left-large nav-item\"><a class=\"border-for-item\" href=\""+link+"\" target=\"_blank\"><div class=\"nav-icon-normal\">"+name.substring(0,1)+"</div><div class=\"c-gap-left-small nav-text\">"+name+"</div></a></div>"
	}
}

var panel = $("#sites_panel");
console.log(panel.text());
panel.append(getSiteContent("Github","https://github.com/","favicons/github.png"));
panel.append(getSiteContent("小破站","https://www.bilibili.com/","favicons/bilibili.png"));
panel.append(getSiteContent("TensorFlow","https://tensorflow.google.cn/","favicons/TensorFlow.png"));
panel.append(getSiteContent("基安后台","https://developer.coolapk.com/do?c=apk&m=myList","favicons/coolapk.ico"));
panel.append(getSiteContent("APK加固","https://ms.cloud.tencent.com/cooperation/","favicons/jiagu.png"));
panel.append(getSiteContent("友盟统计","https://mobile.umeng.com/platform/apps/list","favicons/youmeng.ico"));
panel.append(getSiteContent("字幕库","http://www.zimuku.la/"));
panel.append(getSiteContent("Coding","https://ppeanutbutter.coding.net/user","favicons/coding.png"));
panel.append(getSiteContent("研究生网","http://218.197.101.24/"));
panel.append(getSiteContent("TED-Ed","https://ed.ted.com/lessons?content_type=animations&student_level=4&direction=desc&sort=publish-date","favicons/teded.png"));
panel.append(getSiteContent("码云","https://gitee.com/peanutbutter/dashboard/projects","favicons/mayun.ico"));
panel.append(getSiteContent("BTBTT","https://91btbtt.com/","favicons/btbtt.ico"));