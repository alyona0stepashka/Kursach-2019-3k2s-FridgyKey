import {Component} from '@angular/core';
import {SignUp} from "../../models/SignUp";
import {ServerResponse} from "../../models/ServerResponse";
import {Router} from '@angular/router';

import {HttpAuthService} from "../../services/auth.service";

@Component({
  templateUrl: './signUp.component.html',
  styleUrls: ['./signUp.component.css']
})
export class SignUpComponent {
  constructor(
    private httpAuthService: HttpAuthService,
    private router: Router) {}

  public signUp: SignUp = new SignUp();
  public errors: Array<string> = new Array<string>();
  load = false;

  public async registration() {
    this.load = true;
    let result: ServerResponse<any> = await this.httpAuthService.signUp(this.signUp);
    this.errors = new Array<string>();
    if (result.statusCode == 200) {
      if (result.data.result == true) {
        this.router.navigate(['login']);
      } else {
        this.errors = result.data.errors;
      }
    }
    else if (result.statusCode == 400) {
      for (let key in result.data) {
        result.data[key].forEach((item) => {
          this.errors.push(`${key}: ${item}`);
        })
      }
    }
    this.load = false;
  }
}
