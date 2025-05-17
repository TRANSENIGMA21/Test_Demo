import { LightningElement, track, wire } from 'lwc';
import getOpportunity from '@salesforce/apex/Demo.getOpportunity';

export default class GrandChild extends LightningElement {
    @track grandchild = 'GrandChild';
    result;

    @wire(getOpportunity) Opportunities;
    connectedCallback() {
        console.log('in grandchild');
    }

    renderedCallback() {
        console.log('in grantchild renderedCallback');
       
    }

    errorCallback(error, stack){
        console.log('in grandchild errorCallback');
    }
}

