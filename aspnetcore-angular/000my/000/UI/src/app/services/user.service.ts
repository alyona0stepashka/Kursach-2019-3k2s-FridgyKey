import { Injectable } from '@angular/core';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { UserDetail } from '../models/UserDetail';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private fb: FormBuilder, private http: HttpClient) { }
  readonly BaseURI = 'http://localhost:8491/api';
  public formData: UserDetail;
  list: UserDetail[];


  // formModel1 = this.fb.group({
  //   FullName: ['', Validators.required],
  //   Email: ['', Validators.email], 
  //   Passwords: this.fb.group({
  //     Password: ['', [Validators.required, Validators.minLength(4)]],
  //     ConfirmPassword: ['', Validators.required]
  //   }, { validator: this.comparePasswords })

  // });

  // comparePasswords(fb: FormGroup) {
  //   let confirmPswrdCtrl = fb.get('ConfirmPassword');
  //   //passwordMismatch
  //   //confirmPswrdCtrl.errors={passwordMismatch:true}
  //   if (confirmPswrdCtrl.errors == null || 'passwordMismatch' in confirmPswrdCtrl.errors) {
  //     if (fb.get('Password').value != confirmPswrdCtrl.value)
  //       confirmPswrdCtrl.setErrors({ passwordMismatch: true });
  //     else
  //       confirmPswrdCtrl.setErrors(null);
  //   }
  // }

  register() {
    // var body = {
    //   FullName: this.formModel.value.FullName,
    //   Email: this.formModel.value.Email, 
    //   Password: this.formModel.value.Passwords.Password
    // };
    return this.http.post(this.BaseURI + '/user/register', this.formData);
  }

  login(formData1) {
    return this.http.post(this.BaseURI + '/user/login', formData1);
  }
  
  getUserProfile() {
    return this.http.get(this.BaseURI + '/userpage');
  }

  refreshList() {
    this.http.get(this.BaseURI+'/userpage/general')
   .toPromise()
   .then(res=> this.list = res as UserDetail[]);
  }

  roleMatch(allowedRoles): boolean {
    var isMatch = false;
    var payLoad = JSON.parse(window.atob(localStorage.getItem('token').split('.')[1]));
    var userRole = payLoad.role;
    allowedRoles.forEach(element => {
      if (userRole == element) {
        isMatch = true; 
      }
    });
    return isMatch;
  }

  resetForm(){
    this.formData = {
       Id:'',
       FullName: '',
       Email: '',
       Password: '',
       Role: ''
    };    
  }

}
