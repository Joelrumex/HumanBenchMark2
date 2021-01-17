import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuard } from '../shared/auth.guard';

import { Home2Page } from './home2.page';

const routes: Routes = [
  {
    path: '',
    component: Home2Page,
    children: [
      {
        path: '',
        redirectTo: 'inici',
        pathMatch: 'full'
      },
      {
        path: 'games',
        children: [
          {
            path: '',
            loadChildren: () => import("../pages/games/games.module").then(m => m.GamesPageModule),
            canActivate:[AuthGuard],
          }
        ]
      },
      {
        path: 'inici',
        children: [
          {
            path: '',
            loadChildren: () => import("../pages/home/home.module").then(m => m.HomePageModule),
            canActivate:[AuthGuard],
          }
        ]
      },
      {
        path: 'account',
        children: [
          {
            path: '',
            loadChildren: () => import("../pages/account/account.module").then(m => m.AccountPageModule),
            canActivate:[AuthGuard],
          }
        ]
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Home2PageRoutingModule {}
