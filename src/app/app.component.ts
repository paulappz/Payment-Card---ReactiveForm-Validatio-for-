import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Vanhack';
  paymentForm: FormGroup;
  displayMessage: string;
  submitted = false;

  constructor(private formBuilder: FormBuilder) {
    /* Declare Reactive Form Group here */
    this.paymentForm = this.formBuilder.group({
      name: ['', [Validators.required, Validators.pattern("^[a-zA-Z ]+$")]],
      cardNumber: ['', [Validators.required, Validators.pattern("^[0-9]{16}$")]],
      // expirationMonth: ['',[Validators.required,Validators.max(2),Validators.pattern("^[0-9]{2}$")]],
      expirationMonth: ['', [Validators.required, Validators.maxLength(2), Validators.pattern("^(0?[1-9]|1[012])$")]],
      // expirationYear : ['',[Validators.required,Validators.max(4),Validators.pattern("^[0-9]{4}$")]],
      expirationYear: ['', [Validators.required, Validators.maxLength(4), Validators.pattern("^[0-9]{4}$")]],
      cvvCvcNumber: ['', [Validators.required, Validators.pattern("^[0-9]{3}$")]],
    });

  }

  submitForm() {
    this.submitted = true;
    /* Change the display message on button click / submit form */
    if (this.paymentForm.valid) {
      this.displayMessage = "Payment Successful!";
    }
    else this.displayMessage = "Payment Failed!";

  }
}

