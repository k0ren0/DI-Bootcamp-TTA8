#     #LISTS

# f_name = "Harry Potter"
# age = 33
# heigh = 1.78
# wizard = True
# profession = "teaher"
# house = "Grifyndor"

# users_a = [f_name, age, heigh, wizard, profession, house] #square branche
# users_b = list(f_name) #list constructor
# users_c = ["Harry Potter", 33, 1.70, True]
# new_user = ["Ron Weasley", 34, 1.8, True]


    # print(users_a, users_b)

#     # METHODS

# wife = "Gina Weasley"
# users_a.append(wife)

# print(users_a)
# print(users_a[1:3]) #slicing/indexing



    #TUPLES
# passwords1 = ("some_pass", "other_pass")
# passwords2 = ("3th_pass", "4th_pass")

# print(type(passwords1))
# passwords3 = passwords1 + passwords2

# print(passwords3)

# print(passwords3[-1])

    #STRINGS * a sequence of chars ONLY

# some_str = "Python"
# print(some_str[1:4]) #I can access indexes

# users_a.remove (33)
# print(users_a)

# users_c.remove("Harry Potter")
# users_c.pop(1)
# print(users_c)


    #ADDING LISTS

    #a) +

# print(users_c + new_user)

    #b) append()
# users_c.append(new_user)s

    #c) extend()
# users_c.extend(new_user)

# print(users_c)
# print(len(users_c))

# EX1

# list1 = [5, 10, 15, 20, 25, 50, 20]
# print(list1.index(20))

# if 20 in list1:
#     index_of_20 = list1.index(20)
#     list1.remove(20)
#     list1.insert(index_of_20,200)

# print(list1)
# print(sum(list1))


# some_str = "Python"
# print(some_str(1:4)) #can access indexes

    #unpacking tupples

# a,b,c,d = (2,4,6,8)
# print(a)
# print(b)
# print(c)
# print(d)

    #SETS
my_set = set()
my_set2 = {60, 14, "Rick", "Anna",}

my_set.add("Rick")
my_set.add("Morty")
my_set.add("Rick")

# print(my_set2)

print(my_set.intersection(my_set2))

print(my_set.union(my_set2))