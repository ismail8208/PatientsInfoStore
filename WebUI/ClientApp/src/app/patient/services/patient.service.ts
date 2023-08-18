import { HttpClient, HttpParams } from '@angular/common/http';
import { Inject, Injectable, InjectionToken, Optional } from '@angular/core';
import { IPaginatedListPatient } from '../models/IPaginatedListPatient';
import { Observable } from 'rxjs';
import { PatientCommand } from '../models/PatientCommand';

@Injectable({
  providedIn: 'root'
})
export class PatientService {
  private _http: HttpClient;
  private _baseUrl: string;


  constructor(@Inject(HttpClient) http: HttpClient, @Optional() @Inject(API_BASE_URL) baseUrl?: string) {
    this._http = http;
    this._baseUrl = baseUrl !== undefined && baseUrl !== null ? baseUrl : "";
  }

  getPatients(pageNumber: number, pageSize: number, query?: string, searchBy?: number): Observable<IPaginatedListPatient> {
    return this._http.get<IPaginatedListPatient>(this._baseUrl + 'api/Patients', {
      params: new HttpParams().set('pageSize', `${pageSize}`).set('pageNumber', `${pageNumber}`).set('result', `${query}`).set('SearchBy',`${searchBy}`)
    });
  }
  
  create(createPatientCommand: PatientCommand): Observable<any> {
    return this._http.post<any>(this._baseUrl + 'api/Patients', createPatientCommand);
  }
  update(updatePatientCommand: PatientCommand): Observable<any> {
    return this._http.put<any>(this._baseUrl + 'api/Patients', updatePatientCommand);
  }

  Get(userId: string): Observable<PatientCommand> {
    return this._http.get<PatientCommand>(this._baseUrl + `api/Patients/${userId}`);
  }
  Delete(userId: string): Observable<any> {
    return this._http.delete(this._baseUrl + `api/Patients/${userId}`);
  }
}

export const API_BASE_URL = new InjectionToken<string>('API_BASE_URL');

