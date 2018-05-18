
//String Interpolation
var myPet = 'armadillo';
console.log('I own a pet ' + myPet + '.'); 

//////////////////////////
//Control Flow
/////////////////////////
//if/else Statements
var needCoffee = true;
if (needCoffee) {
    console.log('Finding coffee');
} else {
    console.log('Keep on keeping on!');
}

//Comparison Operators
//Less than: <
//Greater than: >
//Less than or equal to: <=
//Greater than or equal to: >=
//check if two things equal each other:===
//check if two things do not equal each other:!==

//else if Statements
var stopLight = 'green';
if (stopLight === 'red') {
  console.log('Stop');
} else if (stopLight === 'yellow') {
  console.log('Slow down');
} else if (stopLight === 'green') {
  console.log('Go!');
} else {
  console.log('Caution, unknown!');
}


//Logical Operators
//To say "both must be true," we can use &&.
//To say "either can be true," we can use ||.
//To say "I want to make sure this is the opposite of what it really is," we can use !.
//To say "these should not be equal to each other," we can use !==.
if (stopLight === 'green' && pedestrians === false) {
    console.log('Go!');
  } else {
    console.log('Stop');
  }


//switch Statements
var groceryItem = 'papaya';
switch (groceryItem) {
  case 'tomato':
    console.log('Tomatoes are $0.49');
    break;
  case 'lime':
    console.log('Limes are $1.49');
    break;
  case 'papaya':
    console.log('Papayas are $1.29');
    break;
  default:
    console.log('Invalid item');
    break;
}

/////////////////////////////////
//FUCTION
/////////////////////////////////
var calculatorOn = false;
function pressPowerButton() {
  if (calculatorOn) {
    console.log('Calculator turning off.');
    calculatorOn = false;
  } else {
    console.log('Calculator turning on.');
    calculatorOn = true;
  }
}
pressPowerButton();// Output: Calculator turning on.
pressPowerButton();// Output: Calculator turning off.



///////////////////////////////
//Arrays
//////////////////////////////
var bucketList =['a','b','c']
console.log(bucketList)

//Property Access
var bucketList = ['Rappel into a cave', 'Take a falconry class', 'Learn to juggle'];
var listItem = bucketList[0];
console.log(listItem);

var hello = 'Hello World';
console.log(hello[6]);// Output: W

//length property
var bucketList = ['Rappel into a cave', 'Take a falconry class'];
console.log(bucketList.length);// Output: 2

//push Method
var bucketList = ['item 0', 'item 1', 'item 2'];
bucketList.push('item 3', 'item 4'); //['item 0', 'item 1', 'item 2', 'item 3', 'item 4'];

//pop Method (deletes the last item of an array)
var bucketList = ['item 0', 'item 1', 'item 2'];
bucketList.pop();
console.log(bucketList); // Output: [ 'item 0', 'item 1' ]

//more method:https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array




///////////////////////////////
//Loops
//////////////////////////////
//for Loops
var animals = ["Grizzly Bear", "Sloth", "Sea Lion"];
for (var i = 0; i < animals.length; i++) {
  console.log(animals[i]);
}
//for loop backwards
for (var i = animals.length-1; i >=0; i--) {
    console.log(animals[i]);
  }

//while Loops
while (currentCard !== 'Spade') {
    console.log(currentCard);
    var randomNumber = Math.floor(Math.random() * 4);
    currentCard = cards[randomNumber];
  }

///////////////////////////////
//Built-in Methods
//////////////////////////////
// Log Codecademy in all uppercase letters
console.log('Codecademy'.toUpperCase());  //CODECADEMY

// Use a string method to log the following statment without whitespace at the beginning and end of it.
console.log('    Remove whitespace   '.trim()); //Remove whitespace

//library
console.log(Math.random()); //0.8286366842386481
console.log(Math.floor(Math.random()*100)); //82
console.log(Math.ceil(43.8)); //44
console.log(Number.isInteger(2017)); //true

//more math library : https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math



////////////////////////////////////////////////////////////////////////////////////////////////////////////
//ITERATORS(イテレーター) https://developer.mozilla.org/ja/docs/Web/JavaScript/Guide/Iterators_and_Generators
///////////////////////////////////////////////////////////////////////////////////////////////////////////

