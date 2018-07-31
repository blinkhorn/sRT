import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RequestsService {

  constructor(private http: HttpClient)  { }

  makeRequest(mood: string, listener: string): Observable<any> {
    return this.getSong(mood, listener);
  }

  getSong(theMood: string, theListener: string): Observable<any> {
    return this.http.get(`http://localhost:8000/api/songByType?listener_type=${theListener}&mood=${theMood}`);
  }
}
