import { Component, OnInit } from '@angular/core';
import axios from 'axios';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.scss']
})
export class RegistrationComponent implements OnInit {

  // username = '';
  password = '';
  email = '';
  name = '';
  type = '';
  constructor() { }

  ngOnInit(): void {
    console.log("TEST");
  }

  test(): void {
    // console.log("TEST");
    try {
      axios.post('https://testing-environment-300301.firebaseapp.com/newuser', {
        email: this.email, password: this.password, name: this.name, type: this.type
      }).then(e => {
        console.log(e);
      }).catch(e => {
        console.log(e);
      })
    } catch (error) {
      console.log(error);
    }
  }

}
