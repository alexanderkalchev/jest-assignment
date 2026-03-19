export default calc = {
    add (num1, num2){
        return num1 + num2; 
    },
    sub (num1, num2) {
        return num1 - num2;
    },
    mul (num1, num2) {
        return num1 * num2;
    },
    div(num1, num2){
        if(num2 === 0) throw new Error("DIVISION BY ZERO!");
        return num1 / num2;
    }
}