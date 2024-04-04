import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Post } from "../model/feed/Post";
import { Observable } from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class PostService {

  constructor(private http: HttpClient) {
  }

  getPosts(): Observable<Post[]> {
    return this.http.get<Post[]>('http://localhost:3001/posts');
  }

  postMessage(post: Post | undefined): Observable<Post> {
    return this.http.post<Post>('http://localhost:3001/posts', post);
  }
}
