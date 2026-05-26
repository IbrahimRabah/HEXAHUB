import { Component, input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-cta-section',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './cta-section.component.html',
  styleUrls: ['./cta-section.component.scss']
})
export class CTASectionComponent {
  title = input.required<string>();
  description = input.required<string>();
  buttonText = input.required<string>();
  buttonLink = input.required<string>();
  accentColor = input<string>('#4f7df9');
}
