import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

const baseUrl = 'http://localhost:9000/server2';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  constructor(private http: HttpClient) { }
   getUsers():Observable<any> {
    return this.http.get(baseUrl);
    
}
getUser(id:any):Observable<any> {
  return this.http.get(`${baseUrl}/${id}`);
  
}

 deleteUser(id:any):Observable<any> {
  return this.http.delete(`${baseUrl}/${id}`);
   
}
 editUser<model1>(id:any, object: any):Observable<any> {
  return this.http.put(`${baseUrl}/${id}`, object);

    
}
 addUser<model1>(object:any):Observable<any> {

  return this.http.post(baseUrl, object);
}
}
  // getAll(): Observable<any> {
  //   return this.http.get(baseUrl);
  // }

  // get(id): Observable<any> {
  //   return this.http.get(`${baseUrl}/${id}`);
  // }

  // create(data): Observable<any> {
  //   return this.http.post(baseUrl, data);
  // }

  // update(id, data): Observable<any> {
  //   return this.http.put(`${baseUrl}/${id}`, data);
  // }

  // delete(id): Observable<any> {
  //   return this.http.delete(`${baseUrl}/${id}`);
  // }

