import { LightningElement, track, wire } from 'lwc';
import getContact from '@salesforce/apex/Demo.getContact';

export default class Parent extends LightningElement {
    @track parent = 'Parent';

    @wire(getContact) contacts;
    connectedCallback() {
        console.log('in parent');        
    }

    renderedCallback() {
        console.log('in parent renderedCallback' + JSON.stringify(this.contacts));
    }
}