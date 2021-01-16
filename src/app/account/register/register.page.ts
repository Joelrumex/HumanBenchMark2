import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
import {Router} from "@angular/router";
import { ToastController } from '@ionic/angular';

@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})
export class RegisterPage implements OnInit {

  constructor(
    private authSvc:AuthService,
    private router:Router,
    public toastController: ToastController,
    ) { }

  ngOnInit() {
  }

  async onRegister(email, password){
    try{
      const user = await this.authSvc.register(email.value, password.value);
      if(user){
        console.log("Ha Registrat->",user);
        this.router.navigate(["login"]);
        this.presentToast("Compte Creat Correctament", "middle")
      }
    }
    catch(error){console.log("Error->",error);}
  }

  async presentToast(message, posicio) {
    const toast = await this.toastController.create({
      message: message,
      duration: 2000,
      position: posicio
    });
    toast.present();
  }
}
