import {Component} from '@angular/core';
import {SignIn} from '../../models/SignIn';
import {ServerResponse} from '../../models/ServerResponse';
import {Router} from '@angular/router';
import {HttpAuthService} from '../../services/auth.service';
import {Auth0Service} from '../../auth/auth0.service';

@Component({
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  constructor(private httpAuthService: HttpAuthService,
              private router: Router,
              private auth0Service: Auth0Service) {
  }

  public signIn: SignIn = new SignIn();
  public errors: Array<string> = new Array<string>();
  public loginError = false;
  public passwordError = false;
  public blocked = false;

  public externelLogin() {
    this.auth0Service.login();
  }

  load = false;

  public async login() {
    this.load = true;
    const result: ServerResponse<any> = await this.httpAuthService.login(this.signIn);
    this.passwordError = false;
    this.loginError = false;
    this.blocked = false;
    this.errors = new Array<string>();

    if (result.statusCode == 200) {
      if (result.data == true) {
        this.router.navigate(['']);
      } else {
        this.passwordError = true;
      }
    } else if (result.statusCode == 404) {
      this.loginError = true;
    } else if (result.statusCode == 401) {
      this.blocked = true;
    } else if (result.statusCode == 400) {
      for (const key in result.data) {
        result.data[key].forEach((item) => {
          this.errors.push(`${key}: ${item}`);
        });
      }
    }
    this.load = false;
  }
}
