(function(){

    /*const generateBillChange = bills => {
        let twenties = 20;
        let tens = 10;
        let fives = 5;
        let ones = 1;
        let remainingChange = bills;

        const getNumberofBills = (billValue) => {
            let numberofBills = Math.floor (remainingChange/ billValue);
            remainingChange = remainingChange - (numberofBills * billValue)

            return numberofBills
        };

        twenties = getNumberofBills(20);
        tens = getNumberofBills(10);
        fives = getNumberofBills(5);
        ones = getNumberofBills(1);

        console.log(`Twenties: ${twenty}, Tens: ${ten}, Fives: ${five}, Ones: ${one}`)
    };
    generateBillChange(93);
    
    Imagine we have a very versatile change machine. Create a variable called amount stores a 
    quantity of dollars, and write some code that produces an array that indicates the number of 1, 5, 10, and 20
     bills that the change machine should return. You want the change machine to return the smallest number of bills possible.

After your code runs you should have a new array of the format [twenties, tens, fives, ones]. For example, if amount = 47,
 you should print an array after your code runs that looks like [2, 0, 1, 2] (two twenties, 0 tens, 1 five, 2 ones).
    */

let amount = 88

let twenties = Math.floor(amount / 20)

amount = amount - twenties*20

let tens = Math.floor(amount/10)

amount = amount -tens*10

let fives = Math.floor (amount/ 5)

amount = amount - fives*5

let ones = Math.floor (amount/ 1)

let billsArray = [twenties, tens, fives, ones]

console.log (billsArray)

console. log (fives)
console.log (tens)

console.log (twenties)



})();