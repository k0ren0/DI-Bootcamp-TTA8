
# #----------------------------------------------------------------
# #Daily Challenge: Circle
# #----------------------------------------------------------------

import math

class Circle:
    def __init__(self, radius, diameter) -> None:
        self.radius = radius
        self.diameter = diameter

    @classmethod
    def from_radius(cls, radius):
        return cls(radius=radius, diameter=radius * 2)

    @classmethod
    def from_diameter(cls, diameter):
        return cls(radius=diameter / 2, diameter=diameter)

    def get_diameter(self):
        return self.radius * 2

    def area(self):
        return math.pi * (self.radius**2)

    def __str__(self):
        return f"Circle with radius: {self.radius}"

    def __add__(self, other):
        return Circle(radius=self.radius + other.radius)

    def __lt__(self, other):
        return self.radius < other.radius

    def __eq__(self, other):
        return self.radius == other.radius
    
    def sort_circles(self, circles):
        circles.append(self)
        result = sorted(circles, key=lambda x: x.radius)
        return result

# Example usage:
circle1 = Circle.from_radius(10)
circle2 = Circle.from_diameter(50)

# print(circle2.diameter)
# print(circle1.radius)

print(circle1.diameter)  
print(circle2.area())     
print(circle1)           

circle3 = circle1 + circle2
print(circle3.radius)     

print(circle1 < circle2)  
print(circle1 == circle2)

circles = [circle1, circle2, circle3]

s_circles = circle1.sort_circles(circles)
print(s_circles)

for c in s_circles:
    print(c.diameter)

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

