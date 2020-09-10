<%@page import="java.util.Map"%>
<%@page import="java.util.HashMap"%>
<%@page import="java.util.Map"%>
<%@page import="com.itheima.utils.HTML_td"%>
<%@page import="com.mysql.cj.util.StringUtils"%>
<%@page import="java.util.ArrayList"%>
<%@page import="java.util.regex.Pattern"%>
<%@page import="java.util.regex.Matcher"%>
<%@page import="java.util.List"%>
<%@page import="java.util.Arrays"%>
<%@page import="com.sun.media.jfxmedia.events.NewFrameEvent"%>
<%@page import="org.apache.jasper.tagplugins.jstl.core.ForEach"%>
<%@page import="cn.itcast.goods.user.domain.User"%>
<%@page import="com.itheima.utils.CompratorByLastModified"%>
<%@page import="com.itheima.utils.CompratorByName"%>
<%@ page language="java" contentType="text/html; charset=UTF-8"
	pageEncoding="UTF-8"%>
<%@ page import="java.io.File"%>
<%@ page import="java.io.IOException"%>
<%@ page import="java.io.FileInputStream"%>
<%@ page import="java.io.FileOutputStream"%>
<%@ page import="java.io.File"%>
<%@ page import="java.net.URLEncoder"%>
<%@ page import="java.net.URLDecoder"%>
<%!String websit = "http://localhost:8080/BB/jsps/test1.jsp?";%>
<%!int fontSize = 0;%>
<%!int number = 0;%>
<%!String name;%>
<%!File[] filechild = null;//作用是为了统计标注文件%>
<%!int pictureNum = 0; //用来记录标记文件的个数%>
<%!int noPictureNum = 0; //用来记录未标记文件的个数%>
<%!int dcmNum = 0; //用来记录未标记dcm文件的个数%>
<!DOCTYPE html>
<html>
<head>
<title>大智慧标注系统</title>
<style type="text/css">
.pointer {
	cursor: pointer;
}

#top, #bottom {
	clear: both;
	width: 200%;
	height: AUTO;
	padding: 20px 0;
}
</style>
</head>
<style type="text/css">
/* CSS Document */
/*灰白相间*/
/* table tr:nth-child(odd) {
	background-color: #A9A9A9;
}

table tr:nth-child(even) {
	background-color: #fff;
}
 */
body {
	font: normal 11px auto "Trebuchet MS", Verdana, Arial, Helvetica,
		sans-serif;
	color: #fff;
	background: #252525;
}

#mytable {
	align: "center" width: 400px;
	padding: 0;
	margin: 0;
}

/*表格标题放置格式*/
caption {
	padding: 0 0 5px 0;
	width: 100px;
	font: italic 11px "Trebuchet MS", Verdana, Arial, Helvetica, sans-serif;
	text-align: right;
}

td {
    border-bottom: 1px solid #373737; 
	font-size: 11px;
	padding: 8px 8px 8px 12px;
	/* color: black; */
}

td.alt1 {
	border-left: 3px solid #434D43;
	border-top: 0;
	background: white; url (images/bullet2.gif) no-repeat;
	font: 10px "Trebuchet MS", Verdana, Arial, Helvetica, sans-serif;
	color: black;
	font-size: 18px;
	padding: 6px 20px 6px 20px;
	text-decoration: none;
	text-align: center;
	text-overflow: ellipsis;
	word-break: keep-all;
	white-space: nowrap;
}

td.alt2 {
	border-left: 3px solid #434D43;
	border-top: 0;
	background: gray; url (images/bullet2.gif) no-repeat;
	font: 10px "Trebuchet MS", Verdana, Arial, Helvetica, sans-serif;
	color: black;
	font-size: 18px;
	padding: 6px 20px 6px 20px;
	text-decoration: none;
	text-align: center;
	text-overflow: ellipsis;
	word-break: keep-all;
	white-space: nowrap;
}

tr.even {
	background-color: darkgrey;
}

