import { Component, input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-section-title',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './section-title.component.html',
  styleUrls: ['./section-title.component.scss']
})
export class SectionTitleComponent {
  title = input.required<string>();
  subtitle = input<string>();
  light = input<boolean>(false);
  accentColor = input<string>('#4f7df9');
}
