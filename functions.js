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
      if (typeof num !== "number" || Number.isNaN(num)) {
        return "must be an integer";
      }
    }

    let total = numbers[0];
    for (let i = 1; i < numbers.length; i++) {
      total -= numbers[i];
    }

    return total;
  };

  multiply = (...numbers) => {
    if (!numbers.every((num) => typeof num === "number")) {
      return "must be an integer";
    } else
      return (total = numbers.reduce(
        (total, currentNumber) => total * currentNumber
      ));
  };

  divide = (...numbers) => {
    if (!numbers.every((num) => typeof num === "number")) {
        return "must be an integer";
      } else
        return (total = numbers.reduce(
          (total, currentNumber) => total / currentNumber
        ));
    };
}

class ceasarCipher {
    shift = (string, factor) => {
        let stringArray = string.split(''); 
        let newArray = [];
        for (let char of stringArray) {
            if (char === ' ') {
                newArray.push(' ');
            } else {
                let letterUnicode = char.charCodeAt(0);
                    if (letterUnicode >= 97 && letterUnicode <= 122) {
                        let shiftedChar = (((letterUnicode - 97 + factor) % 26) + 65);
                        newArray.push(String.fromCharCode(shiftedChar));
                    } else if (letterUnicode >= 65 && letterUnicode <= 90) {
                        let shiftedChar = (((letterUnicode - 65 + factor) % 26) + 97);
                        newArray.push(String.fromCharCode(shiftedChar));
                    } else {
                        newArray.push(char);
                    }
                
            }
        }
        let cipherString = newArray.join('');
        return cipherString;

    }
    
}

class AnalyzeArray{

    returnObject = (array) => {
        const result = new Object();
        let average = this.averageArray(array);
        let min = this.lowestNumber(array);
        let max = this.highestNumber(array);
        let length = this.arrayLength(array);
        result.average = average;
        result.min = min;
        result.max = max;
        result.length = length;
        return result
    }

    averageArray = (array) => {
       let average = array.reduce((total, currentNumber) => {
        return total + currentNumber
      },0);
      return average / array.length
    }

    lowestNumber = (array) => {
      let min = Math.min(...array);
      return min
    }

    highestNumber = (array) => {
      let max = Math.max(...array);
      return max;
    }

    arrayLength = (array) => {
      return array.length;
    }
}
export { capitilize, reverseString, calculator, ceasarCipher, AnalyzeArray};
