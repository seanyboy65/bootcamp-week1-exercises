const assert = require('assert')


/**
 * Complete the function such that it returns true if an object or any of its
 * subobjects have any falsy values and false otherwise.
 * HINT: Recursion may help here
 * HINT 2: You can get the truthiness of any value or object by using double bang (!!)
 *    !!{} === true
 */

const hasFalsyValue = obj => {
  return false;
};

const falsyObj = {
  hi: ["I", "am", "falsy", "somewhere..."],
  "i'm an number": 23,
  "i'm an object": {
    aint: 'nuthin to look at here...',
    keeplooking: {
      oops: 0
    }
  }
};

const truthyObj = {
  truthy: [],
  stillTruthy: {},
  yup: "this is truthy",
  anotherOne: {
    anotherTruthy: () => {}
  }
};

assert(hasFalsyValue(falsyObj) === true);
assert(hasFalsyValue(truthyObj) === false);
