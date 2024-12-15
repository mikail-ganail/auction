import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainComponent } from './website/modules/main/main.component';

const routes: Routes = [
  {
    path: '',
    loadChildren: () =>
      import('./website/modules/main/main.module').then((m) => m.MainModule),
    title: 'Аукцион - главная',
  },
  {
    path: 'auth',
    loadChildren: () =>
      import('./website/auth/auth.module').then((m) => m.AuthModule),
  },
  {
    path: '**',
    component: MainComponent,
    redirectTo: '',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
