import {Component, OnInit} from '@angular/core';
import {MembreReturn} from '../../../models/MembreReturn';
import {LoginService} from '../../../service/login.service';
import {EnseignantChercheurReturn} from '../../../models/EnseignantChercheurReturn';
import {EtudiantReturn} from '../../../models/EtudiantReturn';
import {NgbModal, ModalDismissReasons, NgbModalOptions} from '@ng-bootstrap/ng-bootstrap';
import {FormGroup, FormControl} from '@angular/forms';
import {StorageService} from '../../../service/storage.service';
import {EtudiantService} from 'src/app/service/etudiant.service';
import {EnseignantChercheurService} from 'src/app/service/enseignant-chercheur.service';
import {Etudiant} from 'src/app/models/Etudiant';
import {EnseignantChercheur} from "../../../models/EnseignantChercheur";
import {Membre} from "../../../models/Membre";

@Component({
  selector: 'app-myprofile',
  templateUrl: './myprofile.component.html',
  styleUrls: ['./myprofile.component.scss']
})
export class MyprofileComponent implements OnInit {
  member: Etudiant | EnseignantChercheur;
  userInfo:EtudiantReturn|EnseignantChercheurReturn;
  new_pass;
  re_pass;
  verifEdit: boolean = false;

  constructor(private loginService: LoginService,
              private storageService: StorageService,
              private etudiantService: EtudiantService,
              private enseignatChercheurService: EnseignantChercheurService) {
  }

  ngOnInit() {
    this.userInfo = this.loginService.getUserInfo();
    if (this.userInfo.type == "etudiant") this.member = new Etudiant();
    else this.member = new EnseignantChercheur();
    Object.keys(this.userInfo).forEach(key => this.member[key] = this.userInfo[key]);
  }

  edit() {
    this.verifEdit = true;
  }

  submit() {
    this.verifEdit = false;
    this.member.password="not_set";
    console.log(this.member);
    if (this.userInfo.type == "etudiant")
      this.etudiantService.update(<Etudiant>this.member).subscribe(data=>{
        console.log(data);
      })
    else
      this.enseignatChercheurService.update(<EnseignantChercheur>this.member).subscribe(data => {
          console.log(data)
        },
        err => {
          console.log("Error" + err);
        })
  }

  cancel() {
    this.verifEdit = false;
  }


}
