import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { firstValueFrom } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  private baseUrl: string = 'https://swapi.dev/api/people/';

  constructor(private http: HttpClient) {}

  getCharacter(name: string): Promise<any> {
    return firstValueFrom(this.http.get<any>(`${this.baseUrl}?search=${name}`));
  }

  getData(url: string): Promise<any> {
    return firstValueFrom(this.http.get<any>(url));
  }
}
