import {Injectable} from '@angular/core';
import {MembreReturn} from '../models/MembreReturn';
import {HttpHeaders, HttpClient, HttpParams} from '@angular/common/http';
import {environment} from 'src/environments/environment';
import {Observable} from 'rxjs';
import {Router} from '@angular/router';
import { StorageService } from './storage.service';
import {EnseignantChercheurReturn} from '../models/EnseignantChercheurReturn';
import {EtudiantReturn} from '../models/EtudiantReturn';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  UserInfo: MembreReturn = null;

  constructor(private http: HttpClient,private router: Router,private storageService:StorageService) {
  }

  TryLogin(email: String, password: String): Observable<EnseignantChercheurReturn|EtudiantReturn> {
    let httpParams = new HttpParams()
      .append('email', ''+email);

    let head = new HttpHeaders({ Authorization: 'Basic ' + btoa(email + ':' + password) });
    return this.http.get<EnseignantChercheurReturn|EtudiantReturn>(environment.baseUrl + '/members/login', {
      headers: head,
      params: httpParams
    });
  }
  LogOut(){
    this.UserInfo=null;
    this.storageService.remove("userInfo");
    this.storageService.remove("customerData");
  }
  LogIn(email: String, password: String) {
    this.TryLogin(email, password).subscribe((data: MembreReturn) => {
      this.UserInfo = data;
      this.storageService.write("userInfo",this.UserInfo);
      this.storageService.write("customerData",{
        "email":email,
        "password":password
      });
      this.router.navigate(['/user/profile']);
    }
    ,err=>{
      //console.log("Faild To Login")
      }
    );
  }
  isLoggedin():boolean{
    if(this.storageService.isExist("userInfo")) return true;
    return false;
  }
  getUserInfo():EnseignantChercheurReturn|EtudiantReturn{
    return this.storageService.read("userInfo");
  }
}
