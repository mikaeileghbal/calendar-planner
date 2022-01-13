//=========================================================
function ascending(a, b) {
    
    // if a>b return poisitive
    // if a<b return negative
    // if a==b return 0
    return a - b;
    
}

// compare ascending
function descending(a, b) {
    
    return b - a;
}

//compare descending
function callCompareFunctions() {

    var nums = [1, 2, 53, 8, 20, 87, 3];

    nums.sort(randomOrder);
    alert(nums);
    
}

//compare random
function randomOrder() {

    return 0.5 - Math.random();
    
}

//===============================================
// get random item from array

function randomItem(arr) {
    
    return arr[Math.floor(Math.random() * arr.length)];
}

//var colors = ["Red", "Green", "Blue"];

//alert(randomItem(colors));

//===============================================
// using callback functions

var arr = [1, 2, 3, 4, 90,86,95,98,0,30,94];
var sum = 0;

arr.forEach(sumItems);
arr.forEach(incItemsByOne);
var y = arr.map(doubleIt);
var highAcore = arr.filter(gradeA);

function sumItems(value) {
    sum += value;
}

alert(sum);

function incItemsByOne(value,i,arr) {
    
    arr[i] = value + 1;
}

alert(arr);

function doubleIt(value) {
    
    return value * 2;
}

alert(y);

function gradeA(value) {
    
    return value > 90;
}

alert(highAcore);


//using this parameter

var arrGrades = [60, 50, 90, 45, 96, 20, 98, 80, 63, 93];
var highGrades = arrGrades.filter(gradeA2, 95);

function gradeA2(value) {
    
    return value > this;
}

alert(highGrades);

// every method and some
var allPass = arrGrades.every(passTest);
alert(allPass);

function passTest(value) {
    
    return value > 70;
}


var some = arrGrades.some(somePass);
alert(some);

function somePass(value) {
    
    return value > 70;
}