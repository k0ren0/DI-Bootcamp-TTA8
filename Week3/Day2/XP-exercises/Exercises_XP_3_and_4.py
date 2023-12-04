# #----------------------------------------------------------------
# #Exercise 3 : Dogs Domesticated
# #----------------------------------------------------------------

import Exercises_XP_1_and_2

class PetDog (Exercises_XP_1_and_2.Dog):
    all_dogs = Exercises_XP_1_and_2.dogs


    def __init__(self, dog_name, dog_age, dog_weight, trained = False):
        super().__init__(dog_name, dog_age, dog_weight)
        self.trained = trained

    def train(self):
        self.bark()
        self.trained = True

    def play(self, *dog_names):
        all_dogs = ", ".join(dog_names)
        print(f"{all_dogs} all play together")

        
    
    

        
            
        