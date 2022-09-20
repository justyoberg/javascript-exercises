const findTheOldest = function(arr) {

  let highest = 0;
  let returnObj = {};
  for (let obj of arr){
    if (!obj.yearOfDeath) {
      obj.yearOfDeath = new Date().getFullYear();
    }
    if ((obj.yearOfDeath - obj.yearOfBirth) > highest) {
      highest = (obj.yearOfDeath - obj.yearOfBirth);
      returnObj = obj;
    }
  }
  return returnObj;
};


// Do not edit below this line
module.exports = findTheOldest;

