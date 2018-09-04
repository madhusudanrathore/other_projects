package SOCKETPKG;

import java.io.DataInputStream;
import java.io.DataOutputStream;
import java.io.IOException;
import java.net.Socket;

class socket extends Thread{
    Socket s;
    DataInputStream dis;
    DataOutputStream dout;
    public socket() throws IOException{
        s = new Socket("localhost",6666);
        this.startConn();
        this.closeConn();
    }
    public void startConn() throws IOException{
        dout = new DataOutputStream(s.getOutputStream());
        dout.writeUTF( "SERVED PROCESSES" );
        dout.flush();
    }
    public void closeConn() throws IOException{
        dout.close();
        s.close();
    }
}
public class socketClient {
    public static void main( String []args ) throws IOException{
        socket client = new socket();
        client.start();
    }
}