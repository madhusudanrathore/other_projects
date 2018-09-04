package URLPKG;

import java.io.*;
import java.net.*;

public class url2 {
    public static void main(String[] args) {
        try{
            URL url=new URL("http://lakshyafestldce.in/");

            System.out.println("Protocol: "+url.getProtocol());
            System.out.println("Host Name: "+url.getHost());
            System.out.println("Port Number: "+url.getPort());
            System.out.println("File Name: "+url.getFile());

            URLConnection urlcon=url.openConnection();  
            InputStream stream=urlcon.getInputStream();
            int i;
            while((i=stream.read())!=-1)
                System.out.print((char)i);

        }catch(Exception e){System.out.println(e);}
        
    }
}