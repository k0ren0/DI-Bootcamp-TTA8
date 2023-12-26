class Circle:
    color = "red"

    def __init__(self, diameter):
        self.diameter = diameter

    def grow(self, factor=2):
        self.diameter = self.diameter * factor

    def get_color(self):
       return Circle.color
    
    def change_color(self, color):
        self.color = color
        return self.color

circle1 = Circle(2)
print(circle1.color)
circle1.change_color('blue')
print(circle1.color)
print(Circle.color)

# print(Circle.color)
# print(circle1.get_color())
# circle1.grow(3)
# print(circle1.diameter)

class Person:

    used_names = set()

    def __init__(self, name, age):
        if name in self.used_names:
            name = input("That name is taken. Enter another name: ")

        self.name = name
        self.age = age
        self.used_names.add(name)

    @classmethod
    def fromYear(cls, name, birth_year):
        THIS_YEAR = 2023
        return cls(name, THIS_YEAR - birth_year)

    @property
    def professional_name(self):
        return "Mr " + self.name
    
joe = Person('John', 45) #the object can be created by age ORRRRR line 55
joe = Person('Maria', 35)
# joe1 = Person('John', 45)
print(joe.used_names)
print(Person.used_names)

ju_age = Person.fromYear('Juliana', 1990)#by the birth year
print(ju_age.age)
