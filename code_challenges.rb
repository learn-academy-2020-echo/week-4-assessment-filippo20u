# ASSESSMENT 4: Ruby Coding Practical Questions
# MINASWAN ✌️

# --------------------1) Create a method that takes in an array and returns an array with only odd numbers sorted from least to greatest. Use the test variables provided.

full_arr1 = [4, 9, 0, '7', 8, true, 'hey', 7, 199, -9, false, 'hola']
# Expected output: [-9, 7, 9, 199]
full_arr2 = ['hello', 7, 23, -823, false, 78, nil, '67', 6, 'Number']
# Expected output: [-823, 7, 23]


def is_odd array
    new_arr = array.select do |value|
        value.is_a?(Integer) && value % 2 ==1
    end
     new_arr.sort!  
end    


p "Challenge 1"
p  is_odd full_arr1
p  is_odd full_arr2



# --------------------2) Create a method that takes in an array of words and a letter and returns all the words that contain that particular letter.

beverages_array = ['coffee', 'tea', 'juice', 'water', 'soda water']
letter_o = 'o'
# Expected output: ['coffee', 'soda water']
letter_a = 'a'
# Expected output: ['tea', 'soda water']


def lett_includ (array, letter)
    array.select do |value|
        if value.include? letter
        value
        end
    end    
end  

# def lett_includ array
#     new_arr = array. do |value|
        
#     end
#      new_arr  
# end  

p '2.1'
p lett_includ beverages_array, letter_o
p '2.2'
p lett_includ beverages_array, letter_a



# -------------------3) Create a method that takes in a string and removes all the vowels from the string. Use the test variables provided. HINT: Check out this resource: https://ruby-doc.org/core-2.6/String.html#method-i-delete

album1 = 'Rubber Soul'
# Expected output: 'Rbbr Sl'
album2 = 'Sgt Pepper'
# Expected output: 'Sgt Pppr'
album3 = 'Abbey Road'
# Expected output: 'bby Rd'

# i can probably also use a .lowercase and avoid to put the capitalized vowels
def del_vow string
    string.delete "A,E,I,O,U,a,e,i,o,u"    
end

p "Challenge 3"
p del_vow album1
p del_vow album2
p del_vow album3


# -------------------4) Create a method that takes in an array of numbers and returns the sum of the numbers. Use the test variables provided.

nums_array1 = [42, 7, 27]
# Expected output: 76

nums_array2 = [25, 17, 47, 11]
# Expected output: 100

def sum array
    sum = 0
    array.each do |number|
      sum = sum + number
    end
    sum
end 

p "Challenge 4"
p sum nums_array1
p sum nums_array2

# -------------------5) Create a method that takes in a string and checks if the string is a palindrome. A palindrome is the same word spelled forwards or backwards. Use the test variables provided.

is_palindrome1 = 'Racecar'
# Expected output: 'Racecar is a palindrome'
is_palindrome2 = 'LEARN'
# Expected output: 'LEARN is not a palindrome'
is_palindrome3 = 'Rotator'
# Expected output: 'Rotator is a palindrome'

# STRETCH
is_palindrome4 = 'Was it a cat I saw'
# Expected output: Was it a cat I saw is a palindrome'


# this method works for the first 3 not for the stretch.
# adding string.delete(" \t\r\n"), works for the fourth one too.
# method puts everyhting lowercase, delete al the spaces and compare the string with its reversed one.
def palin_check string
    if string.downcase.delete(" \t\r\n") == string.delete(" \t\r\n").downcase.reverse
        "#{string} is a palindrome"
    else
        "#{string} is not a palindrome"
    end
end


p 'Challenge 5'

p palin_check is_palindrome1
p palin_check is_palindrome2
p palin_check is_palindrome3
p palin_check is_palindrome4

# function check (from stackoverflow)
p is_palindrome4.delete(" \t\r\n")


