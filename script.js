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

    let m = ["", "M", "MM", "MMM"];
    let c = ["", "C", "CC", "CCC", "CD", "D",
                        "DC", "DCC", "DCCC", "CM"];
    let x = ["", "X", "XX", "XXX", "XL", "L",
                        "LX", "LXX", "LXXX", "XC"];
    let i = ["", "I", "II", "III", "IV", "V",
                        "VI", "VII", "VIII", "IX"];
         
    // Converting to roman
    let a1 = Math.floor(num/1000);
    let a2 = Math.floor((num%1000)/100);
    let a3 = Math.floor((num%100)/10);
 
    let thousands = m[a1];
    let hundreds = c[a2];
    let tens = x[a3];
    let ones = i[num%10];
         
    let ans = thousands + hundreds + tens + ones;
         
    return ans;

}
// You can test your code by running the above function and printing it to console by pressing the run button at the top. To run it with input 36, uncomment the following line

// console.log(convertToRoman(36));




// do not edit below this line
module.exports = convertToRoman
