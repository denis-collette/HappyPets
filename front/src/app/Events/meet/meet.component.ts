import { Component } from '@angular/core';
import { EventcardComponent } from '../eventcard/eventcard.component';

@Component({
  selector: 'app-meet',
  standalone: true,
  imports: [EventcardComponent],
  templateUrl: './meet.component.html',
  styleUrl: './meet.component.sass'
})
export class MeetComponent {

}
