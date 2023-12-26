# #----------------------------------------------------------------
# #Exercise 4 : Family
# #----------------------------------------------------------------
        
class Family:
    def __init__(self, last_name, members=None):
        self.members = members if members is not None else []
        self.last_name = last_name

    def born(self, **kwargs):
        child = {'is_child': True, **kwargs}
        self.members.append(child)
        print(f"Congratulations! A new child named {kwargs['name']} was born into the {self.last_name} family.")

    def is_18(self, member_name):
        for member in self.members:
            if member['name'] == member_name:
                return member['age'] >= 18
        return False

    def family_presentation(self):
        print(f"Family Presentation - {self.last_name}:")
        for member in self.members:
            print(f"Name: {member['name']}, Age: {member['age']}, Gender: {member['gender']}, Is Child: {member['is_child']}")

smith_family = Family(last_name="Smith", members=[
    {'name': 'Michael', 'age': 35, 'gender': 'Male', 'is_child': False},
    {'name': 'Sarah', 'age': 32, 'gender': 'Female', 'is_child': False}
])

smith_family.born(name='Emma', age=0, gender='Female')
print(f"Is Michael over 18? {smith_family.is_18('Michael')}")
smith_family.family_presentation()
