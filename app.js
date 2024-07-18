document.write(`<h1>Task 1</h1>`);
        var y = 3;
        var z = x + y;
        document.write( 'The addition of 3 + 5 is'  + ' ' + z +'<br>');
       var x = 5;
       var y = 3;
       var z = x - y;
        document.write( 'The subtraction, of 3 - 5 is'  + ' ' + z + '<br>');
        var x = 5;
        var y = 3;
        var z = x * y;
        document.write( 'The multiplication of 3 * 5 is'  + ' ' + z  +'<br>');
        var x = 5;
        var y = 3;
        var z = x / y;
        document.write( 'The division of 3 / 5 is'  + ' ' + z +'<br>');
        var x = 5;
        var y = 3;
        var z = x % y;
        document.write( 'The modulus of 3 % 5 is'  + ' ' + z +'<br>');
        //task2
        document.write(`<h1>Task 2</h1>`);
        var x = "600";
        var y = "5"
        var z = x * 5;
        document.write('Total cost to buy'+' ' + y +' ' +'tickets to a movie is ' + ' ' +z + 'pkr')
        //task3
        document.write(`<h1>Task 3</h1>`);
        var number = +prompt("Enter your any number to generate table");
console.log(number);
document.write(`<h1>Table of ${number}</h1>`);
document.write(`<h4>${number} X 1 = ${number * 1}</h4>`);
document.write(`<h4>${number} X 2 = ${number * 2}</h4>`);
document.write(`<h4>${number} X 3 = ${number * 3}</h4>`);
document.write(`<h4>${number} X 4 = ${number * 4}</h4>`);
document.write(`<h4>${number} X 5 = ${number * 5}</h4>`);
document.write(`<h4>${number} X 6 = ${number * 6}</h4>`);
document.write(`<h4>${number} X 7 = ${number * 7}</h4>`);
document.write(`<h4>${number} X 8 = ${number * 8}</h4>`);
document.write(`<h4>${number} X 9 = ${number * 9}</h4>`);
document.write(`<h4>${number} X 10 = ${number * 10}</h4>`);
//task4
document.write(`<h1>Task 4</h1>`);
var price1 = "650"
        var quantity1 = "3"
        var price2 = "100"
        var quantity2 = "7"
        document.write(`<h2> price of item 1 is = ${price1}</h2>`);
        document.write(`<h2> Quantity of item 1 is = ${quantity1}</h2>`);
        document.write(`<h2> price of item 2 is = ${price2}</h2>`);
        document.write(`<h2> Quantity of item 2 is = ${quantity2}</h2>`);
        document.write(`<h1> total cost of your order  =${ price1 * quantity1 + price2 * quantity2}</h1>`);
        //task5
        document.write(`<h1>Task 5</h1>`);
        var dollar = "10";
var pkr1 = "104.80";
var riyal = "25";
var pkr2 = "28";    

document.write(`<h1>Currency in PKR</h1>`);
document.write(`<h2>${dollar} US Dollar  in pakistan = ${dollar * pkr1} PKR</h2>`);
document.write(`<h2>${riyal} Saudi Riyal  in pakistan = ${riyal * pkr2} PKR</h2>`);
document.write(`<h1>Total Currency in PKR = ${riyal * pkr2 + dollar * pkr1}</h1>`);

//task6
document.write(`<h1>Task 6</h1>`);
var number = "4"
        document.write(`<h1>${number * 10 / 2  + 5}</h1>`);
//task7
document.write(`<h1>Task 7</h1>`);
var current = "2024";
        var birth = "2007";
        var age = current - birth;
        document.write(`<h2>Current Year: ${current}</h2>`);
        document.write(`<h2>Birth Year: ${birth}</h2>`);
        document.write(`<h1>Your Age is: ${age}</h1>`);