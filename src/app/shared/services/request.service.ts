import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { RequestI } from '../models/request-i.interface';
import { httpOptions } from '../../../environments/http-options';
import { ResponseI } from '../models/response-i.interface';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RequestService {
  cors = 'https://cors-anywhere.herokuapp.com/'

  URL = 'https://idlok.ipsidy.net/IDCompleteBackendEngine/Default/AdministrationServiceRest/foreignOperations/documents';

  /*  URLs de Request 
  4.1.a --> para SMS
  https://idlok.ipsidy.net/IDCompleteBackendEngine/Default/AdministrationServiceRest/foreignOperations/documents

  4.1.b --> para EMAIL
  https://idlok.ipsidy.net/IDCompleteBackendEngine/Default/AdministrationServiceRest/foreignOperations/documents

  4.1.c
  https://idlok.ipsidy.net/IDCompleteBackendEngine/Default/AdministrationServiceRest/foreignOperations/documents
  
  */

  constructor(
    private httpClient: HttpClient
  ) { }

  newRequest(data: RequestI): Observable<ResponseI> {
    return this.httpClient.post<ResponseI>(`${this.cors}${this.URL}`, JSON.stringify(data), httpOptions );
      
  }
}
