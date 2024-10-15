import { HttpClientModule, HttpClient, HttpParams, HttpResponse } from "@angular/common/http";
import { Inject, Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { map } from "rxjs/operators";


@Injectable(
  {providedIn: 'root'}
)
export class CustomHttpService {
 
  constructor(private httpClient: HttpClient,@Inject('BASE_API_URL') private baseUrl: string) {}

  public makeGetRequest<T>(url: string): Observable<T | null> {
    return this.httpClient.get<T>( `${this.baseUrl}`+url, { observe: "response"}).pipe(
      map((res: HttpResponse<T>) => {
        return res.body;
      })
    );
  }
  public makeGetRequestByParams<T>(url: string, prm:HttpParams): Observable<T | null> {
    return this.httpClient.get<T>(`${this.baseUrl}`+url, {params:prm, observe: "response"}).pipe(
      map((res: HttpResponse<T>) => {
        return res.body;
      })
    );
  }
  public makePostRequest<T>(url: string, body?: any): Observable<T | null> {
    return this.httpClient.post<T>(`${this.baseUrl}`+url, body, { observe: "response" }).pipe(
      map((res: HttpResponse<T>) => {
        return res.body;
      })
    );
  }

  public makePutRequest<T>(url: string, body?: any): Observable<T |null > {
    return this.httpClient.put<T>(`${this.baseUrl}`+url, body, { observe: "response" }).pipe(
      map((res: HttpResponse<T>) => {
        return res.body;
      })
    );
  }

  public makePatchRequest<T>(url: string, body?: any): Observable<T | null> {
    return this.httpClient.patch<T>(`${this.baseUrl}`+url, body, { observe: "response" }).pipe(
      map((res: HttpResponse<T>) => {
        return res.body;
      })
    );
  }

  public makeDeleteRequest<T>(url: string, body?: any): Observable<T | null> {
    return this.httpClient
      .request<T>("delete", `${this.baseUrl}`+url, {
        body,
        observe: "response"
      })
      .pipe(
        map((res: HttpResponse<T>) => {
          return res.body;
        })
      );
  }
}