import { Component, inject } from '@angular/core';
import { ProjectComponent } from './project/project.component';
import { PortfoliodataService } from './portfoliodata.service';
import { NgStyle } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'app-portfolio',
  standalone: true,
  imports: [ProjectComponent, NgStyle, TranslateModule],
  templateUrl: './portfolio.component.html',
  styleUrl: './portfolio.component.scss'
})
export class PortfolioComponent {

  portfoliodata = inject(PortfoliodataService);

}
