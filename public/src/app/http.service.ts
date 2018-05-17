import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor(private _http: HttpClient) { }
  getAuthors(){
    return this._http.get('/api/authors');
  }
  newAuthorAdd(newAuthor){
    return this._http.post('/api/new', newAuthor);
  }
  getAuthor(author_id){
    return this._http.get('/api/'+author_id);
  }
  updateAuthor(author_id, data){
    return this._http.put('/api/edit/'+author_id, data);
  }
  deleteAuthor(author_id){
    return this._http.delete('/api/remove/'+author_id);
  }
}
