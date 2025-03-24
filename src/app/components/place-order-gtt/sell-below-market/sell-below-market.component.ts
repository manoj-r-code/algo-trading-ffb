import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-sell-below-market',
  templateUrl: './sell-below-market.component.html',
  styleUrl: './sell-below-market.component.css',
})
export class SellBelowMarketComponent {
  tradingSymbol: string = ''; // Stores the input value
  enteredSymbols: string[] = []; // Stores submitted trading symbols
  apiUrl = 'http://127.0.0.1:8000/stocks/sell-below-market/'; // Backend API

  constructor(private http: HttpClient) {}

  submitSymbol() {
    if (!this.tradingSymbol.trim()) return; // Prevent empty submissions

    const url = `${this.apiUrl}${this.tradingSymbol}`; // Construct API URL

    this.http.get(url).subscribe(
      (response) => {
        console.log('API Response:', response);
        this.enteredSymbols.push(this.tradingSymbol); // Store entered symbol
        this.tradingSymbol = ''; // Clear input after submission
      },
      (error) => console.error('Error:', error)
    );
  }
}