td.alt {
	border-left: 3px solid #434D43;
	border-top: 0;
	background: #e5e5e5; url (images/bullet2.gif) no-repeat;
	font: 10px "Trebuchet MS", Verdana, Arial, Helvetica, sans-serif;
	color: black;
	font-size: 18px;
	padding: 6px 30px 6px 30px;
	text-decoration: none;
	text-overflow: ellipsis;
	word-break: keep-all;
	white-space: nowrap;
}

th.spec {
	border-left: 1px solid #C1DAD7;
	border-top: 0;
	background: #fff url(images/bullet1.gif) no-repeat;
	font: bold 10px "Trebuchet MS", Verdana, Arial, Helvetica, sans-serif;
}

th.specalt {
	border-left: 1px solid #C1DAD7;
	border-top: 0;
	background: #f5fafa url(images/bullet2.gif) no-repeat;
	font: bold 10px "Trebuchet MS", Verdana, Arial, Helvetica, sans-serif;
	color: #797268;
}
/*---------for IE 5.x bug*/
html>body td {
	font-size: 18px;
}
</style>
<body bgcolor="#87CEEB">
	<script type="text/javascript" src="./jquery.js"></script>
	
	<script type="text/javascript">var mytable="mytable1"; </script>
	<script type="text/javascript">
