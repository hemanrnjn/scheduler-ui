import { Component } from '@angular/core';
import { Router } from "@angular/router";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent {
  public isLoggedIn = false;
  public userName = "user";
  public imageUrl = "";

  constructor(private router:Router) {
    if (!this.isLoggedIn) {
      this.router.navigateByUrl('/auth');
    }
  }

  logout() {
    console.log("Works");
  }
}
