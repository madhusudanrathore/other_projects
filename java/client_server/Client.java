package practical1;

import java.io.*;
import java.net.*;
import java.util.*;
class Client{
	public static void main(String []args){
		try{
			while(true){
			Scanner sc = new Scanner(System.in);
			Socket client_socket = new Socket("localhost",1234);
			System.out.println("Enter a String to communicate with server");
			String input = sc.nextLine();
			OutputStream os = client_socket.getOutputStream();
			DataOutputStream dos = new DataOutputStream(os);
			InputStream is = client_socket.getInputStream();
			InputStreamReader dis = new InputStreamReader(is);
			BufferedReader bf = new BufferedReader(dis);
			dos.writeBytes(input+"\n");
			String output = bf.readLine();
			System.out.println(output+"\n");
			}
		}
		catch(Exception e){
			System.out.println(e);
		}
	}
}