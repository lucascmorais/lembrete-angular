import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { Lembrete } from '../interfaces/lembrete';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LembreteService {

  constructor(private http: HttpClient) { }

  getListaLembretes(): Observable<Lembrete[]> {
    const apiUrl = `${environment.lembreteUrl}/lembrete`;
    return this.http.get<Lembrete[]>(apiUrl);
  }

  getLembrete(id: number): Observable<Lembrete> {
    const apiUrl = `${environment.lembreteUrl}/lembrete/${id}`;
    return this.http.get<Lembrete>(apiUrl);
  }

  addLembrete(lembrete: Lembrete): Observable<Lembrete> {
    const apiUrl = `${environment.lembreteUrl}/lembrete/`;
    return this.http.post<Lembrete>(apiUrl, lembrete);
  }

  atualizaLembrete(lembrete: Lembrete): Observable<Lembrete> {
    const apiUrl = `${environment.lembreteUrl}/lembrete/${lembrete.id}`;
    return this.http.put<Lembrete>(apiUrl, lembrete);
  }

  deleteLembrete(id: number): Observable<Lembrete> {
    const apiUrl = `${environment.lembreteUrl}/lembrete/${id}`;
    return this.http.delete<Lembrete>(apiUrl);
  }
}
