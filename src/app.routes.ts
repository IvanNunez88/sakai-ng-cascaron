import { Routes } from '@angular/router';
import { AppLayout } from './app/layout/component/app.layout';

// Cada pantalla se descarga hasta que se abre (lazy loading)
export const appRoutes: Routes = [
    {
        path: '',
        component: AppLayout,
        children: [
            { path: '', loadComponent: () => import('./app/pages/inicio/inicio').then((m) => m.Inicio) }
            // Agrega aquí tus pantallas, ejemplo:
            // { path: 'alumnos', loadComponent: () => import('./app/pages/alumnos/alumnos').then((m) => m.Alumnos) }
        ]
    },
    { path: '**', redirectTo: '' }
];
