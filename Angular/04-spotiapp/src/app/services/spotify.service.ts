import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class SpotifyService {

  constructor(private http: HttpClient) { }

  getQuery(query: string) {
    const URL = `https://api.spotify.com/v1/${ query }`;

    const headers = new HttpHeaders({
      Authorization: 'Bearer BQBQ8b6T136p9Lq2D-nRnU1vySRBpqJXW7COnXEaOR1b2M5LPaVEVTNz1VzYuGVWl-QhxAqf6c2fc_OT-Cw'
    });

    return this.http.get(URL, {headers});

  }


  getNewRealeases() {
    return this.getQuery('browse/new-releases?limit=20')
    .pipe( map( (data: any) => data.albums.items ));
  }

  getArtista(termino: string) {
    return this.getQuery(`search?q=${ termino } &type=artist&limit=20`)
    .pipe( map( (data: any) => data.artists.items ));

  }

  getArtistaById(id: string) {
    return this.getQuery(`artists/${ id }`);
  }

  getTopTracks(id: string) {
    return this.getQuery(`artists/${ id }/top-tracks?country=us`)
    .pipe( map( (data: any) => data.tracks ));

  }

}
