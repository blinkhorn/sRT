import { Injectable } from '@angular/core';
// import { Request } from './request.model';

import { SongsService } from '../song/songs.service';
import { Song } from '../song/song.model';

// import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RequestsService {
  // private request: Request;
  // private requestUpdated = new Subject<Request>();
  private song: Song;
  private songId: number;

  constructor(public songsService: SongsService)  { }

  makeRequest(mood: string, listener: string) {
    this.song = this.songsService.getSong(mood, listener);
    console.log('Song: ', this.song);
    // this.songId = this.song.id;
  }

  getSongId() {
    return this.songId;
  }


}
