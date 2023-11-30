    # Daily Challenge: Solve The Matrix

    # ----------------------------------------------------------------
    # Challenge 1
    # ----------------------------------------------------------------

matrix = [
    ["7", "i", "i"],
    ["T", "s", "x"],
    ["h", "%", "?"],
    ["i", "", "#"],
    ["s", "M", ""],
    ["$", "a", ""],
    ["#", "t", "%"],
    ["^", "r", "!"]
]

matrix_message = ""

for col in range(len(matrix[0])):
    for row in range(len(matrix)):
        print(col,row)
        if matrix[row][col].isalpha():
            matrix_message += matrix[row][col]
        else:
            matrix_message += " " 

matrix_message = " ".join(matrix_message.split())

print(matrix_message)


