import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

    registerForm = this.fb.group({
    email: ['', [Validators.required, Validators.email]],
    pseudo: ['', Validators.required],
    mdp: ['', Validators.required]
  })
  constructor(private fb: FormBuilder) {}

  ngOnInit() {

  }


  onSubmit(){
      // crée un service qui fait un appel sur le back et tu gère les retour
    console.log(this.registerForm.controls);

  }

}
