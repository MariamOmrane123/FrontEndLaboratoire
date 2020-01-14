import {EnseignantChercheur} from './EnseignantChercheur';
import {Membre} from './Membre';

export class Etudiant extends Membre {
  constructor() {
    super();
  }

  dateInscription: Date;
  sujet: string;
  diplome: string;
  encadrant: EnseignantChercheur;

}
