# #----------------------------------------------------------------
# #Daily Challenge: Old MacDonald’s Farm
# #----------------------------------------------------------------

class Farm:
    def __init__(self, name):
        self.name = name
        self.animals = {}

    def add_animal(self, species, quantity=1):
        for _ in range(quantity):
            self.animals[species] = self.animals.get(species, 0) + 1

    def display_animals(self):
        for species, count in self.animals.items():
            print(f"{self.name}'s {species}s: {count}")

    def get_info(self):
        return f"{self.name}'s Farm has: {', '.join(self.animals.keys())}"


macdonald = Farm("McDonald")
macdonald.add_animal('cow', 5)
macdonald.add_animal('sheep', 2)
macdonald.add_animal('goat', 12)
macdonald.display_animals()
print(macdonald.get_info())
print("E-I-E-I-0!")



