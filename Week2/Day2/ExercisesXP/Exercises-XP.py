    # Exercise 1 : Set
    # ----------------------------------------------------------------

# my_fav_numbers = [23, 3, 27, 13, 55, 84, 8]
# # print(my_fav_numbers)
# my_fav_numbers.append(87)
# my_fav_numbers.append(52)
# print(my_fav_numbers)
# # my_fav_numbers.pop(-1)

# friend_fav_numbers = [19, 2, 77, 78, 44]

# our_fav_numbers = my_fav_numbers + friend_fav_numbers
# print(our_fav_numbers)

    # ----------------------------------------------------------------
    # Exercise 2: Tuple
    # ----------------------------------------------------------------

# #No, tuples in Python are immutable, which means their elements cannot be changed or modified after the tuple is created. Once you create a tuple, you cannot add, remove, or modify elements in-place.
# # Original tuple
# first_tuple = (1, 2, 3)

# # Creating a new tuple with additional integers
# new_tuple = first_tuple + (4, 5, 6)

# print(new_tuple)

    # ----------------------------------------------------------------
    # Exercise 3: List
    # ----------------------------------------------------------------


# basket = ["Banana", "Apples", "Oranges", "Blueberries"]
# basket.remove("Banana")
# basket.pop(-1)
# basket.append("Kiwi")
# basket.insert(0, "Apples")
# apples_count = basket.count("Apples")
# basket.clear()
# print(basket)


    # ----------------------------------------------------------------
    # Exercise 4: Floats
    # ----------------------------------------------------------------

# sequence_length = 8
# start_value = 1.5
# step_size = 0.5

# float_sequence = [start_value + i * step_size for i in range(sequence_length)]
# print(float_sequence)


    # ----------------------------------------------------------------
    # Exercise 5: For Loop
    # ----------------------------------------------------------------

# numbers = list(range(1, 21))

# print("Numbers from 1 to 20:")
# print(numbers)
# print("\n")

# for i in range(0, 21, 2):
#     print(i, end=" ")


    # ----------------------------------------------------------------
    # Exercise 6 : While Loop
    # ----------------------------------------------------------------


# name = ''
# while name != 'Viktor':
#   name = input('What is your name? ')
# print('You guessed the right name!')


    # ----------------------------------------------------------------
    # Exercise 7: Favorite Fruits
    # ----------------------------------------------------------------

# favorite_fruits_input = input("Enter your favorite fruit(s) separated by a space : ")
# favorite_fruits_list = favorite_fruits_input.split()
# chosen_fruit = input("Now, enter a name of any fruit: ")
# if chosen_fruit in favorite_fruits_list:
#     print("You chose one of your favorite fruits! Enjoy!")
# else:
#     print("You chose a new fruit. I hope you enjoy.")


    # ----------------------------------------------------------------
    # Exercise 8: Who Ordered A Pizza ?
    # ----------------------------------------------------------------

# toppings = []
# total_price = 10  # Base pizza's price

# while True:
#     topping = input("Enter a pizza topping (type 'quit' to finish): ")

#     if topping.lower() == 'quit':
#         break

#     toppings.append(topping)
#     total_price += 2.5 #add topping

#     print(f"Adding {topping} to your pizza.")

# print("\nYour pizza toppings:")
# for topping in toppings:
#     print(f"- {topping}")

# print(f"\nTotal price for your pizza: ${total_price}")


    # ----------------------------------------------------------------
    # Exercise 9: Cinemax
    # ----------------------------------------------------------------


# def calculate_ticket_cost(age):
#     if age < 3:
#         return 0
#     elif 3 <= age <= 12:
#         return 10
#     else:
#         return 15

# def main():
#     family_size = int(input("Enter the number of people in the family: "))
#     total_cost = 0

#     for _ in range(family_size):
#         age = int(input("Enter the age of the person: "))
#         ticket_cost = calculate_ticket_cost(age)
#         total_cost += ticket_cost

#     print(f"The total cost for the family's tickets is: ${total_cost}")

#   #Second part

#     teenagers = ["Alice", "Bob", "Charlie", "David", "Eva"]
#     allowed_teens = []

#     for teen in teenagers:
#         age = int(input(f"Enter the age of {teen}: "))
#         if 16 <= age <= 21:
#             allowed_teens.append(teen)

#     print("Final list of teenagers allowed to watch the movie:", allowed_teens)

# if __name__ == "__main__":
#     main()

    # ----------------------------------------------------------------
    # Exercise 10 : Sandwich Orders
    # ----------------------------------------------------------------


sandwich_orders = ["Tuna sandwich", "Pastrami sandwich", "Avocado sandwich", "Pastrami sandwich", "Egg sandwich", "Chicken sandwich", "Pastrami sandwich"]

while "Pastrami sandwich" in sandwich_orders:
    sandwich_orders.remove("Pastrami sandwich")

print("\n")
print("Updated sandwich orders:")
print(sandwich_orders)










