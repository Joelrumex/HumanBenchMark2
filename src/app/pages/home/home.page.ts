import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";
import { ToastController } from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {

  constructor(
    public toastController: ToastController,
    private router:Router
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
