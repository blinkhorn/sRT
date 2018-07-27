import { Injectable } from '@angular/core';
import { Request } from './request.model';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RequestsService {
  private requests: Request[] = [];
  private requestsUpdated = new Subject<Request[]>();

  getRequests() {
    return [...this.requests];
  }

  getRequestUpdateListener() {
    return this.requestsUpdated.asObservable();
  }

  addRequest(mood: string, listener: string) {
    const request: Request = { mood: mood, listener: listener };
    this.requests.push(request);
    this.requestsUpdated.next([...this.requests]);
  }
  constructor()  { }
}
