import { Component } from '@angular/core';
import { ToastController } from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  constructor(public toastController: ToastController) {}

  async presentToast(missatge) {
    const toast = await this.toastController.create({
      message: missatge,
      duration: 1000,
      position: 'middle'
    });
    toast.present();
  }

}
