import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MessagingService } from './shared/services/messaging.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'In house Library';
  constructor() { }
}
