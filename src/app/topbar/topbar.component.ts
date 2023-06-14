import { Component } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-topbar',
  templateUrl: './topbar.component.html',
  styleUrls: ['./topbar.component.css']
})
export class TopbarComponent {


  constructor( private router: Router) {}

  public logout() {
    
      this.router.navigate(['/login']);
    
  }
    

}
