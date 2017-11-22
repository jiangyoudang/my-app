import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs/Observable';

@Injectable()
export class GhubService {

  constructor(private http: HttpClient) { }

  getRepo(): Observable<Object> {
    return this.http.get('https://api.github.com/rate_limit');
  }

}
