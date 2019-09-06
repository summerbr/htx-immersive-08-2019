board = [1, 2, 3,
         4, 5, 6,
         7, 8, 9,]

def show_board():
    print('TIC TAC TOE')
    print(f'{board[0]} | {board[1]} | {board[2]}')
    print(f'{board[3]} | {board[4]} | {board[5]}')
    print(f'{board[6]} | {board[7]} | {board[8]}')

player = 'X'

def change_player(player):
    if player == 'X':
        player = 'O'
    elif player == 'O':
        player = 'X'
    

def move():
    #updated_board = []
    location = int(input('Mark a space (1-9): '))
    if location < 1 or location > 9:
        location = int(input('Invalid entry. Try again (1-9): '))
    for mark in board:
        if mark is "X":
            print('Space taken.')
        else:
            board[location-1] = player
    show_board()
    change_player(player)


 
show_board()
print("Let's play!")
move()

#def game_over():
#    win()
#    tie()

#while game_in_progress = True:

#def move(board, location, player):
#   while game_in_progress:
#       turn()
#        change_player() 
#    if winner == 'X' or winner == 'O':
#        print(winner + 'won.')
#    elif winner == None:
#        print('Tie.') 
#def win():
    #check rows / columns / diagonals
    # 
                          
#def tie():
#    if 
#    return