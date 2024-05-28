import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor() { }
  getData(){
    let localdata:any = localStorage.getItem('userData');
    if(localdata){
      localdata = JSON.parse(localdata);
    }else{
      localdata = []
    }
      
    return {status:200,data:localdata};
   } 
  createUser(rowData:any){
    
  let data:any = localStorage.getItem('userData');
  if(data){
    data = JSON.parse(data);
    rowData.id = Number(data[data.length-1].id)+1;
    data.push(rowData)
  }else{
    data = [];
    rowData.id = 1;
    data.push(rowData)
  }
  localStorage.setItem('userData',JSON.stringify(data));
   return {status:200,message:"record inserted successfully!"}
    
  }
  Update(rowData:any,userId:Number){   
  let data:any = localStorage.getItem('userData');
  if(data){
    data = JSON.parse(data);
    for(let i=0;i < data.length;i++){
      if(data[i].id == userId){
        rowData.id = userId;
        data[i] = rowData;
      }
    } 
  }
  localStorage.setItem('userData',JSON.stringify(data)); 
  return {status:200,message:"record updated successfully!"}
  }
  deleteUser(id:Number){
    let data:any = localStorage.getItem('userData');  
    data = JSON.parse(data);
    data = data.filter((el:any)=> el.id != id);
    localStorage.setItem('userData',JSON.stringify(data)); 
  return {status:200,message:"record deleted successfully!"}
  }
}
