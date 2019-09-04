print('Electronic Phone Book')
print('=====================')
print('1. Look up an entry')
print('2. Add an entry')
print('3. Delete an entry')
print('4. List all entries')
print('5. Quit')

#add a prompt to run again?
phonebook = {
  'Harry': '895-3000',
  'Ron': '895-3001',
  'Hermione': '895-3002',
  'Draco': '895-3003',
}
user_entry = int(input('Choose option(1-5)? '))

if user_entry == 1:
    lookup_name = input('Enter name: ')
    for name in phonebook:
        if name == lookup_name: #phonebook[name] = phone #
            print(f'Match found: {phonebook[lookup_name]}')
else:
    print(f'Match not found.')

elif user_entry == 2:
    add_name = input('Enter name: ')
    add_number = input('Enter number: ')
    phonebook[add_name] = add_number
    print(f'New entry stored for {add_name}')

elif user_entry == 3:
    entry_delete = input('Who do you want to remove? ')
    phonebook.pop(entry_delete)
    print(f'Deleted entry for {entry_delete}')

elif user_entry == 4:
    print(phonebook)

elif user_entry == 5:
    print('End')

else:
    print(f'Please enter a valid option #.')