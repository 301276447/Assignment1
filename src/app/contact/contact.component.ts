import { Component } from '@angular/core';

interface ContactFormData {
  firstName: string;
  lastName: string;
  contactNumber: string;
  email: string;
  message: string;
}

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent {
  formData: ContactFormData = {
    firstName: '',
    lastName: '',
    contactNumber: '',
    email: '',
    message: ''
  };

  submitForm() {
    console.log('First Name:', this.formData.firstName);
    console.log('Last Name:', this.formData.lastName);
    console.log('Contact Number:', this.formData.contactNumber);
    console.log('Email:', this.formData.email);
    console.log('Message:', this.formData.message);

    
  }
}


