package swing;

import java.awt.event.*;  
import javax.swing.*;    
class ButtonExample {  
    ButtonExample(){
        JFrame f=new JFrame("Button Example");  
        final JTextField tf=new JTextField();  
        tf.setBounds(50,50,200,20);  
        JButton b=new JButton("Click Here");
        b.setBounds(50,100,100,30);
        b.addActionListener(new ActionListener(){  
        public void actionPerformed(ActionEvent e){  
                tf.setText("MADHUSUDAN RATHORE");
            }  
        });  
        f.add(b);
        f.add(tf);
        f.setSize(400,400);
        f.setLayout(null);
        f.setVisible(true);
        f.setDefaultCloseOperation(JFrame.EXIT_ON_CLOSE);
    }
}

public class SWING {
    public static void main(String[] args) {
        ButtonExample btn = new ButtonExample();
    }
}