import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

//mismo port que en node.js
const baseUrl = 'http://localhost:8081/api/juegos/';

const httpOptionsPlain = {
  headers: new HttpHeaders({
    'Accept': 'text/plain',
    'Content-Type': 'text/plain'
  }),
  'responseType': 'text'
};


@Injectable({
	providedIn: 'root'
})
export class JuegoService {

	constructor(private http: HttpClient) { }

	getAll(): Observable<any>{
		return this.http.get('api/juegos/', {responseType: 'text'}).pipe(
			map(res => {
				try{ 
					return JSON.parse(res); 
				} catch {
					return null;
				}
			})
			)
	}

	get(id): Observable<any> {
		return this.http.get(`${baseUrl}/${id}`);
	}

	create(data): Observable<any> {
		return this.http.post(baseUrl, data);
	}

	update(id, data): Observable<any> {
		return this.http.put(`${baseUrl}/${id}`, data);
	}

	delete(id): Observable<any> {
		return this.http.delete(`${baseUrl}/${id}`);
	}

	deleteAll(): Observable<any> {
		return this.http.delete(baseUrl);
	}

	findByNombre(nombre): Observable<any> {
		return this.http.get(`${baseUrl}?nombre=${nombre}`);
	}
}