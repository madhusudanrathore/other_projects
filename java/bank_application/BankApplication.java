package bankapplication;

public class BankApplication {
    public static void main(String[] args) {
        //write data after reading to from console
        Savings sav = new Savings();
        sav.showInfo();
        sav.writeData();
    }
}