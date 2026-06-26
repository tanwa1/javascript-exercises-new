const totalIntegers = function (objects) {

  if (objects === null || (!Array.isArray(objects) && typeof objects !== "object")) {
    return undefined;
  }

  const values = Object.values(objects);

  const nestedArrays = values.reduce((total, currentValue) => {
     if(Number.isInteger(currentValue)){
        return total + 1;
     }
     else if(Array.isArray(currentValue) || (typeof currentValue === 'object' && currentValue !== null && !Array.isArray(currentValue))){
        return total + totalIntegers(currentValue)
     }
     else{
        return total + 0;
     }
  }, 0);
       return nestedArrays;
};

// Do not edit below this line
module.exports = totalIntegers;
