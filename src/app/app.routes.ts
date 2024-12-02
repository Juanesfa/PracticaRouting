import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path:'', //🏠Página de Inicio
    loadComponent:() => import ('./Views/home/home.component').then(m =>   m.HomeComponent)
  },

  {
    path:'about', //ℹ️ Acerca de 
    loadComponent:() => import ('./Views/about/about.component').then(m => m.AboutComponent)
  },

  {
    path:'contact', //📬 Contacto
    loadComponent:() => import ('./Views/contact/contact.component').then(m => m.ContactComponent)
  },

  {
    path: '**',
    redirectTo: '',
    pathMatch: 'full'
  }
];
