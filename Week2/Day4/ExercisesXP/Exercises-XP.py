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

# magician_names = ['Harry Houdini', 'David Blaine', 'Criss Angel']

# def show_magicians(magicians):
#     for magician in magicians:
#         print(magician)

# def make_great(magicians):
#     great_magicians = []
#     for magician in magicians:
#         great_magician = "the Great " + magician
#         great_magicians.append(great_magician)
#     return great_magicians


# show_magicians(magician_names)

# great_magician_names = make_great(magician_names)
# show_magicians(great_magician_names)



    # ----------------------------------------------------------------
    # Exercise 7 : Temperature Advice
    # ----------------------------------------------------------------

 
# import random

# def gen_random_temp_lam(season):
#     if season == 'winter':
#         return random.randint(-10, 17)
#     elif season == 'spring':
#         return random.randint(16, 24)
#     elif season == 'summer':
#         return random.randint(32, 41)
#     elif season == 'autumn' or season == 'fall':
#         return random.randint(24, 33)
#     else:
#         print("Invalid season. Please enter 'summer', 'autumn', 'winter', or 'spring'.")

# def main():
#     user_season = input("Please enter a season ('summer', 'autumn', 'winter', 'spring'): ").lower()

#     if user_season in ['summer', 'autumn', 'winter', 'spring']:
#         temp_customer = gen_random_temp_lam(user_season)
#         print(f"The temperature right now in {user_season} is {temp_customer} degrees Celsius.")

#         if temp_customer < 0:
#             print("Brrr that's freezing! Wear some extra layers today.")
#         elif 0 <= temp_customer <= 16:
#             print("You chose a new fruit. I hope you enjoy.")
#         elif 16 < temp_customer <= 23:
#             print("You chose a new fruit. I hope you enjoy.")
#         elif 24 <= temp_customer <= 32:
#             print("You chose a new fruit. I hope you enjoy.")
#         else:
#             print("You are in Israel?)")
#     else:
#         print("Invalid season. Please enter 'summer', 'autumn', 'winter', or 'spring'.")

# main()



                       ##### FOR HISTORY !!!!!!!! VERSION p. 1-3
                        # import random

                        # gen_random_temp_lam = lambda: random.randint(-10, 40)

                        # # # # test
                        # # gen_degree_lam = gen_random_temp_lam ()
                        # # print(f"Random temperature: {gen_degree_lam}")

                        # def main(lamba_function):
                        #     temp_customer = lamba_function()
                        #     print(f"The temperature right now is {temp_customer} degrees Celsius.")
                        #     # return temp_customer

                        #     if temp_customer < 0:
                        #         print("Brrr that\'s freezing! Wear some extra layers today.")
                        #     elif 0 < temp_customer <= 16:
                        #         print("You chose a new fruit. I hope you enjoy.")
                        #     elif 16 < temp_customer <= 23:
                        #         print("You chose a new fruit. I hope you enjoy.")
                        #     elif 24 <= temp_customer <= 32:
                        #         print("You chose a new fruit. I hope you enjoy.")
                        #     else:
                        #         print("You are in the Antarktica?)")

                        # result_temp = main(gen_random_temp_lam)



    # ----------------------------------------------------------------
    # Exercise 8 : Star Wars Quiz
    # ----------------------------------------------------------------

data = [
    {
        "question": "What is Baby Yoda's real name?",
        "answer": "Grogu"
    },
    {
        "question": "Where did Obi-Wan take Luke after his birth?",
        "answer": "Tatooine"
    },
    {
        "question": "What year did the first Star Wars movie come out?",
        "answer": "1977"
    },
    {
        "question": "Who built C-3PO?",
        "answer": "Anakin Skywalker"
    },
    {
        "question": "Anakin Skywalker grew up to be who?",
        "answer": "Darth Vader"
    },
    {
        "question": "What species is Chewbacca?",
        "answer": "Wookiee"
    }
]

# def star_quiz(data):
    
#     right = 0
#     wrong = 0
#     wrong_answers = []
    
#     for dict_question in data:
#         print(dict_question["question"])
#         u_answer = input("Write your answer: ")
#         if u_answer == dict_question["answer"]:
#             right += 1
#         else:
#             wrong += 1
#             wrong_answers.append({"question": dict_question["question"], "user_answer": u_answer, "correct_answer": dict_question["answer"]})
        
#     return right, wrong, wrong_answers

# right, wrong, wrong_answers = star_quiz(data)

# print(f"\nNumber of correct answers: {right}")
# print(f"Number of wrong answers: {wrong}")
# print(f"\n")
# print("List of wrong answers:")
# for wrong_answer in wrong_answers:
#     print(f"Question: {wrong_answer['question']}")
#     print(f"Your Answer: {wrong_answer['user_answer']}")
#     print(f"Correct Answer: {wrong_answer['correct_answer']}\n")




         











