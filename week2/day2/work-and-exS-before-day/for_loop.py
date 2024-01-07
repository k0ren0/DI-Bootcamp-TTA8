    #STUDENTS

# students = ["Lior", "Sveta", "Estee", "David"]

# for each_student in students:
#     if each_student is "Sveta":
#         print("Happy b-day, Sveta")
#     else:
#         print(f'hello, {each_student}')


    #for loop + range
# for i in range(1,11,2):
#     print(i)

# some_l = list(range(1,11))
# print(some_l)

# print(sum(some_l))

# result = 0
# for i in some_l:
#     result += 1

# print(result)

# current_number = 1 
# while current_number <= 10:    
#     print(current_number)   
#     current_number += 1

# print("Finished")

user_str = input("give a word 10 chars: ")

while len(user_str) != 10:
    
    if user_str == "quit":
        print("Thanks for playing")
        break
    else:
        user_str = input("give a word: ")
