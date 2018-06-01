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

#lambda
"""
lambda 引数:処理内容
key=lambda x: x[1]⇒このリストの要素（タプル）のふたつめの要素でソートしたい（昇順）
key=lambda x: x[1]⇒このリストの要素（タプル）のふたつめの要素でソートしたい（降順）
"""
payment2 = (lambda price,tax:price + (price * tax))(100,0.08)
print(payment2)

#############################
#Lists and Functions
############################
#list remove
#n.pop(index)
#n.remove(item)
#del(n[1]) 
n = [1, 3, 5]
n.pop(1)  #result⇒[1, 5]
n.remove(1)#result⇒ [3, 5] 
del(n[1])#result⇒ [1, 5]

#Printing out a list item by item in a function
n = [3, 5, 7]
def print_list(x):
  for i in range(0, len(x)):
  	print x[i]
print_list(n)


#passing a range into a function
#range function has three different versions:
#1.range(stop)
#2.range(start, stop)
#3.range(start, stop, step)
range(6) # => [0, 1, 2, 3, 4, 5]
range(1, 6) # => [1, 2, 3, 4, 5]
range(1, 6, 3) # => [1, 4]

#Iterating over a list in a function
#method 1
for item in list:
  print item

#method 2
for i in range(len(list)):
  print list[i]

#Using two lists as two arguments in a function
m = [1, 2, 3]
n = [4, 5, 6]
def join_lists(x,y):
  return x+y
print join_lists(m, n) #[1, 2, 3, 4, 5, 6]


#############################
#LOOPS
############################
#while
i=1
while i <=10:
	print(i)
	i=i+1 
	i+=1

#while&break
count = 0
while True:
  print count
  count += 1
  if count >= 10:
    break

#while&slse
from random import randint
# Generates a number from 1 through 10 inclusive
random_number = randint(1, 10)
guesses_left = 3
# Start your game!
while guesses_left >0:
  guess = int(raw_input("Your guess: "))
  if guess == guesses_left:
    print("You win!")
    break
  guesses_left -= 1
else:
    print("You lose.")


#The , character after our print statement means that our next print statement keeps printing on the same line.
phrase = "A bird in the hand..."
# Add your for loop
for char in phrase:
  if char == "A" or char =="a":
    print "X",
  else:
    print char,

#Looping over a dictionary
d = {'a': 'apple', 'b': 'berry', 'c': 'cherry'}
for key in d:
  print key," ",d[key]
#result:
#a   apple
#c   cherry
#b   berry


#enumerate
#enumerate works by supplying a corresponding index to each element in the list that you pass it. 
choices = ['pizza', 'pasta', 'salad', 'nachos']
print 'Your choices are:'
for index, item in enumerate(choices):
  print index+1, item


#zip 
#zip will create pairs of elements when passed two lists, and will stop at the end of the shorter list.
list_a = [3, 9, 17, 15, 19]
list_b = [2, 4, 8, 10, 30, 40, 50, 60, 70, 80, 90]
for a, b in zip(list_a, list_b):
  # Add your code here!
  if a > b:
    print a
  else:
    print b

#for/else
fruits = ['banana', 'apple', 'orange', 'ap', 'pear', 'grape']
print 'You have...'
for f in fruits:
  if f == 'tomato':
    print 'A tomato is not a fruit!' # (It actually is.)
    break
  print 'A', f
else:
  print 'A fine selection of fruits!'


##############################
#EXAM STATISTICS
#############################

grades = [100, 100, 90, 40, 80, 100, 85, 70, 90, 65, 90, 85, 50.5]

def print_grades(grades_input):
  for grade in grades_input:
    print grade
print print_grades(grades)

#sum（合計）
def grades_sum(scores):
  total = 0
  for score in scores: 
    total += score
  return total
print grades_sum(grades)

#average（平均）
def grades_average(grades_input):
  sum_of_grades = grades_sum(grades_input)
  average = sum_of_grades / float(len(grades_input))
  return average
print grades_average(grades)

#variance（分散）
def grades_variance(scores):
  average = grades_average(scores)
  variance = 0
  for score in scores:
    variance = variance + (average - score) ** 2
  return variance/float(len(scores))
print grades_variance(grades)

#standard deviation（標準偏差）
def grades_std_deviation(variance):
  return variance ** 0.5
variance = grades_variance(grades)
print grades_std_deviation(variance)



####################################
#ADVANCED TOPICS IN PYTHON
###################################

