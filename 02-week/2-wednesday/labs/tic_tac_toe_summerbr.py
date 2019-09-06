#Write a function move that accepts three arguments:
# board = 2-dimensional array that represents a 3x3 tic-tac-toe board
# location a = 2-item tuple that specifies an cell on the board
# player = String, either "X" or "Y"
# Return a copy of the board with the player String placed at the location.

#Throw an error if:
#The board is the wrong size
#The location is already occupied by a player
#The location is invalid
#The player String is something other than "X" or "Y"

board = [[0, 0, 0],
        [0, 0, 0], #3 rows, 3 columns
        [0, 0, 0]] #location = (column[], row[])
#player = ('X', 'Y')

#def player_position:
#for row in board:
#    print(board)

player = input("Do you want to be X or O? ")
mark_space = int(input('Please mark a space (1-9): '))
marked_space = []

def move(board, location, player):
    if mark_space not marked_space:
        mark_space == 'X'
    elif mark_space == marked_space:
        print('That space is taken.')

