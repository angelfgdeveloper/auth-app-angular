import { Component } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';

import Swal from 'sweetalert2';

import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html'
})
export class RegisterComponent {

  miFormulario: FormGroup = this.fb.group({
    name: ['Test', Validators.required],
    email: ['test@test.com', [Validators.required, Validators.email]],
    password: ['123456', [Validators.required, Validators.minLength(6)]],
  });

  constructor(
    private fb: FormBuilder,
    private router: Router,
    private authService: AuthService
  ) { }

  register() {
    // console.log(this.miFormulario.value);
    // console.log(this.miFormulario.valid);
    const { name, email, password } = this.miFormulario.value;

    this.authService.register(name, email, password).subscribe(ok => {
      // console.log(ok);
      if (ok === true) {
        this.router.navigateByUrl('/dashboard');
      } else {
        // Mensaje de error
        Swal.fire('Error', ok, 'error');
      }
    })
  }

}
