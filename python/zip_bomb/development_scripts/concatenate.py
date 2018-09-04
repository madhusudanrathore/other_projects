read_file =open("file.txt", "r")
content = read_file.read()

write_file = open("final.iso","a+")

for x in range(1,15):
	write_file.write(content)

write_file.close()
read_file.close()