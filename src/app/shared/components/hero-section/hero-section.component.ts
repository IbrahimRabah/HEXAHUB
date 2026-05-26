import { Component, input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-hero-section',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './hero-section.component.html',
  styleUrls: ['./hero-section.component.scss']
})
export class HeroSectionComponent {
  title = input.required<string>();
  subtitle = input<string>();
  description = input<string>();
  primaryButtonText = input<string>();
  primaryButtonLink = input<string>();
  secondaryButtonText = input<string>();
  secondaryButtonLink = input<string>();
  accentColor = input<string>('#4f7df9');
  backgroundClass = input<string>('hero-dark');
  showParticles = input<boolean>(true);
}
