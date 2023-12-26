# #----------------------------------------------------------------
# #Exercise 3 : Dogs Domesticated
# #----------------------------------------------------------------

# from Exercises_XP_1_and_2 import Dog
# import random

# class PetDog(Dog):
#     def __init__(self, dog_name, dog_age, dog_weight, trained=None):
#         super().__init__(dog_name, dog_age, dog_weight)
#         self.trained = trained if trained is not None else random.choice([True, False])

#     def train(self):
#         self.bark()
#         self.trained = True

#     def play(self, all_dogs):
#         trained_dogs = [dog for dog in all_dogs if dog.trained]
#         if len(trained_dogs) > 1:
#             all_dogs_names = ", ".join(dog.name for dog in trained_dogs)
#             print(f"{all_dogs_names} all play together")
#         else:
#             print("Not enough trained dogs to play together.")
    
#     def do_trick(self):
#         if self.trained:
#             tricks = [
#                 f"{self.name} does a barrel roll",
#                 f"{self.name} stands on his back legs",
#                 f"{self.name} shakes your hand",
#                 f"{self.name} plays dead"
#             ]
#             selected_trick = random.choice(tricks)
#             print(selected_trick)
#         else:
#             print(f"{self.name} is not trained to do tricks")


# dog1 = PetDog(dog_name="Rex", dog_age=8, dog_weight=20)
# dog2 = PetDog(dog_name="Zeron", dog_age=5, dog_weight=25)
# dog3 = PetDog(dog_name="Frenk", dog_age=7, dog_weight=35)

# all_dogs = [dog1, dog2, dog3]

# dog1.play(all_dogs)

# for dog in all_dogs:
#     dog.do_trick()


# #----------------------------------------------------------------
# #Exercise 4 : Family
# #----------------------------------------------------------------
        
# class Family:
#     def __init__(self, last_name, members=None):
#         self.members = members if members is not None else []
#         self.last_name = last_name

#     def born(self, **kwargs):
#         child = {'is_child': True, **kwargs}
#         self.members.append(child)
#         print(f"Congratulations! A new child named {kwargs['name']} was born into the {self.last_name} family.")

#     def is_18(self, member_name):
#         for member in self.members:
#             if member['name'] == member_name:
#                 return member['age'] >= 18
#         return False

#     def family_presentation(self):
#         print(f"Family Presentation - {self.last_name}:")
#         for member in self.members:
#             print(f"Name: {member['name']}, Age: {member['age']}, Gender: {member['gender']}, Is Child: {member['is_child']}")

# smith_family = Family(last_name="Smith", members=[
#     {'name': 'Michael', 'age': 35, 'gender': 'Male', 'is_child': False},
#     {'name': 'Sarah', 'age': 32, 'gender': 'Female', 'is_child': False}
# ])

# smith_family.born(name='Emma', age=0, gender='Female')
# print(f"Is Michael over 18? {smith_family.is_18('Michael')}")
# smith_family.family_presentation()


# #----------------------------------------------------------------
# #Exercise 5 : Family
# #----------------------------------------------------------------
       



