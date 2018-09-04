import java.sql.*;

class SampleClass{
	public static void main(String[] args) {
		try{
			Class.forName("com.mysql.jdbc.Driver");
			String db_url = "jdbc:mysql://localhost:3306/MADHU";
			String user = "root";
			String password = "";
			//get a connection step 1
			Connection conn = DriverManager.getConnection( db_url, user, password );
			//create a statement step 2
			Statement stat = conn.createStatement();
			//get result from database
			ResultSet res = stat.executeQuery("select * from demo_table");
			//process result set
			while( res.next() ){
				System.out.println( "ID\t" + res.getString("id") );
				System.out.println("NAME\t" + ( res.getString("firstname") + res.getString("lastname") ) );
			}
		}catch( Exception e ){
			System.out.println( e.getMessage() );
		}
	}
}