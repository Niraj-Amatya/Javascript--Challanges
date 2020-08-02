const objects = [{
    a: 0,
    b: 0
  },
  {
    a: 1,
    b: 1
  },
  {
    a: 2,
    b: 2
  },
  {
    a: 0,
    b: 0
  }
];







const findLastIndex = (array, needle) => {
    // Since needle is an object, Object.keys method finds the key
    // of needle as a string when index number is [0] is provided.
    // this key is passed to const varoable key.
    const key = Object.keys(needle)[0];

    // const key is passed inside the needle object to outout its
    // value
    const val = needle[key];

    // looping through the array of the parameter
    for (let i = array.length - 1; i >= 0; i--) {

        // iterating through the array and passing the index as 'i'
        // will give access to the object and using Object.keys checking
        // if it matches to the key of needle by using 'includes'. This is 
        //  the first condition and the second condition is to check if
        // this particular index key value is same as the needle value.
        // thus if true will return index number. Otherwise will return -1.
      if (Object.keys(array[i]).includes(key) 

          && array[i][key] === val)
        return i;
    }
    return -1;
  }


  console.log((findLastIndex(objects, {
    a: 0,
    
  })));

  