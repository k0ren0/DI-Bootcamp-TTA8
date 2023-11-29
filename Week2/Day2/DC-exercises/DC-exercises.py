    # Daily Challenge : Lists & Strings

    # ----------------------------------------------------------------
    # Challenge 1
    # ----------------------------------------------------------------

# # Input
# user_number = int(input("Enter a number: "))
# user_length = int(input("Enter the desired length: "))

# # Print the list
# multiples_list = [user_number * i for i in range(1, user_length + 1)]
# print(multiples_list)

    # ----------------------------------------------------------------
    # Challenge 2
    # ----------------------------------------------------------------

# Input info
user_input = input("Enter a word: ")

# Remove consecutive duplicates
result_str = ""
prev_char = None

for char in user_input:
    if char != prev_char:
        result_str += char
    prev_char = char

# Result
print("Original word:", user_input)
print("Word with consecutive duplicates removed:", result_str)
