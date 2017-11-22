import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

import {FormsModule} from '@angular/forms';
// import { MdButtonModule, MdInputModule, MdIconModule} from '@angular/material';
import {MatButtonModule, MatInputModule, MatIconModule} from '@angular/material';

import {AppComponent} from './app.component';
import {NotFoundComponent} from './not-found/not-found.component';
import {AppRoutingModule} from './app-routing.module';
import {CrisisComponent} from './crisis/crisis.component';
import {HeroModule} from './hero/hero.module';
import {CrisisModule} from './crisis/crisis.module';
import {GhubModule} from './ghub/ghub.module';
import { FootComponent } from './foot/foot.component';
import {HTTP_INTERCEPTORS} from '@angular/common/http';
import {CacheInterceptor} from './cache-interceptor';
import { HomeComponent } from './home/home.component';


@NgModule({
  declarations: [
    AppComponent,
    NotFoundComponent,
    CrisisComponent,
    FootComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HeroModule,
    CrisisModule,
    GhubModule,
    MatInputModule,
    MatIconModule,
    MatButtonModule,
    AppRoutingModule,
    BrowserAnimationsModule,
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: CacheInterceptor,
      multi: true}
  ],
  // exports: [FootComponent],
  bootstrap: [AppComponent, FootComponent]
})
export class AppModule {
}
