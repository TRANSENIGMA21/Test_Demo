import { LightningElement, track, wire } from 'lwc';
import getAccount from '@salesforce/apex/Demo.getAccount';
export default class GrantParent extends LightningElement {
    @track grandParent = 'GrandParent';
    @wire(getAccount) accounts;

    connectedCallback() {
        console.log('in grandParent');        
    }

    renderedCallback() {
        console.log('in grandparent renderedCallback');
    }

    
}