import { Component, OnInit, inject, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { trigger, transition, style, animate, query, stagger } from '@angular/animations';
import { COMPANY_INFO } from '../../core/constants/company.data';
import { ContactService } from '../../core/services/contact.service';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss'],
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
export class ContactComponent implements OnInit {
  private readonly contactService = inject(ContactService);
  private readonly fb = inject(FormBuilder);

  readonly company = COMPANY_INFO;
  readonly isSubmitted = signal(false);
  readonly isLoading   = signal(false);
  readonly errorMsg    = signal('');

  readonly contactForm = this.fb.group({
    name:    ['', Validators.required],
    email:   ['', [Validators.required, Validators.email]],
    phone:   [''],
    company: [''],
    system:  [''],
    message: ['', Validators.required],
  });

  ngOnInit() { window.scrollTo(0, 0); }

  onSubmit() {
    if (this.contactForm.invalid) { this.contactForm.markAllAsTouched(); return; }

    const { name, email, phone, company, system, message } = this.contactForm.value;
    this.isLoading.set(true);
    this.errorMsg.set('');

    this.contactService.send({
      from_name:  name    ?? '',
      reply_to:   email   ?? '',
      phone:      phone   ?? '',
      company:    company ?? '',
      system:     system  ?? '',
      message:    message ?? '',
    }).subscribe({
      next:     () => { this.isSubmitted.set(true); this.isLoading.set(false); this.contactForm.reset(); },
      error:    () => { this.errorMsg.set('Failed to send. Please email us directly at info@hexa-hub.com'); this.isLoading.set(false); },
    });
  }
}
