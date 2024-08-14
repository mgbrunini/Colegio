import { Component, OnInit } from '@angular/core';
import { Route, Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent {

  constructor(public authService: AuthService, private route: Router) {}

  logout() {
    this.authService.logout();
    this.goHome()
  }

  goHome(){
    if (this.authService.isAuthenticated()) {
      this.route.navigate(['/administrador'])
    } else {
      this.route.navigate([''])
    }
  }
}
