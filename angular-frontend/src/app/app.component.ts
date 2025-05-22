import { Component , CUSTOM_ELEMENTS_SCHEMA} from '@angular/core';
import { environment } from '../enviourments/enviourment';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {

}