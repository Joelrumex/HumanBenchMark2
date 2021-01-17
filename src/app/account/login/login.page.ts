import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";
import { ToastController } from '@ionic/angular';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  constructor(
    public toastController: ToastController,
    private router:Router,
    private authSvc:AuthService,
  ) { }

  ngOnInit() {
  }

  async onLogin(email, password){
    try{
      const user = await this.authSvc.login(email.value, password.value);
      if(user){
        const isVerified = this.authSvc.isEmailVerified(user);
        //TODO check if user verified
        console.log("Verfied->",isVerified);
        if(isVerified){
          this.router.navigate(["home2"]);
          this.presentToast("Iniciat Sessió Correctament", "middle");
        }else{
          this.presentToast("Correu No Verificat", "middle");
        }

      }
    }
    catch(error){console.log("Error->",error);}
  }

  //TOAST
  async presentToast(message, posicio) {
    const toast = await this.toastController.create({
      message: message,
      duration: 2000,
      position: posicio
    });
    toast.present();
  }
}