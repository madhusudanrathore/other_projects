package com.example.web;

import com.example.model.*;//importing our servlet
//import com.*;
import javax.servlet.*;
import javax.servlet.http.*;
import java.io.*;
import java.util.*;

public class SelectBeerClass extends HttpServlet{
	public void doPost(HttpServletRequest request, HttpServletResponse response) throws IOException, ServletException{

		response.setContentType("text/html");
		PrintWriter out = response.getWriter();
		out.println("BEER SELECTION ADVICE<br>");
		String colorStr = request.getParameter("color");
		//out.println("<br><br>GOT COLOR TO BE " + colorStr );	//VERSION 1

		//using our SERVLET for retrieving data
		BeerExpert be = new BeerExpert();
		List result = be.getBrands(colorStr);
		Iterator it = result.iterator();

		while(it.hasNext()){
			out.print("<br>try:" + it.next() );
		}

		// request.setAttribute("styles",result);
		// RequestDispatcher view = request.getRequestDispatcher("result.jsp");
		// view.forward(request, response);
		out.close();
	}
}