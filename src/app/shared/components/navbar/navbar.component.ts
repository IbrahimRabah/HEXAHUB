import { Component, HostListener, signal } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { NAVIGATION_LINKS, NavLink } from '../../../core/constants';

@Component({
  selector: 'app-navbar',
  imports: [RouterLink, RouterLinkActive],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss',
})
export class NavbarComponent {
  protected readonly navLinks = NAVIGATION_LINKS;
  protected readonly isScrolled = signal(false);
  protected readonly menuOpen = signal(false);
  protected readonly dropdownOpen = signal(false);

  @HostListener('window:scroll')
  onScroll(): void {
    this.isScrolled.set(window.scrollY > 50);
  }

  @HostListener('document:click', ['$event'])
  onDocumentClick(event: Event): void {
    const target = event.target as HTMLElement;
    if (!target.closest('.dropdown')) {
      this.dropdownOpen.set(false);
    }
  }

  toggleMenu(): void {
    this.menuOpen.update((v) => !v);
    if (!this.menuOpen()) {
      this.dropdownOpen.set(false);
    }
  }

  toggleDropdown(event: Event): void {
    event.preventDefault();
    event.stopPropagation();
    this.dropdownOpen.update((v) => !v);
  }

  closeMenu(): void {
    this.menuOpen.set(false);
    this.dropdownOpen.set(false);
  }
}
