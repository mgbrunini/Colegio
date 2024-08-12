import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private readonly validUsername = 'escuela';
  private readonly validPassword = 'Ferre2024*';

  constructor() {}

  login(username: string, password: string): boolean {
    console.log("El username es: ", username ,"y la clave es ", password);
    
    if (username === this.validUsername && password === this.validPassword) {
      // Guarda el estado de autenticación
      localStorage.setItem('isAuthenticated', 'true');
      console.log("Esta logeado")
      return true;
    }
    // Si la autenticación falla, asegúrate de no guardar el estado
    localStorage.removeItem('isAuthenticated');
    console.log("Falló el logeo")
    return false;
  }

  isAuthenticated(): boolean {
    return localStorage.getItem('isAuthenticated') === 'true';
  }

  logout(): void {
    localStorage.removeItem('isAuthenticated');
    
  }
}

