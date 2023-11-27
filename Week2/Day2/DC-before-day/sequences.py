    #LISTS

f_name = "Harry Potter"
age = 33
heigh = 1.78
wizard = True
profession = "teaher"
house = "Grifyndor"

users_a = [f_name, age, heigh, wizard, profession, house] #square branche
users_b = list(f_name) #list constructor
users_c = ["Harry Potter", 33, 1.70, True]

    # print(users_a, users_b)

    # METHODS

wife = "Gina Weasley"
users_a.append(wife)

# print(users_a)
print(users_a[1:3])


    #TUPLES
passwords1 = ("some_pass", "other_pass")
passwords2 = ("3th_pass", "4th_pass")
# print(type(passwords1))
passwords3 = passwords1 + passwords2

print(passwords3)

print(passwords3[-1])

    #STRINGS * a sequence of chars ONLY

some_str = "Python"
print(some_str[1:4]) #I can access indexes

