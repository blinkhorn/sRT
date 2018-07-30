import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { Song } from './song.model';


@Injectable({
  providedIn: 'root'
})
export class SongsService {
  private theSong: Song;
  private theTitle: string;

  constructor(private http: HttpClient) { }

  getSong(theMood: string, theListener: string): Observable<any> {
    return this.http.get(`http://localhost:8000/api/songByType?listener_type=${theListener}&mood=${theMood}`);

  }
}
