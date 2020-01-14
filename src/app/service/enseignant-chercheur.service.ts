import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import { EnseignantChercheur } from '../models/EnseignantChercheur';
import { environment } from 'src/environments/environment';
import {EnseignantChercheurReturn} from "../models/EnseignantChercheurReturn";
@Injectable({
  providedIn: 'root'
})
export class EnseignantChercheurService {

  constructor(private http: HttpClient) { }

  addEnseignant(enseignant:EnseignantChercheur){
    return this.http.post<EnseignantChercheur>(environment.baseUrl + "/members/enseignant",enseignant,{
      headers:new HttpHeaders({
          'content-type':'application/json'
          //'authorization':
      })
  });
  }

  update(enseignant:EnseignantChercheur){
    return this.http.put<EnseignantChercheurReturn>(environment.baseUrl + "/members/enseignant/"+enseignant.publicID,enseignant,{
      headers:new HttpHeaders({
          'content-type':'application/json'
      })
    });
  }

  findByGrade(grade:string){
    return this.http.get(environment.baseUrl+"/members/search/grade",{params:{grade:grade}});
  }

  findByEtablissement(etablissement:string){
    return this.http.get(environment.baseUrl+"/members/search/etablissement",{params:{etablissement:etablissement}});
  }
}
