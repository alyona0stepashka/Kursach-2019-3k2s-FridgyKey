import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { UserService } from 'src/app/services/user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styles: []
})
export class RegisterComponent implements OnInit {

  constructor(private router: Router, public service: UserService, private toastr: ToastrService) { }


  ngOnInit() {
    this.service.resetForm();
  }

  onSubmit() {
      this.service.register().subscribe(
      (res: any) => {
        if (res.succeeded) {
          this.service.resetForm();
          this.toastr.success('New user created!', 'Registration successful.');
          this.router.navigate(['/begin/login']);
        } else {
          res.errors.forEach(element => {
            switch (element.code) {
              case 'DuplicateUserName':
                this.toastr.error('Username is already taken','Registration failed.');
                break;

              default:
              this.toastr.error(element.description,'Registration failed.');
                break;
            }
          });
        }
      },
      err => {
        console.log(err);
      }
    ); 
  }

}
