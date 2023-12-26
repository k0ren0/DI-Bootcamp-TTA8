import json, os

dir_path = os.path.dirname(os.path.realpath(__file__)) #NEED IT

#converting a python dict into json file

my_family = {
    "parents":['Beth', 'Jerry'],
    "children":['Summer', 'Morty']
}

json_file = dir_path+"/my_file.json" #NEED IT

with open(json_file, 'w') as file_obj:
    json.dump(my_family, file_obj)


