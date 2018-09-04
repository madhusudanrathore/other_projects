package jdbcPkg;

public class connectionDriver {
    public static void main( String args[] ){
        jdbcConnectionClass obj = new jdbcConnectionClass();
        System.out.println( obj.getConn() );
    }
}
