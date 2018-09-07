package emailadmin;

public class EmailAdmin {
    public static void main(String[] args) {
        emailUser user = new emailUser();
        user.setMailBoxCapacity();
        user.writeData();
    }
}