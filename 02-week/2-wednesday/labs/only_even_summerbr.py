import is_even_summerbr

even_list = []

def only_even(num_list):
    for num in num_list:
        if is_even_summerbr.is_even(num) == True:
            even_list.append(num)
    return(even_list)

print(only_even([10, 11, 14, 20]))