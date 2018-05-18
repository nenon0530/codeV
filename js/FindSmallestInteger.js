//my solutions
class SmallestIntegerFinder {
    findSmallestInt(args) {
      args.sort(function(a,b){
        if(a<b) return -1;
        if(a>b) return 1;
        return 0;
      });
      console.log(args);
      return args[0];
    }
  }
  Test.describe("Smallest Integer Tests", _ => {
    Test.it("Fixed Tests", __ => {
      var sif = new SmallestIntegerFinder();
      Test.assertEquals(sif.findSmallestInt([78,56,232,12,8]),8,'Should return the smallest int 8');
      Test.assertEquals(sif.findSmallestInt([78,56,232,12,18]),12,'Should return the smallest int 12');
      Test.assertEquals(sif.findSmallestInt([78,56,232,412,228]),56,'Should return the smallest int 56');
      Test.assertEquals(sif.findSmallestInt([78,56,232,12,0]),0,'Should return the smallest int 0');
      Test.assertEquals(sif.findSmallestInt([1,56,232,12,8]),1,'Should return the smallest int 1');
    });
  });  

//best practices
//...⇒Spread syntax
class SmallestIntegerFinder {
    findSmallestInt(args) {
      return Math.min(...args)
    }
  }

 