//.forEach()
let groceries = ['whole wheat flour', 'brown sugar', 'salt', 'cranberries', 'walnuts']; 
groceries.forEach(function(groceryItem) {
  console.log(' - ' + groceryItem);
});
//arrow function syntax
groceries.forEach(groceryItem => console.log(' - ' + groceryItem));


//.map() (almost same as forEach() diffrence:retruns a new array)
let numbers = [1, 2, 3, 4, 5]; 
let bigNumbers = numbers.map(function(number) {
  return number * 10;
});
//arrow function syntax
let bigNumbers = numbers.map(numbers => numbers * 10);

//.filter()
let words = ['chair', 'music', 'pillow', 'brick', 'pen', 'door']; 
let shortWords = words.filter(function(word) {
  return word.length < 6;
});
//arrow function syntax
let shortWords = words.filter(word => word.length < 6);

//Choose the Right Iterator
let cities = ['Nashville', 'Charlotte', 'Asheville', 'Austin', 'Boulder'];
let nums = [1, 50, 75, 200, 350, 525, 1000];
//  Choose a method that will return undefined
cities.forEach(city => console.log('Have you visited ' + city + '?'));
// Choose a method that will return a new array
let longCities = cities.filter(city => city.length > 7);
// Choose a method that will return a new array
let smallerNums = nums.map(num => num - 5);
// Choose a method that will return a boolean value
nums.some(num => num < 0);



///////////////////////////////
//OBJECT
//////////////////////////////
let restaurant = {
  name: 'Italian Bistro',
  seatingCapacity: 120,
  hasDineInSpecial: true,
  entrees: ['Penne alla Bolognese', 'Chicken Cacciatore', 'Linguine Pesto']
};
//access Property
console.log(restaurant.entrees); //dot notation
console.log(restaurant['entrees']); //bracket notation.
console.log(restaurantSpecials[meal]); //One advantage that bracket notation is that you can use variables inside the brackets to select the keys of an object.

//adding a property
restaurant['appetizers'] = ['Fried Calamari', 'Bruschetta'];
restaurant.desserts = ['Homemade Tiramisu', 'Cannoli'];

//Editing a Property
restaurant.desserts = ['Homemade Tiramisu', 'Canolli', 'Cheesecake'];

//Methods
const restaurant = {
  name: 'Italian Bistro',
  seatingCapacity: 120,
  hasDineInSpecial: true,
  entrees: ['Penne alla Bolognese', 'Chicken Cacciatore', 'Linguine pesto'],
  openRestaurant: () => {
    return 'Unlock the door, flip the open sign. We are open for business!';
  },
  closeRestaurant: () => {
    return 'Lock the door, flip the open sign. We are closed.'
  }
};
console.log(restaurant.openRestaurant());

//Methods: ES6　※In 2015, a new version of JavaScript (ES6) was introduced with additional methods and new syntax. 
const restaurant = {
  name: 'Italian Bistro',
  seatingCapacity: 120,
  hasDineInSpecial: true,
  entrees: ['Penne alla Bolognese', 'Chicken Cacciatore', 'Linguine pesto'],
  openRestaurant() {
    return 'Unlock the door, flip the open sign. We are open for business!';
  },
  closeRestaurant() {
    return 'Lock the door, flip the open sign. We are closed.'
  }
}

