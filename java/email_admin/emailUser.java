package emailadmin;

import java.util.Scanner;
import java.io.FileWriter;
import java.io.IOException;

public class emailUser {
    private String firstName;
    private String lastName;
    private String email;
    private String departmentName;
    final private String password = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890_";
    private String userPassword;
    private int minPasswordLength = 8;
    final private String companyNameSuffix = "rubixsolutions.com";
    private int mailBoxCapacity = 1;//1 MB
    
    public emailUser( ){
        Scanner input = new Scanner(System.in);
        
        System.out.print("ENTER FIRST NAME\t");
        this.firstName = input.nextLine().toUpperCase();
        
        System.out.print("ENTER LAST NAME\t");
        this.lastName = input.nextLine().toUpperCase();
        
        this.departmentSelect();
        
        this.autoSetEmail();
        
        //System.out.println(email);
        
        this.autoSetPassword();
        //System.out.println(userPassword);
        //System.out.println( this.getName() + " " + this.getEmail() + " " + this.getMailBoxCapacity() );
    }
    
    private void departmentSelect( ){
        Scanner input = new Scanner(System.in);
        boolean deptEntered = true;
        int dept;
        
        while( deptEntered ){
            System.out.println("SELECT DEPARTMENT");
            System.out.println("1).IT\n2).SALES\n3).MARKETING\n4).FINANCE\n5).HR\n6).None");
            dept = input.nextInt();
            switch( dept ){
                case 1:
                    this.departmentName = "IT";
                    deptEntered = false;
                    break;
                case 2:
                    this.departmentName = "SALES";
                    deptEntered = false;
                    break;
                case 3:
                    this.departmentName = "MARKETING";
                    deptEntered = false;
                    break;
                case 4:
                    this.departmentName = "FINANCE";
                    deptEntered = false;
                    break;
                case 5:
                    this.departmentName = "HR";
                    deptEntered = false;
                    break;
                case 6:
                    this.departmentName = "NONE";
                    deptEntered = false;
                    break;
                default:
                    System.out.println("ERROR CHOICE\nENTER DEPARTMENT AGAIN\t");
                    break;
            }
        }
    }
    private void autoSetEmail( ){
        int randNum = (int)( Math.random() * Math.random() * 786 + 1 );
        this.email = this.firstName.toLowerCase() + "." + this.lastName.toLowerCase() + "." + randNum + "@" + this.departmentName.toLowerCase() + "." + this.companyNameSuffix;
    }
    private void autoSetPassword( ){
        userPassword = "";
        int k;
        for ( int i = 0 ; i < this.minPasswordLength ; ++i ){
            k = ( int ) ( Math.random() * this.password.length() );
            userPassword += password.charAt( k );
        }
    }
    
    public String getName( ){ return this.firstName + " " + this.lastName; }
    public String getEmail( ){ return this.email; }
    public String getMailBoxCapacity( ){ return this.mailBoxCapacity + "MB"; }
    
    public void setPassword( ){}
    public void setMailBoxCapacity( ){
        int capacity;
        boolean done = false;
        
        while( !done ){
            System.out.print("ENTER CUSTOM MAIL BOX CAPACITY\t");
            Scanner input = new Scanner(System.in);
            capacity = input.nextInt();
            
            if( capacity <= 15 && capacity >= 0 ){
                this.mailBoxCapacity = capacity;
                System.out.println("MAIL BOX CAPACITY CHANGED to " + this.mailBoxCapacity + " MB" );
                done = true;
            }else{
                System.out.println( capacity + " INVALID MAIL BOX SIZE" );
                System.out.print( "AGAIN " );
            }
        }
    }
    public void setMail( ){}
    
    protected void writeData( ){
        String filename= "data.txt";
        
        try ( FileWriter fw = new FileWriter(filename,true) ) {
            fw.write("Name:\t" + this.firstName + this.lastName );
            fw.write( "\nEmail:\t" + this.email );
            fw.write( "\nDepartment Name:\t" + this.departmentName );
            fw.write( "\nPASSWORD:\t" + this.userPassword );
            fw.write( "\nMail Box Capacity:\t" + this.mailBoxCapacity + "MB");
            fw.write("\n\n\n");
        }catch(IOException ioe){
            System.err.println("IOException: " + ioe.getMessage());
        }
        
    }
}