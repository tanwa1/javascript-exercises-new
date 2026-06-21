const contains = function(key, value) {
 let valuesObj = Object.values(key);

   for (const item of valuesObj){
      
      if(Object.is(item, value)){
         return true; 
      }

      if(typeof item === "object" && item !== null){
         let found = contains(item, value);
         if(found){
            return true
         }
      }
   }

   return false;

 }
  
// Do not edit below this line
module.exports = contains;
