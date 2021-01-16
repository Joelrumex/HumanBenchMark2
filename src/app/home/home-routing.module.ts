import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePage } from './home.page';

const routes: Routes = [
  {
    path: '',
    component: HomePage,
    children: [
      {
        path: '',
        redirectTo: 'login',
        pathMatch: 'full'
      },
      {
        path: 'login',
        children: [
          {
            path: '',
            loadChildren: () => import("../account/login/login.module").then(m => m.LoginPageModule)
          }
        ]
      },
      {
        path: 'register',
        children: [
          {
            path: '',
            loadChildren: () => import("../account/register/register.module").then(m => m.RegisterPageModule)
          }
        ]
      },
      {
        path: 'home2',
        children: [
          {
            path: '',
            loadChildren: () => import("../home2/home2.module").then(m => m.Home2PageModule)
          }
        ]
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomePageRoutingModule {}
