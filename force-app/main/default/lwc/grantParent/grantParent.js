import { LightningElement, track, wire } from 'lwc';
import getAccount from '@salesforce/apex/Demo.getAccount';
export default class GrantParent extends LightningElement {
    @track grandParent = 'GrandParent';
    @wire(getAccount) accounts;

    connectedCallback() {
        console.log('in grandParent');     
        console.log('in grandParent' + JSON.stringify(this.accounts));      
    }

    renderedCallback() {
        console.log('in grandparent renderedCallback' + JSON.stringify(this.accounts));
    }

    
}