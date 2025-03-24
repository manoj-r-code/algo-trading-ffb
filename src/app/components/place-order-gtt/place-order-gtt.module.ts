import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatCardModule } from '@angular/material/card';
import { MatListModule } from '@angular/material/list';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatToolbarModule } from '@angular/material/toolbar';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatButtonModule } from '@angular/material/button';
import { FormsModule } from '@angular/forms';
import { SellBelowStoplossComponent } from './sell-below-stoploss/sell-below-stoploss.component';
import { SellBelowMarketComponent } from './sell-below-market/sell-below-market.component';
import { BuyAboveStoplossComponent } from './buy-above-stoploss/buy-above-stoploss.component';
import { BuyAboveMarketComponent } from './buy-above-market/buy-above-market.component';
import { BuyMarketComponent } from './buy-market/buy-market.component';
import { SellMarketComponent } from './sell-market/sell-market.component';
import { PlaceOrderGttComponent } from './place-order-gtt.component';

@NgModule({
  declarations: [PlaceOrderGttComponent,SellBelowMarketComponent,SellBelowStoplossComponent,SellMarketComponent,BuyAboveMarketComponent,BuyAboveStoplossComponent,BuyMarketComponent],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    HttpClientModule,
    RouterModule,
    MatCardModule,
    MatListModule,
    MatProgressSpinnerModule,
    MatToolbarModule,
    MatButtonModule,
    MatCardModule,
    MatSnackBarModule,
    MatProgressSpinnerModule,
  ],
 
})
export class PlaceOrderGttModule {}
