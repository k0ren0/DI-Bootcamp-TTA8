with open("nameslist.txt", "r") as file:
    lines = file.readlines()
    print("Step 1", lines)

print("Step 2", lines[4])
print("Step 2_5_lines", lines[:5])

for i, line in enumerate(lines, start = 1):
    if i == 5:
        print("Step 2", line)

fifty_line = lines[4].strip()
print("Step 2", fifty_line)

fifty_five_chars = lines[4][:5]
print("Step 3", fifty_five_chars)

file_content = [line.strip() for line in lines]
split_words = [word for line in file_content for word in line.split()]

print("Step 4 v1", "\n", "File Content as List:", file_content)
print("Step 4 v2", "\n", "Split Words:", split_words)

# Step 5
cleaned_names = list(map(lambda s: s.strip("\n"), lines))
print(cleaned_names)


# Find out how many occurrences of the names "Darth", "Luke", and "Lea" are in the file
darth_count = split_words.count("Darth")
luke_count = split_words.count("Luke")
lea_count = split_words.count("Lea")

# Display the results
print("Occurrences of 'Darth':", darth_count)
print("Occurrences of 'Luke':", luke_count)
print("Occurrences of 'Lea':", lea_count)

# Step 6
with open("nameslist.txt", 'a') as file:
    file.write("\nViktor")

with open("nameslist.txt", 'r') as file:
    file.write("\nViktor")

