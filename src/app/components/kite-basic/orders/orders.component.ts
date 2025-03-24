import { Component, OnInit, ViewChild, TemplateRef } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.css'],
})
export class OrdersComponent implements OnInit {
  orders: any[] = [];
  displayedColumns: string[] = ['order_id', 'status', 'product', 'tradingsymbol', 'transaction_type', 'quantity', 'average_price','delete'];

  @ViewChild('dialogTemplate') dialogTemplate!: TemplateRef<any>;

  constructor(private http: HttpClient, public dialog: MatDialog) {}

  ngOnInit(): void {
    this.fetchOrders();
  }

  fetchOrders() {
    this.http.get<any>('https://algo-trading-bff.onrender.com/kite/get-orders').subscribe(
      (response) => {
        if (response.status === 'success') {
          this.orders = response.data;
        }
      },
      (error) => {
        console.error('Error fetching orders:', error);
      }
    );
  }

  confirmDelete(orderId: string) {
    if (confirm("Are you sure you want to delete this order?")) {
      this.deleteOrder(orderId);
    }
  }
  deleteOrder(orderId: string) {
    const url = ` https://algo-trading-bff.onrender.com/kite/delete-order/${orderId}`;
  
    this.http.delete(url).subscribe(
      (response) => {
        console.log('Order deleted successfully:', response);
        this.orders = this.orders.filter(order => order.order_id !== orderId); // Remove order from table
      },
      (error) => {
        console.error('Error deleting order:', error);
      }
    );
  }
  
}
