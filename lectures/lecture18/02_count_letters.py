# Challenge: 
#   1. How many unique letters are in the word supercalifragilisticexpialidocious?
#   2. How many times does each letter occur?

# Your job: loop through each letter of the word.


word = 'supercalifragilisticexpialidocious'

letter_count = dict()

for letter in word:
    if letter_count.get(letter):
        letter_count[letter] += 1
    else:
        print('Seeing', letter, 'for the first time')
        letter_count[letter] = 1

print(letter_count)
