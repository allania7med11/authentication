import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss'],
})
export class SignupComponent implements OnInit {
  constructor() {}
  fields = [
    { type: 'text', name: 'username', placeholder: 'Username', icon: 'user' },
    { type: 'text', name: 'mail', placeholder: 'Email', icon: 'mail' },
    {
      type: 'password',
      name: 'password',
      placeholder: 'Password',
      icon: 'lock-closed',
    },
    {
      type: 'password',
      name: 'password2',
      placeholder: 'Password Confirmation',
      icon: 'lock-closed',
    },
  ];
  ngOnInit(): void {}
}
