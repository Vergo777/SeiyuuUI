import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class SeiyuuDetailsService {

  constructor(private httpClient: HttpClient) { }

  getSeiyuuDetails(id: number): Observable<SeiyuuDetails> {
    return this.httpClient.get<SeiyuuDetails>("/api/seiyuu/" + id);
  }
}
