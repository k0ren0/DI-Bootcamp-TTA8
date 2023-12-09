    # ----------------------------------------------------------------
    # Challenge Mini-Project - Tic Tac Toe
    # ----------------------------------------------------------------

# board = [
#     ["col", "col", "col"],
#     ["col", "col", "col"],
#     ["col", "col", "col"]
# ]

# def display_board():
#     print(board[0])
#     print(board[1])
#     print(board[2])

    
# def player_input (player):
#     user = int(input("Make your choice from 1-9: "))
#     if 0 <= user <= 3:
#         board[0][user - 1] = player 
#     elif 4 <= user <= 6:
#         board[1][user - 4] = player 
#     elif 7 <= user <= 9:
#         board[2][user - 7] = player 
#     else:
#         print("Invalid choice. Please choose a number between 1 and 9.")

#     return display_board()
    
# def check_win():
#     for row in board:
#         if row.count(row[0]) == len(row) and row[0] != "col":
#             return True
    
#     for col in range(len(board[0])):
#         if board[0][col] == board[1][col] == board[2][col] and board[0][col] != "col":
#             return True

#     if board[0][0] == board[1][1] == board[2][2] and board[0][0] != "col":
#         return True
#     if board[0][2] == board[1][1] == board[2][0] and board[0][2] != "col":
#         return True

#     return False

# def play():
#     player = "X"
#     for _ in range(9):
#         player_input(player)
#         if check_win():
#             print(f"Player {player} wins!")
#             break
#         player = "O" if player == "X" else "X"
#     else:
#         print("It's a tie!")

# play()

# NEW version

import os

board = [
    [" ", " ", " "],
    [" ", " ", " "],
    [" ", " ", " "]
]

def clear_screen():
    # Check if the system is Windows or not
    if os.name == 'nt':
        _ = os.system('cls')  # Clear the screen for Windows
    else:
        _ = os.system('clear')  # Clear the screen for Unix/Linux/MacOS

def display_board():
    for i in range(3):
        print("|".join(board[i]))
        if i < 2:
            print("-----")

def player_input(player):
    user = int(input(f"Player {player}, make your choice from 1-9: "))

    row = (user - 1) // 3
    col = (user - 1) % 3

    if 1 <= user <= 9 and board[row][col] == " ":
        board[row][col] = player
    else:
        print("Invalid choice or position already taken. Please choose a valid and empty position.")
        return player_input(player)

def check_win():
    for row in board:
        if row.count(row[0]) == len(row) and row[0] != " ":
            return True

    for col in range(len(board[0])):
        if board[0][col] == board[1][col] == board[2][col] and board[0][col] != " ":
            return True

    if board[0][0] == board[1][1] == board[2][2] and board[0][0] != " ":
        return True
    if board[0][2] == board[1][1] == board[2][0] and board[0][2] != " ":
        return True

    return False

def play():
    for _ in range(9):
        clear_screen()
        display_board()
        player_input("X")
        
        if check_win():
            clear_screen()
            display_board()
            print("Player X wins!")
            break

        clear_screen()
        display_board()
        player_input("O")

        if check_win():
            clear_screen()
            display_board()
            print("Player O wins!")
            break

    else:
        clear_screen()
        display_board()
        print("It's a tie!")

if __name__ == "__main__":
    play()
