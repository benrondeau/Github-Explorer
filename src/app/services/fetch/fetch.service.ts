import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions  } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';

@Injectable()
export class FetchService {

  constructor(private http: Http) { }

  getUser(username: string): Observable<Object> {
    // Set custom headers
    const headers: any = new Headers();
    headers.append('Accept', 'application/vnd.github.v3+json');
    const options: any = new RequestOptions({ headers: headers });

    return this.http.get(`https://api.github.com/users/${username}`, options)
      .map(this.extractData)
      .catch(this.handleError);
  }

  private extractData(res: Response) {
    const body = res.json();
    return body || { };
  }

  private handleError(res: Response) {
    const body = res.json();
    return body || { };
  }

}
