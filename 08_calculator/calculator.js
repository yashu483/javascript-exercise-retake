const add = function (first, second) {
  return (first + second);
};

const subtract = function (first, second) {
  return (first - second);
};

const sum = function (array) {
  let result = 0;
  array.map((item) => {
    result += item;
  }
  )
  return result;
};

const multiply = function (array) {
  let result = 1;

  array.map((item) => {
    result *= item;
  })
  return result;
};

const power = function (base, power) {
  let initialValue = base;
  for (let i = 1; i < power; i++) {
    initialValue *= base;
  };
  return initialValue;
};

const factorial = function (value) {
  if (value === 0) {
    return 1;
  };
  let initialValue = 1;
  for (let i = value; i > 0; i--) {
    initialValue *= i;
  }
  return initialValue ;
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
