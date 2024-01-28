import { Injectable } from '@angular/core';
import { Observable } from "rxjs";
import { HttpClient } from "@angular/common/http";
import { Company } from "./company";

const companiesURL = {"url":"/api/companies"}

@Injectable({
  providedIn: 'root'
})
export class CompaniesService {

  constructor(private http: HttpClient) { }

  addCompany(company: Company): Observable<Object> {
    return this.http.post(companiesURL.url, company)
  }
}
