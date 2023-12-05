# #----------------------------------------------------------------
# # Exercise 1: Currencies
# #----------------------------------------------------------------

# class Currency:
#     def __init__(self, currency, amount):
#         self.currency = currency
#         self.amount = amount

#     def __str__(self) -> str:
#         return f"{self.amount} {self.currency}" + ('s' if self.amount != 1 else "")
    #     def __int__(self) -> int:
#         return self.amount
    #     def __repr__(self) -> str:
#         return f"{self.amount} {self.currency}" + ('s' if self.amount != 1 else "")
    
#     def __add__(self, other):
#         try: 
#             if isinstance(other, (int, float)):
#                 return Currency(self.currency, self.amount + other)
#             elif isinstance(other, Currency):
#                 if self.currency == other.currency:
#                     return Currency(self.currency, self.amount + other.amount)
#                 else:
#                     raise TypeError(f"Cannot add between different Currency type")
#             else:
#                 raise TypeError("Invalid type")    
#         except Exception as f:
#             print(f'Cannot add between different Currency type: {f}')
#             return None                    
        
#     def __iadd__(self, other):
#         try: 
#             if isinstance(other, (int, float)):
#                 self.amount += other
#             elif isinstance(other, Currency):
#                 if self.currency == other.currency:
#                     self.amount += other.amount
#                 else:
#                     raise TypeError(f"Cannot add between different Currency type")
#             else:
#                 raise TypeError("Invalid type")
#             return self
#         except Exception as f:
#             print(f'Cannot add between different Currency type: {f}')
#             return None     

# ### DATA
# c1 = Currency('dollar', 5)
# c2 = Currency('dollar', 10)
# c3 = Currency('shekel', 1)
# c4 = Currency('shekel', 10)

# print(str(c1))
# print(int(c1))
# print(repr(c1))
# print(c1)
# print(c1 + 5)
# print(c1 + c2)

# c1 += 5
# print(c1)  

# c1 += c2
# print(c1) 

# c1 + c3
# print(c1) 

# #----------------------------------------------------------------
# # Exercise 2: Import
# #----------------------------------------------------------------


# from funk import add_and_print as fn

# num1 = 5
# num2 = 7
# fn(num1, num2)


"""from funk import addandprint as ap_fn

num1 = 5
num2 = 7

ap_fn(num1, num2)"""
   

# #----------------------------------------------------------------
# # Exercise 3: String Module
# #----------------------------------------------------------------

# import random
# import string

# class Randomgenerator:
#     def __init__(self, length) -> None:
#         self.length = length
    
#     def __str__(self) -> str:
#         letters = string.ascii_uppercase
#         return "".join(random.choice(letters) for _ in range(length))
    
# length = 5
# random_str = Randomgenerator(length)
# print(random_str)


# #----------------------------------------------------------------
# # Exercise 4 : Current Date
# #----------------------------------------------------------------

# import datetime

# def datetoday():
#     today_date = datetime.date.today()
#     print(f"Today is {today_date.strftime('%d/%m')}")

# datetoday()


# # #----------------------------------------------------------------
# # # Exercise Exercise 5 : Amount Of Time Left Until January 1st
# # #----------------------------------------------------------------

# from datetime import datetime

# def calculate_timedelta():
#     current_date = datetime.now()
#     first_jan_date = datetime(current_date.year + 1, 1, 1)
#     time_difference = first_jan_date - current_date

#     days = time_difference.days
#     hours = time_difference.seconds // 3600
#     minutes = (time_difference.seconds % 3600) // 60
#     seconds = time_difference.seconds % 60

#     result = f"The 1st of January is in {days} days and {hours:02}:{minutes:02}:{seconds:02} hours."
#     print(result)


# calculate_timedelta()

# # #----------------------------------------------------------------
# # # Exercise 6 : Birthday And Minutes
# # #----------------------------------------------------------------

# from datetime import datetime

# def birth_minutes():
#     current_date = datetime.now()
#     birthday = datetime(1984, 3, 23)

#     time_difference = current_date - birthday
#     minutes = (time_difference.days * 24 * 60)
#     formatted_minutes = "{:,}".format(minutes)

#     print(f"The user lived in his life {formatted_minutes} minutes.")

# birth_minutes()


# # #----------------------------------------------------------------
# # # Exercise 7 : Faker Module
# # #----------------------------------------------------------------

from faker import Faker
import random

fake = Faker()
users = []

def gen_fake_user():
    user = {
        "name": fake.name(),
        "address": fake.address(),
        "language_code": random.choice(["en_US", "ru_RU", "he_IL"])
    }
    users.append(user)

def gen_fake_users(num_users):
    for _ in range(num_users):
        gen_fake_user()

gen_fake_users(5)

for user in users:
    print(user)











