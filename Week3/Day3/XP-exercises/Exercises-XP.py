# #----------------------------------------------------------------
# #Exercise 1: Currencies
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
# #Exercise 2: Import
# #----------------------------------------------------------------


from funk import add_and_print as fn

num1 = 5
num2 = 7
fn(num1, num2)



"""from funk import addandprint as ap_fn

num1 = 5
num2 = 7

ap_fn(num1, num2)"""


       


# #----------------------------------------------------------------
# #Exercise 3: String Module
# #----------------------------------------------------------------






