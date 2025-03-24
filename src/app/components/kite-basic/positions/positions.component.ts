// import { Component, OnInit, ViewChild, TemplateRef } from '@angular/core';
// import { MatDialog } from '@angular/material/dialog';
// import { HttpClient } from '@angular/common/http';

// @Component({
//   selector: 'app-positions',
//   templateUrl: './positions.component.html',
//   styleUrls: ['./positions.component.css'],
// })
// export class PositionsComponent implements OnInit {
//   positions: any[] = []; // Store API data
//   displayedColumns: string[] = ['tradingsymbol', 'exchange', 'quantity', "product", 'pnl'];

//   @ViewChild('dialogTemplate') dialogTemplate!: TemplateRef<any>;

//   constructor(private http: HttpClient, private dialog: MatDialog) {}

//   ngOnInit() {
//     this.fetchPositions();
//   }

//   fetchPositions() {
//     this.http.get<any>('http://127.0.0.1:8000/stocks/positions').subscribe(
//       (response) => {
//         if (response.status === 'success') {
//           this.positions = response.data.net; // Extract "net" array
//         }
//       },
//       (error) => console.error('Error fetching positions:', error)
//     );
//   }


// }
import { Component, OnInit, ViewChild, TemplateRef } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-positions',
  templateUrl: './positions.component.html',
  styleUrls: ['./positions.component.css'],
})
export class PositionsComponent implements OnInit {
  positions: any[] = []; // Store API data
  displayedColumns: string[] = ['tradingsymbol', 'exchange', 'quantity', 'product', 'pnl', 'actions'];

  @ViewChild('dialogTemplate') dialogTemplate!: TemplateRef<any>;

  constructor(private http: HttpClient, private dialog: MatDialog) {}

  ngOnInit() {
    this.fetchPositions();
  }

  fetchPositions() {
    this.http.get<any>('http://127.0.0.1:5000/kite/get-positions').subscribe(
      (response) => {
        if (response.status === 'success') {
          this.positions = response.data.net; // Extract "net" array
        }
      },
      (error) => console.error('Error fetching positions:', error)
    );
  }

  exitPosition(symbol: string, quantity: number) {
    if (quantity === 0) {
      alert('Cannot exit a closed position.');
      return;
    }

    const confirmExit = confirm(`Are you sure you want to exit position for ${symbol}?`);
    if (!confirmExit) return;

    this.http.post<any>(`http://127.0.0.1:8000/stocks/exit-position/${symbol}`, {}).subscribe(
      (response) => {
        alert(response.message);
        this.fetchPositions(); // Refresh data
      },
      (error) => alert('Error exiting position: ' + error.error.detail)
    );
  }
}
