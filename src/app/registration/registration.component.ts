import { Component, OnInit } from '@angular/core';
import axios from 'axios';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.scss']
})
export class RegistrationComponent implements OnInit {

  password = '';
  email = '';
  name = '';
  type = '';
  constructor() { }

  ngOnInit(): void {
    // console.log("TEST");
  }

  async test(): Promise<void> {
    // console.log("TEST");
    console.log(this.password, this.email, this.name, this.type);
    try {
      const res = await axios.post('https://testing-environment-300301.firebaseapp.com/newuser', {
        email: this.email, password: this.password, name: this.name, type: this.type
      })
      console.log(res);
    } catch (error) {
      console.log(error);
    }
  }

}
