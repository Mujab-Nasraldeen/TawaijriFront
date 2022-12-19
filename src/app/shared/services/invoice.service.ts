import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { ApiRoutes } from '../models/apiRoutes';

@Injectable({
  providedIn: 'root'
})
export class InvoiceService {

  constructor(public http: HttpClient) { }

  getInvoices(): Observable<any>{
    return this.http.get(environment.apiUrl+"Invoice/getAllInvoices");
  }

  findInvoice(id: any): Observable<any>{
    return this.http.get(environment.apiUrl+"Invoice/getInvoiceById"+id);
  }

  addInvoice(invoice: any): Observable<any>{
    return this.http.post(environment.apiUrl+"Invoice/addInvoice", invoice);
  }

  editInvoice(id: any, invoice: any): Observable<any>{
    return this.http.put(environment.apiUrl+"Invoice/updateInvoice"+id, invoice);
  }

  deleteInvoice(id: any): Observable<any>{
    return this.http.delete(environment.apiUrl+"Invoice/deleteInvoice"+id);
  }

  countInvoices(): Observable<any>{
    return this.http.get(environment.apiUrl+ApiRoutes.invoice.count);
  }
}
