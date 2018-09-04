package bankapplication;

import java.io.FileWriter;
import java.io.IOException;
import java.util.Date;
import java.util.Scanner;

public abstract class Account implements InterestRate {
    private String firstName;
    private String lastName;
    private String aadharNumber;
    protected String accountNumber;
    private double balance;
    private static int uniqueID = (int)( Math.random() * Math.pow(10, 5) );
    private String dateofCreation;
    protected double rate;
    protected Scanner readinp = new Scanner( System.in );

    public Account(){
        this.getName();
        this.getAadharNumber();
        this.getBalance();
        this.getDate();
        ++Account.uniqueID;
        this.accountNumber = setAccountNumber();
    }
    private String setAccountNumber(){
        String setNumber;
        setNumber = this.aadharNumber.substring( this.aadharNumber.length()-2, this.aadharNumber.length() );
        int temp = Account.uniqueID;
        int randomNumber = (int)( Math.random() * Math.pow(10, 3) );

        setNumber = setNumber + String.valueOf( temp ) + String.valueOf( randomNumber );
        return setNumber;
    }
    public void deposit( final double amount ){
        this.balance += amount;
        System.out.println("\n\n");
        System.out.println( "₹" + amount + " DEPOSITED");
        this.showBalance();
        System.out.println("\n\n");
    }
    public void withdraw( final double amount ){
        this.balance -= amount;
        System.out.println("\n\n");
        System.out.println( "₹" + amount + " WITHDRAWED");
        this.showBalance();
        System.out.println("\n\n");
    }
    public void transfer( final String receipient, final double amount ){
        this.balance -= amount;
        System.out.println("\n\n");
        System.out.println( "₹" + amount + " TRANSFERRED TO " + receipient );
        this.showBalance();
        System.out.println("\n\n");
    }
    public void compoundInterest(){
        double accruedSum = this.balance * (this.rate / 100);
        this.balance += accruedSum;
        System.out.println( "ACCRUED INTEREST SUM:\t" + accruedSum );
        this.showBalance();
        System.out.println("\n\n");
    }
    private void getName(){
        System.out.println("ENTER FIRST NAME:\t");
        this.firstName = readinp.nextLine().toUpperCase();
        System.out.println("ENTER LAST NAME:\t");
        this.lastName = readinp.nextLine().toUpperCase();
    }
    private void getAadharNumber(){
        System.out.println("ENTER AADHAR NUMBER:\t");
        this.aadharNumber = readinp.nextLine().toUpperCase();
    }
    private void getBalance(){
        System.out.println("ENTER AMOUNT TO BE ADDED( minimum ₹5000 ):\t");
        this.balance = Double.parseDouble( readinp.nextLine() );
    }
    private void getDate(){
        Date d = new Date();
        this.dateofCreation = d.toString();
        System.out.println( "DATE SET TO " + this.dateofCreation );
    }
    protected void showInfo(){
        this.showName();
        this.showAccountNumber();
        this.showAadharNumber();
        this.showBalance();
        this.showDate();
    }
    private void showName(){
        System.out.println( "NAME:\t" + this.firstName + " " + this.lastName );
    }
    private void showAccountNumber(){
        System.out.println( "ACCOUNT NUMBER:\t" + this.accountNumber );
    }
    private void showAadharNumber(){
        System.out.println( "AADHAR NUMBER:\t" + this.aadharNumber );
    }
    public void showBalance(){
        System.out.println( "ACCOUNT BALANCE:\t₹" + this.balance );
    }
    public void showDate(){
        System.out.println( "ACCOUNT CREATED ON:\t" + this.dateofCreation );
    }
    protected void writeData( ){
        String filename= "data.txt";
        
        try ( FileWriter fw = new FileWriter(filename,true) ) {
            fw.write("\nNAME:\t" + this.firstName + this.lastName );
            fw.write("\nACCOUNT NUMBER:\t" + this.accountNumber );
            fw.write("\nAADHAR NUMBER:\t" + this.aadharNumber );
            fw.write("\nACCOUNT BALANCE:\t₹" + this.balance );
            fw.write("\nACCOUNT CREATED ON:\t" + this.dateofCreation );
            fw.close();
        }catch(IOException ioe){
            System.err.println("IOException: " + ioe.getMessage());
        }
    }
}