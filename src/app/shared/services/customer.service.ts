import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { ApiRoutes } from '../models/apiRoutes';

@Injectable({
  providedIn: 'root'
})
export class CustomerService {

  constructor(public http: HttpClient) { }

  getCustomers(): Observable<any>{
    return this.http.get(environment.apiUrl+"Customer/getAllCustomers");
  }

  findCustomer(id: any): Observable<any>{
    return this.http.get(environment.apiUrl+"Customer/getCustomerById"+id);
  }

  addCustomer(customer: any): Observable<any>{
    return this.http.post(environment.apiUrl+"Customer/addCustomer", customer);
  }

  editCustomer(id: any, customer: any): Observable<any>{
    return this.http.put(environment.apiUrl+"Customer/updateCustomer"+id, customer);
  }

  deleteCustomer(id: any): Observable<any>{
    return this.http.delete(environment.apiUrl+"Customer/deleteCustomer"+id);
  }

  countCustomer(): Observable<any>{
    return this.http.get(environment.apiUrl+ApiRoutes.customer.count);
  }
}