#Iterators for Dictionaries
my_dict ={
  "Name": "ka",
  "Age": 26,
  "BDFL": True
}

print my_dict.items()
print my_dict.keys()
print my_dict.values()

for key in my_dict:
  print key,my_dict[key]

#Building Lists
my_list = range(51) #a list of the numbers from 0 to 50 (inclusive)

evens_to_50 = [i for i in range(51) if i % 2 == 0]
print evens_to_50


#List Comprehension Syntax
new_list = [x for x in range(1, 6)]# => [1, 2, 3, 4, 5]
doubles = [x * 2 for x in range(1, 6)]# => [2, 4, 6, 8, 10]
doubles_by_3 = [x * 2 for x in range(1, 6) if (x * 2) % 3 == 0]# => [6]
c = ['C' for x in range(5) if x < 3] # =>['C', 'C', 'C']

threes_and_fives = [ x for x in range(1,16) if ((x%3==0) or (x%5==0))]
print threes_and_fives #=>[3, 5, 6, 9, 10, 12, 15]

#List Slicing Syntax
#[start:end:stride]
l = [i ** 2 for i in range(1, 11)]# => [1, 4, 9, 16, 25, 36, 49, 64, 81, 100]
print l[2:9:2] #=>[9, 25, 49, 81]


#Omitting Indices
to_five = ['A', 'B', 'C', 'D', 'E']
print to_five[3:]# prints ['D', 'E'] 
print to_five[:2]# prints ['A', 'B']
print to_five[::2]# print ['A', 'C', 'E']

my_list = range(1, 11) # List of numbers 1 - 10
print my_list[::2] # odd element(奇数)

#Reversing a List
letters = ['A', 'B', 'C', 'D', 'E']
print letters[::-1] #['E', 'D', 'C', 'B', 'A']


#Anonymous Functions（匿名）
lambda x: x % 3 == 0
#is the same as
def by_three(x):
  return x % 3 == 0

my_list = range(16)
print filter(lambda x: x % 3 == 0, my_list) #=>[0, 3, 6, 9, 12, 15]

squares =[x **2 for x in range(1,11)]
print filter(lambda x:30<=x<=70,squares) #=>[36, 49, 64]

#CLASS
class Animal(object):
      def __init__(self,name):
    self.name = name
    
zebra = Animal("Jeffrey")
print zebra.name

#Inheritance （継承）
class Customer(object):
      """Produces objects that represent customers."""
  def __init__(self, customer_id):
    self.customer_id = customer_id
  def display_cart(self):
    print "I'm a string that stands in for the contents of your shopping cart!"

class ReturningCustomer(Customer):
  """For customers of the repeat variety."""
  def display_order_history(self):
    print "I'm a string that stands in for your order history!"

monty_python = ReturningCustomer("ID: 12345")
monty_python.display_cart()
monty_python.display_order_history()


#Override
class Employee(object):
    """Models real-life employees!"""
    def __init__(self, employee_name):
        self.employee_name = employee_name
    def calculate_wage(self, hours):
        self.hours = hours
        return hours * 20.00
# Add your code below!
class PartTimeEmployee(Employee):
    def calculate_wage(self, hours):
        self.hours = hours
        return hours*12

#super call
class Employee(object):
    """Models real-life employees!"""
    def __init__(self, employee_name):
        self.employee_name = employee_name
    def calculate_wage(self, hours):
        self.hours = hours
        return hours * 20.00

class PartTimeEmployee(Employee):
    def calculate_wage(self, hours):
        self.hours = hours
        return hours*12
    def full_time_wage(self,hours):
      	return super(PartTimeEmployee,self).calculate_wage(hours)
      
milton=PartTimeEmployee("ka")
print milton.full_time_wage(10)


#File input/output
#write-only mode ("w")
#read-only mode ("r")
#read and write mode ("r+")
#append mode ("a"), which adds any new data you write to the file to the end of the file.
my_list = [i ** 2 for i in range(1, 11)]# Generates a list of squares of the numbers 1 - 10
f = open("output.txt", "w")
for item in my_list:
  f.write(str(item) + "\n")
f.close()


#Reading
my_file=open("output.txt","r")
print my_file.read()
my_file.close()

#readling
my_file=open("text.txt","r")
print my_file.readline()
my_file.close()


#with open
with open("text.txt", "w") as textfile:
  textfile.write("Success!")


#Closed
with open("text.txt", "w") as my_file:
	my_file.write("Tretas dos Bronzetas")
	if my_file.closed == False:
	    my_file.close()
print my_file.closed #=>True
