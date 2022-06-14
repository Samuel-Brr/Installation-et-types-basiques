"use strict";
//POO en TS 2 - Encapsulation
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const assert_1 = __importDefault(require("assert"));
class BankCustomer {
    constructor(clientName, cardPinCode) {
        this.clientName = clientName;
        this.cardPinCode = cardPinCode;
    }
    ;
    getName() {
        return this.clientName;
    }
    verifyPinInput(pin) {
        if (pin === this.cardPinCode) {
            return true;
        }
        else {
            return false;
        }
    }
}
//Tests
const customer = new BankCustomer('John Doe', '3579');
assert_1.default.equal(typeof customer.getName, 'function');
assert_1.default.equal(typeof customer.verifyPinInput, 'function');
assert_1.default.equal(customer.getName(), 'John Doe');
assert_1.default.ok(customer.verifyPinInput('3579'));
console.log('TOTO');
