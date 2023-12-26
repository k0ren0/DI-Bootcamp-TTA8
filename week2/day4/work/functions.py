# #functions

# def say_hello(username, language):
#     if language == "EN":
#         print("Hello "+username)
#     elif language == "FR":
#         print("Bonjour "+username)
#     else:
#         print("" +username, "This language is not supported: " +language)

# say_hello("Rick", "FR")

# username = "Rick"
# language = "FR"

# say_hello(username="Rick", language="FR")
# say_hello(language="FR", username="Rick")
# say_hello("Rick", language="FR")

#         #don't work

# # say_hello("FR", "Rick")
# # say_hello(username="Rick", "FR") 
# # say_hello("Rick")
# # OR
# # say_hello(username="Rick")

# say_hello("Rick", "RU")
# say_hello("Viktor", "FR")
# say_hello("Viktor", "RU")



###RETURN

# Ex1
# def get_formatted_name(first_name, last_name):
#     """Return a full name, neatly formatted."""
#     full_name = first_name + ' ' + last_name
#     return full_name.title()

# musician = get_formatted_name('jimi', 'hendrix') 
# print(musician)

# Ex2
# square_input = int(input("Введи число, "))

# def square(number:int)-> int: #Тут вопрос
#      num_squared = number**2
#      return num_squared

# print(square(square_input))

# Ex3

# def country_info(country)-> tuple:
#     if country == "Israel":
#         population = "9200000"
#         capital = "Jerusalim"
#     if country == "Russia":
#         population = "1143400000"
#         capital = "Moskow"
#     if country == "Brazil":
#         population = "214300000"
#         capital = "Brasilia"
    
#     return population, capital    

# print(country_info("Russia"))

# a = country_info("Israel")

# print(f"The population is {a[0]}")


# def calculation(a, b):

#     addition_result = a + b
#     subtraction_result = a - b 
#     return addition_result, subtraction_result

# res = calculation(40, 10)
# print(res)

num1 = int(input("Input first number: "))
num2 = int(input("Input second number: "))

def calculation(num1, num2):

    addition_result = num1 + num2
    subtraction_result = num1 - num2 
    return addition_result, subtraction_result

a, b = calculation(num1, num2)
print (a, b)

# res = calculation(num1, num2)
# print(res)






