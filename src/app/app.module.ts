import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
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
import { SellBelowStoplossComponent } from './components/place-order-gtt/sell-below-stoploss/sell-below-stoploss.component';
import { SellBelowMarketComponent } from './components/place-order-gtt/sell-below-market/sell-below-market.component';
import { BuyAboveStoplossComponent } from './components/place-order-gtt/buy-above-stoploss/buy-above-stoploss.component';
import { BuyAboveMarketComponent } from './components/place-order-gtt/buy-above-market/buy-above-market.component';
import { BuyMarketComponent } from './components/place-order-gtt/buy-market/buy-market.component';
import { SellMarketComponent } from './components/place-order-gtt/sell-market/sell-market.component';
import { HomePageComponent } from './components/home-page/home-page.component';
import { PlaceOrderGttModule } from './components/place-order-gtt/place-order-gtt.module';
import { MiniTerminalComponent } from './components/mini-terminal/mini-terminal.component';
import { KiteBasicModule } from './components/kite-basic/kite-basic.module';

@NgModule({
  declarations: [AppComponent,  HomePageComponent, MiniTerminalComponent],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    AppRoutingModule,
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
    KiteBasicModule,
    PlaceOrderGttModule
  ],
  providers: [provideAnimationsAsync()],
  bootstrap: [AppComponent],
})
export class AppModule {}
