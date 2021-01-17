import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";
import { ToastController } from '@ionic/angular';
import { Observable } from 'rxjs';
import { AuthService } from 'src/app/services/auth.service';
import { User } from 'src/app/shared/user.interface';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {
  user$:Observable<User> = this.authSvc.afAuth.user;

  constructor(
    public toastController: ToastController,
    private router:Router,
    private authSvc: AuthService
  ) { }

  ngOnInit() {
  }

  goToOtherMenu(){
    this.router.navigate(["home"])
  }
  //TOAST
  async presentToast(message) {
    const toast = await this.toastController.create({
      message: message,
      duration: 2000,
      position: 'middle'
    });
    toast.present();
  }

}
