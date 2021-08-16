import { Component, OnInit } from '@angular/core';
import { UsersService } from 'src/app/services/users.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Users } from 'src/app/models/users.model';

@Component({
  selector: 'app-users-detail',
  templateUrl: './users-detail.component.html',
  styleUrls: ['./users-detail.component.css']
})
export class UsersDetailComponent implements OnInit {
  currentUser:Users={
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
  message='';
  constructor(private usersService: UsersService,
    private route: ActivatedRoute,
    private router: Router) { }

  ngOnInit(): void {
    this.getUserD(this.route.snapshot.paramMap.get('id'));
  }
  getUserD(id:any): void {
    this.currentUser={
      id:"1",
      first__name: "Akanksha",
      middle__name: "",
      last__name: "Singh",
      email: "singh@gmail.com",
      phone_number: "9987654321",
      role: "Admin",
      address: "Bhopal",
      datetime:"2020-2-3",
      customer_Name:"ars"
      
    }
    
    this.usersService.getUser(id)
      .subscribe(
        data => {
          this.currentUser = data[0];
          console.log("User by id ",this.currentUser);
        },
        error => {
          console.log(error);
        });
  }

  update(): void {
    this.usersService.editUser(this.currentUser.id, this.currentUser)
      .subscribe(
        response => {
          console.log(response);
          this.message = 'The user was updated successfully!';
          
        },
        error => {
          console.log(error);
        });
  }

  delete(): void {
    this.usersService.deleteUser(this.currentUser.id)
      .subscribe(
        response => {
          console.log(response);
          this.message = 'The user was deleted successfully!';
        },
        error => {
          console.log(error);
        });
  }

}
