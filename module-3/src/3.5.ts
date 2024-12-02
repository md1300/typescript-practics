{
    //access modifiers

    class BankAccount {
        public name: string;
        public readonly id: number;
        protected _balance: number;

        constructor(name: string, id: number, _balance: number) {
            this.name = name;
            this.id = id;
            this._balance = _balance;
        }

    public   addDeposite(amount:number){
        this._balance=this._balance+amount;
       }

    public   getBalance(){
        return this._balance
       }

    }

    class StudentAccount extends BankAccount{
        test(){
            
        }
    }

    const goribManuserAccount = new BankAccount('tawhid', 112, 20);
     goribManuserAccount.addDeposite(23)
     
   const myBalance=  goribManuserAccount.getBalance()
   const myId= goribManuserAccount.id

    // console.log(goribManuserAccount)
    // console.log(myId)
    console.log(myBalance)
    
    //
}