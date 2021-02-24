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

  async onSubmit() {
  try {
    const res = await axios.post('https://testing-environment-300301.firebaseapp.com/signin', {
      email: this.email, password: this.password
    })
    console.log(res)
  } catch (error) {
    console.error(error)
  }
  }
}
