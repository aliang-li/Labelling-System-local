package demo.servlet;

import java.io.File;
import java.io.IOException;
import java.util.ArrayList;
import java.util.Arrays;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.servlet.http.HttpSession;

import net.sf.json.JSONObject;


@WebServlet("/maskPathServlet")
public class GetMaskJPGPathServlet extends HttpServlet {

	/**
	 * 
	 */
	private static final long serialVersionUID = 1L;

	@Override
	protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		// TODO Auto-generated method stub
		File file =null;
		HttpSession session = request.getSession();
		String path=(String)session.getAttribute("path"); //dcm文件的父目录
		String maskPath = path + "_mask"; //后端存储标注图片的目录
		  
		File maskFile = new File(maskPath);
		String[] maskFiles = maskFile.list();
		List<String> list=Arrays.asList(maskFiles);
		List<String> arrayList= new  ArrayList<String>(list); //arrayList就是最后筛选出来的mask图片 路径的列表
		  for(int i = 0; i < arrayList.size(); i++){
			  String suffix = arrayList.get(i).substring(arrayList.get(i).lastIndexOf(".")+1);
			  if(!suffix.equals("jpg")  || arrayList.get(i).contains("mask")){
				  arrayList.remove(i);
				  i--;
			  }
		  }
		  String[] maskFiles2 = new String[arrayList.size()];  //maskFiles2 这个数组存mask.jpg路径的数组
		  arrayList.toArray(maskFiles2);
		  
		  
			file = new File(path);
	   
	    	String[] files = file.list();
	    	
	    	String path1;
	        path1=path.substring(path.lastIndexOf('/')+1);
	        String prePath =  path.substring(0, path.lastIndexOf('/'));
	        String prePath1 = prePath.substring(0, prePath.lastIndexOf('/'));
	        
	        
	        String lastPath = path.substring(prePath1.lastIndexOf('/')+1);
	        
	        for(int i =0; i < maskFiles2.length;i++){
	        	maskFiles2[i] = "http://localhost:8080/test/"+lastPath+"_mask"+"/"+maskFiles2[i]; 
	        }
	        ArrayList<String> maskPath1 = new ArrayList<String>(); //为了向前端传输
	        
	        for (int i=0; i<maskFiles2.length; i++){ 
	        	maskPath1.add(maskFiles2[i]);
	         }
	        System.out.println(maskPath1);
	        
	        Map<String, ArrayList<String>> resData = new HashMap<String, ArrayList<String>>();
	        resData.put("maskPath", maskPath1);
	        JSONObject jsonObject = JSONObject.fromObject(resData);
			String jsonData = jsonObject.toString();
			response.setContentType("text/plain");
		    response.setContentType("application/json");
			response.getWriter().print(jsonData);
	        
		
	}

	@Override
	protected void doPost(HttpServletRequest req, HttpServletResponse resp) throws ServletException, IOException {
		// TODO Auto-generated method stub
		super.doPost(req, resp);
	}

	
	
	
}