function onSearch(obj){//js函数开始
  setTimeout(function(){//因为是即时查询，需要用setTimeout进行延迟，让值写入到input内，再读取
    var storeId = document.getElementById(mytable);//获取table的id标识
    var rowsLength = storeId.rows.length;//表格总共有多少行
    var key = obj.value;//获取输入框的值
    var searchCol = 1;//要搜索的哪一列，这里是第一列，从0开始数起
    var searchCol1 = 0;
    var eddIf=0;
    for(var i=2;i<rowsLength;i++){//按表的行数进行循环，本例第一行是标题，所以i=1，从第二行开始筛选（从0数起）
      var searchText = storeId.rows[i].cells[searchCol].innerHTML;//取得table行，列的值
      var searchText1 = storeId.rows[i].cells[searchCol].innerHTML;//取得table行，列的值
      if(searchText.match(key)||searchText1.match(key)){//用match函数进行筛选，如果input的值，即变量 key的值为空，返回的是ture，
        storeId.rows[i].style.display='';//显示行操作，
      }else{
        storeId.rows[i].style.display='none';//隐藏行操作
      }
    }
  },200);//200为延时时间
}
</script>
	<%!String parameter[] = {"000", "000", "000", "000", "000", "000"};%>
	<%!int i;%>
	<%!String path = "D:/asd";%>
	<%!String otherDoctor;%>
	<%!int chosenIf = 0;%>
	<%!int chosenFlag = 0;%>
	<%!String[] chosenName = new String[2];%>
	<!-- 修改名字的方法 -->
	<%!public ArrayList<String> reName(String fileDir, String name) {
		// TODO Auto-generated method stub
		File oldFile = new File(fileDir);
		ArrayList<String> res = new ArrayList<String>();
		System.out.println("修改前文件名：" + oldFile.getAbsolutePath().replaceAll("\\\\", "/"));
		String rootPath = oldFile.getParent();
		String oldName = oldFile.getName();
		if (!oldName.contains("_")) {
			if (oldFile.isFile()) {
				String lastName = oldName.substring(oldName.length() - 4, oldName.length());
				String dealName = oldName.substring(0, oldName.length() - 4);
				File newFile = new File(rootPath + File.separator + dealName + "_m" + lastName);
				System.out.println("修改后名字：" + newFile.getAbsolutePath().replaceAll("\\\\", "/"));
				if (oldFile.renameTo(newFile)) {
					try {
						copyFile(new File("D:/rename/"), newFile);
						deleteDir(new File(newFile.getAbsolutePath().replaceAll("\\\\", "/") + "/rename"));
					} catch (Exception e) {
						System.out.println(e);
					}
					System.out.println("修改成功！");
				} else {
					System.out.println("失败！");
				}
			} else if (oldFile.isDirectory()) {
				File newFile = new File(rootPath + File.separator + oldFile.getName() + "_" + name);

				System.out.println("修改后名字：" + newFile.getAbsolutePath().replaceAll("\\\\", "/"));
				res.add(newFile.getAbsolutePath().replaceAll("\\\\", "/"));
				res.add(oldFile.getName() + "_" + name);
				if (oldFile.renameTo(newFile)) {
					try {
						copyFile(new File("D:/rename/"), newFile);
						deleteDir(new File(newFile.getAbsolutePath().replaceAll("\\\\", "/") + "/rename"));
					} catch (Exception e) {
						System.out.println(e);
					}
					System.out.println("修改成功！");
				} else {
					System.out.println("失败！");
				}
			}

		} else {
			System.out.println("此项不需要修改");
		}
		return res;
	}%>
	<!-- reName结束  -->
	<%
		response.setContentType("text/html;charset=UTF-8");
		//request.setCharacterEncoding("UTF-8");
		//table的序号
		int index = 0;
		int labeled = 0;
		User user;
		//File noMarkFile;
		user = (User) session.getAttribute("sessionUser");
		name = user.getLoginname();
		session.setAttribute("name", name);
		System.out.println("session-returnUrl：" + session.getAttribute("returnUrl"));
		int x = name.indexOf("_");//前为医院名，后为医生名
		String thisHospital = name.substring(0, x);
		String thisDoctor = name.substring(x + 1, name.length());
		path = path + "/" + thisHospital;//盘符：/asd/医院名
		String pathname = path;
		session.setAttribute("pathname", pathname);
		System.out.println("path：" + path);
		String returnUrl = "http://localhost:8080/BB/jsps/test1.jsp?";
		String returnUrl1 = returnUrl;
		String para5 = "000";
		for (i = 0; i <= 5; i++) {
			//parameter[i] = URLDecoder.decode(request.getParameter("param" + i), "UTF-8");
			parameter[i] = request.getParameter("param" + i);
			if ("000".equals(parameter[i]))
				break;
			if (i == 5)
				para5 = parameter[i];
			if (i > 0) {
				returnUrl = returnUrl + "param" + (i - 1) + "=" + URLEncoder.encode(parameter[i - 1], "UTF-8")
						+ "&";
			}
			returnUrl1 = returnUrl1 + "param" + i + "=" + parameter[i] + "&";
			System.out.println("parameter[" + i + "]："+ parameter[i]);
			path = path + "/" + parameter[i];
			System.out.println(path + "：path-----i:" + i);
		}
		session.setAttribute("path", path);//path存储的是具体进入的目录  para0： 患者目录
		int backLayer = i;
		if (backLayer > 0) {
			for (int k = backLayer - 1; k < 5; k++) {
				returnUrl = returnUrl + "param" + k + "=000&";
			}
			for (int k = backLayer; k < 5; k++) {
				returnUrl1 = returnUrl1 + "param" + k + "=000&";
			}
			returnUrl = returnUrl + "param5=000";
			returnUrl1 = returnUrl1 + "param5=" + para5;
		} else{
			returnUrl = " http://localhost:8080/BB/jsps/test1.jsp?param0=000&param1=000&param2=000&param3=000&param4=000&param5=000";
		}
		session.setAttribute("returnUrl", returnUrl);
		session.setAttribute("backPath", path);
		System.out.println("returnUrl：" + returnUrl);
		backLayer = 0;
		String returnUrl2 = returnUrl;
		returnUrl = "";
		String asdHospital = "D:/asd" + "/" + thisHospital;
		File uploadDir = new File(path);
		if (!uploadDir.exists()) {
			System.out.println("------path---!uploadDir.exists()----");
			response.sendRedirect(
					"http://localhost:8080/BB/jsps/test1.jsp?param0=000&param1=000&param2=000&param3=000&param4=000&param5=000");
			path = asdHospital;
			chosenIf = 1;
		} else if (!(asdHospital.equals(path))) {//不是第一层，患者目录
			if (!(path.contains("_"))) {
				File tmpChosenFile = new File(path);
				chosenName[0] = tmpChosenFile.getName().toString();
				chosenName[1] = getSequence(tmpChosenFile).toString();
				//chosenIf=2;
				System.out.println(chosenName[0] + "<-chosenName[0]\nchosenName[1]：" + chosenName[1]);
				session.setAttribute("chosenIf", chosenName[0]);
				ArrayList<String> res = reName(path, thisDoctor);
				if (res != null) {
					path = res.get(0);
					parameter[0] = res.get(1);
					response.sendRedirect("http://localhost:8080/BB/jsps/test1.jsp?param0=" + chosenName[0] + "_"
							+ thisDoctor + "&param1=000&param2=000&param3=000&param4=000&param5=000");
				}
				tmpChosenFile = null;
				System.out.println(res.toString() + "------path：" + path);
			}
		}
		String sessionChosenIf = "";
		sessionChosenIf = (String) session.getAttribute("chosenIf");
		System.out.println(sessionChosenIf + "<-sessionChosenIf\nchosenIf：" + chosenIf);
		if (sessionChosenIf != null && parameter[0].split("_")[0].equals(sessionChosenIf)) {
			String tmpPath = asdHospital + "/" + sessionChosenIf + "_" + thisDoctor;
			File tmpChosenFile = new File(tmpPath);
			chosenName[0] = sessionChosenIf;
			chosenName[1] = getSequence(tmpChosenFile).toString();
			chosenIf = 2;
			chosenFlag++;
			System.out.println(sessionChosenIf
					+ "<-sessionChosenIf\nchosenFlag："
					+ chosenFlag);
			//session.removeAttribute("chosenIf");
		}
	%>

	<%!File file = null;%>
	<%!String updatePath = "";%>
	<%!File[] childs = null;%>
	<%!int j = 0, m = 0;%>
	<%!String short_name = "0123456789";%>


	<%
		file = new File(path);
		try {
			copyFile(new File("D:/rename/"), file);
			System.out.println("复制D:/rename到" + path);
			deleteDir(new File(file.getAbsolutePath().replaceAll("\\\\", "/") + "/rename"));
		} catch (Exception e) {
			System.out.println(e);
		}
		childs = file.listFiles();//多个患者目录 or dcm
		System.out.println("childs.length（358）:" + childs.length);
		//Arrays.sort(childs,new CompratorByLastModified());
		if (parameter[0].equals("000")) {
			//System.out.println(childs[0].getAbsolutePath());
			Arrays.sort(childs, new CompratorByName());
		}
		//从工具类获取文件夹有多少文件
		HTML_td dirmsg_map = new HTML_td(childs);
		HashMap numdir_hash = dirmsg_map.getNumDir();
		Map<String, Integer> marknum_hash = dirmsg_map.getMarkNum();
		Map<String, Integer> yesnum_hash = dirmsg_map.getYesNum();
		Map<String, String> timemodify_hash = dirmsg_map.getTime();
		//判断是否为文件
		if (childs != null && childs.length != 0
				&& childs[0].getAbsolutePath().replaceAll("\\\\", "/").contains(".")) {
			String githubRaw = "http://localhost:8080/test";
			String[] resArray = new String[childs.length];
			String temp = "D:/asd";
			for (int ii = 0, jj = 0; ii < childs.length; ii++, jj++) {
				String absPath = childs[ii].getAbsolutePath().replaceAll("\\\\", "/");
				if (jj == 0) {
					String resParentPath = absPath.substring(0,
							(int) (absPath.length() - childs[0].getName().length() - 1));
					System.out.println("resParentPath" + resParentPath);
					resParentPath = resParentPath + "_mask";

					File tagDicomPath = new File(resParentPath);
					if (tagDicomPath.exists()) {//判断标注文件是否存在，为啥不往session里面存commentsJsonPath
						String jsonPath = resParentPath + "/state.json";
						String commentsJsonPath = resParentPath + "/comments.json";
						jsonPath = jsonPath.replace(temp, "http://localhost:8080/test");
						jsonPath = jsonPath.replace("/", "/");
						session.setAttribute("resParentPath", resParentPath);
						System.out.println(jsonPath + "----------------res");
						session.setAttribute("jsonPath", jsonPath);
						commentsJsonPath = commentsJsonPath.replace(temp, "http://localhost:8080/test");
						commentsJsonPath = commentsJsonPath.replace("/", "/");
						System.out.println("commentsJsonPath:" + commentsJsonPath);
						session.setAttribute("loadIf", "1");
					} else {//没有标注过
						String jsonPath = resParentPath + "/state.json";
						String commentsJsonPath = resParentPath + "/comments.json";
						jsonPath = jsonPath.replace(temp, "http://localhost:8080/test");
						jsonPath = jsonPath.replace("/", "/");
						session.setAttribute("resParentPath", resParentPath);
						System.out.println(jsonPath + "----------------res");
						session.setAttribute("jsonPath", jsonPath);
						commentsJsonPath = commentsJsonPath.replace(temp, "http://localhost:8080/test");
						commentsJsonPath = commentsJsonPath.replace("/", "/");
						System.out.println("commentsJsonPath:" + commentsJsonPath);
						session.setAttribute("commentsJsonPath", commentsJsonPath);
						session.setAttribute("loadIf", "0");
					}

				}
				absPath = absPath.replace(temp, "");

				resArray[ii] = githubRaw + absPath.replace("/", "/").trim();
				System.out.println(resArray[ii] + "<-resArray" + "i:" + i);
			}
			session.setAttribute("resPATH", resArray);
			//response.sendRedirect("http://localhost:8080/BB/DWV/index.jsp");
	%>
		<script>			
			parent.window.location.href='http://localhost:8080/BB/DWV/index.jsp?param0=<%=parameter[0]%>'
		</script>
	<%
		}//判断文件结束
		updatePath = path;
		path = "D:/asd";

		for (j = 0; j <= 5; j++) {
	
			if ("000".equals(parameter[j])) {
				System.out.println(j + "<-j");
				break;
			}
		}
	%>
	<%
		int flag = 0;
		if (parameter[1] == "000") {//一级目录
			} else {//二级目录
				System.out.println("parameter[1](480)：" + parameter[1]);
				flag = 1;
				String dirIf = "DICOM总数";
				String nameShow = "  ";
				System.out.println("childs.length（483）：" + childs.length);
				if (!(childs != null && childs[0].getAbsolutePath().replaceAll("\\\\", "/").contains(".dcm"))) {
					File[] grandChildren = childs[0].listFiles();
					if (!(grandChildren != null
							&& grandChildren[0].getAbsolutePath().replaceAll("\\\\", "/").contains("."))) {
						dirIf = "文件夹数";
					}
				}
				for (int k = 0; k < j; k++) {
					String pointer = "";
					if (k != 0)
						pointer = ">>";
					nameShow = nameShow + pointer + parameter[k];
				}
			 %>
			<script>mytable="mytable2";
					var choosenIf='<%=chosenIf%>';
				    if(choosenIf=='2') alert("您选择了患者文件夹:"+'<%=chosenName[0]%>'+"\n序号是:"+'<%=chosenName[1]%>');
				<%String sessionChosenIf1 = "";
					sessionChosenIf1 = (String) session.getAttribute("chosenIf");
					if (chosenIf == chosenFlag) {
						chosenIf = 0;
						chosenFlag = 0;
						session.removeAttribute("chosenIf");
				}%>
					
			</script>
			<table id="mytable2"  style="width: 100%; border-collapse:collapse;">
			<tr style="background-color:#373737;">
				<td align="center">名称</td>
				<td align="center">文件夹数</td>
				<td align="center">状态</td>
			</tr>
			<%
			}//二级（患者）目录结束
			for (i = 0, m = 0; i < childs.length; i++, m++) {
				if (childs[i].getName().contains("_mask")) {
					int flag_ = 0;
					String mask = childs[i].getAbsolutePath().replaceAll("\\\\", "/");
					String nomask = mask.split("_mask")[0];
					file = new File(nomask);
					File[] nomaskchilds = file.listFiles();

					if (nomaskchilds != null
							&& nomaskchilds[0].getAbsolutePath().replaceAll("\\\\", "/").contains(".")) {
						int numdir_ = (int) numdir_hash.getOrDefault(nomask, 0);
						int marknum_ = (int) numdir_hash.getOrDefault(nomask + "_mask", 0);
						System.out.println(numdir_ + "yesOK----" + marknum_ + "------------2020.1.2 check");
						if (numdir_ == (marknum_ - 1)) {
							System.out.println("yesOK" + marknum_);

							File fileYes = new File(nomask + "_yes");
							File fileMask = new File(mask);
							if (!fileYes.exists()) {
								System.out.println("yesOK" + marknum_);
								fileYes.mkdir();
								childs = file.listFiles();
								copyFile(fileMask, fileYes);
								flag_ = 1;

							}
						}
					}
					System.out.println(updatePath + "*********updatePath558************" + childs.length);
					String upper = mask.split("/" + childs[i].getName())[0] + "_mask";
					if (!(upper.contains(thisDoctor + "_"))) {
						File fileYes = new File(upper);
						File fileMask = new File(mask);
						if (!fileYes.exists()) {
							fileYes.mkdir();
							//childs = file.listFiles();
							copyFile(fileMask, fileYes);
							flag_ = 1;
						}
					}
					if (flag_ == 1) {
						file = null;
						childs = null;
						file = new File(updatePath);
						try {
							copyFile(new File("D:/rename/"), file);
							deleteDir(new File(file.getAbsolutePath().replaceAll("\\\\", "/") + "/rename"));
						} catch (Exception e) {
							System.out.println(e);
						}
						childs = file.listFiles();
						if (parameter[0].equals("000")) {
							Arrays.sort(childs, new CompratorByName());
						}
						//从工具类获取文件夹有多少文件
						dirmsg_map = new HTML_td(childs);
						numdir_hash = dirmsg_map.getNumDir();
						marknum_hash = dirmsg_map.getMarkNum();
						yesnum_hash = dirmsg_map.getYesNum();
						timemodify_hash = dirmsg_map.getTime();
						System.out.println(updatePath + "*********updatePath590************" + childs.length);
					}
					continue;
				}
				if (childs[i].getName().contains("_yes")) {
					continue;
				}
				if (childs[i].getName().length() > 20) {
					continue;
				}
				if (childs[i].getName().contains(".dcm")) {
					continue;
				}
				parameter[j] = childs[i].getName();
				if (m == 0) {
			%>
			<%
				}
				//System.out.println("i = " + i);
				//第一级目录的判断
				if (parameter[1] == "000") {
					
			} else {//parameter[1] != "000"
				/* if(!childs[i].getName().contains("mask")){ */

				System.out.println("parameter[1]-(705line)_:"+ parameter[1]);
				int dirNext = 1;
				String dirIf = "标注";
				if (!(childs != null && childs[i].getAbsolutePath().replaceAll("\\\\", "/").contains("."))) {
					File[] grandChildren = childs[i].listFiles();
					if (!(grandChildren != null
							&& grandChildren[0].getAbsolutePath().replaceAll("\\\\", "/").contains("."))) {
						dirIf = "查看";
						dirNext = 0;
					}
				}
				short_name = childs[i].getName();
				if (dirNext == 0) {
					short_name = childs[i].getName();
			%>

			<%
				int numdir_ = (int) numdir_hash.getOrDefault(childs[i].getAbsolutePath().replaceAll("\\\\", "/"), 0);
							int marknum_ = maskFile(childs[i].getAbsolutePath().replaceAll("\\\\", "/"));
							int yesnum_ = yesFile(childs[i].getAbsolutePath().replaceAll("\\\\", "/"));
							System.out.println(short_name
									+ "yesnnum:" + yesnum_);
							numdir_ = numdir_ - marknum_ - yesnum_;
							if (numdir_ > 0) {
			%>
			<tr >
				<td align="center"><%=index++%></td>
				<td align="center"><%=short_name%></td>
				<td align="center"><%=numdir_%></td>
				<td align="center"><%=yesnum_%></td>
				<%
					System.out.println(URLEncoder.encode(parameter[0], "UTF-8") + "33333333333333333333333333333");
					String state = getState2(yesnum_, marknum_, numdir_);
					String selectedColor = "color:black";
					if (state.equals("标记中"))
						selectedColor = "color:red";
					else if (state.equals("已标记")) {
						selectedColor = "color:green";
						String str = childs[i].getAbsolutePath().replaceAll("\\\\", "/");
						File file = new File(str);
						File[] nomaskchilds = file.listFiles();
						File fileyes = new File(str + "_yes");
						for (File file1 : nomaskchilds) {
							if (file1.getName().contains("_yes")) {
								copyFile(file1, fileyes);
							}
						}
					}
				%>
				<td align="center" style="<%=selectedColor%>;"><%=state%></td>
				<td align="center"><%=timemodify_hash.get(childs[i].getAbsolutePath().replaceAll("\\\\", "/"))%></td>
				<td align="center"><a
					style="color: #373737; text-decoration: none;"
					href=<%=websit + "param0=" + URLEncoder.encode(parameter[0], "UTF-8") + "&" + "param1="
									+ parameter[1] + "&" + "param2=" + parameter[2] + "&" + "param3=" + parameter[3]
									+ "&" + "param4=" + parameter[4] + "&" + "param5=" + parameter[5]%>><button
							class="pointer"
							style="background-color: green; color: white; width: 60px; height: 28px">
							<font>查看</font>
						</button></a></td>
				</tr>
				<%
					}//numdir_ > 0
				} else {
				%>
				<%
					System.out.println("childs[i].getAbsolutePath().replaceAll:"
										+ childs[i].getAbsolutePath().replaceAll("\\\\", "/"));
					int numdir_ = (int) numdir_hash.getOrDefault(childs[i].getAbsolutePath().replaceAll("\\\\", "/"), 0);
					int marknum_ = (int) numdir_hash.getOrDefault(childs[i].getAbsolutePath().replaceAll("\\\\", "/") + "_mask", 0);
					int yesnum_ = yesnum_hash.getOrDefault(childs[i].getAbsolutePath().replaceAll("\\\\", "/"), 0);
					String timeShow = "";
					if (marknum_ > 0) {
						marknum_ -= 2;
						timeShow = "_mask";
					}
					if (yesnum_ > 0)
						marknum_ = numdir_;
					System.out.println("returnUrl" + returnUrl);
					System.out.println("parameter[0]:" + parameter[0] + "\nparameter[1]:" + parameter[1] + "\nparameter[2]:" + parameter[2]
							+ "\nparameter[3]:" + parameter[3] + "\nnumdir:" + numdir_);
					if (numdir_ > 0) {
						System.out.println(
								"childs.length:" + childs.length);
				%>
				<tr style="height:55px" class="wj" id=<%=childs[i].getName() %>>
			   <%--  <td align="center"><%=index++ %></td>  --%>
				<td align="center" class="wj<%=index++ %>">【<%=childs[i].getName()%>】</td>
				<td align="center"><%=numdir_%></td>
				<%-- <td align="center"><%=marknum_%></td> --%>
				<%
					System.out.println(
						URLEncoder.encode(parameter[0], "UTF-8") + "URLEncoder.encode(parameter[0])");
					//System.out.println("点击标注后的链接"+websit + "param0=" + URLEncoder.encode(parameter[0], "UTF-8") + "&" + "param1=" + parameter[1] + "&" + "param2="
					//	+ parameter[2] + "&" + "param3=" + parameter[3] + "&" + "param4=" + parameter[4] + "&"
					//+ "param5=" + parameter[5]);
						String state = getState(numdir_, marknum_);
						String selectedColor = "color:black";
						if (state.equals("标记中"))
							selectedColor = "color:red";
						else if (state.equals("已标记")) {
							selectedColor = "color:green";
						}
				%>
				<td align="center" style="<%=selectedColor%>;"><%=state%></td>
				<%-- <td align="center"><%=timemodify_hash
									.get(childs[i].getAbsolutePath().replaceAll("\\\\", "/").replaceAll("\\\\", "/")
											+ timeShow)%></td>
				<td align="center"><a
					style="color: #66ff22; text-decoration: none;"
					href=<%=websit + "param0=" + URLEncoder.encode(parameter[0], "UTF-8") + "&" + "param1="
									+ parameter[1] + "&" + "param2=" + parameter[2] + "&" + "param3=" + parameter[3]
									+ "&" + "param4=" + parameter[4] + "&" + "param5=" + parameter[5]%>><button
							class="pointer"
							style="background-color: green; color: white; width: 60px; height: 28px">
							<font>标注</font>
						</button></a></td> --%>
				<%
					}
				%>
			</tr>


			<%
				}
						if (m == 5)
							m = -1;
					}
			}
				m = 0;
				file = null;
				childs = null;
				for (i = 0; i <= 5; i++) {
					parameter[i] = "000";
				}
			%>

		</table>

		<%!public String getState2(int yesTotal, int maskTotal, int fileTotal) {
		String state = "";
		if (maskTotal == 0) {
			state = "未标记";
		} else if (yesTotal == fileTotal) {
			state = "已标记";
		} else {
			state = "标记中";
		}
		return state;
	}

	public String getState(int fileTotal, int maskTotal) {
		String state = "";
		if (maskTotal == 0) {
			state = "未标记";
		} else if (maskTotal < fileTotal) {
			state = "标记中";
		} else {
			state = "已标记";
		}
		return state;
	}%>
		<%!public boolean deleteDir(File f) {
		if (!f.exists()) {
			return false;
		} else if (f.isFile()) {
			return f.delete();
		} else {
			for (File file : f.listFiles()) {
				deleteDir(file);
			}
		}
		return f.delete();
	}

	public static void copyFile(File src, File dest) throws IOException {
		File newFile = new File(dest, src.getName());
		if (!newFile.exists()) {
			newFile.mkdirs();
		}
		File[] files = src.listFiles();
		for (File file : files) {

			if (file.isFile()) {
				FileInputStream fis = new FileInputStream(file);
				FileOutputStream fos = new FileOutputStream(new File(newFile, file.getName()));
				byte[] b = new byte[1024];
				int len;
				while ((len = fis.read(b)) != -1) {
					fos.write(b, 0, len);
				}
				fos.close();
				fis.close();
			} else if (file.isDirectory()) {
				copyFile(file, newFile);
			}
		}
	}%>
		<%!public static Integer yesFile(String yesStr) {
		int returnVal = 0;
		File newFile = new File(yesStr);
		File[] files = newFile.listFiles();
		for (File file : files) {
			if (file.getName().contains("_yes"))
				returnVal++;
		}
		return returnVal;
	}%>
		<%!public static Integer maskFile(String yesStr) {
		int returnVal = 0;
		File newFile = new File(yesStr);
		File[] files = newFile.listFiles();
		for (File file : files) {
			if (file.getName().contains("_mask"))
				returnVal++;
		}
		return returnVal;
	}%>
		<%!public static String getSequence(File f1) {
		String name = f1.getName();
		if (name.contains("_"))
			name = name.split("_")[0];
		String path1 = f1.getAbsolutePath().replaceAll("\\\\", "/").split("/" + f1.getName())[0];
		String path2 = path1 + "/maindirforemptydirexceptopn_neverwillbeRegisted";
		File[] notFile = (new File(path2)).listFiles();
		for (int i = 0; i < notFile.length; i++) {
			String[] tmpName = notFile[i].getName().split("_");
			if (name.equals(tmpName[0]))
				return tmpName[1];
		}
		return "1000000000000000";
	}%>
</body>
</html>