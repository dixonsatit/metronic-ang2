import { ModuleWithProviders }  from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MainComponent } from './main.component';
import { NewComponent } from './new.component';
import { EditComponent } from './edit.component';

const appRoutes: Routes = [
  {
    path: '',
    component: MainComponent
  },
  {
    path: 'main',
    component: MainComponent
  },
  {
    path: 'new',
    component: NewComponent
  },
  {
    path: 'edit/:id',
    component: EditComponent
  }
];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
