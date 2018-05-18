//Get the mean of an array

//my solutions
function getAverage(marks){
    //TODO : calculate the downwar rounded average of the marks array
    var sum_marks=0;
    for(var i=0;i<marks.length;i++){
      sum_marks = sum_marks +marks[i];
     }
     return Math.floor(sum_marks/marks.length); 
  }

//best practices
function getAverage(marks){
    return Math.floor(marks.reduce((sum, x) => sum + x) / marks.length);
  }