    # ----------------------------------------------------------------
    # Exercise 1 : What Are You Learning ?
    # ----------------------------------------------------------------

# def display_message():
#     message = "I'm learning programming in this course."
#     print(message)

# display_message()

    # ----------------------------------------------------------------
    # Exercise 2: What’s Your Favorite Book ?
    # ----------------------------------------------------------------

# title = input("One of my favorite books is: ")

# def favorite_book(title):
#     return title

# title_customer = favorite_book(title)
# print(f"One of my favorite books is {title_customer}")

    # ----------------------------------------------------------------
    # Exercise 3 : Some Geography
    # ----------------------------------------------------------------


# def describe_city(city, country):
#     print(city + " is in " + country)
#     return city, country

# describe_city("Minsk", "Belarus")


    # ----------------------------------------------------------------
    # Exercise 4 : Random
    # ----------------------------------------------------------------

# import random

# title = int(input("Input your number 1-100: "))
# def randomizer ():
#     gen_num = random.randint(1,101) 
#     if title == gen_num:
#         print(f"You are lucky. Compare {title}")
#         print("\n")
#     else: 
#         print(f"You'll be lucky next time! Numbers were: {title} and {gen_num}")

#     return title, gen_num

# randomizer()


#     # ----------------------------------------------------------------
#     # Exercise 5 : Let’s Create Some Personalized Shirts !
#     # ----------------------------------------------------------------

# def make_shirt(size, text):
#     print(f'The size of the shirt is {size} and the text is "{text}"')

# make_shirt(38, "Nice size")
# make_shirt(size="Large", text="I love Python")

# make_shirt(size="Large", text="Don't buy it")
# make_shirt(size="medium", text="Don't buy it")
# make_shirt(size="small", text="Don't buy it")


    # ----------------------------------------------------------------
    # Exercise 6 : Magicians …
    # ----------------------------------------------------------------

magician_names = ['Harry Houdini', 'David Blaine', 'Criss Angel']

def show_magicians(magicians):
    for magician in magicians:
        print(magician)

def make_great(magicians):
    great_magicians = []
    for magician in magicians:
        great_magician = "the Great " + magician
        great_magicians.append(great_magician)
    return great_magicians


show_magicians(magician_names)

great_magician_names = make_great(magician_names)
show_magicians(great_magician_names)












