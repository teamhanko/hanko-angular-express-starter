import { Component , CUSTOM_ELEMENTS_SCHEMA} from '@angular/core';
import { register } from '@teamhanko/hanko-elements';

import { environment } from '../../../enviourments/enviourment';

import { StarterInfoComponent } from '../../components/starter-info/starter-info.component';
import { StarterHeaderComponent } from '../../components/starter-header/starter-header.component';

@Component({
  selector: 'app-profile',
  imports: [StarterInfoComponent, StarterHeaderComponent],
  templateUrl: './profile.page.html',
  styleUrls: [
    '../../../hanko-starter-style.css',
    '../../../hanko-style.css'
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class ProfilePage {
  hankoApi = environment.HANKO_API_URL;

  constructor() {
    register(this.hankoApi).catch((error) => {
      // handle error
    });
  }
}
