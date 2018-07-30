import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Song } from './song.model';


@Injectable({
  providedIn: 'root'
})
export class SongsService {
  private song: Song;
  // private songsUpdated = new Subject<Song[]>();

  constructor(private http: HttpClient) { }

  getSong(theMood: string, theListener: string) {
    this.http.get<{song: Song}>(`http://localhost:8000/api/songByType?listener_type=${theListener}&mood=${theMood}`)
      .subscribe((songData) => {
        this.song = songData.song;
      });
      return this.song;
  }
}
