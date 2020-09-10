//$(function(){
//	
//	var currentUrl = document.location.href;
//	var pathname = window.location.pathname;
//	var pre_url = currentUrl.split(pathname)[0];
//	var patientName = currentUrl.split("param0=")[1];
//	
//	$(".wj").css("background-color","#252525");
//	
//	
//	
//	$.ajax({
//    	type: "GET",
//		url: "http://localhost:8080/BB/ResPathServlet",
//		contentType: 'application/json;charset=utf-8',
//		data:{"pName": patientName},
//		dataType: 'json',
//		success: function(data){
//			console.log(data);
//			var table = $("#mlTable");
//			var a = '<tr style="background-color:#373737;"><td align="center">名称</td><td align="center">文件夹数</td><td align="center">状态</td></tr>';
//			for (var name of data.name){
//				a = a + '<tr class="wj" id="' + name + '"><td>' + name  + '</td></tr>';
//				console.log(name);
//			}
//			table.append(a);
//			//console.log(data.name);
//			
//			
//			//点击方法
//			$(".wj").click(function(){
//				//dicomList = ["http://localhost:8080/test/xj/test_wxy/3/test.dcm"];
//				$(this).css("background-color","#373737");
//				$(this).siblings().css("background-color","#252525");
//				//console.log("改变颜色");
//				$.ajax({
//					type: "GET",
//					url: pre_url + "/BB/CatalogServlet",
//					data:{
//						"name": $(this).attr("id"), //当前点击的文件名
//						"pName": patientName,//上一级目录名
//						
//					},
//					dataType: 'json',
//					success: function(data){
//						console.log(data);
//						dicomList = data.dicomList;
//						console.log(dicomList);
//					},
//					error: function(e){
//						console.log('fail!');
//						console.log(e.status);
//		                console.log(e.responseText);
//					}
//				})
//				console.log("dir-id:" + $(this).attr("id"));
//			})
//		},
//		error: function(e){
//			console.log('fail!');
//			console.log(e.status);
//            console.log(error);
//		}
//      }) 
//	
//	
//	
//	//console.log(pre_url);
//	
//	
//	
//})