const permutations = function(numArray) {

    if(numArray.length === 0) return [[]];

    const result = [];

    for(let i = 0; i < numArray.length; i++){
        const current = numArray[i]
        const remaining = numArray.slice(0, i).concat(numArray.slice(i + 1));
        const perms = permutations(remaining);
        for(let perm of perms){
            result.push([current].concat(perm))
        }
    }
    return result;
};
  
// Do not edit below this line
module.exports = permutations;
