import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DefaultComponent } from '../app/layouts/default/default.component';
import { DashboardComponent } from '../app/modules/dashboard/dashboard.component'

const Route: Routes = [
  {
    path: '',
    component: DefaultComponent,
    children: [
      { path: '', component: DashboardComponent },
    ]
  },
];


@NgModule({
  imports: [RouterModule.forRoot(Route)], //{ preloadingStrategy:PreloadAllModules }
  exports: [RouterModule]
})
export class AppRoutingModule { }
