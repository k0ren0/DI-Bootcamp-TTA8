    # ----------------------------------------------------------------
    # Challenge Mini-Project - Tic Tac Toe
    # ----------------------------------------------------------------

board = [
    ["col", "col", "col"],
    ["col", "col", "col"],
    ["col", "col", "col"]
]
def display_board():
    print(board[0])
    print(board[1])
    print(board[2])

    for row in board:
        print("|".join(row))
        print("--" * 5)



def player_input (player):
    user = int(input("Make your choice from 1-9: "))
    if 0 <= user <= 3:
        board[0][user - 1] = player 
    elif 4 <= user <= 6:
        board[1][user - 4] = player 
    elif 7 <= user <= 9:
        board[2][user - 7] = player 
    else:
        print("Invalid choice. Please choose a number between 1 and 9.")

        
        
    return display_board()
    
player = "x"
player_input(player)


def check_win():
    pass