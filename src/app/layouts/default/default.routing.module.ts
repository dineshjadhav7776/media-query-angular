import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DashboardComponent } from '../../modules/dashboard/dashboard.component';
import { DefaultComponent } from '../../layouts/default/default.component';
import { AboutComponent } from 'src/app/modules/about/about.component';
import { GalleryViewComponent } from 'src/app/modules/gallery-view/gallery-view.component';
import { LoginComponent } from 'src/app/modules/login/login.component';
import { AuthGuard } from '../../guard/auth.guard';
import { loggedGuard } from '../../guard/loggedIn.guard';



const Route: Routes = [
    {
        path: '',
        component: DefaultComponent,
        children: [
            { path: '', component: DashboardComponent },
        ]
    },
    {
        path: 'about',
        component: DefaultComponent,
        children: [
            { path: '', component: AboutComponent },
        ]
    },
    {
        path: 'gallery-view',
        canActivate: [AuthGuard],
        component: DefaultComponent,
        children: [
            { path: '', component: GalleryViewComponent },
        ]
    },
    {
        path: 'login',
        canActivate: [loggedGuard],
        component: LoginComponent,

    },
]

@NgModule({
    imports: [RouterModule.forChild(Route)],
    exports: []

})
export class DefaultRoutingModule {

}