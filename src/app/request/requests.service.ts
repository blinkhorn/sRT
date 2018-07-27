import { Injectable } from '@angular/core';
// import { Request } from './request.model';

import { SongsService } from '../song/songs.service';

// import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RequestsService {
  // private request: Request;
  // private requestUpdated = new Subject<Request>();

  constructor(public songsService: SongsService)  { }

  // getRequest() {
  //   return this.request;
  // }

  // getRequestUpdateListener() {
  //   return this.requestUpdated.asObservable();
  // }

  makeRequest(mood: string, listener: string) {
    this.songsService.getSong(mood, listener);
  }

}
