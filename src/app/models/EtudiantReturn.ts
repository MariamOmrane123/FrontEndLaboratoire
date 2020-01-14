import {MembreReturn} from './MembreReturn';
import {EnseignantChercheur} from './EnseignantChercheur';

export class EtudiantReturn extends MembreReturn {
  constructor() {
    super();
  }

  dateInscription: Date;
  sujet: string;
  diplome: string;
  encadrant: EnseignantChercheur;


}
