
# # #----------------------------------------------------------------
# # #Exercise 1 : Pets
# # #----------------------------------------------------------------

# class Pets():
#     def __init__(self, animals):
#         self.animals = animals

#     def walk(self):
#         for animal in self.animals:
#             print(animal.walk())

# class Cat():
#     is_lazy = True

#     def __init__(self, name, age):
#         self.name = name
#         self.age = age

#     def walk(self):
#         return f'{self.name} is just walking around'

# class Bengal(Cat):
#     def sing(self, sounds):
#         return f'{sounds}'

# class Chartreux(Cat):
#     def sing(self, sounds):
#         return f'{sounds}'
    
# class Siamese(Cat):
#     def sing(self, sounds):
#         return f'{sounds}'
    
# bengal_cat = Bengal("BengalCat", 3)
# chartreux_cat = Chartreux("ChatreuxCat", 5)
# siamese_cat = Siamese("SiamesCat", 7)

# all_cats = [bengal_cat, chartreux_cat, siamese_cat]
# sara_pets = Pets(animals=all_cats)
# sara_pets.walk()

   

# #----------------------------------------------------------------
# #Exercise 2 : Dogs
# #----------------------------------------------------------------

class Dog:
    def __init__(self, dog_name, dog_age, dog_weight) -> None:
        self.name = dog_name
        self.age = dog_age
        self.weight = dog_weight

    def bark(self):
        return f"{self.name} is barking"
    
    def run_speed(self):
        return self.weight / self.age * 10
    
    def fight(self, other_dog):
        power = self.run_speed()
        other_power = other_dog.run_speed()

        if power > other_power:
            return f"{self.name} win"
        elif power < other_dog:
            return f"{other_dog.name} win"
        else:
            return "draw"
            

dog1 = Dog("Rex", 8, 20)
dog2 = Dog("Zeron", 5, 25)
dog3 = Dog("Frenk", 7, 35)

dogs = [dog1, dog2, dog3]

winner = max(dogs, key=lambda dog: dog.run_speed() * dog.weight) 
print(winner.fight(other_dog = [dog for dog in dogs if dog != winner][0])) #The solution is interesting, but I found it and finished it. If I'm not mistaken, we did a similar one in the classroom



            
        