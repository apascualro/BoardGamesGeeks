import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

//mismo port que en node.js
const baseUrl = 'http://localhost:8080/api/juegos';

// const httpOptionsPlain = {
//   headers: new HttpHeaders({
//     'Accept': 'text/plain',
//     'Content-Type': 'application/json'
//   }),
//   'responseType': 'text'
// };


@Injectable({
	providedIn: 'root'
})
export class JuegoService {

	constructor(private http: HttpClient) { }

	getAll(): Observable<any>{
		return this.http.get(baseUrl);
		return this.http.get('api/juegos/');
	}

	get(id): Observable<any> {
		return this.http.get(`/${id}`);
		// return this.http.get(`${baseUrl}/${id}`);
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