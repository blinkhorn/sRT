import { Component } from '@angular/core';

import { Request } from './request/request.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  storedRequests: Request[] = [];
  title = 'app';
}
