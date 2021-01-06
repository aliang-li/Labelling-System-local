package demo.servlet;
import java.io.IOException;
import java.util.Map;
import java.util.Random;
import java.util.concurrent.ConcurrentHashMap;

import javax.websocket.OnClose;
import javax.websocket.OnError;
import javax.websocket.OnMessage;
import javax.websocket.OnOpen;
import javax.websocket.Session;
import javax.websocket.server.PathParam;
import javax.websocket.server.ServerEndpoint;

import com.alibaba.fastjson.JSON;
import com.alibaba.fastjson.JSONObject;

/**
 * 服务器
 * @ClassName: webSocket 
 * @Description: TODO
 * @author liziliang
 * @Date 2018年8月16日 下午2:46:54  
 *
 */
@ServerEndpoint("/webSocketByTomcat/{username}")  
public class webSocket {  
    private static int onlineCount = 0;  
    private static Map<String, webSocket> clients = new ConcurrentHashMap<String, webSocket>();  
    private Session session;  
    private String username;  
      
    @OnOpen  
    public void onOpen(@PathParam("username") String username, Session session) throws IOException {  
  
        this.username = username;  
        this.session = session;  
        
        System.out.println("userName::"+username);
        System.out.println("session::"+session);
        
        
        
        addOnlineCount();  
        clients.put(username, this); 
        System.out.println(clients);
        System.out.println("已连接");  
        
    }  
  
    @OnClose  
    public void onClose() throws IOException {  
        clients.remove(username);  
        subOnlineCount(); 
        System.out.println("连接关闭");
    }  
  
    @OnMessage  
    public void onMessage(String message) throws IOException {
    	System.out.println(message);
    	JSONObject json = JSON.parseObject(message);
    	String sessionId = json.getString("sessionId");
    	String draw = json.getString("draw");
    	System.out.println(sessionId);
    	System.out.println("draw::"+draw);
    	sendMessageExceptTo(draw,sessionId);    
    }  
  
    @OnError  
    public void onError(Session session, Throwable error) {  
        error.printStackTrace();  
    }  
  
    public void sendMessageExceptTo(String message, String exceptTo) {
    	for (webSocket item : clients.values()) {  
            if (item.username.equals(exceptTo) ) {
            	
            } else {
            	item.session.getAsyncRemote().sendText(message); 
			}
                 
        } 
    }
    
    
    public void sendMessageTo(String message, String To) throws IOException {  
        // session.getBasicRemote().sendText(message);  
        //session.getAsyncRemote().sendText(message); 
    	System.out.println(clients);
        for (webSocket item : clients.values()) {  
            if (item.username.equals(To) ) 
                item.session.getAsyncRemote().sendText(message);  
        }  
    }  
      
    public void sendMessageAll(String message) throws IOException {  
    	System.out.println(clients);
        for (webSocket item : clients.values()) {  
            item.session.getAsyncRemote().sendText(message);  
        }  
    }  
      
      
  
    public static synchronized int getOnlineCount() {  
        return onlineCount;  
    }  
  
    public static synchronized void addOnlineCount() {  
        webSocket.onlineCount++;  
    }  
  
    public static synchronized void subOnlineCount() {  
        webSocket.onlineCount--;  
    }  
  
    public static synchronized Map<String, webSocket> getClients() {  
        return clients;  
    }

	@Override
	public String toString() {
		return "webSocket [session=" + session + ", username=" + username + "]";
	}  
    
    
}