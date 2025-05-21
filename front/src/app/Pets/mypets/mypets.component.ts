import { Component } from '@angular/core';
import { PetcardComponent } from '../petcard/petcard.component';

@Component({
  selector: 'app-mypets',
  imports: [PetcardComponent],
  templateUrl: './mypets.component.html',
  styleUrl: './mypets.component.sass'
})
export class MypetsComponent {

}
