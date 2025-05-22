import { Component , CUSTOM_ELEMENTS_SCHEMA} from '@angular/core';
import { Router } from '@angular/router';
import { environment } from '../../../enviourments/enviourment';
import { register } from "@teamhanko/hanko-elements";

import { StarterInfoComponent } from '../../components/starter-info/starter-info.component';

@Component({
  selector: 'app-login',
  imports: [StarterInfoComponent],
  templateUrl: './login.page.html',
  styleUrls: [
    '../../../hanko-starter-style.css',
    '../../../hanko-style.css'
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class LoginPage {
  hankoApi = environment.HANKO_API_URL;

  constructor(private router: Router) {
    register(this.hankoApi).catch((error) => {
      // handle error
    });
  }

  redirectAfterLogin() {
    this.router.navigate(['/dashboard']);
  }
}
