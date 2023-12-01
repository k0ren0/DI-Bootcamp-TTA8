    # Daily Challenge: Mini-Project

    # ----------------------------------------------------------------
    # Challenge 1
    # ----------------------------------------------------------------

some_list = ["apple", "banana", "lemon", "citramon", "orange"]

dublicates = list(set([x for x in some_list if some_list.count(x) > 1]))

print(dublicates)