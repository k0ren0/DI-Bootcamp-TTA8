import requests
import os, json

dir_path = os.path.dirname(os.path.realpath(__file__))
file_path = dir_path + '\\jokes.json'


# response = requests.get('https://api.chucknorris.io/jokes/random')

# print(response)
#200 = Success
#300 = Redirect
#400 = Error
#404 = not founded

data = []
try:
    with open(file_path, mode = 'r') as j_file:
        existing_jokes = json.load(j_file)
except FileNotFoundError as e:
    print(e)

#CREATING A LOOP TO TAKE THE AMOUNT OF DATA THAT WE NEED
for i in range(10):
    response = requests.get('https://api.chucknorris.io/jokes/random')
    if response.status_code == 200:
        print(i+1, response.json()['value'])
        data.append(response.json())

print('Jokes successfully added to data')

with open(file_path, mode = 'w') as file:
    json.dump(data, file)

with open(file_path, mode = 'r') as file:
    all_jokes = json.load(file)


#ACCESSING THE DATA FROM JSON FILE
firstjoke = all_jokes[0]['value']
print('first joke: ', firstjoke)






