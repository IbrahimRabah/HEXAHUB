import { Injectable, inject } from '@angular/core';
import { Title, Meta } from '@angular/platform-browser';

/**
 * Centralises page-level SEO: document title + meta description.
 *
 * Usage:
 *   seo = inject(SeoService);
 *   seo.updateMeta('Hexa Care', 'Complete healthcare management system.');
 */
@Injectable({ providedIn: 'root' })
export class SeoService {
  private readonly titleService = inject(Title);
  private readonly metaService = inject(Meta);

  /** Default brand suffix appended to every page title */
  private readonly brandSuffix = 'HexaHub';

  /**
   * Set the document `<title>` and `<meta name="description">` in one call.
   *
   * @param title       - Page-specific title (brand suffix is appended automatically).
   * @param description - Page meta description for search engines.
   */
  updateMeta(title: string, description: string): void {
    this.titleService.setTitle(`${title} | ${this.brandSuffix}`);
    this.metaService.updateTag({ name: 'description', content: description });
  }

  /**
   * Set only the document title (brand suffix appended).
   */
  setTitle(title: string): void {
    this.titleService.setTitle(`${title} | ${this.brandSuffix}`);
  }

  /**
   * Set only the meta description.
   */
  setDescription(description: string): void {
    this.metaService.updateTag({ name: 'description', content: description });
  }
}
