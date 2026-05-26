import { Component, input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { HexaSystem } from '../../../core/models/system.model';

@Component({
  selector: 'app-system-card',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './system-card.component.html',
  styleUrls: ['./system-card.component.scss']
})
export class SystemCardComponent {
  system = input.required<HexaSystem>();
}
