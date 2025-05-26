import { Component } from '@angular/core';
import { HumancardComponent } from '../humancard/humancard.component';

@Component({
  selector: 'app-myfriends',
  standalone: true,
  imports: [HumancardComponent],
  templateUrl: './myfriends.component.html',
  styleUrl: './myfriends.component.sass'
})
export class MyfriendsComponent {

}
