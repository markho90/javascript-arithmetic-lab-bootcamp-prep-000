function add(a,b){
 return a+b
}

function subtract(a,b){
 return a-b
}

function multiply(a,b){
 return a*b
}

function divide(a,b){
 return a/b
}

function inc(n){
 return ++n
}

function dec(n){
 return --n
}

function makeInt(n){
<<<<<<< HEAD
  return parseInt(n, 10)
}

function preserveDecimal(n){
  return parseFloat(n)
=======
  if(n === parseInt(n)){
  return parseInt('n')
  }
  else if (n === parseInt(n, 10)){
  return parseInt('n', 10)
  }
  else if (n === parseInt('nonsense',10)){
  return parseInt('nonsense')
  }
>>>>>>> c173dd601f748d8be2f17aa65bef9a20badd570c
}