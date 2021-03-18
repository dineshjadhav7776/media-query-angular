import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { SharedModule } from '../../shared/shared.module';
import { DashboardComponent } from '../../modules/dashboard/dashboard.component';
import { DefaultRoutingModule } from './default.routing.module';
import { DefaultComponent } from './default.component';



@NgModule({
    declarations: [DefaultComponent, DashboardComponent],
    imports: [
        RouterModule,
        FormsModule,
        DefaultRoutingModule,
        SharedModule,

    ],
    exports: [RouterModule],
})
export class DefaultModule {
}
