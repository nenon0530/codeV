//my solutions
function orderWeight(strng) {

    var a = strng.split(' ');
    var sum;
    var c = [];
    var returnStr = [];
    var flag=0;
    var index=0;
    //c.push(0);

    a.forEach(
        function (el) {
            sum = el.split('').map(Number).reduce((sum, x) => sum + x);
            //console.log(sum);
            if (c.length >= 1) {
                var index
                for (i = 0; i < c.length; i++) {
                    if (c[i] === sum) {
                        // c.splice(i + 1, 0, sum);
                        // returnStr.splice(i + 1, 0, el);
                        flag=1;
                        index=i+1;
                    } else if (c[i] > sum) {
                        c.splice(i, 0, sum);
                        returnStr.splice(i, 0, el);
                        flag=1;
                        break;
                    }
                }
                if (flag === 0) {
                    c.push(sum);
                    returnStr.push(el);
                };
                if(index !==0){
                   c.splice(index, 0, sum);
                   returnStr.splice(index, 0, el);
                };
                flag=0;
                index=0;
                
            } else {
                c.push(sum);
                returnStr.push(el);
            }
        });
    //console.log(c);
    console.log(returnStr);
    // c.sort(function(a,b){
    //     if(a<b) return -1;
    //     if(a>b) return 1;
    //     return 0;
    // });

}


//sample tests
console.log(orderWeight("56 65 74 100 99 68 86 180 90"))


//best practices