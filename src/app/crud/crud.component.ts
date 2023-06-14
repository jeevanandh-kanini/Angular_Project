// import { Component } from '@angular/core';

// import { user } from '../models/user';
// import { UserServices } from '../services/user-services';

// @Component({
//   selector: 'app-crud',
//   templateUrl: './crud.component.html',
//   styleUrls: ['./crud.component.css']
// })
// export class CrudComponent {
//   constructor(private userService: UserServices) {
//     this.getUsers();
//   }
//   a : any = this.getUsers();
//   users: user[] = [];
//   user: user = { id: 0, name: '', email: '' };

  

//   editingUser = false;

//   addUser() {
//     this.userService.addUser(this.user).subscribe(
//       (res) => {
//         this.users.push(this.user);
//         this.resetForm();
//       },
//       (err) => {
//         console.log(err);
//       }
//     );
//   }

//   editUser(user: user) {
//     this.editingUser = true;
//     this.user = { ...user }; 
//   }

//   updateUser() {
//     this.userService.updateUser(this.user).subscribe(
//       (res) => {
//         const index = this.users.findIndex((u) => u.id === this.user.id);
//         if (index !== -1) {
//           this.users[index] = { ...this.user }; 
//           this.resetForm();
//         }
//       },
//       (err) => {
//         console.log(err);
//       }
//     );
//   }

//   deleteUser(user: user) {
//     this.userService.deleteUser(user.id).subscribe(
//       () => {
//         this.users = this.users.filter((u) => u.id !== user.id);
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

//   private resetForm() {
//     this.user = { id: 0, name: '', email: '' };
//     this.editingUser = false;
//   }
// }

import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

import { UserServices } from '../services/user-services';
import { user } from '../models/user';

@Component({
  selector: 'app-crud',
  templateUrl: './crud.component.html',
  styleUrls: ['./crud.component.css']
})
export class CrudComponent {
  constructor(private userService: UserServices) {
    this.getUsers();
  }

  users: user[] = [];
  userForm!: FormGroup;
  editingUser = false;

  ngOnInit() {
    this.userForm = new FormGroup({
      id: new FormControl(0),
      name: new FormControl('', Validators.required),
      email: new FormControl('', [Validators.required, Validators.email])
    });
  }

  addUser() {
    this.userService.addUser(this.userForm.value).subscribe(
      (res) => {
        this.users.push(this.userForm.value);
        
        location.reload(); b
        
        this.resetForm();
      },
      (err) => {
        console.log(err);
      }
    );
  }

  editUser(user: user) {
    this.editingUser = true;
    this.userForm.setValue(user);
  }

  updateUser() {
    this.userService.updateUser(this.userForm.value).subscribe(
      (res) => {
        const index = this.users.findIndex((u) => u.id === this.userForm.value.id);
        if (index !== -1) {
          this.users[index] = this.userForm.value;
          this.resetForm();
        }
      },
      (err) => {
        console.log(err);
      }
    );
  }

  deleteUser(user: user) {
    const userId = user.id;
    if (userId !== undefined) {
      this.userService.deleteUser(userId).subscribe(
        () => {
          this.users = this.users.filter((u) => u.id !== userId);
        },
        (err) => {
          console.log(err);
        }
      );
    }
  }

  private getUsers() {
    this.userService.getUsers().subscribe(
      (res) => {
        this.users = res;
      },
      (err) => {
        console.log(err);
      }
    );
  }

  private resetForm() {
    this.userForm.reset();
    this.editingUser = false;
  }
}
