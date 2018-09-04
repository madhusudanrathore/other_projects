package URLPKG;

import java.net.*;

public class url4{
    public static void main(String[] args){
        try{
            InetAddress ip=InetAddress.getByName("www.lakshyafestldce.in");
            System.out.println("Host Name: "+ip.getHostName());
            System.out.println("IP Address: "+ip.getHostAddress());
        }catch(UnknownHostException e){System.out.println(e);}
    }
}