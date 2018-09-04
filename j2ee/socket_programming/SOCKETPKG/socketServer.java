package SOCKETPKG;

import java.io.DataInputStream;
import java.io.DataOutputStream;
import java.io.IOException;
import java.net.ServerSocket;
import java.net.Socket;

class server extends Thread{
    static int serviceCount = 0;
    ServerSocket ss;
    Socket s;
    DataInputStream dis;
    DataOutputStream dout;
    public server() throws IOException{
        ss = new ServerSocket(6666);
        while( true ){
            s = ss.accept();//establishes connection

            dis = new DataInputStream(s.getInputStream());
            String  str=(String)dis.readUTF();
            System.out.println( str + " " + ( ++serviceCount ) );
        }
    }
    public void closeConn() throws IOException{
        ss.close();
    }
}

public class socketServer {
    public static void main( String args[] ) throws IOException{
        server service = new server();
        service.start();
    }
}