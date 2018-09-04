package bankapplication;

import java.io.FileWriter;
import java.io.IOException;

public class Checking extends Account {
    private int debitCardNumber;
    private int debitCardPIN;
    public Checking(){
        super();
        this.accountNumber = "2" + this.accountNumber;
        this.setDebitCard();
        this.setRate();
        System.out.println("********** CHECKING ACCOUNT CREATED SUCCESSFULLY **********");
    }
    private void setRate(){
        this.rate = getBaseRate() * 0.15;
    }
    @Override
    public void showInfo(){
        System.out.println("\n\n");
        System.out.println("********** CHECKING ACCOUNT DETAILS **********");
        super.showInfo();
        System.out.println( "BANKING RATE:\t" + this.rate + "%" );
        System.out.println( "DEBIT CARD NUMBER:\t" + this.debitCardNumber );
        System.out.println( "DEBIT CARD PIN:\t" + this.debitCardPIN );
    }
    private void setDebitCard(){
        this.debitCardNumber = (int)( Math.random() * Math.pow(10, 12) );
        this.debitCardPIN = (int)( Math.random() * Math.pow(10, 4) );
    }
    @Override
    protected void writeData( ){
        super.writeData();
        
        String filename= "data.txt";
        try ( FileWriter fw = new FileWriter(filename,true) ) {
            fw.write("\nDEBIT CARD NUMBER:\t" + this.debitCardNumber );
            fw.write("\nDEBIT CARD PIN:\t" + this.debitCardPIN );
            fw.write("\n\n");
            fw.close();
        }catch(IOException ioe){
            System.err.println("IOException: " + ioe.getMessage());
        }
    }
}