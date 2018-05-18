//my solutions
function getMiddle(s)
{
  var s_type = even_or_odd(s);
  console.log(s_type);
  if (s_type === 'Odd'){
    var p = (s.length + 1)/2 -1;
    return s[p];
  }else{
    var p = s.length/2;
    var o = p -1;
    return s[o]+s[p];
  }
}

function even_or_odd(number){
  return number.length % 2 ? "Odd" : "Even"
}

//sample tests
Test.describe("GetMiddle", function() {
    Test.it("Tests", function() {
      Test.assertEquals(getMiddle("test"),"es");
      Test.assertEquals(getMiddle("testing"),"t");
      Test.assertEquals(getMiddle("middle"),"dd");
      Test.assertEquals(getMiddle("A"),"A");
    });
  });

//best practices
function getMiddle(s)
{
  return s.substr(Math.ceil(s.length / 2 - 1), s.length % 2 === 0 ? 2 : 1);
}