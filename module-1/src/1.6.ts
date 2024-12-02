{
    // learning function -----------
// normal function
// arrow function 

function add(num1 :number,num2 :number=10) :number {
    return num1+num2
}
add(2,2)

const addArrow = (num1:number,num2:number):number =>num1+num2

// object-->function -->method 

const poorUser={
    name:'tawhid',
    balance:0,
    // addBalance(balance:number) : number {
    //     return this.balance+balance;
    // } ,

    sumBalance(balance:number): string {
        return `my new balance is : ${this.balance+balance}`;
    }
}

const arr: number[] = [1,2,4,5];

const newArray:number[]=arr.map((elem: number )=>elem*elem);


}