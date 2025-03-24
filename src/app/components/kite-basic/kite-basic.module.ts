import { CommonModule } from '@angular/common';
import { KiteBasicComponent } from './kite-basic.component';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatCardModule } from '@angular/material/card';
import { MatListModule } from '@angular/material/list';
import { MatProgressSpinner, MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatToolbarModule } from '@angular/material/toolbar';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { FormsModule } from '@angular/forms';
import { ProfileComponent } from './profile/profile.component';
import { PositionsComponent } from './positions/positions.component';
import { HoldingsComponent } from './holdings/holdings.component';
import { OrdersComponent } from './orders/orders.component';
import { MatDialogActions, MatDialogModule } from '@angular/material/dialog';
import { MatTableModule } from '@angular/material/table';
import { MatButtonModule } from '@angular/material/button';
import { GttComponent } from './gtt/gtt.component';
import { MatFormField, MatFormFieldControl, MatLabel } from '@angular/material/form-field';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatIconModule } from '@angular/material/icon';




@NgModule({
  declarations: [KiteBasicComponent,ProfileComponent, OrdersComponent, PositionsComponent, HoldingsComponent, GttComponent],
  imports: [
    CommonModule,
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
    MatDialogModule,
    MatDialogActions,
    MatTableModule,
    MatLabel,
    MatFormField,
    MatProgressSpinner,
    MatListModule,
    MatGridListModule,
    MatIconModule
  ],
 
})
export class KiteBasicModule {}
