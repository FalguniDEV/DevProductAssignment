import { LightningElement, wire, api } from 'lwc';
import getProductBackup from '@salesforce/apex/ProductBackupController.getProductBackup';
import getProduct from '@salesforce/apex/Product2Controller.getProduct';

const FIELDS = ['Name', 'Selling_Price__c', 'Product_External_id__c'];

export default class ProductBackupTable extends LightningElement {
    @api recordId;
    product;
    product2;

    @wire(getProductBackup, { recordId: '$recordId' })
    wiredProduct({ error, data }) {
        if (data) {
            this.product = data;
        } else if (error) {
            // Handle error
        }
    }

    @wire(getProduct, { recordId: '$recordId' })
    wiredProduct2({ error, data }) {
        if (data) {
            this.product2 = data;
        } else if (error) {
            console.error(error);
        }
    }
}
