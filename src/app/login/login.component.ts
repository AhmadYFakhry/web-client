import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import axios from 'axios';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent {
  password = '';
  email = '';
  constructor() {}

  onSubmit() {
    console.log(this.email, this.password)
    axios.post('https://testing-environment-300301.firebaseapp.com/signin', {
      email: this.email, password: this.password
    })
  }
}
