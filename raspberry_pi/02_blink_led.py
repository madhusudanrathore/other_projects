# http://www.toptechboy.com/raspberry-pi/raspberry-pi-with-lesson-26-controlling-gpio-pins-in-python/

import RPi.GPIO as GPIO

output=11

GPIO.setmode(GPIO.BOARD)
GPIO.setup(output,GPIO.OUT)

i=0
while i<100000:
	GPIO.output(output,True)
	GPIO.output(output,False)

GPIO.cleanup()