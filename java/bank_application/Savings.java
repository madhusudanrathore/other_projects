package bankapplication;

import java.io.FileWriter;
import java.io.IOException;

public class Savings extends Account {
    private int safetyDepositBoxID;
    private int safetyDepositBoxKey;

    public Savings(){
        super();
        this.accountNumber = "1" + this.accountNumber;
        this.setSavingsDepositBox();
        this.setRate();
        System.out.println("********** SAVING ACCOUNT CREATED SUCCESSFULLY **********");
    }
    private void setRate(){
        this.rate = getBaseRate() - 0.25;
    }
    @Override
    public void showInfo(){
        System.out.println("\n\n");
        System.out.println("********** SAVING ACCOUNT DETAILS **********");
        super.showInfo();
        System.out.println( "BANKING RATE:\t" + this.rate + "%" );
        System.out.println( "SAFETY DEPOSIT BOX ID:\t" + this.safetyDepositBoxID );
        System.out.println( "SAFETY DEPOSIT BOX KEY:\t" + this.safetyDepositBoxKey );
    }
    private void setSavingsDepositBox(){
        this.safetyDepositBoxID = (int)( Math.random() * Math.pow(10, 3) );
        this.safetyDepositBoxKey = (int)( Math.random() * Math.pow(10, 4) );
    }
    @Override
    protected void writeData( ){
        super.writeData();
        
        String filename= "data.txt";
        try ( FileWriter fw = new FileWriter(filename,true) ) {
            fw.write("\nSAFETY DEPOSIT BOX ID:\t" + this.safetyDepositBoxID );
            fw.write("\nSAFETY DEPOSIT BOX KEY:\t" + this.safetyDepositBoxKey );
            fw.write("\n\n");
            fw.close();
        }catch(IOException ioe){
            System.err.println("IOException: " + ioe.getMessage());
        }
    }
}