import { Component } from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent {

  public contactForm: FormGroup = new FormGroup({
    name: new FormControl<string>('', [Validators.required]),
    email: new FormControl<string>('',[Validators.required, Validators.email]),
    subject: new FormControl<string>('', [Validators.required]),
    message: new FormControl<string>('', [Validators.required])
  });

  get name() {
    return this.contactForm.get('name');
  }
  get email() {
    return this.contactForm.get('email');
  }
  get subject() {
    return this.contactForm.get('subject');
  }
  get message() {
    return this.contactForm.get('message');
  }
  onSubmit() {

  }
}