//The this Keyword（The this keyword refers to the current object）
//this.hasDineInSpecial inside the object is the same as accessing restaurant.hasDineInSpecial outside the object.
  const restaurant = {
    name: 'Italian Bistro',
    seatingCapacity: 120,
    hasDineInSpecial: true,
    entrees: ['Penne alla Bolognese', 'Chicken Cacciatore', 'Linguine pesto'],
    openRestaurant: function() {
      if (this.hasDineInSpecial) {
        return 'Unlock the door, post the special on the board, then flip the open sign.'
      } else {
        return 'Unlock the door, then flip the open sign.'
      }
    }
  }
  console.log(restaurant.openRestaurant());

  //this keyword 2
  let myObj = {
    name: 'Miti',
    sayHello() {
      return `${this.name} says hello!`;
    }
  };
  let yourObj = {
    name: 'Timer'
  };
  yourObj.sayHello = myObj.sayHello;

  //Getters and Setters I
  //an underscore before a property name to indicate a property or value should not be modified directly by other code.
  let restaurant = {
    _name: 'Italian Bistro',
    _seatingCapacity: 120,
    _hasDineInSpecial: true,
    _entrees: ['Penne alla Bolognese', 'Chicken Cacciatore', 'Linguine pesto'],
  
    set seatingCapacity(newCapacity) {
        if (typeof newCapacity === 'number') {
          this._seatingCapacity = newCapacity;
        console.log(`${newCapacity} is valid input.`);
      } else {
          console.log(`Change ${newCapacity} to a number.`)
      }
    }
  }

  //Getters and Setters II
  let restaurant = {
    _name: 'Italian Bistro',
    _seatingCapacity: 120,
    _hasDineInSpecial: true,
    _entrees: ['Penne alla Bolognese', 'Chicken Cacciatore', 'Linguine pesto'],
  
    set seatingCapacity(newCapacity) {
        if (typeof newCapacity === 'number') {
          this._seatingCapacity = newCapacity;
        console.log(`${newCapacity} is valid input.`);
      } else {
          console.log(`Change ${newCapacity} to a number.`);
      }
  }
}
  restaurant.seatingCapacity = 150;

//Getters and Setters III
  let restaurant = {
    _name: 'Italian Bistro',
    _seatingCapacity: 120,
    _hasDineInSpecial: true,
    _entrees: ['Penne alla Bolognese', 'Chicken Cacciatore', 'Linguine pesto'],
  
    set seatingCapacity(newCapacity) {
      if (typeof newCapacity === 'number') {
        this._seatingCapacity = newCapacity;
      } else {
        console.log(`Change ${newCapacity} to a number.`)
      }
    },
  
    get seatingCapacity() {
      console.log(`There are ${this._seatingCapacity} seats at Italian Bistro.`);
      return this._seatingCapacity;
    }
  }

///////////////////////////////
//CLASS
//////////////////////////////

/*Although you may see similarities between class and object syntax, there is one important method that sets them apart. 
It's called the constructor method. JavaScript calls the constructor() method every time it creates a new instance of a class.*/
/*Class method and getter syntax is the same as it is for objects except you can not include commas between methods.*/
  class Dog {
    constructor(name) {
      this._name = name;
      this._behavior = 0;
    }
  
    get name() {
      return this._name;
    }
    get behavior() {
      return this._behavior;
    }   
  
    incrementBehavior() {
      this._behavior ++;
    }
  }
  
  const halley = new Dog('Halley'); // Create new Dog instance
  console.log(halley.name); // Print name value to console
  console.log(halley.behavior); // Print behavior value to console
  halley.incrementBehavior(); // Add one to behavior
  console.log(halley.name); // Print name value to console
  console.log(halley.behavior); // Print behavior value to console


//Inheritance （継承）
class HospitalEmployee {
  constructor(name) {
    this._name = name;
    this._remainingVacationDays = 20;
  }
  get name() {
    return this._name;
  }
  get remainingVacationDays() {
    return this._remainingVacationDays;
  }
  takeVacationDays(daysOff) {
    this._remainingVacationDays -= daysOff;
  }
}

class Nurse extends HospitalEmployee {
  constructor(name, certifications) {
    super(name); //The super keyword calls the constructor of the parent class.
    this._certifications = certifications;
  } 
   get certifications(){
    return this._certifications;
  }
   addCertification(newCertification){
    this._certifications=this._certifications.push(newCertification);
  }
}
const nurseOlynyk = new Nurse('Olynyk', ['Trauma','Pediatrics']);
nurseOlynyk.takeVacationDays(5);
console.log(nurseOlynyk.remainingVacationDays);
nurseOlynyk.addCertification('Genetics');
console.log(nurseOlynyk.certifications);


//Static Methods
class Animal {
  constructor(name) {
    this._name = name;
    this._behavior = 0;
  }

