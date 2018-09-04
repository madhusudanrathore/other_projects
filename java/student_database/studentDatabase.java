package studentdatabase;

import java.util.Scanner;

public class StudentDatabase {
    public static void main(String[] args) {
        System.out.print("ENTER NUMBER OF STUDENTS\t");
        Scanner input = new Scanner(System.in);
        int num = input.nextInt();
        
        studentUser[] user = new studentUser[num];
        
        for( int i = 0 ; i < num ; ++i ){
            System.out.println( "ENTER DATA FOR STUDENT NUMBER " + ( i + 1 ) );
            user[i] = new studentUser();
            user[i].writeData();
        }
    }
    
}
