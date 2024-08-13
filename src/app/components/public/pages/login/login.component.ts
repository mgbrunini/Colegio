import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastController } from '@ionic/angular';

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

  constructor(private authService: AuthService, private router: Router, private toastController: ToastController) {}

  // login() {
  //   if (!this.authService.login(this.username, this.password)) {
  //     this.errorMessage = 'Usuario o contraseña incorrectos';
  //   } else {
  //     this.errorMessage = '';
  //     this.router.navigate(['/administrador']); // Cambia '/home' por la ruta que deseas redirigir
  //   }
  // }

  async login() {
    if (!this.authService.login(this.username, this.password)) {
      this.errorMessage = 'Usuario o contraseña incorrectos';
      const toast = await this.toastController.create({
        message: 'Usuario o contraseña incorrectos',
        duration: 5000,
        color: 'danger'
      });
      toast.present();
    } else {
      this.errorMessage = '';
      this.router.navigate(['/administrador']); // Cambia '/administrador' por la ruta que deseas redirigir
    }
  }
}
