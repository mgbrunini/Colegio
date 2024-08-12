import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent {
  username: string = '';
  password: string = '';
  errorMessage: string = 'Usuario o contraseña errónea';

  constructor(private authService: AuthService, private router: Router) {}

  login() {
    if (!this.authService.login(this.username, this.password)) {
      this.errorMessage = 'Usuario o contraseña incorrectos';
    } else {
      this.errorMessage = '';
      this.router.navigate(['/home']); // Cambia '/home' por la ruta que deseas redirigir
    }
  }
}
