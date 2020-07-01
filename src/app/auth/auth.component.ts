import { Component, OnInit } from '@angular/core';
import { FormGroup, Validators, FormControl } from "@angular/forms";

declare var $:any;

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.scss']
})
export class AuthComponent implements OnInit {

  public loginPage = true;
  public registerPage = false;
  public error: any;
  registerForm: FormGroup;
  loginForm: FormGroup;

  constructor() { }

  ngOnInit(): void {
    this.registerForm = new FormGroup({
      'regname':new FormControl('', Validators.required),
      'regemail':new FormControl('', Validators.required),
      'regpassword':new FormControl('', Validators.required),
      'reppassword':new FormControl('', Validators.required)
    });
    this.loginForm = new FormGroup({
      'logemail': new FormControl('', Validators.required),
      'logpassword': new FormControl('', Validators.required)
    });
  }

  registerTab() {
    $('#register-tab').addClass('active-tab');
    $('#login-tab').removeClass('active-tab');
    this.registerPage = true;
    this.loginPage = false;
  }

  loginTab() {
    $('#register-tab').removeClass('active-tab');
    $('#login-tab').addClass('active-tab');
    this.registerPage = false;
    this.loginPage = true;
  }
  loginfb(){
    // this._authService.loginFb();
  }

  onRegSubmit() {
    $("#snackbar").html("<div>Khata khul raha hai !</div>");
    $("#snackbar").addClass("show");
    //this.hide();
    setTimeout(() => { $("#snackbar").removeClass("show"); }, 3000);
    // this._authService.createUser(this.registerForm.value);
    // this._authService.saveUserInfoFromForm(this.registerForm.value.regname, this.registerForm.value.regemail);
  }
  onLogSubmit() {
    $("#snackbar").html("<div>Ruk jaa re bande......</div>");
    $("#snackbar").addClass("show");
    //this.hide();
    setTimeout(() => { $("#snackbar").removeClass("show"); }, 3000);
    // this._authService.loginUser(this.loginForm.value);
  }

}
