avalon.ready(function() {
	function query(){
		common.invokeApi("GET","pageconfig/daojia",null,null,function(n){
			o.banners = n.result.banners;
			o.jingxuan1=n.result.jingxuan1;
			o.jingxuan2=n.result.jingxuan2;
			o.jingxuan3=n.result.jingxuan3;
			initSwiper();
		},function(){
			alert("页面获取信息错误，请稍后重试！");
		})
	}
    var o = avalon.define({
        $id: "root",
        banners:[],
        jingxuan1:{},
        jingxuan2:{},
        jingxuan3:{},
        gotoPage:function(url){
        	location.href=url;
        }
    });
	query();
    initWechat(['onMenuShareTimeline','onMenuShareAppMessage']);
    initShareConfig("鲜花、汽车、健康、维修、洗衣、家政...点亮生活，尽在合协社区管家服务！",MasterConfig.C("basePageUrl")+"home/index.html?v=20160229",MasterConfig.C("basePageUrl")+"/static/images/share_logo1.png","足不出户即享简单便捷的居家生活");
    avalon.scan(document.body),
    common.setTitle("生活服务");
    checkFromShare();
});


function notOpen(){
	alert("当前功能暂未开放。");	
}