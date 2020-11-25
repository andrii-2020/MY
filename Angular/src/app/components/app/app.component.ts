import { Component } from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import validate = WebAssembly.validate;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  form: FormGroup;

  constructor(private formBuilder: FormBuilder) {
    this.form = new FormGroup({
      email: new FormControl('', [Validators.required, Validators.email]),
      password: new FormControl(''),
      confirmPassword: new FormControl('')
    }, this.passValidator.bind(this));

  }

  save(form: FormGroup): void {
    console.log(form);
    console.log(this.formBuilder);
  }

  passValidator(form: FormGroup): null | object {
    const {value: password} = form.controls.password;
    const {value: confirmPassword} = form.controls.confirmPassword;
    return password === confirmPassword ? null : {passwordError: true};
  }
}

