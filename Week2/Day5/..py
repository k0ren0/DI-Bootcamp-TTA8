board = [
    ["col", "col", "col"],
    ["col", "col", "col"],
    ["col", "col", "col"]
]

def display_board():
    print(board[0])
    print(board[1])
    print(board[2])

def player_input(player):
    user = int(input("Make your choice from 1 to 9: "))
    if 1 <= user <= 3:
        board[0][user - 1] = player 
    elif 4 <= user <= 6:
        board[1][user - 4] = player 
    elif 7 <= user <= 9:
        board[2][user - 7] = player 
    else:
        print("Invalid choice. Please choose a number from 1 to 9.")

    return display_board()

def check_win():
    for row in board:
        if row.count(row[0]) == len(row) and row[0] != "col":
            return True

    for col in range(len(board[0])):
        if board[0][col] == board[1][col] == board[2][col] and board[0][col] != "col":
            return True

    if board[0][0] == board[1][1] == board[2][2] and board[0][0] != "col":
        return True
    if board[0][2] == board[1][1] == board[2][0] and board[0][2] != "col":
        return True

    return False

def play():
    player = "x"
    for _ in range(9):  # Maximum number of moves in tic-tac-toe
        player_input(player)
        if check_win():
            print(f"Player {player} wins!")
            break
        player = "o" if player == "x" else "x"
    else:
        print("It's a tie!")

# Run the game
play()
