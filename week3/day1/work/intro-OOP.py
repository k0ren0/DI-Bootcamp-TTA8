# dianas_dog = Dog()

# dianas_dog.name = "Leto"
# print(dianas_dog.neme)


class Dog():
    def __init__(self, name, color, height, favorite_toys):
        print('an object was creategd')
        self.name = name
        self.color = color
        self.height = height
        self.favorite_toys = []

    def bark(self):
        print(f"{self.name} barks ! WAF")

    def walk(self, distance:int):
        print(f"{self.name} walks {distance} km")

    def rename(self, new_name):
        self.name = new_name


alex_dog = Dog('Rex', 'biege', 80, "mouse")
alex_dog.walk(5)

john_dog = Dog("Flufy", "white", 75, "shoe")
john_dog.bark()

dianas_dog = Dog("Lieto", "brown and whote", 65, "bears")

# alex_dog.rename ("Korn")
# john_dog.rename ("Lili")

print(alex_dog.name, alex_dog.color)
print(alex_dog.__dict__)
print(john_dog.name, john_dog.color)



all_dogs = [alex_dog, john_dog, dianas_dog]

# print(all_dogs)

for dog in all_dogs:
    print(dog.bark())  #все лаят теперь)) 

for dog in all_dogs: 
    print(dog.name)

for index, dog in enumerate(all_dogs, 1):
    print(f"Dog #{index}: {dog.name}")



