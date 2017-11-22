import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {NotFoundComponent} from './not-found/not-found.component';
import {HeroComponent} from './hero/hero.component';
import {HeroListComponent} from './hero/hero-list/hero-list.component';
import {CrisisListComponent} from './crisis/crisis-list/crisis-list.component';
import {HomeComponent} from './home/home.component';


const appRoutes: Routes = [
  {path: '', pathMatch: 'full', component: HomeComponent},
  {path: 'hero/:id', component: HeroComponent},
  {path: 'crisis-center', component: CrisisListComponent},

  {path: 'heros', component: HeroListComponent, data: {title: 'Heros list'}},
  {path: '**', component: NotFoundComponent}
];

@NgModule({
  imports: [
    RouterModule.forRoot(appRoutes, {
      enableTracing: true
    })
  ],
  exports: [RouterModule],
  declarations: []
})
export class AppRoutingModule {
}
