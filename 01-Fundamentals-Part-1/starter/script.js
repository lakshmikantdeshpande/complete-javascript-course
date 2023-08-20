bmi = function(mass, height){
    return mass/(height * height);
}

const markWeight = 78;
const markHeight = 1.69;
const johnWeight = 92;
const johnHeight = 1.95;

console.log('Mark\'s BMI=', bmi(markWeight, markHeight));
console.log('John\'s BMI=', bmi(johnWeight, johnHeight));
