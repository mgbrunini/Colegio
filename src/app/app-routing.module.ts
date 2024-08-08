import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './guard/auth.guard';

const routes: Routes = [
  {path: '', loadChildren: () => import('./components/public/public.module').then(m => m.PublicModule)},
  {path: 'administrador', loadChildren: () => import('./components/Administrador/pages/imprimibles/imprimibles/imprimibles.module').then(m => m.ImprimiblesModule), canActivate: [AuthGuard] },
  
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
