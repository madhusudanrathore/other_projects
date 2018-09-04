# http://www.toptechboy.com/raspberry-pi/raspberry-pi-lesson-27-analog-voltages-using-gpio-pwm-in-python/

import RPi.GPIO as GPIO

output=11

GPIO.setmode(GPIO.BOARD)
GPIO.setup(output,GPIO.OUT)


my_pwm=GPIO.PWM(output,100)
my_pwm.start(50)

while 1:
	i=0
	while i<100:
		GPIO.output(output,True)
		GPIO.output(output,False)
		my_pwm.ChangeDutyCycle(i)
		# my_pwm.ChangeFrequency(1000)


my_pwm.stop()
GPIO.cleanup()