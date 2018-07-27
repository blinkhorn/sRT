import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Song } from './song.model';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SongsService {
  private songs: Song[] = [];
  private songsUpdated = new Subject<Song[]>();

  constructor(private http: HttpClient) { }

  getSongs() {
    this.http.get<{songs: Song[]}>('htp://localhost:8000/api/songs')
      .subscribe((songData) => {
        this.songs = songData.songs;
        this.songsUpdated.next([...this.songs]);
      });
  }

  get songsUpdatedListener() {
    return this.songsUpdated.asObservable();
  }

  // addSon(mood: string, listener: string, title: string)
}
