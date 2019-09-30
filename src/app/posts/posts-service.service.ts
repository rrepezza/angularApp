import { Injectable } from '@angular/core';
import { GenericMethod } from './../generic/generic-method';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Posts } from './posts';


@Injectable({
  providedIn: 'root'
})
export class PostsServiceService implements GenericMethod<Posts>{

  private END_POINT = 'https://jsonplaceholder.typicode.com/posts';

  constructor(private http: HttpClient) { }

  post(data: Posts) {
    throw new Error("Method not implemented.");
  }
  put(data: Posts) {
    throw new Error("Method not implemented.");
  }
  getAll(): Observable<Posts[]> {
    return this.http.get<Posts[]>(this.END_POINT);
  }
  getById(id?: number): Observable<any> {
    throw new Error("Method not implemented.");
  }
  deleteById(id?: number) {
    throw new Error("Method not implemented.");
  }
  delete(data: any) {
    throw new Error("Method not implemented.");
  }

}
