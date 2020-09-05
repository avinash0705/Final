import { Component, OnInit } from '@angular/core';
import { newUser } from 'src/models/newUser';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent implements OnInit {

  constructor(private router :Router) { }

  streams = ['User', 'Doctor',
  'Admin'];

  model = new newUser( 'name', '','','');


  ngOnInit(): void {
  }


  onSubmit()
  { 

     // we will send this data to backend  but now we are displaying the console only

    console.log(this.model);

   



    this.router.navigateByUrl('/signIn');
  }

}
