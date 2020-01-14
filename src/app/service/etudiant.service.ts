import { Injectable } from '@angular/core';
import { Etudiant } from '../models/Etudiant';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import {StorageService} from "./storage.service";
import {LoginService} from "./login.service";

@Injectable({
  providedIn: 'root'
})
export class EtudiantService {

  constructor(private http: HttpClient,private loginservice:LoginService) { }

  addEtudiant(etudiant:Etudiant){
    return this.http.post<Etudiant>(environment.baseUrl + "/members/etudiant",etudiant,{
      headers:new HttpHeaders({
          'content-type':'application/json'
      })
  });
  }

  update(etudiant:Etudiant){
    let header=this.loginservice.get_AuthHeader();
    return this.http.put<Etudiant>(environment.baseUrl + "/members/etudiant/"+etudiant.publicID,etudiant,{
      headers:header
  });
  }

  findByDiplome(diplome:string){
    return this.http.get(environment.baseUrl+"/members/search/diplome",{params:{diplome:diplome}});
  }
}
