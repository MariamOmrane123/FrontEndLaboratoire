import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import { Publication } from '../models/Publication';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PublicationService {

  constructor(private http:HttpClient) { }
// Crud sur les Publications

  findAll():Observable<Publication[]>{
    return this.http.get<Publication[]>(environment.baseUrl + '/publication/all');
  }

  delete(publication:Publication){
    return this.http.delete(environment.baseUrl + "/publication/"+publication.id);
  }

  addPublication(publication:Publication){
    return this.http.post<Publication>(environment.baseUrl + "/publication",publication,{
      headers:new HttpHeaders({
          'content-type':'application/json'
      })
  });
  }

  update(publication:Publication){
    return this.http.put<Publication>(environment.baseUrl + "/publication/"+publication.id,publication,{
      headers:new HttpHeaders({
          'content-type':'application/json'
    })
  });
  }

  findPublication(id:number){
    return this.http.get(environment.baseUrl + '/publication/'+id);
  }

  // Filtrage par propriété

  findByType(type:string){
    return this.http.get(environment.baseUrl + '/publication/type',{params:{type:type}});
  }

  findByDateApparitionBetween(d1:Date,d2:Date){
  }
}
