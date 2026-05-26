import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of, delay } from 'rxjs';
import { ContactFormModel } from '../models/contact.model';

/**
 * Handles contact-form submissions.
 *
 * Currently returns a simulated success response.
 * When the .NET backend is ready, uncomment the real HTTP call.
 */
@Injectable({ providedIn: 'root' })
export class ContactService {
  private readonly http = inject(HttpClient);

  // TODO: Replace with the actual .NET API endpoint
  private readonly apiUrl = '/api/contact';

  /**
   * Submit a contact-form payload to the backend.
   * Returns an observable with a success flag and user-facing message.
   */
  submitContact(
    form: ContactFormModel
  ): Observable<{ success: boolean; message: string }> {
    // ── Placeholder: simulate API call ──────────────────────────
    // When backend is ready, replace with:
    // return this.http.post<{ success: boolean; message: string }>(this.apiUrl, form);

    console.log('Contact form submitted:', form);
    return of({
      success: true,
      message: 'Thank you! We will contact you soon.',
    }).pipe(delay(1500));
  }
}
