import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class InformationService {

  contactsUrl = 'http://localhost:3030/contactRequests';

  public constructor(
    private http: HttpClient,
  ) {}

  public getContacts(): Observable<any> {
    return this.http.get(this.contactsUrl);
  }

  public getContactById(id: number): Observable<any> {
    return this.http.get(`${this.contactsUrl}/${id}`);
  }

  public addContact(contact: any) {
    return this.http.post(this.contactsUrl, contact);
  }
}
