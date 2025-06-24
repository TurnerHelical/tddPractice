function capitilize(toBeCap) {
  if (typeof toBeCap === "string") {
    const newString = toBeCap.charAt(0).toUpperCase() + toBeCap.slice(1);
    return newString;
  } else {
    return toBeCap;
  }
}

function reverseString(toBeReversed) {
  if (typeof toBeReversed === "string") {
    let charArray = toBeReversed.split("");
    let reversedArray = charArray.reverse();
    let reversedString = reversedArray.join("");
    return reversedString;
  } else {
    return toBeReversed;
  }
}

class calculator {
  add = (...numbers) => {
    let total = 0;
    outerloop: for (num of numbers) {
      if (typeof num != "number") {
        total = "must be an integer";
        break outerloop;
      } else {
        total += num;
      }
    }
    return total;
  };

  subtract = (...numbers) => {
    if (numbers.length === 0) return 0;

    for (let num of numbers) {
        if (typeof num !== 'number' || Number.isNaN(num)) {
            return 'must be an integer';
        }
    }

    let total = numbers[0];
    for (let i = 1; i < numbers.length; i++) {
        total -= numbers[i];
    }

    return total;
};
}
export { capitilize, reverseString, calculator };
