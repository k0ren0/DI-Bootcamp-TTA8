    # ----------------------------------------------------------------
    # Exercise 1 : Convert Lists Into Dictionaries
    # ----------------------------------------------------------------

# keys = ['Ten', 'Twenty', 'Thirty']
# values = [10, 20, 30]

# for item in zip(keys, values):
#     print(item)

    # ----------------------------------------------------------------
    # Exercise 2 : Cinemax
    # ----------------------------------------------------------------


# family = {"rick": 43, 'beth': 13, 'morty': 5, 'summer': 8}

# price_free = 0
# price_ad_12 = 10
# price_after_12 = 15

# total_cost = 0

# for key, value in family.items():
#     if value < 3:
#         cost = price_free
#     elif 3 <= value <= 12:
#         cost = price_ad_12
#     else:
#         cost = price_after_12

#     total_cost += cost
#     print(f"{key.capitalize()}: ${cost}")

# print(f"\nThe family\'s total cost for the movies: ${total_cost}")
    

    # ----------------------------------------------------------------
    # Exercise 3: Zara
    # ----------------------------------------------------------------


brand = {"name": "Zara",
"creation_date": 1975,
"creator_name": "Amancio Ortega Gaona",
"type_of_clothes": ["men", "women", "children", "home"],
"international_competitors": ["Gap", "H&M", "Benetton"],
"number_stores": 7000,
"major_color":{
    "France": "blue",
    "Spain": "red",
    "US": ["pink", "green"]}
}

brand["number_stores"] = 2
print("\n")
print (brand["type_of_clothes"])

brand["country_creation"] = "Spain"
print("\n")
print(brand)

print("\n")
print (brand["international_competitors"])
brand["international_competitors"] = "Gap", "H&M", "Benetton", "Desigual"
print("\n")
print (brand["international_competitors"])

print("\n")
del brand["creation_date"]

last_international_competitors = brand["international_competitors"][-1]
print ("Last international competitor", last_international_competitors)

print("\n")

print(f"The major clothes colors in the US: {brand["major_color"]["US"]}")

print("\n")
nums = len(brand)
print(f"the amount of key value pairs (ie. length of the dictionary): {nums}")

print("\n")
list_keys = list(brand.keys())
print(list_keys)


more_on_zara = {"creation_date": 1975,
"number_stores": 10000
}















