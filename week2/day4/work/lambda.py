from functools import reduce


def upper_s(strings_enter):
    after_upper = []
    for string in strings_enter:
        string = string.upper()
        after_upper.append(string)


my_function = lambda s: s.upper()

fruit = ["Apple", "Banana", "Pear", "Apricot", "Orange"]

map_result = map(lambda s: s.upper(), fruit)

print(list(map_result))


filter_obj = filter(lambda s: s[0] == 'A', fruit)
print(list(filter_obj))

nums_list = [1,2,5,8,7,9,10]

def add(n1,n2):

    result = n1+n2

reduced = reduce(lambda n1, n2: n1-n2, nums_list )
print(reduce)

print(reduced)