<%@page import="java.util.Map"%>
<%@page import="java.util.HashMap"%>
<%@page import="java.util.Map"%>
<%@page import="com.itheima.utils.HTML_td"%>
<%@page import="java.util.ArrayList"%>
<%@page import="java.util.regex.Pattern" %>
<%@page import="java.util.regex.Matcher" %>
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
 <!DOCTYPE html>
<!-- saved from url=(0045)http://fiddle.jshell.net/z4sp5o90/show/light/ -->
<html> 
  
  <head>
    <meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
    <title>3D</title>
    <meta name="robots" content="noindex, nofollow">
    <meta name="googlebot" content="noindex, nofollow">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    
	<script type="text/javascript" src="../test3D/js/xtk_edge.js"></script>
    <link rel="stylesheet" type="text/css" href="../test3D/css/result-light.css">
    <script type="text/javascript" src="../test3D/js/xtk_xdat.gui.js"></script>
    
	<style id="compiled-css" type="text/css">
		html, body { 
			background-color:#252525; 
			margin: 0; 
			padding: 0; 
			height: 100%; 
			overflow: hidden !important; 
		}
		.button {
       		background-color: #373737;
       		border-radius:.3125em;
       		color: white;
       		font-size: 12.5px;
	   		padding: .7em 1em;
       		font-family: sans-serif;
       		position: absolute;
			top: .24em;
			padding-left: 2.5em;
			left: .4em;
			padding: .7em 0.8em;
			border-width: 1px;
			border-color: #1f1f1f;
			line-height: 1.5;
			border-style: solid;
			font-weight:700;
			cursor: pointer;
      }             
   }
	</style></head>
  
  <body>
  <%!File file = null;%>
    <%
    String str = "http://localhost:8080/three/"+"test1.vtk";
    //String str1 = "http://localhost:8090/three/test_435a.nii.gz";    
    System.out.println(str);%>
    
     
    <!-- the container for the renderers -->
    <div id="head" style="width: 100%; height: 5%; background-color:#1d1d1d;" >
    <a href="http://localhost:8080/BB/DWV/index.jsp" target="_blank" style="margin-left: 10px;">
      <button class="button"> << 返回 </button>
    </a> 
    </div>
    <div id="3d" style="background-color: #252525; width: 75%; height: 95%; margin-bottom: 2px; float: right; color:#FFFFFF;">三维结构</div>
    <div id="sliceX" style="border-top: 2px solid red; border-right: 1px solid #666666; background-color: #252525; width: 24.3%; height: 31.5%; float: left; text-align:center; font-size:13px; color:#ffffff;">矢状面-X轴</div>
    <div id="sliceY" style="border-top: 2px solid green; border-right: 1px solid #666666; background-color: #252525; width: 24.3%; height: 31.5%; float: left; text-align:center; font-size:13px; color:#ffffff;">冠状面-Y轴</div>
    <div id="sliceZ" style="border-top: 2px solid blue; border-right: 1px solid #666666; background-color: #252525; width: 24.3%; height: 31.5%; float: left; text-align:center; font-size:13px; color:#ffffff;">横断面-Z轴</div>
   
    <script>// tell the embed parent frame the height of the content
    if (window.parent && window.parent.parent) {
    	window.parent.parent.postMessage(["resultsFrame", {
    		height: document.body.getBoundingClientRect().height,slug: "z4sp5o90"}], "*")
    }
    
    // always overwrite window.name, in case users try to set it manually
    window.name = "result"</script>
    
    <script type="text/javascript">
    window.onload = function() {   
    	debugger;
    	// try to create the 3D renderer    
    	_webGLFriendly = true;
        try {
          // try to create and initialize a 3D renderer
          debugger;
          threeD = new X.renderer3D();
          threeD.container = '3d';
          threeD.init();
        } catch(Exception) {
          // no webgl on this machine
          _webGLFriendly = false;
        }

       
        // we create the X.mesh 测试vtk文件
        var surface = new X.mesh();
        // map the data url to each of the slices

        surface.file='<%=str%>';
        surface.color = [1,0,0];
        threeD.add(surface);
        threeD.render();

    	 threeD.onShowtime = function() {

          	if (_webGLFriendly) {
            	threeD.camera.position = [-150, -50, 700];
            	threeD.camera.up = [0, 0, -1];
            	threeD.render();
          	} 

    	};
    };
      </script>
</html>