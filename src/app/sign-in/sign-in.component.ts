import { Component } from '@angular/core';

import { FormsModule } from '@angular/forms';


import { FormGroup, Validators, FormBuilder } from '@angular/forms';
import { User } from 'src/models/User';


@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.css']
})
export class SignInComponent  {

  model = new User( 'a@b.com', '');



  onSubmit()
  { 

     // we will send this data to backend  but now we are displaying the console only

    console.log(this.model);

   



    this.newform();
  }

  newform()
  {
   
      this.model = new User( 'a@b.com', '');
    
  }

}

