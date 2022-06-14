//POO en TS 2 - Encapsulation

import  assert  from  'assert';

class BankCustomer{
    private clientName: string;
    private cardPinCode: string;

    constructor(clientName: string, cardPinCode: string ){
        this.clientName = clientName;
        this.cardPinCode = cardPinCode;
    };

    public getName(): string {
        return this.clientName;
    }

    public verifyPinInput(pin: string): boolean {
        if(pin === this.cardPinCode){
            return true;
        }else{
            return false;
        }
    }
}

//Tests

const customer = new BankCustomer('John Doe', '3579');
assert.equal(typeof customer.getName, 'function');
assert.equal(typeof customer.verifyPinInput, 'function');
assert.equal(customer.getName(), 'John Doe');
assert.ok(customer.verifyPinInput('3579'));

console.log('TOTO')