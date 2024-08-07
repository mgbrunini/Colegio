import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { LoginComponent } from './components/public/pages/login/login.component';
import { HeaderComponent } from './components/public/pages/header/header.component';
import { SideMenuComponent } from './components/public/pages/side-menu/side-menu.component';
import { HomeComponent } from './components/public/pages/home/home.component';

@NgModule({
  declarations: [AppComponent, LoginComponent, HeaderComponent, SideMenuComponent, HomeComponent],
  imports: [BrowserModule, IonicModule.forRoot(), AppRoutingModule],
  providers: [{ provide: RouteReuseStrategy, useClass: IonicRouteStrategy }],
  bootstrap: [AppComponent],
})
export class AppModule {}
