import { Component, OnInit } from '@angular/core';
import {FormBuilder, Validators} from "@angular/forms";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  LoginForm = this.fb.group({
    pseudo: ['', Validators.required],
    mdp: ['', Validators.required],
  })
  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
  }

  onSubmit(){
    // crée un service auth qui fait l'appel sur nest pour l'autentification
    console.log(this.LoginForm.controls)
  }

}
