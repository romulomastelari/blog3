import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { Author } from "../model/feed/Author";

@Injectable({
  providedIn: 'root'
})
export class AuthorService {

  constructor(private http: HttpClient) {
  }

  getAuthors(): Observable<Author[]> {
    return this.http.get<Author[]>('http://localhost:3001/author');
  }
}
