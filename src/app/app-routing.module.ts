import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomePageComponent } from './components/home-page/home-page.component';
import { PlaceOrderGttComponent } from './components/place-order-gtt/place-order-gtt.component';
import { MiniTerminalComponent } from './components/mini-terminal/mini-terminal.component';
import { KiteBasicComponent } from '../app/components/kite-basic/kite-basic.component';

const routes: Routes = [
  { path: 'home', component: HomePageComponent },
  // { path: 'profile', component: ProfileComponent },
  {path:"kite", component:KiteBasicComponent},
  {path:'gtt', component:PlaceOrderGttComponent},
  {path:'miniterminal', component:MiniTerminalComponent},
  { path: '', redirectTo: 'home', pathMatch: 'full' } ,
  { path: '**', redirectTo: 'home', pathMatch: 'full' } ,


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
