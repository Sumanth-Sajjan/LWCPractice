import { LightningElement } from 'lwc';

export default class SiblingChild1 extends LightningElement {
    value;

    get options() {
        return [
            { label: 'Developer', value: 'Developer' },
            { label: 'QA', value: 'QA' },
            { label: 'Architect', value: 'Architect' },
        ];
    }

    handleChange(event) {
        this.value = event.detail.value;
    }

    sendValue() {
        const position = new CustomEvent('userrole', {
            detail: { role: this.value }
        });
        this.dispatchEvent(position);
    }
}
