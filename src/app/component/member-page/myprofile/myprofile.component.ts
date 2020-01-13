import { Component, OnInit } from '@angular/core';
import {MembreReturn} from '../../../models/MembreReturn';
import {LoginService} from '../../../service/login.service';
import {EnseignantChercheurReturn} from '../../../models/EnseignantChercheurReturn';
import {EtudiantReturn} from '../../../models/EtudiantReturn';

@Component({
  selector: 'app-myprofile',
  templateUrl: './myprofile.component.html',
  styleUrls: ['./myprofile.component.scss']
})
export class MyprofileComponent implements OnInit {
  member:EnseignantChercheurReturn|EtudiantReturn;
  constructor(private loginService:LoginService) { }

  ngOnInit() {
    this.member=this.loginService.getUserInfo();
  }

}
