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
panel.append(getSiteContent("基安后台","https://developer.coolapk.com/do?c=apk&m=myList","favicons/coolapk.ico"));
panel.append(getSiteContent("APK加固","https://jiagu.360.cn/#/app/android/list","favicons/jiagu.png"));
panel.append(getSiteContent("友盟统计","https://mobile.umeng.com/platform/apps/list","favicons/youmeng.ico"));
panel.append(getSiteContent("字幕库","http://zimuku.org/"));
panel.append(getSiteContent("Coding","https://ppeanutbutter.coding.net/user","favicons/coding.png"));
panel.append(getSiteContent("研究生网","http://218.197.101.24/"));
panel.append(getSiteContent("码云","https://gitee.com/peanutbutter/dashboard/projects","favicons/mayun.ico"));
panel.append(getSiteContent("BTBTT","https://btbtt11.com/","favicons/btbtt.ico"));
panel.append(getSiteContent("在线正则","https://regex101.com/","favicons/regex101.ico"));
panel.append(getSiteContent("Aria2 Web","http://peanutbutter.gitee.io/aria2c","favicons/aria2.png"));
panel.append(getSiteContent("Discord","https://discord.com/channels/662267976984297473/976997386436104202","favicons/discord.png"));
panel.append(getSiteContent("俄区正版游戏","https://byrut.org/index.php?do=","favicons/byrut.png"));
panel.append(getSiteContent("TAPD","https://www.tapd.cn/my_worktable/index/done#&filter_close=true"));
panel.append(getSiteContent("GitLab","https://git.17zjh.com/"));