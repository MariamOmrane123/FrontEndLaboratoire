import { Component, OnInit } from '@angular/core';
import {LoginService} from '../../service/login.service';
import {MembreReturn} from '../../models/MembreReturn';
import {Router} from '@angular/router';
import {EnseignantChercheurReturn} from '../../models/EnseignantChercheurReturn';
import {EtudiantReturn} from '../../models/EtudiantReturn';

@Component({
  selector: 'app-member-page',
  templateUrl: './member-page.component.html',
  styleUrls: ['./member-page.component.scss']
})
export class MemberPageComponent implements OnInit {
  member:EnseignantChercheurReturn|EtudiantReturn;
  constructor(private loginService :LoginService,private router: Router) { }

  ngOnInit() {
    if(!this.loginService.isLoggedin())
      this.router.navigate(['/login'])


  }
}
