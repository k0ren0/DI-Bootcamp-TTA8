



#opening a file 
#old fashion way

# f = open("example.txt")
#     f.readlines()
# f.close()

# with open('example.txt', encoding = 'UTF-8', mode='w+') as f:
#     my_line = "HELLO TESTING"
#     my_line += f.read()
#     print(my_line)


# with open('example.txt', encoding='utf-8', mode='r') as f:
#     original_text = f.read()
#     print(original_text)

## Writing to the file
# with open('example.txt', encoding='utf-8', mode='w+') as f:
#     original_text = f.read()
#     my_line = original_text + "\nHELLO TESTING v3"
#     f.write(my_line)

def read_and_write (file_name, text_add):
    with open(file_name, encoding = 'utf-8', mode='r+') as f:
        f.read()
        f.write(text_add)
        final_f = f.readlines()

        return final_f
    
print(read_and_write("exemper.txt", "adding from function"))


    






    