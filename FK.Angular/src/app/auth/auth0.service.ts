import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { environment } from './environment';

import { HttpAuthService } from '../services/auth.service'
import { SignUp } from '../models/SignUp'

import Auth0Lock from 'auth0-lock';

@Injectable()
export class Auth0Service {
  auth0Options = {
    languageDictionary: {
      title: "AnyaTravel"
    },
    theme: {
      logo: 'https://ntviser.com/CategoryImage/Travel.png'
    },
    auth: {
      redirectUrl: environment.auth0.callbackURL,
      responseType: 'token id_token',
      audience: `https://${environment.auth0.domain}/userinfo`,
      sso: false,
      params: {
        scope: 'openid profile email'
      }
    },
    autoclose: true,
    oidcConformant: true,
  };

  lock = new Auth0Lock(
    environment.auth0.clientId,
    environment.auth0.domain,
    this.auth0Options
  );

  constructor(private router: Router, private httpAuthService: HttpAuthService) {

    this.lock.on('authenticated', (authResult: any) => {

      this.lock.getUserInfo(authResult.accessToken, async (error, profile) => {
        if (error) {
          throw new Error(error);
        }

        let signUp: SignUp = new SignUp();
        signUp.password = authResult.idTokenPayload.sub + 'A';
        signUp.confirmPassword = authResult.idTokenPayload.sub + 'A';
        signUp.login = authResult.idTokenPayload.sub.replace('|', '');
        signUp.email = authResult.idTokenPayload.sub + '@external.ru';
        signUp.fIO = profile.nickname; 

        this.httpAuthService.externelLogin(signUp).then((data) => {
          this.router.navigate(['/']);
        });
      });
    });

    this.lock.on('authorization_error', error => {
      console.log('something went wrong', error);
    });
  }

  login() {
    this.lock.show(
      {
        allowSignUp: false,
        allowLogin: true,
        allowForgotPassword: false,
        allowedConnections: ["twitter", "facebook", "vkontakte"]
      }
    );
  }
}
