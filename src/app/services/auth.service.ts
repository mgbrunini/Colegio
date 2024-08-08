import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private isAuthenticated = false;
  private readonly username = 'escuela';
  private readonly password = 'Ferre2024*';

  constructor(private router: Router) {}

  login(user: string, pass: string): boolean {
    if (user === this.username && pass === this.password) {
      this.isAuthenticated = true;
      this.router.navigate(['/home']);
      return true;
    }
    this.isAuthenticated = false;
    return false;
  }

  logout(): void {
    this.isAuthenticated = false;
    this.router.navigate(['/login']);
  }

  isLoggedIn(): boolean {
    return this.isAuthenticated;
  }
}

