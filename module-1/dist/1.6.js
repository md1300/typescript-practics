"use strict";
{
    // learning function -----------
    // normal function
    // arrow function 
    function add(num1, num2 = 10) {
        return num1 + num2;
    }
    add(2, 2);
    const addArrow = (num1, num2) => num1 + num2;
    // object-->function -->method 
    const poorUser = {
        name: 'tawhid',
        balance: 0,
        // addBalance(balance:number) : number {
        //     return this.balance+balance;
        // } ,
        sumBalance(balance) {
            return `my new balance is : ${this.balance + balance}`;
        }
    };
    const arr = [1, 2, 4, 5];
    const newArray = arr.map((elem) => elem * elem);
}
