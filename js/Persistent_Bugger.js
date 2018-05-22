//my solutions
function persistence(num, flag) {
    //code me
    if (flag !== 1) {
        times = 0
    };
    var multiplyResult = 1;

    if (num < 10) {
        return 0;
    } else {
        strNum = num.toString().split('');
        strNum.map(
            function (c) {
                multiplyResult = parseInt(c) * multiplyResult;
            }
        )
        times++;
        if (multiplyResult >= 10) {
            persistence(multiplyResult, 1);
        }
    }
    return times;
}

var times = 0;


//sample tests
describe('Initial Tests', function () {
    Test.assertEquals(persistence(39),3);// because 3*9 = 27, 2*7 = 14, 1*4=4// and 4 has only one digit
    Test.assertEquals(persistence(4),0);// because 4 is already a one-digit number
    Test.assertEquals(persistence(25),2);
    Test.assertEquals(persistence(999),4);
  });


//best practices
function persistence(num) {
    var times = 0;
    num = num.toString();
    while (num.length > 1) {
      times++;
      num = num.split('').map(Number).reduce((a, b) => a * b).toString();
    }
    
    return times;
 }