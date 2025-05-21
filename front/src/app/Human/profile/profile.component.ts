import { Component } from '@angular/core';
import { PetcardComponent } from '../../Pets/petcard/petcard.component';
import { HumancardComponent } from '../humancard/humancard.component';

@Component({
  selector: 'app-profile',
  imports: [PetcardComponent, HumancardComponent],
  templateUrl: './profile.component.html',
  styleUrl: './profile.component.sass'
})
export class ProfileComponent {

}
