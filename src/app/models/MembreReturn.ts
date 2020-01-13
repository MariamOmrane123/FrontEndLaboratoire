import {Role} from './Role';
import {Evenement} from './Evenement';
import {Publication} from './Publication';
import {Outil} from './Outil';
import {Laboratoire} from './Laboratoire';
import { Etudiant } from './Etudiant';
import { EnseignantChercheur } from './EnseignantChercheur';

export class MembreReturn {
  constructor() {
  }

  publicID: string;
  cin: string;
  nom: string;
  prenom: string;
  dateNaissance: Date;
  cv: string;
  photo: string; //7ata ba3d
  email: string;
  laboratoire: Laboratoire;
  roles: Role[];
  evts: Evenement[];
  pubs: Publication[];
  outils: Outil[];
  type:String;
}
