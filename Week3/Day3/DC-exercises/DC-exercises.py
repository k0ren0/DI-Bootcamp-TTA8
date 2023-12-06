
# #----------------------------------------------------------------
# #Daily Challenge: Circle
# #----------------------------------------------------------------

import math

class Circle:
    def __init__(self, radius=None, diameter=None):
        if radius is not None:
            self.radius = radius
        elif diameter is not None:
            self.radius = diameter / 2
        else:
            raise ValueError("Set either radius or diameter")

    def get_diameter(self):
        return self.radius * 2
    # Method to calculate and return the area.
    def get_area(self):
        return math.pi * (self.radius ** 2)

    # Method to provide a string representation of the circle.
    def __str__(self):
        return f"Circle with radius: {self.radius}"

    # Dunder method to add two circles and return a new circle.
    def __add__(self, other):
        return Circle(radius=self.radius + other.radius)

    # Dunder method to compare two circles and check if one is smaller.
    def __lt__(self, other):
        return self.radius < other.radius

    # Dunder method to compare two circles and check if they are equal.
    def __eq__(self, other):
        return self.radius == other.radius

circle1 = Circle(radius=3)
circle2 = Circle(diameter=10)

print(circle1.diameter)  
print(circle2.area)      
print(circle1)           

circle3 = circle1 + circle2
print(circle3.radius)     

print(circle1 < circle2)  
print(circle1 == circle2)

circles = [circle1, circle2, circle3]
sorted_circles = sorted(circles, key=lambda x: x.radius)

for circle in sorted_circles:
    print(circle)



# #----------------------------------------------------------------
# #Daily Challenge: Translator
# #----------------------------------------------------------------


# from googletrans import Translator

# def translate_to_english(word):
#     translator = Translator()
#     translation = translator.translate(word, dest='en')
#     return translation.text

# french_words= ["Bonjour", "Au revoir", "Bienvenue", "A bientôt"] 

# translated_words = {word: translate_to_english(word) for word in french_words}

# print(translated_words)

