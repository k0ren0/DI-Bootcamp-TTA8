# class MyClass:

#     def __init__(self, val) -> None:
#         self.val = self.filterint(val)
#         #self.val = val

#     @staticmethod
#     def filterint(value):
#         if not isinstance(value, int):
#             raise TypeError
#         else:
#             return value


# # a = MyClass(5)

# # print(a.val)

# b = MyClass('100')
# print(b.value)


class AtmAccount:

    available_acc_num = 2000

    def __init__(self, holder) -> None:
        self.__holder = holder #private
        self.__account_num = AtmAccount.available_acc_num
        self.__balance = 0
        AtmAccount.available_acc_num += 1

    @property #gives direct access to private attribute __balance
    def balance(self):
        return self.__balance
    
    @balance.setter# gives permission to change the value of the private attribute __balance
    def balance(self, amount):
        self.__balance = amount


    def deposit(self, amount):
        AtmAccount.validate_amount(amount)
        self.balance += amount
        return self.balance
    
    def withdraw(self, amount):
        AtmAccount.validate_amount(amount)
        if amount > self.balance:
            raise ValueError('Insuficient balance')
        else:
            self.balance -= amount

    @staticmethod #a function that need to be used just inside the class, usually to do some math in attributes, to check values
    def validate_amount(amount):
        if amount <= 0:
            raise ValueError('Cant be negative or zero')
        else:
            return amount
    
    
    @classmethod #a method that is related to the class and can be called directly in the class
    def get_next_acc_num(cls):
        if cls.available_acc_num > 2000:
            cls.available_acc_num += 1000
        return cls.available_acc_num
    
    def __str__(self):
        output = f'''Account Number: {self.__account_num}\nHolder: {self.__holder}\nBalance: {self.balance}'''
    
        return output
    
    def __iadd__(self, amount):
        self.deposit(amount)
        return self.balance
    
    def __add__(self, amount):
        self.deposit(amount)
        return self.balance


if __name__ == '__main__':
    account1 = AtmAccount('Juliana S.')
    account2 = AtmAccount('John Doe')
    account3 = AtmAccount('Leo DiCaprio')

    all_account = [account1, account2, account3]

    print(len(all_account)) 

    account1.deposit(500)
    account1.withdraw(100)

    account2.deposit(500)

    account1 + 500 #the dunder __add__() is called behind the scenes
    account1 += 500 #the dunder __iadd__() is called behind the scenes


    print(account1) #the dunder __str__ was called automaticly

#  TO CHECK ALL THE POSSIBLE DUNDER METHODS
    print(help(account1))

    # # account1.withdraw(500)

    # # print(account1.balance)

    # print(AtmAccount.available_acc_num)

    # print(AtmAccount.get_next_acc_num())
