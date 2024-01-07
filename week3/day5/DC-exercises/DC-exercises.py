
# #----------------------------------------------------------------
# #Daily Challenge Part 1 : Quizz:
# #----------------------------------------------------------------


"""
1. What is a class?
A class is like a blueprint in programming. It's a plan that defines how to create something called an "object." An object is a specific instance or copy of the plan, with its own unique characteristics and behaviors.

2. What is an instance?
An instance is a real, specific thing created from a class. If a class is a blueprint for a car, an instance would be an actual car built based on that blueprint.

What is encapsulation?
Encapsulation is like putting data and the actions that can be performed on that data into a single container, which is the class. It helps keep things organized and prevents outside interference with the inner workings of the class.

What is abstraction?
Abstraction is about simplifying complex things. In programming, it means focusing on the important parts of an object and ignoring the details that aren't necessary for what you're trying to do.

What is inheritance?
Inheritance is a way for one class to inherit the traits (attributes and behaviors) of another class. It's like a child inheriting certain characteristics from their parents. This promotes reusing code and creating a hierarchy of classes.

What is multiple inheritance?
Multiple inheritance is when a class can inherit traits from more than one other class. It's like a child inheriting features from both the mother and father. However, it can make things more complex and needs careful handling.

What is polymorphism?
Polymorphism means that one thing can take on different forms. In programming, it often involves using the same name for different functions or methods. This makes the code more flexible and easier to understand.

What is method resolution order or MRO?
Method Resolution Order (MRO) is about figuring out the order in which a program looks for the instructions on what to do. It's important when dealing with multiple classes and helps decide which instructions to follow first, like a roadmap for the program. In Python, the C3 linearization algorithm is used to establish this order.
"""



# #----------------------------------------------------------------
# #Daily Challenge Part 2: Create A Deck Of Cards Class.
# #----------------------------------------------------------------

import random

class Card: #first class
    def __init__(self, suit, value):
        self.suit = suit
        self.value = value

    def __str__(self):
        return f"{self.value} of {self.suit}" #str of cards

class Deck: #second class
    def __init__(self):
        self.cards = self.gen_deck()

    def gen_deck(self): #generation 
        suits = ['Hearts', 'Diamonds', 'Clubs', 'Spades']
        values = ['A', '2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K']
        deck = []

        for suit in suits: 
            for value in values:
                card = Card(suit, value)
                deck.append(card)

        return deck

    def shuffle(self):
        random.shuffle(self.cards)

    def draw_card(self):
        if self.cards:
            return self.cards.pop()
        else:
            print("The deck is empty.")
            return None

deck = Deck()
deck.shuffle()

for _ in range(5):
    card = deck.draw_card()
    print(card)
