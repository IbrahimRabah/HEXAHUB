import { Injectable, inject } from '@angular/core';
import { DOCUMENT } from '@angular/common';

/**
 * Provides smooth-scroll helpers used across the application.
 */
@Injectable({ providedIn: 'root' })
export class ScrollService {
  private readonly document = inject(DOCUMENT);

  /** Smooth-scroll to the very top of the page. */
  scrollToTop(): void {
    this.document.defaultView?.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  }

  /**
   * Smooth-scroll to a DOM element identified by its `id` attribute.
   *
   * @param elementId - The target element's id (without the `#` prefix).
   */
  scrollToElement(elementId: string): void {
    const element = this.document.getElementById(elementId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  }
}
