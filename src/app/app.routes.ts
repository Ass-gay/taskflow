import { Routes } from '@angular/router';
import { MainLayout } from './components/layouts/main-layout/main-layout';
import { Accueil } from './pages/accueil/accueil';
import { Mestaches } from './components/shared/mestaches/mestaches';
import { Ajouttache } from './components/shared/ajouttache/ajouttache';


export const routes: Routes = [
  {
    path: '',
    component: MainLayout,

    children: [
      { path: '', component: Accueil },
      { path: 'mestaches', component: Mestaches },
      { path: 'ajouttache', component: Ajouttache },



    ]
  },
  {
    path: 'login',
    component: Login
  }
];
