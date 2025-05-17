import { LightningElement, track } from 'lwc';

export default class GrantParent extends LightningElement {
    @track grandParent = 'GrandParent';

    connectedCallback() {
        console.log('in grandParent');        
    }

    renderedCallback() {
        console.log('in grandparent renderedCallback');
    }
}