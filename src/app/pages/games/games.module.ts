import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';

import { GamesPageRoutingModule } from './games-routing.module';
import { Game1Page } from "../../games/game1/game1.page";
import { Game2Page } from "../../games/game2/game2.page";
import { GamesPage } from './games.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    GamesPageRoutingModule
  ],
  declarations: [
    GamesPage,
    Game1Page,
    Game2Page
  ]
})
export class GamesPageModule {}
