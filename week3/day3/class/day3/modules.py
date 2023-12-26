import random
import math
from decor import AtmAccount
from faker import Faker as F

r_num = random.randint(0, 100)
print(r_num)

print(AtmAccount.available_acc_num)

fakeperson = F()

print(fakeperson.name(), fakeperson.address())

