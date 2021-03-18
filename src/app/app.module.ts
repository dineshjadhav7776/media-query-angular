import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { SharedModule } from './shared/shared.module';
import { DefaultModule } from './layouts/default/default.module';
import { AppRoutingModule } from './app-routing.module';
import { RouterModule } from '@angular/router';
import { AboutComponent } from './modules/about/about.component';
import { GalleryViewComponent } from './modules/gallery-view/gallery-view.component';
import { LoginComponent } from './modules/login/login.component';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { NgxGalleryModule } from '@kolkov/ngx-gallery';



@NgModule({
  declarations: [
    AppComponent,
    AboutComponent,
    GalleryViewComponent,
    LoginComponent,
  ],
  imports: [
    BrowserModule,
    SharedModule,
    DefaultModule,
    AppRoutingModule,
    RouterModule,
    ReactiveFormsModule,
    HttpClientModule,
    NgxGalleryModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
