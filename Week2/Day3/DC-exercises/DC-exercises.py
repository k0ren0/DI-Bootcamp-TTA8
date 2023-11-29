    # Daily Challenge: Dictionaries

    # ----------------------------------------------------------------
    # Challenge 1
    # ----------------------------------------------------------------


# #Input
# user_word = input("Enter word: ")

# index_dict = {}

# # dictionary
# for idx, letter in enumerate(user_word):
#     if letter not in index_dict:
#         index_dict[letter] = [idx]
#     else:
#         index_dict[letter].append(idx)

# # Result
# print(index_dict)

    # ----------------------------------------------------------------
    # Challenge 2
    # ----------------------------------------------------------------


items_purchase1 = {
    "Water": "$1",
    "Bread": "$3",
    "TV": "$1,000",
    "Fertilizer": "$20"
}
wallet1 = "$300"
affordable_items_list1 = []

for item, price in sorted(items_purchase1.items()):
    item_price = int(price.replace("$", "").replace(",", ""))
    if item_price <= int(wallet1.replace("$", "")):
        affordable_items_list1.append(item)

result1 = sorted(affordable_items_list1) if affordable_items_list1 else "Nothing"
print(result1)

items_purchase2 = {
    "Apple": "$4",
    "Honey": "$3",
    "Fan": "$14",
    "Bananas": "$4",
    "Pan": "$100",
    "Spoon": "$2"
}
wallet2 = "$100"
affordable_items_list2 = []

for item, price in sorted(items_purchase2.items()):
    item_price = int(price.replace("$", "").replace(",", ""))
    if item_price <= int(wallet2.replace("$", "")):
        affordable_items_list2.append(item)

result2 = sorted(affordable_items_list2) if affordable_items_list2 else "Nothing"
print(result2)

items_purchase3 = {
    "Phone": "$999",
    "Speakers": "$300",
    "Laptop": "$5,000",
    "PC": "$1200"
}
wallet3 = "$1"
affordable_items_list3 = []

for item, price in sorted(items_purchase3.items()):
    item_price = int(price.replace("$", "").replace(",", ""))
    if item_price <= int(wallet3.replace("$", "")):
        affordable_items_list3.append(item)

result3 = sorted(affordable_items_list3) if affordable_items_list3 else "Nothing"
print(result3)

    # END..........