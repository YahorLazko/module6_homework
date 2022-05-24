function sum(f, y) {
  result = f+y;
  return result;
  }
  
  
  let f = function(x) {
     return x;
  }
  
  let sumNum = sum(f(4), 5);
  console.log(sumNum);