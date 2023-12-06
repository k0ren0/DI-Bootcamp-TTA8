
# #----------------------------------------------------------------
# #Exercise 1 – Random Sentence Generator
# #----------------------------------------------------------------

import random

def get_words_from_file(file_path):
    with open(file_path, encoding = 'utf-8', mode='r+') as file:
        words = file.read().split()
    return words

def get_random_sentence(length, words):
    if length > len(words):
        print("Warning: Requested sentence length is greater than the number of words in the list.")
        length = len(words)

    random_words = random.sample(words, length)
    sentence = ' '.join(random_words)
    return sentence.lower()

def main():
    print("Welcome to the Random Sentence Generator!")
    print("This program will create a random sentence for you.")

    # Get words from the file
    file_path = 'sowpods.txt'  # Replace with the actual path to your word list file
    words = get_words_from_file(file_path)

    # Get user input for sentence length
    try:
        length = int(input("How long do you want the sentence to be (between 2 and 20)? "))
        if not (2 <= length <= 20):
            raise ValueError("Sentence length must be between 2 and 20.")
    except ValueError as e:
        print(f"Error: {e}")
        print("Please enter a valid integer between 2 and 20.")
        return

    # Generate and print the random sentence
    sentence = get_random_sentence(length, words)
    print("Random Sentence:", sentence)

if __name__ == "__main__":
    main()



# #----------------------------------------------------------------
# #Exercise 2: Working With JSON 
# #----------------------------------------------------------------

# import json, os  #Attention! I NEED IT

# dir_path = os.path.dirname(os.path.realpath(__file__)) # #Attention! I NEED IT

# sampleJson = """{ 
#    "company":{ 
#       "employee":{ 
#          "name":"emma",
#          "payable":{ 
#             "salary":7000,
#             "bonus":800
#          }
#       }
#    }
# }"""

# data = json.loads(sampleJson)
# salary = data["company"]["employee"]["payable"]["salary"]
# print(salary)

# data["company"]["employee"]["birth_date"] = "1991-11-11"
# modifiedJson = json.dumps(data, indent=2)

# print(modifiedJson)

# json_file = dir_path+'/sampleJson.json' #Attention! I NEED IT

# with open(json_file, 'w') as file_obj:
#    json.dump(sampleJson, file_obj)

   