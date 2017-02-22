#文法

#Multi-Line Comments
'''thhis
is comments
'''

#print
print("hello")
print("<p>hello</p>")

player="hero"
print(player + "awesome")

number=100
print("your number is"+str(number))


#variables
my_int=7
my_float=1.23
my_booleans=True
my_booleand=False

#■string & String methods
M="MONTY"
print(M[4]) #will print "Y"
print(M[1:2]) #will print "ON"
print(M[:2]) #will print "MO"
print(M[3:]) #will print "TY"
print len(M) #number of letters in M
print M.lower() #lower()
print M.upper() #upper()
print M.isalpha() #return true or false
print max(9,2,33,1) #return maximum
print min(1,23,4) #return minimum
print abs(-42) #return absolute
print type(4.2) #return data type nanme
print(str(3.141))
print(M + "OK")
string_1 = "Camelot"
string_2 = "place"
print "Let's not go to %s. 'Tis a silly %s." % (string_1, string_2)

#Date and Time
from datetime import datetime
print(datetime.now())
print(datetime.now().year)
print(datetime.now().month)
print(datetime.now().day)
print '%s-%s-%s' % (now.year, now.month, now.day)
print '%s:%s:%s' % (now.hour, now.minute, now.second)

#import
import random
number=random.randint(10,20)
#number=random.random()	#0から1までのランダムな数値を出力する
#number=random.randint(a, b)	#aからbまでの間のランダムな整数を出力する

#math +-*/%
number=100
print(number + 30)
eggs = 10 ** 2 #raising 10 to the power of 2.→10^2


#inputによる入力処理
input_lines = input()
print(input_lines)


'''比較演算子
a == b  # a と b が等しい  10 == 10
a < b  # a が b よりも小さい  10 < 15
a > b  # a が b よりも大きい  10 > 7
a <= b  # a が b 以下である  10 <= 15
a >= b  # a が b 以上である  10 >= 7
a != b  # a と b が等しくない  10 != 1
bool_one = 3 < 5  #true
'''

#and or not
bool_one = 1+1>=2 and 1!=2 #true
bool_two = 1+1>=2 or 1<2 #true
bool_three = not 10 % 3 <= 10 % 2 #not false=true
bool_four = not 1<=0 or 1<0 and not 1>0 #not not True or False and not True
bool_five = 1>2 or not (1>0 and 2>1) #False or not (True and True)

#for in
for i in range(5):
	print (i)

#range-繰り返しの回数を指定する
#range(10) 0から9まで、10回繰り返す
#range(6, 11) 6から10まで繰り返す

for number in [1,2,3]:
	print(2*number) #will print:2 4 6

#while
i=1
while i <=10:
	print(i)
	i=i+1 
	i+=1


#list
foods=['pasta','curry','sushi']
foods[1]='pizza' #set
foods.append('pizza') #add
foods.remove('curry') #remove
len(foods) #length of list
print(foods[1:3]) #'curry','sushi'. list slicing
curry_index=foods.index("curry")
foods.insert(curry_index,"sandwich") #insert
foods.sort() #sort

#dictionary
#d={'key1':value1,'key2':value2}
residents = {'Puffin' : 104, 'Sloth' : 105, 'Burmese Python' : 106}
print residents['Puffin'] # Prints Puffin's room number
del residents['Puffin']
residents['Sloth']=90

menu = {} # Empty dictionary
menu['Chicken Alfredo'] = 14.50 # Adding new key-value pair
print menu['Chicken Alfredo']

#dictionaryies
inventory = {
    'gold' : 500,
    'pouch' : ['flint', 'twine', 'gemstone'], # Assigned a new list to 'pouch' key
    'backpack' : ['xylophone','dagger', 'bedroll','bread loaf']
}
inventory['burlap bag'] = ['apple', 'small ruby', 'three-toed sloth'] # Adding a key 'burlap bag' and assigning a list to it
inventory['pouch'].sort() # Sorting the list found under the key 'pouch'
inventory['pocket']=['seashell','strange berry','lint']
inventory['backpack'].remove('dagger')
inventory['gold']=500+50

#conditionals and control flow
def clinic():
    print "You've just entered the clinic!"
    print "Do you take the door on the left or the right?"
    answer = raw_input("Type left or right and hit 'Enter'.").lower()
    if answer == "left" or answer == "l":
        print "This is the Verbal Abuse Room, you heap of parrot droppings!"
    elif answer == "right" or answer == "r":
        print "Of course this is the Argument Room, I've told you that already!"
    else:
        print "You didn't pick left or right! Try again."
        clinic()

clinic()
#if
number=1
if number == 1 or numer <= 1:
	print("ok!")
elif number ==2:
	print("well!")
else:
	print("NG!")

#function
def tax(bill):
    """Adds 8% tax to a restaurant bill."""
    bill *= 1.08
    print "With tax: %f" % bill
    return bill
meal_cost = 100
meal_with_tax = tax(meal_cost)

def power(base, exponent):  # Add your parameters here!
    result = base**exponent
    print "%d to the power of %d is %d." % (base, exponent, result)

power(37,4)  # Add your arguments here!

#import function
"""
from module import function
from module import *
"""
import math            # Imports the math module
everything = dir(math) # Sets everything to a list of things from math
print everything       # Prints 'em all!

