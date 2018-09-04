import javax.servlet.*;
import javax.servlet.http.*;
import java.io.*;
import java.util.*;

public class Servlet1 extends HttpServlet{
	public void doGet(HttpServletRequest request, HttpServletResponse response) throws IOException, ServletException{

		response.setContentType("text/plain");
		PrintWriter out = response.getWriter();

		String str1 = request.getMethod();
		String str2 = request.getHeader("User-Agent");
		HttpSession str3 = request.getSession();
		Cookie str4[] = request.getCookies();

		String str5 = request.getParameter("color");

		response.setHeader("User-Agent", "MADHUSUDAN RATHORE");
		response.addHeader("AGE", "19");
		String str6 = response.getHeader("User-Agent");
		String str7 = response.getHeader("AGE");

		out.println( "METHOD:\t" + str1 );
		out.println( "HEADER:\t" + str2 );
		out.println( "SESSION:\t" + str3 );
		out.println( "COOKIES:\t" + str4 );
		out.println( "SINGLE PARAMETER:\t" + str5 );
		out.println( "RESPONSE SET HEADER:\t" + str6 );
		out.println( "RESPONSE ADD HEADER:\t" + str7 );

		out.close();
	}
}