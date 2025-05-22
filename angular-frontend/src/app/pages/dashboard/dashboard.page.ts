import { Component } from '@angular/core';
import { StarterInfoComponent } from '../../components/starter-info/starter-info.component';
import { StarterHeaderComponent } from '../../components/starter-header/starter-header.component';
import { StarterDashboardComponent } from '../../components/starter-dashboard/starter-dashboard.component';

@Component({
  selector: 'app-dashboard',
  imports: [StarterInfoComponent, StarterHeaderComponent, StarterDashboardComponent],
  templateUrl: './dashboard.page.html',
})
export class DashboardPage {

}
