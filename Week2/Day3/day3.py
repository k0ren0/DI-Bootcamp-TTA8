
a_dict = {'color': 'blue', 'fruit': 'apple', 'pet': 'dog'}

# print(a_dict.items())

#     # output : 
#     # dict_items([('color', 'blue'), ('fruit', 'apple'), ('pet', 'dog')])

# # The items() method returns a view object that displays 
# # a list of dictionary's (key, value) tuple pairs.


# for key, value in a_dict.items():
#     print(key, '->', value)

# sample_dict = { 
#    "class":{ 
#       "student":{ 
#          "name":"Mike",
#          "marks":{ 
#             "physics":70,
#             "history":80
#          }
#       }
#    }
# }


# print(a_dict.items())
# print(a_dict['color'])
# a_dict["color"] = "white"
# print(a_dict['color'])

# print(a_dict.items())
# a_dict["color"] = "blue", "white"
# print(a_dict.items())


# shirts = [
#   {
#     'name': 'Awesome T-shirt 3000',
#     'size': 'S',
#     'price': 20
#   },
#   {
#     'name': 'Awesome T-shirt 3000',
#     'size': 'M',
#     'price': 25
#   },
#   {
#     'name': 'Awesome T-shirt 3000',
#     'size': 'L',
#     'price': 30
#   },
# ]

# print(shirts[0]['price'])


# sample_dict = { 
#    "class":{ 
#       "student":{ 
#          "name":"Mike",
#          "marks":{ 
#             "physics":70,
#             "history":80
#          }
#       }
#    }
# }

# # print(sample_dict(item()))
# print(sample_dict["class"]["student"]["marks"]["history"])


# rick_dict = {
#     'first_name':'Rick',
#     'last_name':'Sanchez'
# }
# print(rick_dict.items())


sample_dict = {
  "name": "Kelly",
  "age":25,
  "salary": 8000,
  "city": "New york"
}

keys_to_remove = ["name", "salary"]

for key in keys_to_remove:
    del sample_dict[key]
    
print(sample_dict)

#     sample_dict.pop("name", "salary")
#     print(keys_to_remove.items())

