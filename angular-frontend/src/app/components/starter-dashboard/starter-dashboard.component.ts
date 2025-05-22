import { Component } from '@angular/core';
import { environment } from '../../../enviourments/enviourment';
import { Hanko } from '@teamhanko/hanko-elements';

@Component({
  selector: 'app-starter-dashboard',
  imports: [],
  templateUrl: './starter-dashboard.component.html',
  styleUrls: ['../../../hanko-starter-style.css','../../../styles.css']
})
export class StarterDashboardComponent {
  hankoApi = environment.HANKO_API_URL;

  email: string = '';
  id: string = '';

  ngOnInit(): void {
    new Hanko(this.hankoApi).getUser().then((user: any) => {
      this.email = user.emails?.[0]?.address || 'Unknown';
      this.id = user.user_id || 'Unknown';
    }).catch(err => console.error('Failed to fetch user', err));
  }
}
