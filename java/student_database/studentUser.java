package studentdatabase;

import java.io.FileWriter;
import java.io.IOException;
import java.util.Scanner;

public class studentUser {
    private String firstName;
    private String lastName;
    private String gradeYear;
    private int gradeYearInt;
    private int ID;
    private static int studentCounter = 0;
    private String course = "";
    private int tutionBalance = 0;
    private final int costOfCourse = 600;
    
    public studentUser(){
        ++studentUser.studentCounter;
        Scanner input = new Scanner(System.in);
        
        System.out.print("ENTER FIRST NAME\t");
        this.firstName = input.nextLine().toUpperCase();
        
        System.out.print("ENTER LAST NAME\t");
        this.lastName = input.nextLine().toUpperCase();
        
        this.gradeYearSelect();
        
        this.setID();
        
        this.setCourse();
        
        System.out.println("DATA SAVED");
    }
    private void gradeYearSelect( ){
        Scanner input = new Scanner(System.in);
        boolean entered = false;
        
        while( !entered ){
            System.out.println("ENTER YEAR");
            System.out.println("1)FIRST\n2)SECOND\n3)THIRD\n4)FOURTH");
            
            this.gradeYearInt = input.nextInt();
            switch( this.gradeYearInt ){
                case 1:
                    this.gradeYear = "FIRST";
                    entered = true;
                    break;
                case 2:
                    this.gradeYear = "SECOND";
                    entered = true;
                    break;
                case 3:
                    this.gradeYear = "THIRD";
                    entered = true;
                    break;
                case 4:
                    this.gradeYear = "FOURTH";
                    entered = true;
                    break;
                default:
                    System.out.println("ERROR CHOICE\nENTER YEAR AGAIN\t");
                    break;
            }
        }
    }
    private void setID(){//3 088
        this.ID = this.gradeYearInt*1000 + studentUser.studentCounter;
    }
    private void setCourse(){
        Scanner input = new Scanner(System.in);
        int choice;
        boolean entered = false;
        
        while( !entered ){
            System.out.println("ENTER COURSE");
            System.out.println("1)History 101\n2)Mathematics 101\n3)English 101\n4)Chemistry 101\n5)Computer Science 101\n6)DONE");
            
            choice = input.nextInt();
            switch( choice ){
                case 1:
                    this.course += "History 101\n";
                    this.tutionBalance += this.costOfCourse;
                    break;
                case 2:
                    this.course += "Mathematics 101\n";
                    this.tutionBalance += this.costOfCourse;
                    break;
                case 3:
                    this.course += "English 101\n";
                    this.tutionBalance += this.costOfCourse;
                    break;
                case 4:
                    this.course += "Chemistry 101\n";
                    this.tutionBalance += this.costOfCourse;
                    break;
                case 5:
                    this.course += "Computer Science 101\n";
                    this.tutionBalance += this.costOfCourse;
                    break;
                case 6:
                    entered = true;
                    break;
                default:
                    System.out.println("ERROR CHOICE");
                    break;
            }
        }
    }
    protected final void writeData( ){
        String filename= "data.txt";
        
        try ( FileWriter fw = new FileWriter(filename,true) ) {
            fw.write("Name:\t" + this.firstName + " " + this.lastName );
            fw.write( "\nGrade Year:\t" + this.gradeYear );
            fw.write( "\nCourses Enrolled in:\n" + this.course );
            fw.write( "ID:\t" + this.ID );
            fw.write( "\nPending Tution Balance:\t₹" + this.tutionBalance);
            fw.write("\n\n\n");
            System.out.println("DATA WRIITEN TO DISK");
        }catch(IOException ioe){
            System.err.println("IOException: " + ioe.getMessage());
        }
        
    }
}
