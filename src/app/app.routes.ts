// app.routes.ts
import { Routes, RouterModule } from '@angular/router';
import { ModuleWithProviders } from '@angular/core';

import { ScorecardComponent } from './scorecard/scorecard.component';
import { HelpComponent } from './help/help.component';

export const ROUTE_CONFIG: Routes = [
    {
        path: '',
        redirectTo: 'home',
        pathMatch: 'full'
    },
   // {
       // path: 'home',
       // component: appComponent
   // },
    {
        path: 'scorecard',
        component: ScorecardComponent
    },
    {
        path: 'help',
        component: HelpComponent
    },
    {
        path: '**',
        redirectTo: 'home'
    }
];

export const routing: ModuleWithProviders = RouterModule.forRoot(ROUTE_CONFIG);