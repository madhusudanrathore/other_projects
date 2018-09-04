package URLPKG;

import java.io.IOException;
import java.net.*;

public class url3 {
    public static void main(String[] args) {
        try{
            URL url=new URL("http://lakshyafestldce.in/");
            HttpURLConnection huc=(HttpURLConnection)url.openConnection();
            for(int i=1;i<=8;i++)
                System.out.println(huc.getHeaderFieldKey(i)+" = "+huc.getHeaderField(i));
            huc.disconnect();
        }catch(IOException e){System.out.println(e);}        
    }
}