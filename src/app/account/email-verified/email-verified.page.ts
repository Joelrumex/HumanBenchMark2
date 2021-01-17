import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';
import { User } from 'src/app/shared/user.interface';

@Component({
  selector: 'app-email-verified',
  templateUrl: './email-verified.page.html',
  styleUrls: ['./email-verified.page.scss'],
})
export class EmailVerifiedPage implements OnInit {
  user$:Observable<User> = this.authSvc.afAuth.user;

  constructor(private authSvc: AuthService, private router: Router) { }

  ngOnInit() {
  }

  async resendEmailVerification(): Promise<void>{
    try{
      await this.authSvc.sendVerificationEmail();
    }
    catch(error){
      console.log("Error->",error);
    }
  }

  ngOnDestroy(): void{
    this.authSvc.logout();
  }
  goLogin(){
    this.router.navigate(['home']);
  }
}
