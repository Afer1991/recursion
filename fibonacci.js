function fibs(num) {
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

function fibsRec(num) {
  if(num <= 0) {
    return [];
  } else if (num === 1) {
    return [0];
  } else if (num === 2) {
    return [0, 1];
  } else {
    const fibEl = [fibsRec(num - 1)[num - 2] + fibsRec(num - 1)[num - 3]];
    return fibsRec(num - 1).concat(fibEl);
  }
};


