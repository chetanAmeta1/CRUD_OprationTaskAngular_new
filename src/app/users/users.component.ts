import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {

  data:any=[];
  constructor(private service: UserService) { 

  }
 getData(){  
  this.data = this.service.getData()?.data;
 }  
 deleteData(id:Number){
  this.service.deleteUser(id);
  this.getData()
  alert('Recoed deleted successfully!')
 }
  ngOnInit(): void {
    this.getData()
  }

}
