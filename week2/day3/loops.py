# my_books = {
#   "title": "Harry Potter",
#   "author": "JK Rowling",
# }

# for key, value in my_books.items():
#     print(f"the {key} is {value}")

#############################################

# for item in enumerate('abcd'):
#     print(item)

# list1 = [1,2,3]
# list2 = ['a','b','c']
# list3 = [1.1, 2.2, 3.3, 4.4, 5.5]

# for item in zip(list1, list2, list3):
#     print(item)

#############################################

# for i in range(1, 6):
#     print(i)
# else:
#     print('The for loop is over')

# # NEW VERSION

# count = 0
# while count <= 5:
#     print(count)
#     count += 1
# else:
#     print("count is more than 5")


#############################################

# for letter in 'Leonardo':
#     if letter == 'o':
#         continue
#     print(letter, end='') # dont execute for 'o' letter



#############################################
# V1

some_nums = []

for num in range(1, 6):
    some_nums.append(num)
print(some_nums)

#V2
my_number = "12345"
my_list = []

for num in my_number:
    my_list.append(int(num))
    # my_list_N=int([my_list])
print(my_list)

#V3
some_nums = [num for num in range(1, 6)]
print(some_nums)
