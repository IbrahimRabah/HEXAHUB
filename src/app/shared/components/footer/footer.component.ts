import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FOOTER_SECTIONS } from '../../../core/constants/navigation.data';
import { COMPANY_INFO } from '../../../core/constants/company.data';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent {
  currentYear = new Date().getFullYear();
  footerSections = FOOTER_SECTIONS;
  company = COMPANY_INFO;
}
