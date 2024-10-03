function fibs (num) {
  let array = [];
  
  for (let i = 0; i < num; i++) {
    if (i === 0 || i === 1) {
      array.push(i);
    } else {
      array.push(array[i - 1] + array[i - 2]);
    }
  };

  return array;
};