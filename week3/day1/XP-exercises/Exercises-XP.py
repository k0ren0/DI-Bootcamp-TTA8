
# #----------------------------------------------------------------
# #Exercise 1 : Cat
# #----------------------------------------------------------------


# class Cat:
#     def __init__(self, cat_name, cat_age):
#         self.name = cat_name
#         self.age = cat_age

# # Creating objects
# cat1 = Cat('Lily', 8)
# cat2 = Cat('Max', 6)
# cat3 = Cat('Baron', 13)

# def compare_ager(cat1, cat2, cat3):
#     if cat1.age > cat2.age and cat1.age > cat3.age:
#         return cat1.name
#     elif cat2.age > cat1.age and cat2.age > cat3.age:
#         return cat2.name
#     elif cat3.age > cat1.age and cat3.age > cat2.age:
#         return cat3.name
#     else:
#         return "All cats are the same age."

# def oldest_cat(cat):
#     print(f"The oldest cat is {cat.name}, he's {cat.age} years old.")

# oldest_cat_name = compare_ager(cat1, cat2, cat3)
# oldest_cat_instance = next(cat for cat in [cat1, cat2, cat3] if cat.name == oldest_cat_name)

# oldest_cat(oldest_cat_instance)


# #----------------------------------------------------------------
# #Exercise 2 : Dogs
# #----------------------------------------------------------------


# class Dog:
#     def __init__(self, dog_name, dog_height):
#         self.name = dog_name
#         self.height = dog_height
      
#     def bark(self):
#         print(f"{self.name} barks goes woof!")

#     def jump(self):
#         jump_height = self.height * 2
#         print(f"{self.name} jumps {jump_height} cm high!")


# print("\n")
# davids_dog = Dog('Rex', 50)
# sarahs_dog = Dog('Teacup', 20)

# print(f"Dog's name: {davids_dog.name}")
# print(f"Dog's height: {davids_dog.height} cm")

# davids_dog.bark()
# davids_dog.jump()
# print("\n")
# print(f"Dog's name: {sarahs_dog.name}")
# print(f"Dog's height: {sarahs_dog.height} cm")

# sarahs_dog.bark()
# sarahs_dog.jump()
# print("\n")


# if davids_dog.height >sarahs_dog.height:
#     print(f"The biggest dog is: {davids_dog.name}")
# else:
#     print(f"The biggest dog is: {sarahs_dog.name}")




# #----------------------------------------------------------------
# #Exercise 3 : Who’s The Song Producer?
# #----------------------------------------------------------------

# class Song:
#     def __init__(self, lyrics):
#         self.lyrics = lyrics
    
#     def sing_me_a_song(self):
#         for line in self.lyrics:
#             print(line)

# stairway= Song(["There\'s a lady who's sure","all that glitters is gold", "and she\'s buying a stairway to heaven"])

# stairway.sing_me_a_song()


#----------------------------------------------------------------
#Exercise 4 : Afternoon At The Zoo
#----------------------------------------------------------------

# class Zoo:
#     def __init__(self, zoo_name, animals=None) -> None:
#         self.name = zoo_name
#         self.animals = animals if animals is not None else []

#     def add_animal(self, new_animal):
#         self.animals.append(new_animal)

#     def get_animals(self):
#         print(f"All the animals of the zoo {self.name}: {self.animals}")

#     def sell_animals(self, animal_sold):
#         if animal_sold > len(self.animals):
#             print("You don't have enough animals to sell.")
#         else:
#             sold_animals = self.animals[:animal_sold]
#             self.animals = self.animals[animal_sold:]
#             print(f"Sold {animal_sold} animals: {sold_animals}")


#     def sort_animals(self):
#         return sorted(self.animals)

#     def get_groups(self):
#         sorted_animals = self.sort_animals()

#         print("Animals grouped by the first letter:")
#         current_group = [sorted_animals[0]]

#         for animal in sorted_animals[1:]:
#             if animal[0].upper() == current_group[0][0].upper():
#                 current_group.append(animal)
#             else:
#                 print(current_group)
#                 current_group = [animal]

#         print(current_group)

# ramat_gan_safari = Zoo("Ramat Gan Safari")

# ramat_gan_safari.add_animal("Giraffe")
# ramat_gan_safari.add_animal("Lion")
# ramat_gan_safari.add_animal("Zebra")
# ramat_gan_safari.add_animal("Elephant")

# ramat_gan_safari.get_animals()
# ramat_gan_safari.get_groups()

        






        

