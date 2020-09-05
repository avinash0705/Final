import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FlashScreenComponent } from './flash-screen/flash-screen.component';
import { SignInComponent } from './sign-in/sign-in.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { UserHomeComponent } from './user-home/user-home.component';
import { DoctorHomeComponent } from './doctor-home/doctor-home.component';
import { AdminHomeComponent } from './admin-home/admin-home.component';


const routes: Routes = [
  
  { path : '', component: FlashScreenComponent },

  { path : 'signIn', component: SignInComponent },

  { path : 'signUp', component: SignUpComponent },

  { path : 'userHome', component: UserHomeComponent },

  { path : 'doctorHome', component: DoctorHomeComponent },

  { path : 'adminHome', component: AdminHomeComponent },


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
