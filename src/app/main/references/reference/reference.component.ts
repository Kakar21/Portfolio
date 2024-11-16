import { Component, Input } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'app-reference',
  standalone: true,
  imports: [TranslateModule],
  templateUrl: './reference.component.html',
  styleUrl: './reference.component.scss'
})
export class ReferenceComponent {
  @Input() reference = {
    name: '',
    positionPath: '',
    quotePath: '',
    linkedin: ''
  }; 

  navigateToLinkedin() {
    window.open(this.reference.linkedin, '_blank');
  }
}
