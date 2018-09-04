test_file = open("file.txt", "wb")

i = 0
while i<100000000:
	test_file.write(bytes("0", 'UTF-8'))
	i = i + 1

test_file.close()