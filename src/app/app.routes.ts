import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () => import('./features/home/home.component').then(m => m.HomeComponent),
    title: 'HexaHub — Home'
  },
  {
    path: 'about',
    loadComponent: () => import('./features/about/about.component').then(m => m.AboutComponent),
    title: 'HexaHub — About Us'
  },
  {
    path: 'systems',
    loadComponent: () => import('./features/systems/systems-overview/systems-overview.component').then(m => m.SystemsOverviewComponent),
    title: 'HexaHub — Our Systems'
  },
  {
    path: 'systems/:slug',
    loadComponent: () => import('./features/systems/system-detail/system-detail.component').then(m => m.SystemDetailComponent)
  },
  {
    path: 'contact',
    loadComponent: () => import('./features/contact/contact.component').then(m => m.ContactComponent),
    title: 'HexaHub — Contact Us'
  },
  {
    path: '**',
    redirectTo: ''
  }
];
