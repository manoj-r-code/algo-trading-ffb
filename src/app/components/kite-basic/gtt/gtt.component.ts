
// import { Component, ViewChild, TemplateRef } from '@angular/core';
// import { MatDialog } from '@angular/material/dialog';
// import { HttpClient } from '@angular/common/http';

// @Component({
//   selector: 'app-gtt',
//   templateUrl: './gtt.component.html',
//   styleUrls: ['./gtt.component.css'],
// })
// export class GttComponent {
//   gttData: any[] = []; // Store API response
//   triggerId: number | null = null; // Store trigger ID input
//   displayedColumns: string[] = ['id', 'tradingsymbol', 'last_price', 'trigger_values', 'orders'];
//   loading = false; // Track loading state

//   @ViewChild('dialogTemplate') dialogTemplate!: TemplateRef<any>;

//   constructor(private dialog: MatDialog, private http: HttpClient) {}

//   // Open Dialog
//   openDialog() {
//     this.dialog.open(this.dialogTemplate);
//     this.fetchGttData();
//   }

//   // Fetch GTT Data
//   fetchGttData() {
//     this.loading = true;
//     this.http.get<any>('http://127.0.0.1:8000/stocks/gtt').subscribe(
//       response => {
//         this.loading = false;
//         if (response && Array.isArray(response.data)) {
//           this.gttData = response.data;
//         } else {
//           this.gttData = [];
//         }
//       },
//       error => {
//         this.loading = false;
//         console.error('Error fetching GTT data:', error);
//       }
//     );
//   }

//   // Delete Trigger by ID
//   deleteTrigger() {
//     if (!this.triggerId || isNaN(Number(this.triggerId))) {
//       alert('Please enter a valid Trigger ID');
//       return;
//     }
//     const id = Number(this.triggerId);

//     this.http.delete(`http://127.0.0.1:8000/stocks/cancel-gtt/${id}`).subscribe(
//       () => {
//         alert(`Trigger ID ${id} deleted successfully.`);
//         this.triggerId = null;
//         this.fetchGttData(); // Refresh data
//       },
//       error => {
//         alert('Failed to delete trigger. Please check the ID.');
//       }
//     );
//   }

//   // Close Dialog
//   closeDialog() {
//     this.dialog.closeAll();
//   }
// }
import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-gtt',
  templateUrl: './gtt.component.html',
  styleUrls: ['./gtt.component.css'],
})
export class GttComponent implements OnInit {
  gttData: any[] = []; // Store API response
  displayedColumns: string[] = ['id', 'tradingsymbol', 'last_price',"trigger_values","type","quantity", 'delete'];

  constructor(private http: HttpClient) {}

  ngOnInit() {
    this.fetchGttData();
  }

  // Fetch GTT Data
  fetchGttData() {
    this.http.get<any>('http://127.0.0.1:8000/stocks/gtt').subscribe(response => {
      if (response.status === 'success' && Array.isArray(response.data)) {
        this.gttData = response.data;
      }
    });
  }

  // Delete Trigger by ID
  deleteTrigger(triggerId: number) {
    if (!confirm(`Are you sure you want to delete Trigger ID ${triggerId}?`)) {
      return;
    }

    this.http.delete(`http://127.0.0.1:8000/stocks/cancel-gtt/${triggerId}`).subscribe(
      () => {
        alert(`Trigger ID ${triggerId} deleted successfully.`);
        this.fetchGttData(); // Refresh data after deletion
      },
      error => {
        alert('Failed to delete trigger. Please check the ID.');
      }
    );
  }
}
