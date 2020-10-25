import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

//mismo port que en node.js
import { Ruta } from '../config';

@Injectable({
	providedIn: 'root'
})
export class JuegoService {
	public url: string;

	constructor(private http: HttpClient) { 
		this.url = Ruta.url;
	}

	getAll(): Observable<any> {
		return this.http.get(this.url);
	}

	get(id): Observable<any> {
		return this.http.get(`${this.url}/${id}`);
	}

	create(data): Observable<any> {
		return this.http.post(this.url, data);
	}

	update(id, data): Observable<any> {
		return this.http.put(`${this.url}/${id}`, data);
	}

	delete(id): Observable<any> {
		return this.http.delete(`${this.url}/${id}`);
	}

	deleteAll(): Observable<any> {
		return this.http.delete(this.url);
	}

	findByNombre(nombre): Observable<any> {
		return this.http.get(`${this.url}?nombre=${nombre}`);
	}
}
