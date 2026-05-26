import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { trigger, transition, style, animate, query, stagger } from '@angular/animations';
import { HEXA_SYSTEMS } from '../../../core/constants/systems.data';
import { ContactCtaComponent } from '../../../shared/components/contact-cta/contact-cta.component';

@Component({
  selector: 'app-systems-overview',
  standalone: true,
  imports: [CommonModule, RouterModule, ContactCtaComponent],
  templateUrl: './systems-overview.component.html',
  styleUrls: ['./systems-overview.component.scss'],
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
export class SystemsOverviewComponent implements OnInit {
  systems = HEXA_SYSTEMS;

  ngOnInit() {
    window.scrollTo(0, 0);
  }
}
