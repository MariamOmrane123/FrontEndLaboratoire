import { Component, OnInit } from '@angular/core';
import {MembreReturn} from '../../../models/MembreReturn';
import {LoginService} from '../../../service/login.service';
import {EnseignantChercheurReturn} from '../../../models/EnseignantChercheurReturn';
import {EtudiantReturn} from '../../../models/EtudiantReturn';
import {NgbModal, ModalDismissReasons, NgbModalOptions} from '@ng-bootstrap/ng-bootstrap';
import { FormGroup, FormControl } from '@angular/forms';
import { StorageService } from '../../../service/storage.service';
import { EtudiantService } from 'src/app/service/etudiant.service';
import { EnseignantChercheurService } from 'src/app/service/enseignant-chercheur.service';
import { Etudiant } from 'src/app/models/Etudiant';
@Component({
  selector: 'app-myprofile',
  templateUrl: './myprofile.component.html',
  styleUrls: ['./myprofile.component.scss']
})
export class MyprofileComponent implements OnInit {
  member:EnseignantChercheurReturn|EtudiantReturn=this.loginService.getUserInfo();
  verifEdit:boolean=false;
  
  constructor(private loginService:LoginService,
    private storageService:StorageService,
    private etudiantService:EtudiantService,
    private enseignatChercheurService:EnseignantChercheurService) {}

  ngOnInit() {
   // this.member=this.loginService.getUserInfo();
  }
  edit(){
    this.verifEdit=true;
  }
  submit() {
    this.verifEdit=false;
    console.warn(this.member);
    console.warn(this.storageService.read('head'));
    //if(this.member.type=='etudiant')
      //this.etudiantService.update(<EtudiantReturn>this.member)
  }

  cancel(){
    this.verifEdit=false;
  }


}
