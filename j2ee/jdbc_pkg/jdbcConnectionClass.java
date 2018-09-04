package jdbcPkg;

import java.sql.DriverManager;
import java.sql.Connection;

public class jdbcConnectionClass {
    public static Connection conn = null;
    public boolean getConn(){
        boolean flag = false;
        try{
            Class.forName("com.mysql.jdbc.Driver");
            conn = DriverManager.getConnection("jdbc:mysql://localhost:3306/chat_system", "root", "");
        }catch( Exception e ){
            e.printStackTrace();
            flag = false;
        }
        return flag;
    }
}