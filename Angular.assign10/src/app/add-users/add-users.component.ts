import { Component, OnInit } from '@angular/core';
import { UsersService } from 'src/app/services/users.service';
import { Users } from 'src/app/models/users.model';

@Component({
  selector: 'app-add-users',
  templateUrl: './add-users.component.html',
  styleUrls: ['./add-users.component.css']
})
export class AddUsersComponent implements OnInit {
  
  object1:Users = {

    id: '',
    first__name: '',
    middle__name:'',
    last__name: '',
    email: '',
    phone_number: '',
    role: '',
    address: '',
    datetime:'',
    customer_Name:''
  }
  submitted = false;

  constructor(private usersService: UsersService) { }

  ngOnInit(): void {
  }

  saveUser(): void {
    const data = {
      id: this.object1.id,
      first__name: this.object1.first__name,
      middle__name:this.object1.middle__name,
      last__name: this.object1.last__name,
      email: this.object1.email,
      phone_number: this.object1.phone_number,
      role: this.object1.role,
      address: this.object1.address,
      datetime:this.object1.datetime,
      customer_Name:this.object1.customer_Name
    };
    console.log("Added",data);
    this.usersService.addUser(data)
      .subscribe(
        response => {
          console.log(response);
          this.submitted = true;
        },
        error => {
          console.log(error);
        });
  }

  newUser(): void {
    this.submitted = false;
    this.object1 = {

      id: '',
      first__name: '',
      middle__name:'',
      last__name: '',
      email: '',
      phone_number: '',
      role: '',
      address: '',
      datetime:'',
      customer_Name:''
    };
  }
  

}
