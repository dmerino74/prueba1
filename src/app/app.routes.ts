import { Routes } from '@angular/router';
import { Componente1 } from './components/componente1/componente1';
import { Componente2 } from './components/componente2/componente2';

export const routes: Routes = [
  {
    path: '',
    component: Componente1
  },
  {
    path: 'pagina2',
    component: Componente2
  }
];
