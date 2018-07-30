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

  private songId: number;

  constructor(public songsService: SongsService)  { }

  makeRequest(mood: string, listener: string) {
    this.songId = this.songsService.getSong(mood, listener).id;
  }

  getSongId() {
    return this.songId;
  }


}
