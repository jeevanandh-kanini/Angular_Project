import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { user } from "../models/user";

import { Observable } from 'rxjs';

@Injectable({
    providedIn:'root'
})

export class UserServices{
    baseUrl="https://localhost:7286/api/Users";
    constructor(private http:HttpClient) {
        
    }

    getUsers(){
       return this.http.get<user[]>(this.baseUrl);
    }

    addUser(user:user){
        return this.http.post(this.baseUrl,user);
     }

     deleteUser(userId: number): Observable<any> {
        const deleteUrl = `${this.baseUrl}/${userId}`;
        return this.http.delete(deleteUrl);
      }

      updateUser(user: user): Observable<any> {
        const updateUrl = `${this.baseUrl}/${user.id}`;
        return this.http.put(updateUrl, user);
    }

     

    
}


// deleteUser(userId: number): Observable<any> {
//     const deleteUrl = `${this.baseUrl}/${userId}`;
//     return this.http.delete(deleteUrl);
// }


// import { Component } from '@angular/core';
// import { user } from '../models/user';
// import { UserServices } from './services/user-services';

// @Component({
//   selector: 'app-root',
//   templateUrl: './app.component.html',
//   styleUrls: ['./app.component.css']
// })
// export class AppComponent {
//   constructor(private userService: UserServices) {
//     this.getUsers();
//   }

//   users: user[] = [];
//   user: user = { id: 0, name: '', email: '' };

//   addUser() {
//     this.userService.addUser(this.user).subscribe(
//       (res) => {
//         this.users.push(this.user);
//       },
//       (err) => {
//         console.log(err);
//       }
//     );
//   }

//   deleteUser(userId: number) {
//     this.userService.deleteUser(userId).subscribe(
//       () => {
//         this.users = this.users.filter((u) => u.id !== userId);
//       },
//       (err) => {
//         console.log(err);
//       }
//     );
//   }

//   private getUsers() {
//     this.userService.getUsers().subscribe(
//       (res) => {
//         this.users = res;
//       },
//       (err) => {
//         console.log(err);
//       }
//     );
//   }
// }