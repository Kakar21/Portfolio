import { Component, inject } from '@angular/core';
import { ReferenceComponent } from './reference/reference.component';
import { ReferencedataService } from './referencedata.service';
import { TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'app-references',
  standalone: true,
  imports: [ ReferenceComponent, TranslateModule ],
  templateUrl: './references.component.html',
  styleUrl: './references.component.scss'
})
export class ReferencesComponent {

  referencedata = inject(ReferencedataService);
}
