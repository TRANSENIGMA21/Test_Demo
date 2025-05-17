import { LightningElement, track, wire } from 'lwc';
import getAccount from '@salesforce/apex/Demo.getAccount';
import getString from '@salesforce/apex/Demo.getString';

export default class GrandChild extends LightningElement {
    @track grandchild = 'GrandChild';
    result

    @wire(getAccount) accounts;
    @wire(getString) stringtest;
    connectedCallback() {
        console.log('in grandchild');
    }

    renderedCallback() {
        console.log('in grantchild renderedCallback');
        if (this.accounts) {
            console.log('in grant child' + JSON.stringify(this.accounts));
        }

    }
}

