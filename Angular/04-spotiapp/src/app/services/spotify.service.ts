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
      Authorization: 'Bearer BQBq9eICGm6k0Oc2ogV-Xc4ySRK2Cz4dqvDAOGM4VChulELqtmZT4RxH6iycpJYkN3b64ZFtcBhBFvipkSY'
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

}
