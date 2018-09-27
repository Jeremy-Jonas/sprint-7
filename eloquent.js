//Exercise 1
function min(x, y) {
    if (x < y) return x;
    else return y;
  }

//Exercise 2
function isEven(n) {
    if (n == 0) return true;
    else if (n == 1) return false;
    else if (n < 0) return isEven(-n);
    else return isEven(n - 2);
  }

//Exercise 3
function countChar(string, ch) {
    let counted = 0;
    for (let a = 0; a < string.length; a++) {
      if (string[a] == ch) {
        counted += 1;
      }
    }
    return counted;
  }
  
  function countBs(string) {
    return countChar(string, "B");
  }