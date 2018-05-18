//my solutions
function highAndLow(numbers){
    var num_array=numbers.split(' ');
    var new_num_array=[];
    for(i=0;i<num_array.length;i++){
      new_num_array.push(parseInt(num_array[i],10));
    }
    console.log(new_num_array);
    var min_num=Math.min(...new_num_array);
    var max_num=Math.max(...new_num_array);
    return max_num.toString()+' '+min_num.toString();
  }


//sample tests
Test.assertEquals(highAndLow("4 5 29 54 4 0 -214 542 -64 1 -3 6 -6"), "542 -214");
Test.assertEquals(highAndLow("1 -1"), "1 -1");
Test.assertEquals(highAndLow("1 1"), "1 1");


//best practices
function highAndLow(numbers){
    numbers = numbers.split(' ').map(Number);
    return Math.max(...numbers) + ' ' + Math.min(...numbers);
}