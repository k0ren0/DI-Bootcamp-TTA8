    # Daily Challenge: Build Up A String

    # ----------------------------------------------------------------
    # Challenge 1
    # ----------------------------------------------------------------

def generate_multiples(num, length):
    multiples_list = []
    i = 1
    while len(multiples_list) < length:
        multiples_list.append(num * i)
        i += 1
    return multiples_list

# User input
number = int(input("Enter a number: "))
list_length = int(input("Enter the desired length of the list: "))

# list of multiples
result_list = generate_multiples(number, list_length)
print(f"List of multiples of {number} with length {list_length}: {result_list}")





    # ----------------------------------------------------------------
    # Challenge 2
    # ----------------------------------------------------------------

# def remove_duplicates_consecutive(input_string):
#     result_string = ""
#     prev_char = None

#     for char in input_string:
#         if char != prev_char:
#             result_string += char
#             prev_char = char

#     return result_string

# # Input from the user
# user_input = input("Enter a string: ")

# # Remove duplicates
# result = remove_duplicates_consecutive(user_input)

# # Result
# print("String with consecutive duplicates removed:", result)