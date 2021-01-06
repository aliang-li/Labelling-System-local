var websocket = null;

function openWebSocket(){
	if ('WebSocket' in window) {
		websocket = new WebSocket(
				"ws://localhost:8080/BB/webSocketByTomcat/"
						+ document.getElementById('sessionId').value);
	} else if ('MozWebSocket' in window) {
		websocket = new MozWebSocket(
				"ws://localhost:8080/BB/webSocketByTomcat/"
						+ document.getElementById('sessionId').value);
	} else {
		websocket = new SockJS("localhost:8080/BB/webSocketByTomcat/"
				+ document.getElementById('sessionId').value);
	}

	//连接发生错误的回调方法  
	websocket.onerror = function() {
		alert("WebSocket连接发生错误");
	};

	//连接成功建立的回调方法  
	websocket.onopen = function() {
		alert("WebSocket连接成功");
		//send();
	}

	//接收到消息的回调方法  
	websocket.onmessage = function(event) {
		debugger;
		let dataJson = JSON.parse(event.data);
		//console.log(dataJson);
		if(dataJson.del){
			readyApp.deleteDraws();
		}else if(dataJson.undo){
			readyApp.getUndoStack().undo();
		}else if(dataJson.redo){
			readyApp.getUndoStack().redo();
		}else if(dataJson.drag){
			readyApp.applyDragWebSocket(dataJson);
		}else if(dataJson.changeMsg){
			readyApp.applyAnchorChangeWebSocket(dataJson);
		}else{
			readyApp.applyWebSocketJson(event.data); 
		}
		
	}

	//连接关闭的回调方法  
	websocket.onclose = function() {
		console.log("WebSocket连接关闭");
	}

	//监听窗口关闭事件，当窗口关闭时，主动去关闭websocket连接，防止连接还没断开就关闭窗口，server端会抛异常。  
	window.onbeforeunload = function() {
		closeWebSocket();
	}
}



//将消息显示在网页上  
function setMessageInnerHTML(innerHTML) {
	document.getElementById('message').innerHTML += innerHTML + '<br/>';
}

//关闭WebSocket连接  
function closeWebSocket() {
	websocket.close();
}

//发送消息  
function send(json) {
	var sessionId = document.getElementById('sessionId').value;
	var message = JSON.stringify({
		"sessionId":sessionId,
		"draw":JSON.parse(json),
	});
	websocket.send(message);
	//console.log(Konva.Node.create(JSON.parse(json).drawings));
}