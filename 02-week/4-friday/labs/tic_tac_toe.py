board = [1, 2, 3,
         4, 5, 6,
         7, 8, 9,]

def show_board():
    print('TIC TAC TOE')
    print(f'{board[0]} | {board[1]} | {board[2]}')
    print(f'{board[3]} | {board[4]} | {board[5]}')
    print(f'{board[6]} | {board[7]} | {board[8]}')

winning_combos = ((0, 1, 2), (3, 4, 5), (6, 7, 8), 
                    (0, 3, 6), (1, 4, 7), (2, 5, 8), 
                    (0, 4, 8), (2, 4, 6))

player = 'X'

def is_game_over():
    count = 0
    for space in winning_combos:
        if board(space[0]) == board(space[1]) == board(space[2]) == 'X':
            print('Player X wins!')
        if board(space[0]) == board(space[1]) == board(space[2]) == 'O':
            print('Player O wins!')    
    for space in range(9):
        if board[space] == 'X' or board[space] == 'O':
            count += 1
        if count == 9:
            print('Players have tied. Game over.')

def change_player(player):
    if player == 'X':
        return 'O'
    elif player == 'O':
        return 'X'

def move(player):
    try:
        location = int(input('Mark a space (1-9)'))
        if location in board:
            player = board[location] - 1 
        else:
            print('Space taken. Try again.')
    except ValueError:
        print(f'\nInvalid entry. Try again.')
    show_board()

print('***********')
print("Let's play!")
print('***********')
show_board()

def game_in_progress(): #while game has no winner
    pass

while game_in_progress:
    move(player)
    player = change_player(player)
    is_game_over()

    #location = int(input('Mark a space (1-9): '))
    #while location > 1 and location > 9: #len(list) better?
        #'Invalid entry. Try again (1-9): '))
    #for mark in board:
        #if mark == 'X' or mark == 'O':
        #    print('Space taken.') #check board first```
        #else:
        #    board[location - 1] = player
    #show_board()