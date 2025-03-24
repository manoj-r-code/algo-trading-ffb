import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-mini-terminal',
  templateUrl: './mini-terminal.component.html',
  styleUrls: ['./mini-terminal.component.css']
})
export class MiniTerminalComponent implements OnInit {
  logs: string[] = [];
  socket!: WebSocket;

  ngOnInit() {
    this.socket = new WebSocket('ws://localhost:8000/ws/logs');

    this.socket.onmessage = (event) => {
      this.logs.push(event.data);
    };

    this.socket.onerror = (error) => {
      console.error('WebSocket Error:', error);
    };
  }

  ngOnDestroy() {
    this.socket.close();
  }
}
