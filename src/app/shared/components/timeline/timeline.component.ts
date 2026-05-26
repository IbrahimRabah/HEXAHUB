import { Component, input } from '@angular/core';
import { CommonModule } from '@angular/common';

export interface TimelineMilestone {
  year: string;
  title: string;
  items: string[];
}

@Component({
  selector: 'app-timeline',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './timeline.component.html',
  styleUrls: ['./timeline.component.scss']
})
export class TimelineComponent {
  milestones = input.required<TimelineMilestone[]>();
  accentColor = input<string>('#4f7df9');
}
