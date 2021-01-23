import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from 'src/app/services/auth.service';
import { AuthGuard } from 'src/app/shared/auth.guard';
import { User } from 'src/app/shared/user.interface';
import { ToastController } from '@ionic/angular';


@Component({
  selector: 'app-account',
  templateUrl: './account.page.html',
  styleUrls: ['./account.page.scss'],
})
export class AccountPage implements OnInit {
  user$:Observable<User> = this.authSvc.afAuth.user;


  constructor(private authSvc: AuthService, private router:Router, private authGuard: AuthGuard, private toastController: ToastController) { 

  }

  ngOnInit() {
  }
  guardarDades(email, nom){
    console.log(email);
    console.log(nom.value);
  }

  async logOut(): Promise<void>{
    try{
      await this.authSvc.logout();
      this.router.navigate(["/home"]);
    }
    catch(error){
      console.log("Error->",error);
    }
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
