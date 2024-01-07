from datetime import date

class BankAccount:

    def __init__(self, account_number, balance=0) -> None:
        self.account_number = account_number
        self.balance = balance
        self.transactions = [] #creating an attribute that is used inside the class = not relevant to the creation of the object

    def view_balance(self):
        print(f'The balance for {self.account_number} is ${self.balance}')
        self.transactions.append(f'{date.today()}: view_balance')
        return self.balance

    def deposit(self, dep_amount):
        if dep_amount <=0:
            print('invalid amount')
        elif dep_amount < 50:
            print ('minimal deposit is 100')
        else:
            self.balance += dep_amount
            self.view_balance()
            self.transactions.append(f'{date.today()}: deposit')
        return self.balance

    def withdraw(self, w_amount):
        if w_amount > self.balance:
            print('insufficient amoun')
        else:
            self.balance -= w_amount
            self.view_balance()
            self.transactions.append('withdraw')
        return self.balance


    def view_transactions(self):
        print('\n'.join(self.transactions))



account1 = BankAccount(1234567, 500)
account1.deposit(300)
account1.withdraw(100)
account1.view_transactions()