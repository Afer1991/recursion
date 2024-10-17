function mergeSort(arr) {
  if (arr.length <= 1 ) {
    return arr;
  } else {
    const left = mergeSort(arr.slice(0, arr.length / 2));
    const right = mergeSort(arr.slice(arr.length / 2));
      
    function merge(l, r) {
    
      if (l.length === 0 && r.length === 0) {
        return [];
      } else if (l.length === 0 ) {
        return r;
      } else if (r.length === 0) {
        return l;
      }

      const lf = l[0];
      const rg = r[0];

      if (lf <= rg) {
        return [lf].concat(merge(l.slice(1),r));
      } else {
        return [rg].concat(merge(l, r.slice(1)));
      }
    };

      
    return merge(left, right);

  }
};