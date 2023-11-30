# def display_board(board):
#     for row in board:
#         print("|".join(row))
#         print("-" * 5)

# def player_input(player):
#     valid_positions = ["11", "12", "13", "21", "22", "23", "31", "32", "33"]
#     while True:
#         position = input(f"Player {player}, enter your position (row and column, e.g., 12): ")
#         if position in valid_positions:
#             return int(position[0]), int(position[1])
#         else:
#             print("Invalid input. Please enter a valid position (e.g., 12 for the top-center square).")

# def check_win(board):
#     for row in board:
#         if row[0] == row[1] == row[2] and row[0] != ' ':
#             return True

#     for col in range(3):
#         if board[0][col] == board[1][col] == board[2][col] and board[0][col] != ' ':
#             return True

#     if board[0][0] == board[1][1] == board[2][2] and board[0][0] != ' ':
#         return True

#     if board[0][2] == board[1][1] == board[2][0] and board[0][2] != ' ':
#         return True

#     return False

# def play():
#     board = [[' ' for _ in range(3)] for _ in range(3)]
#     players = ['X', 'O']
#     current_player = 0

#     while True:
#         display_board(board)
#         row, col = player_input(players[current_player])

#         if board[row - 1][col - 1] == ' ':
#             board[row - 1][col - 1] = players[current_player]

#             if check_win(board):
#                 display_board(board)
#                 print(f"Player {players[current_player]} wins!")
#                 break

#             if all(board[i][j] != ' ' for i in range(3) for j in range(3)):
#                 display_board(board)
#                 print("It's a tie!")
#                 break

#             current_player = 1 - current_player
#         else:
#             print("Invalid move. The position is already taken. Try again.")

# if __name__ == "__main__":
#     play()
