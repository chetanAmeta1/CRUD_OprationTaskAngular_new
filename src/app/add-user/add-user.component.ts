import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { UserService } from '../user.service';

@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.css']
})
export class AddUserComponent implements OnInit {

  constructor(private fb :FormBuilder,private router: Router,private activatedRoute: ActivatedRoute,private service:UserService) { 
    this.addUser = this.fb.group({
      uname:['',Validators.required],
      phone:['',Validators.required],
      email:['',Validators.required],
    });
  }
  isFormSubmit:boolean= false;
  addUser :FormGroup;
  userId=0;
  isEdit:boolean = false;
  get form() {
    return this.addUser.controls;
  }
submit(){
  this.isFormSubmit = true;
  if(this.addUser.invalid){
    return
  }else{
    this.service.createUser(this.addUser.value);
this.router.navigateByUrl('/');
  }
  
}
Update(){
  this.isFormSubmit = true;
  if(this.addUser.invalid){
    return
  }else{
    this.service.Update(this.addUser.value,this.userId)
this.router.navigateByUrl('/');
  }
  
}
setdata(id:Number){
  let rowdata:any = localStorage.getItem('userData');
  rowdata = JSON.parse(rowdata).filter((el:any) => el.id == id)[0];
  delete rowdata.id;
  this.addUser.patchValue(rowdata);

}
  ngOnInit(): void {
    this.activatedRoute.params.subscribe((params) => {
      if (params["id"]) {
        this.userId = +params["id"]; 
        this.isEdit = true;
        this.setdata(this.userId);
      }  
    });
  }

}
