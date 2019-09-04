import is_odd_summerbr

odd_list = []

def only_odd(num_list):
    for num in num_list:
        if is_odd_summerbr.is_odd(num) == True:
            odd_list.append(num)
    return(odd_list)

print(only_odd([7, 9, 11, 14, 20]))