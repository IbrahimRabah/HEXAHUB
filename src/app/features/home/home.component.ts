import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { trigger, transition, style, animate, query, stagger } from '@angular/animations';
import { COMPANY_INFO, KEY_BENEFITS, DIFFERENTIATORS, INDUSTRIES } from '../../core/constants/company.data';
import { HEXA_SYSTEMS } from '../../core/constants/systems.data';
import { ContactCtaComponent } from '../../shared/components/contact-cta/contact-cta.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, RouterModule, ContactCtaComponent],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
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
export class HomeComponent implements OnInit {
  company = COMPANY_INFO;
  systems = HEXA_SYSTEMS;
  benefits = KEY_BENEFITS;
  differentiators = DIFFERENTIATORS;
  industries = INDUSTRIES;

  ngOnInit() {
    window.scrollTo(0, 0);
  }
}
