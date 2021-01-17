import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from 'src/app/services/auth.service';
import { AuthGuard } from 'src/app/shared/auth.guard';
import { User } from 'src/app/shared/user.interface';
import { ToastController } from '@ionic/angular';

@Component({
  selector: 'app-games',
  templateUrl: './games.page.html',
  styleUrls: ['./games.page.scss'],
})
export class GamesPage implements OnInit {
  user$:Observable<User> = this.authSvc.afAuth.user;

  constructor(private authSvc:AuthService) { }

  ngOnInit() {
  }

}
