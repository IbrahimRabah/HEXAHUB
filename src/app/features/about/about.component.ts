import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { trigger, transition, style, animate, query, stagger } from '@angular/animations';
import { COMPANY_INFO, CORE_VALUES, MILESTONES, INDUSTRIES, COMPANY_VISION, COMPANY_MISSION, FOUNDER_MESSAGE } from '../../core/constants/company.data';
import { ContactCtaComponent } from '../../shared/components/contact-cta/contact-cta.component';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [CommonModule, ContactCtaComponent],
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss'],
  animations: [
    trigger('staggerFade', [
      transition(':enter', [
        query('.stagger-item', [
          style({ opacity: 0, transform: 'translateY(20px)' }),
          stagger(100, [
            animate('0.6s cubic-bezier(0.2, 0.8, 0.2, 1)', style({ opacity: 1, transform: 'none' }))
          ])
        ], { optional: true })
      ])
    ])
  ]
})
export class AboutComponent implements OnInit {
  company = COMPANY_INFO;
  coreValues = CORE_VALUES;
  milestones = MILESTONES;
  industries = INDUSTRIES;
  vision = COMPANY_VISION;
  mission = COMPANY_MISSION;
  founder = FOUNDER_MESSAGE;

  ngOnInit() {
    window.scrollTo(0, 0);
  }
}
