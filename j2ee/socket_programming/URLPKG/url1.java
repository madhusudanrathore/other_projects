import java.net.*;

public class url1 {
    public static void main(String[] args) {
        try{
            URL url=new URL("http://lakshyafestldce.in/");

            System.out.println("Protocol: "+url.getProtocol());
            System.out.println("Host Name: "+url.getHost());
            System.out.println("Port Number: "+url.getPort());
            System.out.println("File Name: "+url.getFile());
        }catch(MalformedURLException e){System.out.println(e);}
    }
}