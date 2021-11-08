// Code your solution in this file!
const returnFirstTwoDrivers = function (drivers) {
    return drivers.slice(0, 2);
  };

  const returnLastTwoDrivers = function (drivers) {
    return drivers.slice(-2);
  };

  const selectingDrivers = [ returnFirstTwoDrivers, returnLastTwoDrivers ];

  function createFareMultiplier(num){
      return function (number){
         return number * num
      }
  }

  function fareTripler(num){
    return num * 3
  }

  function fareDoubler(num){
    return num * 2
  }

  function fetchSpecifiedDrivers(array, func){
    return func(array)
  }

  function selectDifferentDrivers(array, func) {
      return func(array)
  }





// what is the job of this function? is it supposed to return a string, modify an array?

// each function needs a single, clear purpose...............................................

// what data/info does it need in order to do it's job? what arguments, parameters is necessary?

// what am i expecting as a return value? Should be pretty distinct
