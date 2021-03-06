import { HomePageComponent } from './shared/pages/home-page/home-page.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule, ExtraOptions } from '@angular/router';
import { PageNotFoundComponent } from './shared/pages/page-not-found/page-not-found.component';

const routes: Routes = [
  { path: '', component: HomePageComponent, pathMatch: 'full'},
  { path: '**', component: PageNotFoundComponent },
];

const configs: ExtraOptions = { enableTracing: true };

@NgModule({
  imports: [RouterModule.forRoot(routes,configs)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
