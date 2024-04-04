import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class ContatoService {

  constructor(private http: HttpClient) { }

  sendEmail(emailData: any): Observable<any> {
    const { name, email, message } = emailData;

    return this.http.post('http://localhost:3000/send-email', emailData);
  }
}
