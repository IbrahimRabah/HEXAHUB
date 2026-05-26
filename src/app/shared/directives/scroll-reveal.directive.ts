import { Directive, ElementRef, OnInit, OnDestroy, PLATFORM_ID, inject, Input } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';

@Directive({
  selector: '[appScrollReveal]',
  standalone: true
})
export class ScrollRevealDirective implements OnInit, OnDestroy {
  @Input() appScrollReveal: '' | 'slide-up' | 'slide-left' | 'slide-right' | 'fade' = '';
  @Input() revealDelay = 0;

  private elementRef = inject(ElementRef);
  private platformId = inject(PLATFORM_ID);
  private observer: IntersectionObserver | null = null;

  ngOnInit(): void {
    if (isPlatformBrowser(this.platformId)) {
      const element = this.elementRef.nativeElement;
      
      // Add initial styles based on animation type
      element.classList.add('reveal-initial');
      if (this.appScrollReveal) {
        element.classList.add(`reveal-${this.appScrollReveal}`);
      } else {
        element.classList.add('reveal-slide-up'); // default
      }

      if (this.revealDelay > 0) {
        element.style.transitionDelay = `${this.revealDelay}ms`;
      }

      this.observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              element.classList.add('revealed');
              // Optional: stop observing once revealed
              // this.observer?.unobserve(element);
            }
          });
        },
        {
          root: null,
          rootMargin: '0px 0px -10% 0px',
          threshold: 0.1
        }
      );

      this.observer.observe(element);
    }
  }

  ngOnDestroy(): void {
    if (this.observer) {
      this.observer.disconnect();
    }
  }
}
