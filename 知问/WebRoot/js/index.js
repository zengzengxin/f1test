$(function(){
	//设置按钮
	$('#header_button').button({

       icons : {
			primary : 'ui-icon-search',
            secondary : 'ui-icon-search'
       },

	});

	//设置注册弹窗，详细见word文档
	 $('#reg_a').click(function(){
        $('.zhuce').dialog({
           title : '注册知问',
           buttons : {
           	         '注册' : function () {
           	         	                  $.ajax({
							           	         	type:"post",
							           	         	url:"###",
							           	         	data:$('#zhuce').serialize(),
							           	         	success:function(){alert('aaa')}
           	                                     });
           	                  },
           	         '取消' : function () {alert('注册知问')}    
           },
			height:400,
			width:400,
			minWidth : 300,
			minHeight : 300,
			maxWidth : 800,
			maxHeight : 600,
			show : 'blind',
			hide : 'blind',
			modal : true,
        });
});
	
	
	//设置日历
$('#date').datepicker();
	 
 $('.zhuce input[title]').tooltip({
	 	    position:{
	 	    	my:'left center',
	 	    	at:'right+5 center',
	 	    },
	 		show : 'blind',  
            hide : 'blind'
});
	
	
//自动补全	
var hosts = ["qq.com", "126.com", "yahu.com", "yahoo.com", "cnblogs.com"];
$("#email").autocomplete({
    autoFocus: true,
    source: function(request, response) {
        var term = request.term, //request.term为输入的字符串
            ix = term.indexOf("@"),
            name = term, // 用户名
            host = "", // 域名
            result = []; // 结果
 
        result.push(term);
        // result.push({ label: term, value: term }); // json格式
        if (ix > -1) {
            name = term.slice(0, ix);
            host = term.slice(ix + 1);
        }
        if (name) {
            var findedHosts = (host ? $.grep(hosts, function(value) {
                return value.indexOf(host) > -1;
            }) : hosts),
            findedResults = $.map(findedHosts, function(value) {
                return name + "@" + value; //返回字符串格式
                // return { label: name + " @ " + value, value: name + "@" + value }; // json格式
            });
            result = result.concat($.makeArray(findedResults));
        }
        response(result);//呈现结果
    }
});
	
	
	
	



});