package demo.servlet;

import java.io.Console;
import java.io.File;
import java.io.IOException;
import java.util.ArrayList;
import java.util.HashMap;
import java.util.Map;

import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.servlet.http.HttpSession;

import label.dcm.dcmSepBySize;
import net.sf.json.JSONObject;



/**
 * Servlet implementation class ResPathServlet
 */
@WebServlet("/ResPathServlet")
public class ResPathServlet extends HttpServlet {
	private static final long serialVersionUID = 1L;
       
    /**
     * @see HttpServlet#HttpServlet()
     */
    public ResPathServlet() {
       // super();
        // TODO Auto-generated constructor stub
    }

	/**
	 * @see HttpServlet#doGet(HttpServletRequest request, HttpServletResponse response)
	 */
	protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		// TODO Auto-generated method stub
		HttpSession session = request.getSession();
		
		String name = (String)session.getAttribute("name");
		System.out.println("session-returnUrl：" + session.getAttribute("returnUrl"));
		int x = name.indexOf("_");//前为医院名，后为医生名
		String hospital = name.substring(0, x);
		
		//传递给前端二级目录信息:文件名、数量、标记状态
		String patientName = (String)request.getParameter("pName");
		File file = null;
		File[] childs = null;
		File[] markFiles = null;
		String path_after = hospital + "/"  + patientName;
		String path = "D:/asd/" + path_after;
		String githubRaw = "http://localhost:8080/test";
		file = new File(path);
		childs = file.listFiles();//多个患者文件夹
		ArrayList<String> dirName = new ArrayList<String>();
		ArrayList<String> num = new ArrayList<String>();
		ArrayList<String> status = new ArrayList<String>();
		ArrayList<String> firstDcms = new ArrayList<String>();
		for (int i = 0; i < childs.length; i++) {
			File[] dcms = childs[i].listFiles();
			if (childs[i].getName().contains("_mask")) {
			}else {
				dirName.add(childs[i].getName());
				num.add(String.valueOf(dcms.length));
				
				String markFilePath = path + "/" + childs[i].getName() + "_mask";
				file= new File(markFilePath);
				if (file.exists()) {
					status.add("yes");
				} else {
					status.add("no");
				}
				
				//找出每个患者文件夹内的第一个文件
				firstDcms.add(githubRaw + "/" + path_after + "/" + childs[i].getName() + "/" + dcms[0].getName());
			}
		}

		Map<String, ArrayList<String>> resData = new HashMap<String, ArrayList<String>>();
		resData.put("name", dirName);
		resData.put("num", num);
		resData.put("status", status);
		resData.put("firstDcms", firstDcms);
        JSONObject jsonObject = JSONObject.fromObject(resData);
		String jsonData = jsonObject.toString();
		System.out.println("jsonDate:" + jsonData);
		
		String[] resPath = (String[])session.getAttribute("resPATH");
		System.out.println("进入/ResPathServlet:\nresPath[0]:" + resPath[0]);
	    response.setContentType("text/plain");
	    response.setContentType("application/json");
		response.getWriter().print(jsonData);
		
	} 

	/**
	 * @see HttpServlet#doPost(HttpServletRequest request, HttpServletResponse response)
	 */
	protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		// TODO Auto-generated method stub
		doGet(request, response);
	}
	
	 

}
