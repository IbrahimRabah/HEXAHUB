import { Component, input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SystemModule } from '../../../core/models/system.model';

@Component({
  selector: 'app-module-card',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './module-card.component.html',
  styleUrls: ['./module-card.component.scss']
})
export class ModuleCardComponent {
  module = input.required<SystemModule>();
  accentColor = input<string>('#4f7df9');
}
