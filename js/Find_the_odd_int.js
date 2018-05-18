//my solutions
function findOdd(A) {
    //重複削除
    var a = A.filter((x, i, self) => self.indexOf(x) === i);
    //クリア
    findOdd.pairs = {};
    //KEYと初期値0を入れる
    for (i = 0; i < a.length; i++) {
        var key = a[i];
        findOdd.pairs[key] = 0;
    }
    A.map(
        function (c) {
            var strKey = c.toString();
            findOdd.pairs[strKey] = findOdd.pairs[strKey] + 1;
        });

    for (var returnKey in findOdd.pairs) {
        if (findOdd.pairs[returnKey] % 2 != 0) {
            return parseInt(returnKey);
        }
    }
}
findOdd.pairs = {}

//sample tests
function doTest(a, n) {
    console.log("A = ", a);
    console.log("n = ", n);
    Test.assertEquals(findOdd(a), n);
}
Test.describe('Example tests', function () {
    doTest([20, 1, -1, 2, -2, 3, 3, 5, 5, 1, 2, 4, 20, 4, -1, -2, 5], 5);
    doTest([1, 1, 2, -2, 5, 2, 4, 4, -1, -2, 5], -1);
    doTest([20, 1, 1, 2, 2, 3, 3, 5, 5, 4, 20, 4, 5], 5);
    doTest([10], 10);
    doTest([1, 1, 1, 1, 1, 1, 10, 1, 1, 1, 1], 10);
    doTest([5, 4, 3, 2, 1, 5, 4, 3, 2, 10, 10], 1);
});


//best practices
const findOdd = (xs) => xs.reduce((a, b) => a ^ b);

//best practices2
function findOdd(A) {
    var obj = {};
    A.forEach(function(el){
      obj[el] ? obj[el]++ : obj[el] = 1;
    });
    for(prop in obj) {
      if(obj[prop] % 2 !== 0) return Number(prop);
    }
  }