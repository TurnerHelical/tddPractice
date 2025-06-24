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
        for (letter of stringArray) {
            if (letter === ' ') {
                newArray.push(' ');
            } else {
                let letterUnicode = letter.charCodeAt(0);
                    if (letterUnicode >= 97 && letterUnicode <= 122) {
                        letterUnicode += factor;
                        letterUnicode -= 32;
                        let shiftedChar = String.fromCharCode(letterUnicode);
                        newArray.push(shiftedChar);
                    } else {
                        letterUnicode += factor;
                        letterUnicode += 32;
                        let shiftedChar = String.fromCharCode(letterUnicode);
                        newArray.push(shiftedChar);
                }
                
            }
        }
        let cipherString = newArray.join('');
        return cipherString;

    }
    
}
export { capitilize, reverseString, calculator, ceasarCipher};
