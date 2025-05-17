import { LightningElement, track, wire } from 'lwc';
import getString from '@salesforce/apex/Demo.getString';

export default class GrandChild extends LightningElement {
    @track grandchild = 'GrandChild';
    result

   
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

