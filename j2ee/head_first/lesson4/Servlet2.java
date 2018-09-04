import javax.servlet.*;
import javax.servlet.http.*;
import java.io.*;
import java.util.*;

public class Servlet2 extends HttpServlet{
	public void doGet(HttpServletRequest request, HttpServletResponse response) throws IOException, ServletException{

		response.setContentType("text/plain");
		PrintWriter out = response.getWriter();

		response.sendRedirect("https://www.google.com");

		out.close();
	}
}