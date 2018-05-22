//my solutions
function dirReduc(arr) {
    for (i = 0; i < arr.length; i++) {
        var word = arr[i] + arr[i + 1];
        if (word === "NORTHSOUTH" || word === "SOUTHNORTH" || word === "EASTWEST" || word === "WESTEAST") {
            arr.splice(i, 2);
            dirReduc(arr);
        }
    }
    return arr;
}


//sample tests
Test.assertSimilar(dirReduc(["NORTH", "SOUTH", "SOUTH", "EAST", "WEST", "NORTH", "WEST"]), ["WEST"])
Test.assertSimilar(dirReduc(["NORTH", "WEST", "SOUTH", "EAST"]), ["NORTH", "WEST", "SOUTH", "EAST"])
Test.assertSimilar(dirReduc(["NORTH", "SOUTH", "EAST", "WEST", "EAST", "WEST"]), [])



//best practices
function dirReduc(plan) {
    var opposite = {
      'NORTH': 'SOUTH', 'EAST': 'WEST', 'SOUTH': 'NORTH', 'WEST': 'EAST'};
    return plan.reduce(function(dirs, dir){
        if (dirs[dirs.length - 1] === opposite[dir])
          dirs.pop();
        else
          dirs.push(dir);
        return dirs;
      }, []);
  }