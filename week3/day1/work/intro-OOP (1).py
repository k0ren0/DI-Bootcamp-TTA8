from datetime import date


#Focusing first on the data: each thing or object is an instance of some class.

string_ex = 'I love python'
num_ex = 123

print(type(num_ex))

class Dog():
    pass

dianas_dog = Dog()

dianas_dog.name = 'Lieto'
print(dianas_dog.name)


# -----------> about  __init__(): 

class Dog:
    
    def __init__(self, name, color, height, favorite_toys):
        print('an object was created') #This line is just to exemplify
        self.name = name
        self.color = color
        self.height = height
        self.favorite_toys = favorite_toys

    def bark(self):
        print(f"{self.name} barks ! WAF")

    def walk(self,distance:int):
        print(f'{self.name} walks {distance} km')

    def rename(self, new_name):
        self.name = new_name
        return self.name

#creating objects/instances and calling methods on them.

alex_dog = Dog('Rex', 'beige',80, ['ball', 'mouse', 'shoe']) #creating object
print(alex_dog.name, alex_dog.color)

alex_dog.favorite_toys.append('rope')
print(alex_dog.favorite_toys)

print(alex_dog.__dict__) #The object/dictionary that is created behinf the scenes

john_dog = Dog('Flufy', 'white', 1.10, ['ball', 'shoe'])
john_dog.bark() #calling a method in a object/instance

alex_dog.walk(5) #calling a method with argument in a object/instance
alex_dog.rename('Korn')
print(alex_dog.name)

dianas_dog = Dog('Lieto', 'brown and white', 70, ['ball', 'mouse', 'shoe'])

all_dogs = [alex_dog.name, john_dog.name, dianas_dog.name] #list of objects attributes
print(all_dogs)

all_dogs = [alex_dog, john_dog, dianas_dog] #list of objects

for dog in all_dogs:
    print(dog.name)

for dog in all_dogs:
    dog.bark()



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


