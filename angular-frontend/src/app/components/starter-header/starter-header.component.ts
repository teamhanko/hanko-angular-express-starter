import { Component } from '@angular/core';
import { Hanko } from '@teamhanko/hanko-elements';
import { environment } from '../../../enviourments/enviourment';
import { Router, NavigationEnd } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-starter-header',
  imports: [CommonModule],
  styleUrls: ['../../../hanko-starter-style.css','../../../styles.css'],
  templateUrl: './starter-header.component.html',
})
export class StarterHeaderComponent {
  hankoApi = environment.HANKO_API_URL;

  isDashboard: boolean = true;;
  email: string = '';

  constructor(
    private router: Router,
  ) {
    this.router.events.subscribe(event => {
      if (event instanceof NavigationEnd) {
        this.isDashboard = event.urlAfterRedirects == "/dashboard";
      }
    });
  }

  ngOnInit(): void {
    const hanko = new Hanko(this.hankoApi);
    hanko.getUser().then((user: any) => {
      this.email = user.email || user.emails?.[0]?.address || 'Unknown';
    }).catch(err => console.error('Failed to fetch user', err));
  }

  logout(){
    new Hanko(this.hankoApi).logout().catch((error) => {
      console.log(error);
    }).then(()=>{
      this.router.navigate(["/"]);
    });
  }

  navigate(path: string){
    this.router.navigate([path]);
  }
}
