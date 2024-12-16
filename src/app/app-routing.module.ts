import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './website/auth/login/login.component';

const routes: Routes = [
    {
        path: '',
        loadChildren: () =>
            import('./website/auth/auth.module').then((m) => m.AuthModule),
    },
    {
        path: 'main',
        loadChildren: () =>
            import('./website/modules/main/main.module').then(
                (m) => m.MainModule
            ),
        title: 'Аукцион - главная',
    },
    {
        path: '**',
        component: LoginComponent,
        redirectTo: '',
    },
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule],
})
export class AppRoutingModule {}
