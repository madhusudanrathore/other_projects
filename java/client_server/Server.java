package practical1;

import java.io.*;
import java.net.*;
import java.util.*;

class Server{
	public static void main(String args[]) throws IOException{
		ServerSocket server_socket=new ServerSocket(1234);
		while(true){
		Scanner sc = new Scanner(System.in);
		Socket client_socket= server_socket.accept();
		DataOutputStream dos=new DataOutputStream(client_socket.getOutputStream());
		InputStreamReader isr=new InputStreamReader(client_socket.getInputStream());
		BufferedReader bf=new BufferedReader(isr);
		String out=bf.readLine();
		System.out.println(out+"\n");
		String input = sc.nextLine();
		dos.writeBytes(input+"\n");
		client_socket.close();
		}
	}
}