import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import {HttpClient, HttpHeaders, HttpParams} from '@angular/common/http';
import { Evenement } from '../models/Evenement';
import {Observable} from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class EvenementService {

  constructor(private http: HttpClient) { }

  findAll():Observable<Evenement[]>{
    return this.http.get<Evenement[]>(environment.baseUrl + '/evenement/all');
  }

  findByNom(nom:string){
    return this.http.get(environment.baseUrl+"/evenement/search/nom",{params:{nom:nom}});
  }

  findByDateEvt(dateEvt:string){// dateEvt date w params accepte string
    return this.http.get(environment.baseUrl+"/evenement/search/dateEvenement",{params:{dateEvt:dateEvt}});
  }

  findByDateEvtBetween(dateEvtstart:String,dateEvtend:String):Observable<any>{
    let url=environment.baseUrl+"/evenement/search/findByDateBetween/"+dateEvtstart+"/"+dateEvtend;
    return this.http.get(url);
  }

  findByLieu(lieu:string){
    return this.http.get(environment.baseUrl+"/evenement/search/lieu",{params:{lieu:lieu}});
  }

  delete(evenement:Evenement){
    return this.http.delete(environment.baseUrl + "/evenement/"+evenement.id);
  }

  addRole(evenement:Evenement){
    return this.http.post<Evenement>(environment.baseUrl + "/evenement",evenement,{
      headers:new HttpHeaders({
          'content-type':'application/json'
      })
  });
  }

  update(evenement:Evenement){
    return this.http.put<Evenement>(environment.baseUrl + "/evenement/"+evenement.id,evenement,{
      headers:new HttpHeaders({
          'content-type':'application/json'
    })
  });
  }
}
