import {Etudiant} from './Etudiant';
import {Membre} from './Membre';

export class EnseignantChercheur extends Membre {
  constructor() {
    super();
  }

  etablissement: string;
  grade: string;
  encadre: Etudiant[];

}