  static generateName() {
    const names = ['Angel', 'Spike', 'Buffy', 'Willow', 'Tara'];
    const randomNumber = Math.floor(Math.random()*5);
    return names[randomNumber];
  }
}

console.log(Animal.generateName()); // returns a name

//You cannot access the .generateName() method from instances of the Animal class or instances of its subclasses (See below).
const tyson = new Animal('Tyson'); 
tyson.generateName(); // TypeError

/////////////////////////////////////////
//BROWSER COMPATIBILITY AND TRANSPILATION
////////////////////////////////////////
var pasta = "Spaghetti"; // ES5 syntax
const meat = "Pancetta"; // ES6 syntax
let sauce = "Eggs and cheese"; // ES6 syntax


// Template literals, like the one below, were introduced in ES6
var carbonara = `You can make carbonara with ${pasta}, ${meat}, and a sauce made with ${sauce}.`;

//ES5 syntax
var carbonara = 'You can make carbonara with' + pasta + meat + 'and a sauce made with ' +sauce;


//Babel ※ a JavaScript library called Babel that transpiles ES6 JavaScript to ES5.
//npm install babel-cli
//npm install babel-preset-env
/*npm run build and press enter.
You can view the ES5 code in ./lib/main.js.
You may need to refresh to see the newly created lib directory.*/



////////////////////////////////////////////
//Modules
////////////////////////////////////////////
//module.exports
let Menu = {};
Menu.specialty = "Roasted Beet Burger with Mint Sauce";
module.exports = Menu;

//require()
const Menu = require('./menu.js');
function placeOrder() {
  console.log('My order is: ' + Menu.specialty);
}
placeOrder();

//module.exports II
let Menu = {};
module.exports = {
  specialty: "Roasted Beet Burger with Mint Sauce",
  getSpecialty: function() {
    return this.specialty;
  } 
};
//access the behavior in the Menu module.
const Menu = require('./menu.js');
console.log(Menu.getSpecialty());


//export default
let Airplane={
  availableAirplanes:[]
};
Airplane.availableAirplanes = [
{
  name: 'AeroJet',
  fuelCapacity: 800
 }, 
 {name: 'SkyJet',
  fuelCapacity: 500
 }
];
export default Airplane;

//Named Exports
let specialty = '';
function isVegetarian() {
}; 
function isLowSodium() {
}; 
export { specialty, isVegetarian };

//import
import Menu from './menu';

//Named Imports
import { specialty, isVegetarian } from './menu';
console.log(specialty);


//Export Named Exports
export let specialty = '';
export function isVegetarian() {
}; 
function isLowSodium() {
};

//Import Named Imports
import { specialty, isVegetarian } from 'menu';

//Export as
let specialty = '';
let isVegetarian = function() {
}; 
let isLowSodium = function() {
}; 
export { specialty as chefsSpecial, isVegetarian as isVeg, isLowSodium };


//Import as
import * as Carte from './menu';
Carte.chefsSpecial;
Carte.isVeg();
Carte.isLowSodium();


//Combining Export Statements
let specialty = '';
function isVegetarian() {
}; 
function isLowSodium() {
}; 
function isGlutenFree() {
};
export { specialty as chefsSpecial, isVegetarian as isVeg };
export default isGlutenFree;

//Combining Import Statements
import { specialty, isVegetarian, isLowSodium } from './menu';
import GlutenFree from './menu';




////////////////////////////////////////////
//Requests
////////////////////////////////////////////

//HTTP Requests
// GET
const xhr = new XMLHttpRequest();
const url = 'http://api-to-call.com/endpoint';
xhr.responseType = 'json';
xhr.onreadystatechange = function() {
  if (xhr.readyState === XMLHttpRequest.DONE) {
    console.log(xhr.response);
  }
};
xhr.open('GET', url);
xhr.send();

// POST
const xhr = new XMLHttpRequest();
const url = 'http://api-to-call.com/endpoint';
const data = JSON.stringify({
  id: '200'
});
xhr.responseType = 'json';
xhr.onreadystatechange = function() {
  if (xhr.readyState === XMLHttpRequest.DONE) {
    console.log(xhr.response);
  }
};
xhr.open('POST', url);
xhr.send(data);