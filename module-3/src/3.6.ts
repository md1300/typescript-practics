{
    //set and get oparator

    class BankAccount{
     readonly   id:number;
     public   name:string;
     protected   balance:number;

        constructor(id:number, name:string,balance:number){
            this.id=id;
            this.name=name;
            this.balance=balance;
        }
     

        set myNewBalance(amount:number){
            this.balance=this.balance+amount;
        }

        // addBalance(amount:number){
        //     this.balance=this.balance+amount;
        // }

        // getBalance(){
        //     return this.balance
        // }
        get myBalance(){
            return this.balance
        }
    }

    const goriberBankAccount=new BankAccount(123,'tawhid',20)
    //  goriberBankAccount.addBalance(23)
    goriberBankAccount.myNewBalance=40

  const balance=  goriberBankAccount.myBalance

    console.log(goriberBankAccount)
    console.log(balance)
    

    //
}