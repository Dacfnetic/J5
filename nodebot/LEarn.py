user_name = input('What is your username: ')
password = input('What is your password: ')
secret = '*' * len(password)

print(f'{user_name}, your password {secret} is {len(password)} letters long')