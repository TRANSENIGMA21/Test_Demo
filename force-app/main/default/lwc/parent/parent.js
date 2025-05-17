import { LightningElement, track } from 'lwc';

export default class Parent extends LightningElement {
    @track parent = 'Parent';
    connectedCallback() {
        console.log('in parent');        
    }

    renderedCallback() {
        console.log('in parent renderedCallback');
    }
}