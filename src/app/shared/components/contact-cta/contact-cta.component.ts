import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-contact-cta',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './contact-cta.component.html',
  styleUrls: ['./contact-cta.component.scss']
})
export class ContactCtaComponent {}
