import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";
import { ToastController } from '@ionic/angular';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  constructor(
    public toastController: ToastController,
    private router:Router
  ) { }

  ngOnInit() {
  }

  gotoAccountPage(){
    this.router.navigate(["home2"])
    this.presentToast("Hey que tal")
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