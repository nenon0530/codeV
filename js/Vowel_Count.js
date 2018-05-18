//my solutions
function getCount(str) {
    var vowelsCount = 0;
    var vowelsList =['a','e','i','o','u'];
    var char;
    // enter your majic here
    for(let i=0;i<str.length;i++){
      char = str.substr(i,1);
      if(vowelsList.includes(char)){
        vowelsCount++;
      }
    }
    return vowelsCount;
  }

//sample tests
describe("Case 1", function(){
    it ("should be defined", function(){
        Test.assertEquals(getCount("abracadabra"), 5)
    });
});


//best practices
//フラグ	意味(※http://www.tohoho-web.com/js/regexp.htm)
//i	大文字・小文字を区別しない
//g	2番目、3番目... にマッチする部分も検索する
//m	複数行に対して検索する (e5.5/N6)
function getCount(str) {
  return (str.match(/[aeiou]/ig)||[]).length;
}