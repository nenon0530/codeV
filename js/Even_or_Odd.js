//my solutions
function even_or_odd(number) {
    var result = number /2
    if(Number.isInteger(result)){
      return "Even";
    }else{
      return "Odd";
    }
  }
  Test.assertEquals(even_or_odd(2), "Even")
  Test.assertEquals(even_or_odd(0), "Even")
  Test.assertEquals(even_or_odd(7), "Odd")
  Test.assertEquals(even_or_odd(1), "Odd")
//best practices
function even_or_odd(number) {
    return number % 2 ? "Odd" : "Even"
  }