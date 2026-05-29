import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';

// Get a free key at https://web3forms.com — enter info@hexa-hub.com and copy the access key
const ACCESS_KEY = '5422d9e1-053a-4c55-bc3a-616008b11a50';

@Injectable({ providedIn: 'root' })
export class ContactService {
  private readonly http = inject(HttpClient);

  send(params: Record<string, string>) {
    return this.http.post('https://api.web3forms.com/submit', {
      access_key: ACCESS_KEY,
      subject: `HexaHub Inquiry – ${params['system'] || 'General Inquiry'}`,
      ...params,
    });
  }
}
