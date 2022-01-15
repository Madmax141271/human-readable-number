module.exports = function toReadable (number) {
    
        const num = "zero one two three four five six seven eight nine ten eleven twelve thirteen fourteen fifteen sixteen seventeen eighteen nineteen".split(" ");
        const tens = "twenty thirty forty fifty sixty seventy eighty ninety".split(" ");
        const digit = number%10;
        let answ;
        if (number < 20) {
            answ = num[number];
        }else if (number < 100) {
            answ = tens[Math.floor(number/10)-2] + (digit? " " + num[digit]: "");
        } else  if (number < 1000) {
            answ = num[Math.floor(number/100)] +" hundred" + (number%100 == 0? "": " " + toReadable(number%100));
        } else {
            answ = toReadable(Math.floor(n/1000)) + " thousand" + (n%1000 != 0? " " + toReadable(n%1000): "");
        }
        return  answ;
   
}
