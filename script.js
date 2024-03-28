function convertToRoman(num) {
  	const obj = {
      0:['M',1000], 
      1:['D', 500], 
      2:['C', 100], 
      3:['L', 50], 
      4:['X', 10], 
      5:['V', 5], 
      6:['I', 1]
    };

  //your code here

 //    let num = [1,4,5,9,10,40,50,90,100,400,500,900,1000];
 //    let sym = ["I","IV","V","IX","X","XL","L","XC","C","CD","D","CM","M"];
 //    let i=12;
	// let ans = "";
 //    while(number>0)
 //    {
 //    let div = Math.floor(number/num[i]);
 //    number = number%num[i];
 //    while(div--)
 //    {
 //        ans += (sym[i]);
 //    }
 //    i--;
 //    }
	// return ans;

	let romanNumeral = ""

  while (num !== 0) {
    if (num >= 1000) {
      romanNumeral += "M"
      num -= 1000
    } else if (num >= 500) {
        romanNumeral += "D"
        num -= 500
    } else if (num >= 400) {
        romanNumeral += "CD"
        num -= 400
    } else if (num >= 100) {
        romanNumeral += "C"
        num -= 100
    } else if (num >= 90) {
        romanNumeral += "XC"
        num -= 90
    } else if (num >= 50) {
        romanNumeral += "L"
        num -= 50
    } else if (num >= 40) {
        romanNumeral += "XL"
        num -= 40
    } else if (num >= 10) {
        romanNumeral += "X"
        num -= 10
    } else if (num >= 9) {
        romanNumeral += "IX"
        num -= 9
    } else if (num >= 5) {
        romanNumeral += "V"
        num -= 5
    } else if (num >= 4) {
        romanNumeral += "IV"
        num -= 4
    } else if (num >= 1) {
        romanNumeral += "I"
        num -= 1
    }
  }

  return romanNumeral
}
// You can test your code by running the above function and printing it to console by pressing the run button at the top. To run it with input 36, uncomment the following line

// console.log(convertToRoman(36));




// do not edit below this line
module.exports = convertToRoman
