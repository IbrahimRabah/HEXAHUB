import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';
import { trigger, transition, style, animate, query, stagger } from '@angular/animations';
import { HEXA_SYSTEMS } from '../../../core/constants/systems.data';
import { HexaSystem } from '../../../core/models/system.model';
import { ContactCtaComponent } from '../../../shared/components/contact-cta/contact-cta.component';

@Component({
  selector: 'app-system-detail',
  standalone: true,
  imports: [CommonModule, RouterModule, ContactCtaComponent],
  templateUrl: './system-detail.component.html',
  styleUrls: ['./system-detail.component.scss'],
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
export class SystemDetailComponent implements OnInit {
  system: HexaSystem | undefined;
  activeTab: 'features' | 'modules' = 'features';

  constructor(
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit() {
    this.route.paramMap.subscribe(params => {
      const slug = params.get('slug');
      this.system = HEXA_SYSTEMS.find(s => s.slug === slug);
      
      if (!this.system) {
        this.router.navigate(['/systems']);
      }
      
      window.scrollTo(0, 0);
    });
  }

  setTab(tab: 'features' | 'modules') {
    this.activeTab = tab;
  }
}
