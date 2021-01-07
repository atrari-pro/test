function somme(x) {
  console.log(x)  
    if (x == 1) {
       return 1;
      }
    let result = x + somme(x -1);
    console.log(result)
    return result
}

console.log(somme(5));
