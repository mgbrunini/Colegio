import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent  {

  constructor(private navCtrl: NavController) { }

  login() {
    this.navCtrl.navigateForward('/login');
  }
}
