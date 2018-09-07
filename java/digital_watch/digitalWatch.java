import javax.swing.*;
import java.time.LocalDateTime;
import java.time.format.DateTimeFormatter;
import java.util.logging.Level;
import java.util.logging.Logger;

class digitalWatchClass extends Thread{
    String  timeString = "";
    JFrame f = new JFrame("Digital Watch");
    JButton b=new JButton();
    DateTimeFormatter df = DateTimeFormatter.ofPattern("HH:mm:ss.SSS");
    digitalWatchClass(){
        b.setBounds( 300,100,150,100 );
        f.add(b);
        f.setSize(750,300);
        f.setLayout(null);
        f.setVisible(true);
        f.setLayout(null);
        f.setDefaultCloseOperation(JFrame.EXIT_ON_CLOSE);
    }
    @Override
    public void run(){
        while( true ){
            LocalDateTime dateTime = LocalDateTime.now();
            timeString = df.format( dateTime );

            b.setText( timeString );
            try {
                Thread.sleep( 1 );
            } catch (InterruptedException ex) {
                Logger.getLogger(digitalWatchClass.class.getName()).log(Level.SEVERE, null, ex);
            }
        }
    }
}

public class digitalWatch {
    public static void main( String args[] ){
        digitalWatchClass watch = new digitalWatchClass();
        watch.start();
    }
}
