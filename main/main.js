// Write your cade below:
function caclRemaindar(number1,number2) {
    return number1 % number2;
};

function caclSum(array) {
    let result = 0;
    for(let i = 0 ; i< array.length;i++){
        result += array[i];
    }
    return result;
};

function caclSumInConditon(array,number) {
    let result = 0;
    for(let i = 0; i< array.length;i++){
        if(array[i] < number){
            result += array[i];
        }
    }
    return result;
};

module.exports = {
    caclRemaindar,
    caclSum,
    caclSumInConditon
}