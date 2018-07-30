import { Injectable } from '@angular/core';
// import { Request } from './request.model';

import { SongsService } from '../song/songs.service';
import { Song } from '../song/song.model';

import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RequestsService {
  // private request: Request;
  // private requestUpdated = new Subject<Request>();
  private song: Song;

  constructor(public songsService: SongsService)  { }

  makeRequest(mood: string, listener: string): Observable<any> {
    return this.songsService.getSong(mood, listener);
  }
}
